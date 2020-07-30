(ns wizard-lord.services.state.locations)

(defn set-current-location-key [app-state payload]
  (print payload)
  (swap! app-state update-in [:explore-view :current-location] (fn [_] payload)))

