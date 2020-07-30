(ns wizard-lord.data.locations.locations
  (:require [wizard-lord.data.locations.town :refer [town]]))



(defn get-current-location [location]
  (if (= location "town")
    town))