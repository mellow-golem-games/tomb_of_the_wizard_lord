(ns wizard-lord.services.scripts.helpers)



(defn get-active-player [combat-state]
  (first (filter #(= (:id %) (:current-initiative combat-state)) (:players combat-state))))

(defn get-active-enemy [combat-state]
  (first (filter #(= (:id %) (:current-initiative combat-state)) (:enemies combat-state))))

(defn is-enemy-turn? [currentInitiative enemies]
  (> (count (filter #(= (:id %) currentInitiative) enemies)) 0))
