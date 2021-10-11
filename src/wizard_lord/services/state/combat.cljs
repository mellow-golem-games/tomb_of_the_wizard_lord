(ns wizard-lord.services.state.combat
  (:require [wizard-lord.services.scripts.attacks :refer [resolve-attack-damage]]))

(defn remove-enemy-from-state
  "Removes enemy from combat state by id"
  [enemies enemyId]
  (remove #(= (:id %) enemyId) enemies))

(defn set-damage-to-enemy [enemies character enemyId] ; we can turn  tis into a vector for AOE maybe?
  (map (fn [enemy]
         (if (= (:id enemy) enemyId)
           (assoc-in enemy [:character :health] (- (:health (:character enemy)) (resolve-attack-damage (:attack (:character character)) (:defence (:character enemy)))))
           enemy)) enemies))

(defn reduce-action-points-of-charater [players character cost]
  (map (fn [player]
         (if (= (:id player) (:id character))
           (assoc-in player [:character :remaining-action-points] (- (:remaining-action-points (:character player)) cost))
           player)) players))

(defn reset-character-action-points [players character]
  (map (fn [player]
         (if (= (:id player) (:id character))
           (assoc-in player [:character :remaining-action-points] (:max-action-points (:character player)))
           player)) players))

(defn handle-reset-character-action-points [app-state payload]
  (swap! app-state update-in [:combat-view :players] reset-character-action-points payload))

(defn update-attack-active [app-state payload]
  (swap! app-state update-in [:combat-view :attack-active] (fn [_] payload)))

(defn handle-enemy-death [app-state payload]
  (swap! app-state update-in [:combat-view :enemies] remove-enemy-from-state payload))

(defn handle-character-attack [app-state payload]
  "Payload: {:id to damage}"
  (let [character (first (filter #(= (:id %) (:current-initiative (:combat-view @app-state))) (:players (:combat-view @app-state))))]
    (swap! app-state update-in [:combat-view :enemies] set-damage-to-enemy character (:id payload))
    (swap! app-state update-in [:combat-view :players] reduce-action-points-of-charater character (:cost payload))))

(defn update-initiative-value [app-state]
  (let [combat-view (:combat-view @app-state)
        new-initiative-index (+ 1 (.indexOf (:initiative-order combat-view) (:current-initiative combat-view)))]
    (if (contains? (:initiative-order combat-view) new-initiative-index)
      (swap! app-state update-in [:combat-view :current-initiative] (fn [_] (nth (:initiative-order combat-view) new-initiative-index)))
      (swap! app-state update-in [:combat-view :current-initiative] (fn [_] (nth (:initiative-order combat-view) 0))))))
