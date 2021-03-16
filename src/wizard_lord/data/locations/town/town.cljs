(ns wizard-lord.data.locations.town.town
  [:require [wizard-lord.data.locations.town.tavern :refer [tavern-render]]
            [wizard-lord.data.locations.town.lumbermill :refer [lumbermill-render]]
            [wizard-lord.data.locations.town.general-store :refer [general-store-render]]
            [wizard-lord.data.locations.town.town-center :refer [town-center-render]]
            [wizard-lord.data.locations.town.knights :refer [knight-render]]
            [wizard-lord.data.locations.town.fabrics :refer [fabrics-render]]])

; main config for the location - should hold anything that other sub-locations may need or global stuff
(def CONFIG {
             :name "Town Name"})


; each locations should have a base location render function that will call the other functions
; we can also include stuff to handle location wide concenrs here and pass them to the specific loc functions
(defn handle-location-render-town [loc-key location]
  (cond
    (= loc-key :tavern) (tavern-render location)
    (= loc-key :lumbermill) (lumbermill-render location)
    (= loc-key :generalGoods) (general-store-render location)
    (= loc-key :towncenter) (town-center-render location)
    (= loc-key :knights) (knight-render location)
    (= loc-key :fabrics) (fabrics-render location)))


(def town
  {
   :base {
          :description (str "You enter the town of " (:name CONFIG) ". It's crappy.");every location has a base
          :main-image "town"}
   :locations [{:name "Blue Recluse" :key :tavern  :x "1650px" :y "200px"}
               {:name "Lumber Mill" :key :lumbermill :x "155px" :y "775px"}
               {:name "Town Center" :key :towncenter :x "1350px" :y "600px"}
               {:name "Knights" :key :knights :x "1800px" :y "900px"}
               {:name "Thatchers Fabrics" :key :fabrics :x "1700px" :y "1400px"}
               {:name "General Goods" :key :generalGoods :x "875px" :y "600px"}]
   :exits [{:to "forest" :x "500px" :y "50px"}]
   :tavern {
            :description ["The tavern is dark but cozy and inviting. There's a few patrons, most of them absorbed in their own interests and pay you little mind as you enter."] ; we might have multiple depending on progress
            :characters [{:id 1} {:id 2} {:id 3}]
            :quests [1] ; ID's of quests - only enviromental ones
            :random-events [:1]
            :random-chance 75}
   :lumbermill {:description ["The lumber mill is loud and busy. The smell of saw dust hangs in the air and stings the eyes. Dozens of burly men move back and forth, none paying you any notice as they busy themselves with their work. "]
                :random-chance 10}
   :towncenter {:description ["Town Center"]}
   :knights {:description ["Knights"]}
   :fabrics {:description ["fabrics"]}
   :generalGoods {
                  :description ["The store is dark and filled to the brim with an assorment of seemingly random items. Trying to sort through the mess would likely take weeks."]
                  :characters [{:id 5}]}





   :random-events []})





