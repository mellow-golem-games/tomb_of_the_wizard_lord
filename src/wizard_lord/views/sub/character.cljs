(ns wizard-lord.views.sub.character
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn Character [active]
  [:div.Character.Page {:class (if active "active" "")}
   [:div.Page__inner
    [:h1 "This is the character page"]
    [:h1 {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "character" :value false}})} "close"]]])
