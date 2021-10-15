(ns wizard-lord.data.locations.forest.close
  (:require [reagent.core :as reagent :refer [atom]]
            [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.services.scripts.scene :as scene]))

(def knight-decision (atom nil))

(defn enter-combat-state [enemy]
  (scene/enter-combat-state enemy)
  (handle-state-change {:type "set-location-key" :value :close-forest}))


(def KNIGHT_ENCOUNTER [{:id 2 :x 2 :y 2 :character {:move 20 :remaining 20 :max-health 10 :health 10 :defence 10 :attack 5}}])

(def GOBLIN_ENCOUNTER [{:id 2 :x 1 :y 1 :character {:move 20 :remaining 20 :max-health 10 :health 10 :defence 10 :attack 5}}])

(defn first-enterance []
  ; TODO this should pull from state
  true)


(defn first-enterance-view []
  (if-not @knight-decision
    [:div
     [:p "Up ahead you hear the sounds of combat. You cautiously approach to see a trio of knights engaged
           with a group of goblins. Neither group has noticed you yet."]
     [:p {:on-click #(reset! knight-decision "goblin")} "Attack the goblins."]
     [:p {:on-click #(reset! knight-decision "knight")} "Attack the knights."]]
    [:div
     (if (= @knight-decision "knight")
       [:div
        [:p "You Leap Out and Attack the knights."]
        [:p {:on-click #(enter-combat-state KNIGHT_ENCOUNTER)} "Fight!"]]
       [:div
        [:p "You creep up on the goblins and launch a suprise attack!"]
        [:p {:on-click #(enter-combat-state GOBLIN_ENCOUNTER)} "Fight!"]])]))

(defn close-render [location]
    [:div.town--close
     [:p (first (:description location))] ; base description
     (if (first-enterance)
       (first-enterance-view)
       nil)])
