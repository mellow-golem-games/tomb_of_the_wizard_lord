(ns wizard-lord.services.state.dialogue)


(defn update-dialogue-flow [app-state payload]
  (swap! app-state update-in [:dialogue :flow] (fn [_] payload)))

