(ns wizard-lord.services.state.locations)

(defn set-overworld-location [app-state payload]
  "This function sets the main location e.x town or forest"
  (swap! app-state update-in [:explore-view :current] (fn [_] payload)))

(defn set-current-location-key [app-state payload]
  "This sets the specific sub-location like a store in town or the camp in forest"
  (swap! app-state update-in [:explore-view :current-location] (fn [_] payload)))
