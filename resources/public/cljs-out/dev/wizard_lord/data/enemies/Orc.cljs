(ns wizard-lord.data.enemies.orc
  (:require [wizard-lord.data.enemies.enemy :refer [Enemy]]))

;
(defrecord Orc [health attack defense]
  Enemy
  (attack [_] "Handles an Orc Attack")
  (move [_] "Handles an Orc Attack")
  (use-ability [_] "Handles an Orc Attack"))
