(ns wizard-lord.components.combat.enemy)

(defn get-remaining-health [enemyChar]
  (str (* 100 (/ (:health enemyChar) (:max-health enemyChar))) "%"))

(defn Enemy [enemy combat-state]
  [:div.Enemy {:style {:left (* 50 (:x enemy)) :top (* 50 (:y enemy))}}
   [:img {:src "./images/enemy.png" :data-id (:id enemy)}]
   [:div.Enemy.healthbar
    [:div.Enemy.healthbar__inner {:style {:width (get-remaining-health (:character enemy))}}]]])
