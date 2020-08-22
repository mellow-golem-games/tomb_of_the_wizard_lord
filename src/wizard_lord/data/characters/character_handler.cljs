(ns wizard-lord.data.characters.character-handler
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.characters.town.town-npcs.cljs :refer [Town-Npcs]]))

(defn get-character-details [id chars]
  (first (filter #(= (:id %) id) chars)))

(defn get-character-dialogue-details [id location]
  (cond
    (= location "town") (get-character-details id Town-Npcs)))


(defn open-dialogue-menu [id]
  (handle-state-change {:type "set-dialogue-active" :value true})
  (handle-state-change {:type "set-dialogue-id" :value id}))
