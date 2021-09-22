(ns wizard-lord.data.locations.locations
  (:require [wizard-lord.data.locations.town.town :refer [town handle-location-render-town]]
            [wizard-lord.data.locations.forest.forest :refer [forest handle-location-render-forest]]))


(defn get-current-location [location]
  (cond
    (= location "town") town
    (= location "forest") forest))

(defn get-current-location-details [loc-name current-view selected-location]
  (if selected-location
    (cond
      (= loc-name "town") (handle-location-render-town selected-location ((keyword selected-location) current-view))
      (= loc-name "forest") (handle-location-render-forest selected-location ((keyword selected-location) current-view)))
    nil))
