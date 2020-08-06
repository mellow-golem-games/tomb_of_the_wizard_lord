(ns wizard-lord.data.locations.town.tavern)


(defn tavern-characters [characters]
  [:div.town--tavern--characters
   [:p "The bardenrer is a well dressed halfing"]
   [:p "A man in dark robes sits in the corner"]])

(defn tavern-render [location]
  [:div.town--tavern
   [:p (first (:description location))] ; base description
   (tavern-characters (:characters location))                                   ; character description
                                        ; enviromental factors
   [:p "random event"]])


(defn tavern-on-exit []) ; handles events as you leave the tavern
