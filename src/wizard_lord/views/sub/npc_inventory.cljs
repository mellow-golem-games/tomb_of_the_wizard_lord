(ns wizard-lord.views.sub.npcp-inventory
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn NPC-Inventory [active]
  [:div.NPCInventory.Page {:class (if active "active" "")}
   [:div.Page__inner
    [:h1 "This is the page that holds npcs inventory stuff"]
    [:h1 {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "notsureyet" :value false}})} "close"]]])
