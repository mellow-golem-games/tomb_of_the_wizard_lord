(ns wizard-lord.data.locations.town.town-center
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

(defn town-center-render [location]
  [:div.town--town-center
   [:p (first (:description location))]]) ; base description

