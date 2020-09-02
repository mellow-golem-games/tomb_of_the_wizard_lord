(ns wizard-lord.views.sub.npc-inventory
  (:require [reagent.core :as reagent :refer [atom]]
            [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))

(defn set-active-tab [tab currentTab]
  (reset! currentTab tab))

(defn NPC-Inventory [active inv]
  (if inv
    (let [tabs (keys inv)
          currentTab (atom (first tabs))]
      (fn [active inv]
        [:div.NPCInventory.Page {:class (if active "active" "")}
         [:div.Page__inner
          [:h1 {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "npc-inventory" :value false}})} "close"]
          [:div.NPCInventory__tabContent
            [:div.NPCInventory__tabContent__left.tab
             (for [item (@currentTab inv)]
               [:p {:key (:name item)} (str (:name item) " - " (:cost item) "GP")])]
            [:div.NPCInventory__tabContent__right.tab
              [:h2 "Name of item"]
              [:p "Fun description of the item"]]]
          [:div.NPCInventory__tabsWrapper
            (for [tab tabs]
              [:div.NPCInventory__tabsWrapper__tab {:key tab}
                [:p {:on-click #(set-active-tab tab currentTab)} (name tab)]])]]]))))
