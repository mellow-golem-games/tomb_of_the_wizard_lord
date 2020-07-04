(ns wizard-lord.components.combat.player)

; can probably break this up as it grows
(defn get-player-classes [player combat-state]
  (if (and (= (:id player) (:current-initiative combat-state)) (:move-active combat-state))
    "Player-moveActive"
    ""))

(defn Player [player combat-state]
  [:div.Player {:class (get-player-classes player combat-state) :style {:left (* 50 (:x player)) :top (* 50 (:y player))}}
   [:img {:src "./images/player.png" :style {:width "100%"}}]])
