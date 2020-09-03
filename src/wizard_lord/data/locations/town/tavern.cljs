(ns wizard-lord.data.locations.town.tavern
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

; TODO maintain this, would like to at some point link it to something
(def character-id [1 2])

(defn tavern-characters [characters]
  [:div.town--tavern--characters
   [:div.Location__dialogueWrap [:p "The bartender is a"]
         [:p.ActionText {:on-click #(open-dialogue-menu 1) :dangerouslySetInnerHTML {:__html "&nbsp;well dressed halfling&nbsp;"}}]
         [:p "who gives a brief nod as you enter."]]
   [:div.Location__dialogueWrap
    [:p "Another man is standing on a chair"]
    [:p.ActionText {:on-click #(open-dialogue-menu 3) :dangerouslySetInnerHTML {:__html "&nbsp; loudly boasting &nbsp;"}}]
    [:p "to the few patrons that care to listen."]]
   [:div.Location__dialogueWrap
    [:p "And a"]
    [:p.ActionText {:on-click #(open-dialogue-menu 2) :dangerouslySetInnerHTML {:__html "&nbsp; man in dark robes&nbsp;"}}]
    [:p "sits in the corner away from any other patrons."]]])
(defn tavern-render [location]
  [:div.town--tavern
   [:p (first (:description location))] ; base description
   (tavern-characters (:characters location))                                   ; character description
                                        ; enviromental factors
   [:p "random event"]])


(defn tavern-on-exit []) ; handles events as you leave the tavern
