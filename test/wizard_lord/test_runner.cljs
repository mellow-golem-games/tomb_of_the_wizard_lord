;; This test runner is intended to be run from the command line
(ns wizard-lord.test-runner
  (:require
    ;; require all the namespaces that you want to test
    [wizard-lord.combat-test]
    [figwheel.main.testing :refer [run-tests-async run-tests]]))

(defn -main [& args]
  (run-tests))
