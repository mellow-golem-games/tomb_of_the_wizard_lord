(ns wizard-lord.services.scripts.movement)

; TODO we do this same logic to calc distance in range.cljs - abstract these both away.
(defn get-point-distance [x1 y1 x2 y2]
  "calcs the distance between points give 5' per square"
  (* 5 (+ (js/Math.abs (- x1 x2)) (js/Math.abs (- y1 y2)))))

(defn determine-least-distance [closestPlayer currentPlayer xPos yPos]
  "Compares the past current closet to the next player to see which is closer"
  (if closestPlayer
    (let [distance (get-point-distance (:x currentPlayer) (:y currentPlayer) xPos yPos)]
      (if (< (get-point-distance (:x currentPlayer) (:y currentPlayer) xPos yPos) (:distance closestPlayer))
        (conj currentPlayer {:distance distance})
        closestPlayer))
    (conj currentPlayer {:distance (get-point-distance (:x currentPlayer) (:y currentPlayer) xPos yPos)})))



(defn get-near-player-spot [closestPlayer]
;TODO we should go back and check if the space is occupied that he's trying to move to.
; also check that its not OOB and some other stuff - this is just a quick dirty demo
  {:x (:x closestPlayer) :y (+ (:y closestPlayer) 1)})

(defn find-closest-player [xPos yPos players]
  "Given a coord xPos yPox finds the player in Players that is closest"
  (loop [index 0
         closestPlayer nil]
    (if (= index (count players))
      closestPlayer
      (recur (inc index) (determine-least-distance closestPlayer (nth players index) xPos yPos)))))
