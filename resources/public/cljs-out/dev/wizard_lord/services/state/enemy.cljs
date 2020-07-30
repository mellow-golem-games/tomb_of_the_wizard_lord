(ns wizard-lord.services.state.enemy)



(defn set-in-progress [app-state payload]
  (swap! app-state update-in [:combat-view :enemy-turn-in-progress] (fn [_] payload)))

(defn update-enemy-positions [enemies payload]
  (map (fn [enemy]
         (if (= (:id enemy) (:id payload))
           (conj enemy {:x (:x payload) :y (:y payload)})
           enemy)) enemies))


(defn handle-enemy-move [app-state payload]
  (swap! app-state update-in [:combat-view :enemies] update-enemy-positions payload))


(defn set-damage-to-player [players enemy playerId] ; we can turn  tis into a vector for AOE maybe?
  (map (fn [player]
         (if (= (:id player) playerId)
           (assoc-in player [:character :health] (- (:health (:character player)) 10))
           player)) players))



(defn handle-enemy-attack [app-state payload]
  "Payload: {:id to damage :enemy ref}"
  ; TODO lots of these functions are the same for characers, we should combine them
    (swap! app-state update-in [:combat-view :players] set-damage-to-player (:enemy payload) (:id payload)))
