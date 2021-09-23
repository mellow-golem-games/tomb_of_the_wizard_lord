(ns wizard-lord.data.locations.forest.forest
    (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
              [wizard-lord.data.locations.forest.close :refer [close-render]]
              [wizard-lord.data.locations.forest.barren :refer [barren-render]]))

; main config for the location - should hold anything that other sub-locations may need or global stuff
(def CONFIG {
             :name "Forest"})


; each locations should have a base location render function that will call the other functions
; we can also include stuff to handle location wide concenrs here and pass them to the specific loc functions
(defn handle-location-render-forest [loc-key location]
  (cond
    (= loc-key :close-forest) (close-render location)
    (= loc-key :barren) (barren-render location)))

(def description-block
  [:div
   [:p "You exit the town along the main road. Ahead of your lies the forest, and the path continues further in. To either side is large open areas that have been cleard of trees."]
   [:p {:on-click #(handle-state-change {:type "set-location-key" :value :close-forest})} "Continue forward"]
   [:p {:on-click #(handle-state-change {:type "set-location-key" :value :barren})} "Explore the cleared area"]])

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
          :description description-block ;every location has a base
          :main-image "forest"}
   :locations []
   :close-forest {:description ["As your journey deeper into the forest you notice the trees begin to get a little thicker."]}
   :barren {:description ["You enter an area that was clear cut some time ago. The land gently rolls making it difficult to see too far into the distance."]}
   :exits []
   :random-events []})
