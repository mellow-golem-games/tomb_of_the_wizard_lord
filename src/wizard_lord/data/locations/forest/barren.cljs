(ns wizard-lord.data.locations.forest.barren
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.services.scripts.scene :as scene]))

(defn is-random-encounter []
  ; 50/50
  (= (rand-int 2) 1))

(defn random-true-block []
  [:div
   [:p "As you search, you heard a sound from a nearby tree stump. As you go to investigate a group of giant beatles surges forward."]
   [:p {:on-click #(scene/enter-combat-state)} "Prepare for battle!"]])

(defn random-false-block []
  [:div
   [:p "You search for some time, but fine nothing of interest."]
   [:p {:on-click #(handle-state-change {:type "set-location-key" :value nil})} "Head Back To The Road"]])

(defn barren-render [location]
  (let [is-random? (is-random-encounter)]
    [:div.town--close
     [:p (first (:description location))] ; base description
     (if is-random?
       [random-true-block]
       [random-false-block])]))
