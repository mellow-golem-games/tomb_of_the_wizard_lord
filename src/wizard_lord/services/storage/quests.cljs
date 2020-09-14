(ns wizard-lord.services.storage.quests
  (:require [wizard-lord.services.state.global :refer [get-from-state]]
            [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.services.storage.storage :as DB]))


;e.x {:location "town" :id 1 :step 2}
; we can itterate through step to generate quest log

(defn check-if-on-quest [quest-state location id]
  "checks if we are already on a quest since there is multiple ways to pick one up"
  (let [current-location (:location quest-state)]
    (> (count (filter #(= (:id %) id) current-location)) 0)))


(defn add-new-quest [location id]
  "adds a new quest at step one"
  (let [quest-state (get-from-state "quests")]
    (if (not (check-if-on-quest quest-state location id))
      (DB/handle-local-save "quests" (update-in quest-state [(keyword location)] conj {:id id :step 1})))))
