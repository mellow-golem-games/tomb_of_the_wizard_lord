(ns wizard-lord.data.characters.town.boaster)

(def Boaster
  {:id 3
    :name "Tavern Boaster"
    :race "Human"
    :description "A man in the coner of the tavern loudly talking about what he found in the woods."
    :dialogue {
               :base '("Ha! Come to hear my tale of the woods? Who am I kidding, of course you were!." ({:text "What do you know about the woods?" :path :woods} {:text "No, nevermind." :path :end}))
               :woods '("Whatever it is it's dangerous. I'm not really look to revisit it, talk to some of the other mill works if you're intersted" ({:text "Then what happened?" :path :woods2} {:text "I've heard enough." :path :end}))
               :woods2 '("sdasdasd" ({:text "That's crazy." :path :end2}))
               :end '("Whatever, your loss." {:button true :type "end"})
               :end2 '("Yeah it is, gotta get back to my drinks." {:button true :type "end"})}})
