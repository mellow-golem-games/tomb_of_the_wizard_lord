(ns wizard-lord.data.enemies.orc
  (:require [wizard-lord.data.enemies.enemy :refer [Enemy add-combat-fields]]))

;
(defrecord Orc [health attack defence movement]
  Enemy
  (attack [_] "Handles an Orc Attack")
  (move [_] "Handles an Orc Attack")
  (use-ability [_] "Handles an Orc Attack"))


(defn create-orc []
  (add-combat-fields (Orc. 10 10 10 20)))
