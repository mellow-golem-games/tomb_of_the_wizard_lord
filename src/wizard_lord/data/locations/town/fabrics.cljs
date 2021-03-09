(ns wizard-lord.data.locations.town.fabrics
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

(defn fabrics-render [location]
  [:div.town--fabrics
   [:p (first (:description location))]]) ; base description

