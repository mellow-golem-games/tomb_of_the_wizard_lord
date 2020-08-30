(ns wizard-lord.components.options
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))





(defn Options-bar []
  [:div.OptionsBar
   [:img.OptionsBar__button.character {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "character" :value true}}) :src "./images/set/character.png" :width "45px"}]
   [:img.OptionsBar__button.inventory {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "inventory" :value true}}) :src "./images/set/inventory.png" :width "45px"}]
   [:img.OptionsBar__button.journal {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "journal" :value true}}) :src "./images/set/journal.png" :width "45px"}]])
