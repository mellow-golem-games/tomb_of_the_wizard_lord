(ns wizard-lord.components.exit
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn Exit [details]
  [:div.MapMarker {:key (:to details) :on-click #(handle-state-change {:type "set-new-overworld-location" :value (:to details)}) :style {:left (:x details) :top (:y details)}}
   [:div.MapMarker__inner
    [:p (str "To " (:to details))]]])
