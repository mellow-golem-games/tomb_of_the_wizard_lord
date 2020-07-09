(ns wizard-lord.services.state.global
    (:require [reagent.core :as reagent :refer [atom]]))

; we might consider moving this to a new file if it gets too much bigger
(def combat-state
  {:players [{:id 1 :x 0 :y 0
              :character {:move 20 :remaining 20 :max-health 50  :health 50 :defence 5 :attack 15}
              :actions {:attack {:range 5}}}]; we will probably break out this character to prevent multi-references
   :enemies [{:id 1 :x 2 :y 2 :character {:move 20 :remaining 20 :max-health 10 :health 10 :defence 10 :attack 5}}]
   :initiative-order [1]
   :current-initiative 1
   :move-active false
   :attack-active false})


; initial rep of our overall state- it's not striclty neccessary to build it out like this
; but I like to as it's a good place to reference all my current state options.
(defonce app-state (atom {:text "Hello world!"
                          :active-page {:example-page false
                                        :combat-view "active"}
                          :combat-view combat-state}))

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
