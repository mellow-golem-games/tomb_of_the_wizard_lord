(ns wizard-lord.components.map-marker
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn MapMarker [location]
  [:div.MapMarker {:key (:name location) :on-click #(handle-state-change {:type "set-location-key" :value (:key location)}) :style {:left (:x location) :top (:y location)}}
   [:div.MapMarker__inner
    [:p (:name location)]]])
