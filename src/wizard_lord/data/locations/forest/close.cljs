(ns wizard-lord.data.locations.forest.close
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

(defn close-render [location]
  [:div.town--close
   [:p (first (:description location))]]) ; base description
