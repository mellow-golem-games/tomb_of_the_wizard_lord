(ns wizard-lord.data.locations.town.town
  [:require [wizard-lord.data.locations.town.tavern :refer [tavern-render]]
            [wizard-lord.data.locations.town.lumbermill :refer [lumbermill-render]]])




; each locations should have a base location render function that will call the other functions
; we can also include stuff to handle location wide concenrs here and pass them to the specific loc functions
(defn handle-location-render-town [loc-key location]
  (cond
    (= loc-key :tavern) (tavern-render location)
    (= loc-key :lumbermill) (lumbermill-render location)))


(def town
  {
   :base {
          :description "You enter the town of ${townName}. It's crappy."};every location has a base
   :locations [{:name "Blue Recluse" :key :tavern  :x "1650px" :y "200px"}
               {:name "Lumber Mill" :key :lumbermill :x "155px" :y "775px"}]
   :tavern {
            :description ["base descrtipion of tavern"] ; we might have multiple depending on progress
            :characters [{:id 1} {:id 2}]
            :quests [1] ; ID's of quests - only enviromental ones
            :random-events []
            :random-chance 75}
   :lumbermill {:description ["base descrtipion of lumbermill"]
                :random-chance 10}
   :market-square {}


   :random-events []})





