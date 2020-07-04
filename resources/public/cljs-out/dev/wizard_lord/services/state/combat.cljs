(ns wizard-lord.services.state.combat)



(defn update-move-active [app-state payload]
  (swap! app-state update-in [:combat-view :move-active] (fn [_] payload)))

(defn update-character-positions [players payload]
  (map (fn [character]
         (if (= (:id character) (:id payload))
           (conj character {:x (:x payload) :y (:y payload)})
           character)) players))

(defn handle-character-move [app-state payload]
  ; (print payload)
  (swap! app-state update-in [:combat-view :players] update-character-positions payload))

