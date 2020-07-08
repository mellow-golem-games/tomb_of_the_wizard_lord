(ns wizard-lord.services.state.movement)


(defn update-move-active [app-state payload]
  (swap! app-state update-in [:combat-view :move-active] (fn [_] payload)))

(defn update-character-positions [players payload]
  (map (fn [character]
         (if (= (:id character) (:id payload))
           (conj character {:x (:x payload) :y (:y payload)})
           character)) players))

(defn update-character-movement [players payload]
  (map (fn [character]
         (if (= (:id character) (:id payload))
           (assoc-in character [:character :remaining] (:movementVal payload))
           character)) players))

; we make this separate so we can do movement reducing things separately
(defn handle-character-move-reduce-value [app-state payload]
  (swap! app-state update-in [:combat-view :players] update-character-movement payload))

(defn handle-character-move-check-remaining [app-state payload]
  (let [character (first (filter #(= (:id %) (:id payload)) (:players (:combat-view @app-state))))]
    (if (= 0 (:remaining (:character character)))
      (update-move-active app-state false))))

(defn handle-character-move [app-state payload]
  (swap! app-state update-in [:combat-view :players] update-character-positions payload)
  (handle-character-move-reduce-value app-state payload)
  (handle-character-move-check-remaining app-state payload)); not sure if I like this, probably make two handl-state-change requests



