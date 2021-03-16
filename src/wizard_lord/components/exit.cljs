(ns wizard-lord.components.exit
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn Exit [details]
  [:div.Exit {:key (:to details) :on-click #(handle-state-change {:type "set-new-overworld-location" :value (:to details)}) :style {:left (:x details) :top (:y details)}}
    [:p (str "To " (:to details))]])
