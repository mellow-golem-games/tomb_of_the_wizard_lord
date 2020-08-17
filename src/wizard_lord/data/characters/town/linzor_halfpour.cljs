(ns wizard-lord.data.characters.town.linzor-halfpour)

(def main-options '({:text "Something to drink?" :path :drink} {:text "A place to stay?" :path :stay} {:text "Any Rumors?" :path :rumors} {:text "The Forest?" :path :forest}))
(def rumor-options '({:text "Lumberjacks" :path :lumberjacks} {:text "Danger woods" :path :danger-woods} {:text "The town" :path :town} {:text "Nevermind" :path :else}))


(def Linzor-Halfpour
  {:id 1
    :name "Linzor Halfpour"
    :race "Halfling"
    :description "A short halfing stands behind the bar. He appears upbeat, and is dressed brighly to match his demeanor"
    :dialogue {:base {:constraint :visited? :dialogue ["Welcome back" "Always a pleasure to meet a new face in town I'm halfpur proprietor of this fine establishment." main-options]}
               :rumors (list "Yea, I’ve heard a couple, lots going on in the woods these days. Turns out some of the lumberjacks might have found something, lots of people coming from all over to check it out. That’s not to say it’s going to be easy getting there. Also a lot going on around the town." rumor-options)
               :rumors-again (list "I've got time" rumor-options)
               :forest '("It’s what the town’s known for, were a logging town so the forest is the reason we’re all here. I’m probably not the best to ask about it, check with the lumbermill of the west side of town if you’re interested in learning more." {:button true :type "path" :path :else})
               :drink '("Always something good to drink here.")
               :stay '("I'm sure I can scrounge up a room for ya.")
               :else (list "Something else I can help you with?" main-options)
               ; second tier options
               :lumberjacks '("Rumor has it that they found some sort of structure out in the woods, pretty deep out there from what I’ve heard. I’d ask around the mill on the west side of town." {:button true :type "path" :path :rumors-again})
               :danger-woods '("Lots of beasts hang out in these woods; why the lumberjacks travel in groups, safety in numbers they say" {:button true :type "path" :path :rumors-again})
               :town '("Oh there’s always something going on around here. If I was looking for work I’d hang around the market, you must have seen it heading up here. Lots of folk are always around there so there’s bound to be something." {:button true :type "path" :path :rumors-again})}})