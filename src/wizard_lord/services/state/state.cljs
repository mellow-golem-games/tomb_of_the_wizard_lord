(ns wizard-lord.services.state.global
    (:require [reagent.core :as reagent :refer [atom]]
              [wizard-lord.data.characters.town.town-npcs.cljs :refer [Town-Npcs]]))


(def explore-state
  {:current "town"
   :current-location nil})

; we might consider moving this to a new file if it gets too much bigger
(def combat-state
  {:players [{:id 1 :x 0 :y 0
              :character {:move 20 :remaining 20 :max-health 50  :health 50 :defence 5 :attack 15 :max-action-points 2 :remaining-action-points 2}
              :actions {:attack {:range 5 :cost 1}}}]; we will probably break out this character to prevent multi-references
   :enemies [{:id 2 :x 2 :y 2 :character {:move 20 :remaining 20 :max-health 10 :health 10 :defence 10 :attack 5}}]
   :initiative-order [1 2]
   :current-initiative 1
   :move-active false
   :attack-active false
   :enemy-turn-in-progress false}) ; we need this to prevent duplicate flows on an enemy

(def character-state {:visited? false}) ; TODO remove - testing only

(def dialogue-state
  {:character nil ; ID to current characer being interacted with
   :character-state character-state ; TODO this will come from localstorage and not part of the atom
   :flow :base})




; initial rep of our overall state- it's not striclty neccessary to build it out like this
; but I like to as it's a good place to reference all my current state options.
(defonce app-state (atom {
                          :active-page {:main-view "active"
                                        :combat-view false}
                          :dialogue-active false
                          :dialogue dialogue-state
                          :combat-view combat-state
                          :explore-view explore-state}))

; TODO move these two scrolling functions into a state helper file
; Don't want them cluttering up this namespace
(defn update-scroll-position [val scroll]
  "Updates the store with our current scroll position to re-position back on home view"
  (if scroll
      (.scrollTo js/window 0 (:scrollOffset @app-state)))
  (swap! app-state conj {:scrollOffset val}))

(defn handle-scroll-func [payload]
  "adds class to body preventing weird scroll on fixed position over scrolling main window"
  (if (= payload "")
    (do
      (.remove (.-classList (.-body js/document)) "hide-scroll")
      (update-scroll-position 0 true)) ; this should be instant
    (do
      (update-scroll-position (.-pageYOffset js/window) false)
      (js/setTimeout #(.add (.-classList (.-body js/document)) "hide-scroll") 100))))

(defn update-active-view [app-state payload]
  (swap! app-state conj {:active-page {(keyword payload) "active"}})
  (handle-scroll-func payload))
