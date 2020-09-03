(ns wizard-lord.data.quests.quest-handler
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.quests.quests_town :refer [quests_town]]))


;QUESTS TODO
; 1. figure out how to handle requirements to advance each step - probably on the thing itself
; 2. handle rewards

(def all-quests quests_town)

(defn get-quest-details [id]
  (first (filter #(= (:id %) id) all-quests)))
