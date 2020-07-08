(ns wizard-lord.services.state.combat
  (:require [wizard-lord.services.scripts.attacks :refer [resolve-attack-damage]]))

(defn set-damage-to-enemy [enemies character enemyId] ; we can turn  tis into a vector for AOE maybe?
  (map (fn [enemy]
         (if (= (:id enemy) enemyId)
           (assoc-in enemy [:character :health] (- (:health (:character enemy)) (resolve-attack-damage (:attack (:character character)) (:defence (:character enemy)))))
           enemy)) enemies))


(defn update-attack-active [app-state payload]
  (swap! app-state update-in [:combat-view :attack-active] (fn [_] payload)))

(defn handle-character-attack [app-state payload]
  "Payload: {:id to damage}"
  (let [character (first (filter #(= (:id %) (:current-initiative (:combat-view @app-state))) (:players (:combat-view @app-state))))]
    (swap! app-state update-in [:combat-view :enemies] set-damage-to-enemy character payload)))
