(ns wizard-lord.data.characters.town.mathias)

(def inventory
  {
   :main [{:name "biscuits" :cost 2} {:name "something else" :cost 5}]})

(def Mathias
  {:id 5
    :name "Mathias Albrook"
    :race "Human"
    :description "Owner of the general goods store."
    :dialogue {
               :base '("I have all sorts of odd things for sale, sure to be something here for you." ({:text "Shop" :path :shop} {:text "The Town" :path :town} {:text "Ask about him" :path :self}))
               :shop (list "I have just the thing!." {:button true :type "inventory" :inv inventory})
               :town '("Something out in the woods I hear, brining lots of new faces to town which has been great for business." ({:text "Okay" :path :base}))
               :self '("Oh me?\" He stammers for a moment before continuing\" I'm just a simple shop owner, Mathias is the name. Now enough about me, let's see if there's anything I can get you" ({:text "Okay" :path :base}))}})
