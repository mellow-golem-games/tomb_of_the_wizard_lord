(ns wizard-lord.data.enemies.troll
  (:require [wizard-lord.data.enemies.enemy :refer [Enemy]]))

;
(defrecord Troll [health attack defense]
  Enemy
  (attack [_] "Handles a Troll Attack")
  (move [_] "Handles a Troll move")
  (use-ability [_] "Handles a troll ability"))
