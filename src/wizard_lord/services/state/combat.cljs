(ns wizard-lord.services.state.combat)



(defn update-move-active [app-state payload]
  (swap! app-state update-in [:combat-view :move-active] (fn [_] payload)))
