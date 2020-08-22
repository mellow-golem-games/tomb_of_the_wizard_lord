(ns wizard-lord.services.state.dialogue)

(defn set-dialogue-active [app-state payload]
  (swap! app-state conj {:dialogue-active payload}))

(defn set-dialogue-id [app-state payload]
  (swap! app-state update-in [:dialogue :character] (fn [_] payload)))

(defn update-dialogue-flow [app-state payload]
  (swap! app-state update-in [:dialogue :flow] (fn [_] payload)))

