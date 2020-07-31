(ns wizard-lord.data.locations.town.lumbermill)


(defn lumbermill-render [location]
  [:div.town--lumbermill
   [:p (first (:description location))] ; base description
                                        ; character description
                                        ; enviromental factors
   [:p "less random than the bar"]])