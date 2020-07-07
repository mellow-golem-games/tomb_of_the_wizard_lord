(ns wizard-lord.views.combat
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.enemies.enemy :as Enemy]
            [wizard-lord.data.enemies.orc :refer [Orc]]
            [wizard-lord.components.combat.player :refer [Player]]
            [wizard-lord.components.combat.enemy :refer [Enemy]]
            [wizard-lord.data.battlemats.generic :refer [generic-battlemat]]))


(defn get-moveable-grid [x y combat-state]
  (if (:move-active combat-state)
    (let [character (first (filter #(= (:id %) (:current-initiative combat-state)) (:players combat-state)))
          moveDistance (* 5 (+ (js/Math.abs (- (:x character) x)) (js/Math.abs (- (:y character) y))))]
      (if (> moveDistance (:remaining (:character character)))
        false
        true))
    true)) ; if not in movement we always return true - this will also prevent enemies from changing ui

(defn handle-grid-click [e combat-state]

  (if (and (:move-active combat-state) (not= (.-tagName e) "IMG")); we also need to add a check to catch too large of movements
    (let [character (first (filter #(= (:id %) (:current-initiative combat-state)) (:players combat-state)))
          x (.-x (.-dataset e))
          y (.-y (.-dataset e))
          moveDistance (* 5 (+ (js/Math.abs (- (:x character) x)) (js/Math.abs (- (:y character) y))))]
      (if (> moveDistance (:remaining (:character character)))
        (js/alert "Move too far!")
        (handle-state-change {:type "handle-character-move" :value {:id (:current-initiative combat-state) :x x :y y :movementVal (- (:remaining (:character character)) moveDistance)}})))))

(defn generate-combat-holder-size [mat]
  "figures out the css for the holder size since elements are absolutely positioned inside"
  {:width (* 50 (:columns mat)) :height (* 50 (:row mat))})


; this is my current implementation of the battle view.
(defn generate-battlemat [mat combat-state]
  (loop [index 0
         rows []]
    (if (= index (:row mat))
      rows
      (recur (+ 1 index) (conj rows [:div.Battlemat__row {:key index}
                                     (loop [innerIndex 0
                                            innerRow ()]
                                           (if (= innerIndex (:columns mat))
                                             (reverse innerRow)
                                             (recur (+ 1 innerIndex) (conj innerRow [:div.Battlemat__column {:data-x innerIndex :data-y index :key innerIndex :class (if (not (get-moveable-grid innerIndex index combat-state)) "Battlemat__column--oor")}]))))])))))

; TODO this should be set in state somewhere
(def currentMat (:small-room  generic-battlemat))

(defn Combat [active app-state]
  (let [character (first (filter #(= (:id %) (:current-initiative (:combat-view @app-state))) (:players (:combat-view @app-state))))]
    [:div.Combat.Page {:class active}
     [:div.Combat__view.Combat__section
      [:div.Combat__view__inner
       [:div.Combat__view__inner__container {:style (generate-combat-holder-size currentMat) :on-click #(handle-grid-click (.-target %)(:combat-view @app-state))}
        (for [row (generate-battlemat currentMat (:combat-view @app-state))]
          row)
        (doall (for [player (:players (:combat-view @app-state))]
                 ^{:key (:id player)} [Player player (:combat-view @app-state)]))
        (doall (for [enemy (:enemies (:combat-view @app-state))]
                 ^{:key (:id enemy)} [Enemy enemy (:combat-view @app-state)]))]]]
     [:div.Combat__history.Combat__Section
      (if (:move-active (:combat-view @app-state))
        [:button {:on-click #(handle-state-change {:type "update-move-active" :value false})} "Cancel Move"]
        [:button {:on-click #(handle-state-change {:type "update-move-active" :value true}) :disabled (= 0 (:remaining (:character character)))} "move"])
      [:h2 "This is the history of rolls and such"]]]))

