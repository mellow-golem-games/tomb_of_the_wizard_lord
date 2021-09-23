(ns wizard-lord.services.scripts.scene
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))

(defn enter-combat-state []
  (handle-state-change {:type "update-active-view" :value :combat-view}))
