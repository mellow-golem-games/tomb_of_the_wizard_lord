(ns wizard-lord.services.scripts.scene
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))

(defn enter-combat-state [enemyDetails]
  (handle-state-change {:type "set-initial-enemies" :value enemyDetails})
  (handle-state-change {:type "update-active-view" :value :combat-view}))
