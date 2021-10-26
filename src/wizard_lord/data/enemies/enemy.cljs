(ns wizard-lord.data.enemies.enemy)


(defprotocol Enemy
  "Defines base function of an Enemy"
  (attack [this] "attach function")
  (move [this] "moves the enemy")
  (use-ability [this] "uses an enemies ability"))


; (defrecord Troll [health attack defense]
;   Enemy
;   (attack [_] "Handles a Troll attack"))

(defn add-combat-fields
  "this adds extra fields that are need to handle combat - they are just duplicates of existing ones"
  [enemy]
  (conj enemy
    {:remaining (:movement enemy)
     :max-health (:health enemy)}))
