(ns wizard-lord.services.scripts.attacks)


(defn resolve-attack-damage [attackVal defenceVal]  ; this will change!
  (let [damage (- attackVal defenceVal)]
    (if (> damage 0)
      damage
      0)))