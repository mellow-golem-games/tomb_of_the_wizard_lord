(ns wizard-lord.views.combat
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.services.scripts.helpers :refer [get-active-player get-active-enemy is-enemy-turn?]]
            [wizard-lord.services.scripts.range :refer [is-attack-in-range?]]
            [wizard-lord.services.scripts.attacks :refer [handle-enemy-attack]]
            [wizard-lord.services.scripts.movement :refer [find-closest-player get-near-player-spot]]
            [wizard-lord.data.enemies.enemy :as Enemy]
            [wizard-lord.data.enemies.orc :refer [Orc]]
            [wizard-lord.components.combat.player :refer [Player]]
            [wizard-lord.components.combat.enemy :refer [Enemy]]
            [wizard-lord.data.battlemats.generic :refer [generic-battlemat]]
            [wizard-lord.services.state.initiative :refer [handle-end-turn]]
            [wizard-lord.components.combat.end :as End]))


(defn get-moveable-grid [x y combat-state]
  (if (:move-active combat-state)
    (let [character (first (filter #(= (:id %) (:current-initiative combat-state)) (:players combat-state)))
          moveDistance (* 5 (+ (js/Math.abs (- (:x character) x)) (js/Math.abs (- (:y character) y))))]
      (if (> moveDistance (:remaining (:character character)))
        false
        true))
    true)) ; if not in movement we always return true - this will also prevent enemies from changing ui

(defn handle-attack-action [e combat-state]
  (let [character (get-active-player combat-state)]
    (if (and ; TODO as this gets large we should break it out into a (is-valid-attack?) function which calls all this
          (is-attack-in-range? character {:x (.-x (.-dataset e)) :y (.-y (.-dataset e))} (:range (:attack (:actions character))))
          (<= (:cost (:attack (:actions character))) (:remaining-action-points (:character character))))
      (handle-state-change {:type "handle-character-attack" :value {:id (js.parseInt (.-id (.-dataset e))) :cost (:cost (:attack (:actions character)))}})
      (js/alert "Attack Out Of Range Or Points")))) ; TODO make these alerts better


(defn handle-grid-click [e combat-state]
  (if (and (:attack-active combat-state) (= (.-tagName e) "IMG"))
    (handle-attack-action e combat-state)
    (if (and (:move-active combat-state) (not= (.-tagName e) "IMG")); we also need to add a check to catch too large of movements
      (let [character (first (filter #(= (:id %) (:current-initiative combat-state)) (:players combat-state)))
            x (.-x (.-dataset e))
            y (.-y (.-dataset e))
            moveDistance (* 5 (+ (js/Math.abs (- (:x character) x)) (js/Math.abs (- (:y character) y))))]
        (if (> moveDistance (:remaining (:character character)))
          (js/alert "Move too far!")
          (handle-state-change {:type "handle-character-move" :value {:id (:current-initiative combat-state) :x x :y y :movementVal (- (:remaining (:character character)) moveDistance)}}))))))

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

(defn do-enemy-turn [combat-state]
  (handle-state-change {:type "set-enemey-turn-in-progress" :value true})
  (let [enemy (get-active-enemy combat-state)
        closestPlayer (find-closest-player (:x enemy) (:y enemy) (:players combat-state))
        spotToMove (get-near-player-spot closestPlayer)]
    (handle-state-change {:type "handle-enemy-move" :value (conj spotToMove {:id (:id enemy)})})
    (handle-state-change {:type "handle-enemy-attack" :value {:enemy enemy :id (:id closestPlayer)}})

    ; we'll use a timeout for now to simulate time, but we should probably come up with a better system for this
    (js/setTimeout #(do (handle-end-turn enemy) (handle-state-change {:type "set-enemey-turn-in-progress" :value false})) 1000)))


(defn start-enemy-turn [combat-state]
  (if (not (:enemy-turn-in-progress combat-state))
    (do-enemy-turn combat-state)))

(defn handle-enemy-death [enemy]
  (handle-state-change {:type "kill-enemy" :value (:id enemy)}))

(defn Combat [active app-state]
  (let [character (first (filter #(= (:id %) (:current-initiative (:combat-view @app-state))) (:players (:combat-view @app-state))))
        combat-state (:combat-view @app-state)
        enemies (:enemies (:combat-view @app-state))]
    [:div.Combat.Page {:class active}
     [:div {:style {:padding "15px"}}
      (if (is-enemy-turn? (:current-initiative combat-state) (:enemies combat-state))
       [:h3 {:style {:color "white"}} "Enemy Turn"]
       [:h3 {:style {:color "white"}}  "Your Turn"])]
     [:div.Combat__view.Combat__section
      [:div.Combat__view__inner
       [:div.Combat__view__inner__container {:style (generate-combat-holder-size currentMat) :on-click #(handle-grid-click (.-target %)(:combat-view @app-state))}
        (for [row (generate-battlemat currentMat (:combat-view @app-state))]
          row)
        (doall (for [player (:players (:combat-view @app-state))]
                 ^{:key (:id player)} [Player player (:combat-view @app-state)]))
        (if (> (count enemies) 0)
          (doall (for [enemy enemies]
                    (if (= (-> enemy :character :health) 0)
                     (handle-enemy-death enemy)
                     ^{:key (:id enemy)} [Enemy enemy (:combat-view @app-state)])))
          (End/VictoryCard))]]]
     [:div.Combat__history.Combat__Section
      (if (is-enemy-turn? (:current-initiative combat-state) (:enemies combat-state))
        (do
          (start-enemy-turn combat-state)
          [:p "Enemy Turn"])
        [:p "Your Turn"])
      (if (:move-active (:combat-view @app-state))
        [:button {:on-click #(handle-state-change {:type "update-move-active" :value false})} "Cancel Move"]
        [:button {:on-click #(handle-state-change {:type "update-move-active" :value true}) :disabled (= 0 (:remaining (:character character)))} "move"])
      [:button {:on-click #(do (handle-state-change {:type "update-move-active" :value false})
                               (handle-state-change {:type "update-attack-active" :value true}))} "Attack"]
      [:button {:on-click #(handle-end-turn character)} "End Turn"]
      [:p (str "Action Points " (:remaining-action-points (:character character)) " of " (:max-action-points (:character character)))]
      [:h2 "This is the history of rolls and such"]]]))
