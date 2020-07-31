(ns wizard-lord.data.locations.locations
  (:require [wizard-lord.data.locations.town.town :refer [town handle-location-render-town]]))



(defn get-current-location [location]
  (if (= location "town")
    town))

(defn get-current-location-details [loc-name current-view selected-location]
  (if selected-location
    (cond
      (= loc-name "town") (handle-location-render-town selected-location ((keyword selected-location) current-view)))
    nil))