(ns wizard-lord.services.state.initiative
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))




(defn handle-end-turn [character]
  (handle-state-change {:type "update-move-active" :value false})
  (handle-state-change {:type "update-attack-active" :value false})
  (handle-state-change {:type "handle-end-turn" :value character}))