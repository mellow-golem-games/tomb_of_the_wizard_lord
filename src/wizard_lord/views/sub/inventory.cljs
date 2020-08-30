(ns wizard-lord.views.sub.inventory
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn Inventory [active]
  [:div.Inventory.Page {:class (if active "active" "")}
   [:div.Page__inner
    [:h1 "This is the inventory page"]
    [:h1 {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "inventory" :value false}})} "close"]]])
