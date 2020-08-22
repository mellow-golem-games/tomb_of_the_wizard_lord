(ns wizard-lord.data.locations.town.tavern
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

; TODO maintain this, would like to at some point link it to something
(def character-id [1 2])

(defn tavern-characters [characters]
  [:div.town--tavern--characters
   [:div [:p "The bardenrer is a"]
         [:p.ActionText {:on-click #(open-dialogue-menu 1)} "well dressed halfling"]
         [:p "at the bar."]]
   [:p "A man in dark robes sits in the corner"]])

(defn tavern-render [location]
  [:div.town--tavern
   [:p (first (:description location))] ; base description
   (tavern-characters (:characters location))                                   ; character description
                                        ; enviromental factors
   [:p "random event"]])


(defn tavern-on-exit []) ; handles events as you leave the tavern
