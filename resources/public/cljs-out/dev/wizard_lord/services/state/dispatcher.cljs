(ns wizard-lord.services.state.dispatcher
  (:require [wizard-lord.services.state.global :refer [app-state update-active-view]]
            [wizard-lord.services.state.textstate :refer [update-state-text]]))

; As we need more mutations for state we can add them here - Handle state change
; calls the correct method based on the type passed in
(defmulti handle-state-change (fn [action] (:type action)))
(defmethod handle-state-change "update-active-view"
  [action]
  (update-active-view app-state (:value action)))