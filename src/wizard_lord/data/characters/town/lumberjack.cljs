(ns wizard-lord.data.characters.town.lumberjack)

(def Lumberjack
  {:id 2
    :name "Lumberjack"
    :race "Human"
    :description "In The Tabers"
    :dialogue {
               :base '("I'm really not in the mood to talk right now." ({:text "Something wrong?" :path :wrong} {:text "Nevermind" :path :end}))
               :wrong '("Nah, just ran into some issues in the woods, some stuff out there." ({:text "What kind of stuff?" :path :woods} {:text "I have to go" :path :end}))
               :woods '("Whatever it is it's dangerous. I'm not really look to revisit it, talk to some of the other mill works if you're intersted" ({:text "Okay Thanks." :path :end}))
               :end '("Yea." {:button true :type "end"})}})
