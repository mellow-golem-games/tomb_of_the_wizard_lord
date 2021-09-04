(ns wizard-lord.data.locations.forest.forest)

; main config for the location - should hold anything that other sub-locations may need or global stuff
(def CONFIG {
             :name "Forest"})


; each locations should have a base location render function that will call the other functions
; we can also include stuff to handle location wide concenrs here and pass them to the specific loc functions
(defn handle-location-render-forest [loc-key location])


(def forest
  {
   :type "overworld"
   :default-positions {:town [0 4]} ; this holds x y coords for the enterance when coming from key
   :position {
              :x 2000
              :y -3300}
   :fog [[0 0 0 0 0 0 0 0]
         [0 0 0 0 0 0 0 0]
         [0 0 0 0 0 0 0 0]
         [0 0 0 0 0 0 0 0]
         [0 0 0 0 0 0 0 0]
         [0 0 0 0 0 0 0 0]
         [0 1 1 1 1 1 1 0]
         [1 1 1 1 1 1 1 1]]
   :base {
          :description (str "You exit the town along the main road. Ahead of your lies the forest, and the path continues further in. To either side is large open areas that have been cleard of trees.");every location has a base
          :main-image "forest"}
   :locations []
   :exits []
   :random-events []})
