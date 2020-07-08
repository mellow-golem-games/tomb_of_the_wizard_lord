(ns wizard-lord.services.state.dispatcher
  (:require [wizard-lord.services.state.global :refer [app-state update-active-view]]
            [wizard-lord.services.state.movement :refer [update-move-active handle-character-move update-attack-active]]
            [wizard-lord.services.state.combat :refer [update-attack-active handle-character-attack]]
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


(defmethod handle-state-change "update-attack-active"
  [action]
  (update-attack-active app-state (:value action)))
(defmethod handle-state-change "handle-character-attack"
  [action]
  (handle-character-attack app-state (:value action)))
