(ns wizard-lord.components.combat.end
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))

(defn End-card-wrapper [component]
  [:div.EndCard
   [:div.EndCard__inner
    [component]]])

(defn VictoryCard-content []
  [:div.VictoryCard
   [:h2 "Victory!"]
   [:h3 "Your Loot"]
   [:p "Loot List Here"]
   [:button {:on-click #(handle-state-change {:type "update-active-view" :value "main-view"})} "Continue"]])

(defn VictoryCard []
  [End-card-wrapper VictoryCard-content])


(defn LostCard [])
