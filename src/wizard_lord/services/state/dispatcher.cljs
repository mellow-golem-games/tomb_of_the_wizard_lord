(ns wizard-lord.services.state.dispatcher
  (:require [wizard-lord.services.state.global :refer [app-state update-active-view toggle-sub-view handle-open-npc-inventory]]
            [wizard-lord.services.state.movement :refer [update-move-active handle-character-move update-attack-active handle-reset-character-movement]]
            [wizard-lord.services.state.combat :refer [update-attack-active handle-character-attack handle-reset-character-action-points update-initiative-value handle-enemy-death]]
            [wizard-lord.services.state.enemy :refer [set-in-progress handle-enemy-move handle-enemy-attack]]
            [wizard-lord.services.state.locations :refer [set-current-location-key set-overworld-location set-fog]]
            [wizard-lord.services.state.dialogue :refer [update-dialogue-flow set-dialogue-active set-dialogue-id]]
            [wizard-lord.services.state.textstate :refer [update-state-text]]))

; As we need more mutations for state we can add them here - Handle state change
; calls the correct method based on the type passed in
(defmulti handle-state-change (fn [action] (:type action)))
(defmethod handle-state-change "update-active-view"
  [action]
  (update-active-view app-state (:value action)))
(defmethod handle-state-change "handle-open-npc-inventory"
  [action]
  (handle-open-npc-inventory  app-state (:value action)))
(defmethod handle-state-change "toggle-sub-view"
  [action]
  (toggle-sub-view  app-state (:value action)))

; INITIAL STATE stuff
(defmethod handle-state-change "add-initial-quests"
  [action]
  (swap! app-state conj {:quests (:value action)}))



; COMBAT FOCUSES METHODS

;This first group focuses on setting up a combat scence
(defmethod handle-state-change "set-initial-enemies"
  [action]
  (swap! app-state assoc-in [:combat-view :enemies] (:value action)))

(defmethod handle-state-change "update-move-active"
  [action]
  (update-move-active app-state (:value action)))
(defmethod handle-state-change "handle-character-move"
  [action]
  (handle-character-move app-state (:value action)))
(defmethod handle-state-change "handle-enemy-move"
  [action]
  (handle-enemy-move app-state (:value action)))


(defmethod handle-state-change "update-attack-active"
  [action]
  (update-attack-active app-state (:value action)))
(defmethod handle-state-change "handle-character-attack"
  [action]
  (handle-character-attack app-state (:value action)))
(defmethod handle-state-change "handle-enemy-attack"
  [action]
  (handle-enemy-attack app-state (:value action)))


(defmethod handle-state-change "set-enemey-turn-in-progress"
  [action]
  (set-in-progress app-state (:value action)))
(defmethod handle-state-change "kill-enemy"
  [action]
  (handle-enemy-death app-state (:value action)))

; END TURN STUFF
(defmethod handle-state-change "handle-end-turn"
  [action]
  (handle-reset-character-action-points app-state (:value action))
  (handle-reset-character-movement app-state (:value action))
  (update-initiative-value app-state))


;LOCATION SPECIFIC stuff
(defmethod handle-state-change "set-new-overworld-location"
  [action]
  (set-overworld-location app-state (:value action)))
(defmethod handle-state-change "set-location-key"
  [action]
  (set-current-location-key app-state (:value action)))
(defmethod handle-state-change "set-fog"
  [action]
  (set-fog app-state (:value action)))


;DIALOGUE METHODS
(defmethod handle-state-change "set-dialogue-active"
  [action]
  (set-dialogue-active app-state (:value action)))
(defmethod handle-state-change "set-dialogue-id"
  [action]
  (set-dialogue-id app-state (:value action)))
(defmethod handle-state-change "update-dialogue-flow"
  [action]
  (update-dialogue-flow app-state (:value action)))
(defmethod handle-state-change "close-dialogue"
  [action]
  (set-dialogue-active app-state false)
  (set-dialogue-id app-state nil)
  (update-dialogue-flow app-state :base))
