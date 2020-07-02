(ns wizard-lord.views.combat
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.enemies.enemy :as Enemy]
            [wizard-lord.data.enemies.orc :refer [Orc]]
            [wizard-lord.data.battlemats.generic :refer [generic-battlemat]]))


(defn generate-battlemat [mat]
  (loop [index 0
         rows []]
    (if (= index (:row mat))
      rows
      (recur (+ 1 index) (conj rows [:div.Battlemat__row
                                     (loop [innerIndex 0
                                            innerRow ()]
                                           (if (= innerIndex (:columns mat))
                                             innerRow
                                             (recur (+ 1 innerIndex) (conj innerRow [:div.Battlemat__column]))))])))))


(defn Combat [active]
  ; (def enemy (Orc. 1 20 3))
  ; (println (Enemy/attack enemy))
  [:div.Combat.Page {:class active}
   [:div.Combat__view.Combat__section
    [:div.Combat__view__inner
     (for [row (generate-battlemat (:small-room  generic-battlemat))]
       row)]]
   [:div.Combat__history.Combat__Section
    [:h2 "This is the history of rolls and such"]]])

