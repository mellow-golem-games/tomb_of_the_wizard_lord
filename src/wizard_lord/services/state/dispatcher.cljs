(ns wizard-lord.services.state.dispatcher
  (:require [wizard-lord.services.state.global :refer [app-state update-active-view]]
            [wizard-lord.services.state.movement :refer [update-move-active handle-character-move update-attack-active handle-reset-character-movement]]
            [wizard-lord.services.state.combat :refer [update-attack-active handle-character-attack handle-reset-character-action-points update-initiative-value]]
            [wizard-lord.services.state.enemy :refer [set-in-progress handle-enemy-move handle-enemy-attack]]
            [wizard-lord.services.state.textstate :refer [update-state-text]]))

; As we need more mutations for state we can add them here - Handle state change
; calls the correct method based on the type passed in
(defmulti handle-state-change (fn [action] (:type action)))
(defmethod handle-state-change "update-active-view"
  [action]
  (update-active-view app-state (:value action)))



; COMBAT FOCUSES METHODS
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


; END TURN STUFF
(defmethod handle-state-change "handle-end-turn"
  [action]
  (handle-reset-character-action-points app-state (:value action))
  (handle-reset-character-movement app-state (:value action))
  (update-initiative-value app-state))
