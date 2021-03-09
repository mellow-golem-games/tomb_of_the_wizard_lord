(ns wizard-lord.data.locations.town.knights
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

(defn knight-render [location]
  [:div.town--knight
   [:p (first (:description location))]]) ; base description

