(ns wizard-lord.data.characters.town.townsfolk)

(def Townsfolk
  {:id 4
    :name "Townsfolk"
    :race "Human"
    :description "Ranom Townsfolk"
    :dialogue {
               :base '("Oh hello, just enjoying a drink" ({:text "The Town" :path :town} {:text "Nevermind" :path :end}))
               :town '("We're simple people, been a bit crazy since the discovery." ({:text "What discovery?" :path :discovery} {:text "Bye" :path :end}))
               :discovery '("Not sure, but everyone is saying the lumberjacks found something big in the woods." ({:text "Bye" :path :end}))
               :end '("Take care." {:button true :type "end"})}})
