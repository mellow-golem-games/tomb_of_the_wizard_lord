(ns wizard-lord.combat-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [wizard-lord.services.scripts.range :refer [get-attack-distance]]))

(deftest attack-range-test
  (is (= 10 (get-attack-distance 1 1 2 2))))
