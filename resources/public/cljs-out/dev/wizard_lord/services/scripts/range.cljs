(ns wizard-lord.services.scripts.range)


(defn get-attack-distance [x1 y1 x2 y2]
  (* 5 (+ (js/Math.abs (- x1 x2)) (js/Math.abs (- y1 y2)))))


(defn is-attack-in-range? [character target attackRange]
  (let [distance (get-attack-distance (:x character) (:y character) (:x target) (:y target))]
    (<= distance attackRange)))

