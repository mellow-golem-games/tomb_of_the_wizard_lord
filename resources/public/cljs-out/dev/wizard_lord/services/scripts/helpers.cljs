(ns wizard-lord.services.scripts.helpers)



(defn get-active-player [combat-state]
  (first (filter #(= (:id %) (:current-initiative combat-state)) (:players combat-state))))
