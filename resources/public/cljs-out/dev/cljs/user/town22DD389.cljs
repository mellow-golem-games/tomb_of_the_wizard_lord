(def town
  {
   :base {
          :description "You enter the town of ${townName}. It's crappy."}
 ;every location has a base
   :tavern {
            :description ["base descrtipion"] ; we might have multiple depending on progress
            :characters [{:id 1}]
            :quests [1 2 3] ; ID's of quests - only enviromental ones
            :random-events []
            :random-chance 75}
   :lumbermill {}
   :market-square {}


   :random-events []})





