(ns wizard-lord.data.locations.forest.forest)

; main config for the location - should hold anything that other sub-locations may need or global stuff
(def CONFIG {
             :name "Forest"})


; each locations should have a base location render function that will call the other functions
; we can also include stuff to handle location wide concenrs here and pass them to the specific loc functions
(defn handle-location-render-forest [loc-key location])


(def forest
  {
   :position {
              :x 2000
              :y -3300}
   :base {
          :description (str "You Enter The Forest");every location has a base
          :main-image "forest"}
   :fog true
   :locations []
   :exits []
   :random-events []})
