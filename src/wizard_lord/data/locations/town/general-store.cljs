(ns wizard-lord.data.locations.town.general-store
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))

;TODO need to still spec out this location

(defn general-store-render [location]
  [:div.town--general-store
   [:p (first (:description location))] ; base description
   [:div.Location__dialogueWrap
    [:p "Before you've had time to browse an enthusiastic man greets you"]
    [:p.ActionText {:on-click #(open-dialogue-menu 5) :dangerouslySetInnerHTML {:__html "&nbsp; \"Looking for anything specific?\" &nbsp;"}}]                                      ; character description
    [:p "A cheerful smile on his face as he address you."]]])

