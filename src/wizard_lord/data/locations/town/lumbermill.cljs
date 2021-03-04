(ns wizard-lord.data.locations.town.lumbermill)

;TODO need to still spec out this location

(defn lumbermill-render [location]
  [:div.town--lumbermill
   [:p (first (:description location))] ; base description
                                        ; character description
                                        ; enviromental factors
   [:p "less random than the bar"]])