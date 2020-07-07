(ns wizard-lord.components.combat.enemy)


(defn Enemy [enemy combat-state]
  [:div.Player { :style {:left (* 50 (:x enemy)) :top (* 50 (:y enemy))}}
   [:img {:src "./images/enemy.png" :style {:width "100%" :height "50px"}}]])
