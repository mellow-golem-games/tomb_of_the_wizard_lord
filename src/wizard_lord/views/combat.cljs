(ns wizard-lord.views.combat
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.enemies.enemy :as Enemy]
            [wizard-lord.data.enemies.orc :refer [Orc]]))
  ; (:use [wizard-lord.data.enemies.orc]))




(defn Combat [active]
  ; (def enemy (Orc. 1 20 3))
  ; (println enemy)
  ; (println (Enemy/attack enemy))
  [:div.Combat.Page {:class active}
   [:div.Combat__view
    [:h2 "this is where combat happens"]]
   [:div.Combat__history
    [:h2 "This is the history of rolls and such"]]])

