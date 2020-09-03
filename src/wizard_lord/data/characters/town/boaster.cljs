(ns wizard-lord.data.characters.town.boaster)

(def Boaster
  {:id 3
    :name "Tavern Boaster"
    :race "Human"
    :description "A man in the coner of the tavern loudly talking about what he found in the woods."
    :dialogue {
               :base '("Ha! Come to hear my tale of the woods? Who am I kidding, of course you were!." ({:text "What do you know about the woods?" :path :woods} {:text "No, nevermind." :path :end}))
               :woods {:description "He pulls a jewel encrusted sword out and holds it up to catch the light." :dialogue ["You see this? Found it out in the woods, just passed the current chop line. Worth more than most people in town I reckon." '({:text "Wow, that's impressive?" :path :end2} {:text "Thanks but we must be going." :path :end})]}
               :end '("Whatever, your loss." {:button true :type "end"})
               :end2 '("Yeah it is isn't it? Well, gotta get back to my drinks and my fans.." {:button true :type "end"})}})
