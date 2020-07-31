(ns wizard-lord.views.main
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.components.options :refer [Options-bar]]
            [wizard-lord.components.frame :refer [Frame]]
            [wizard-lord.data.locations.locations :refer [get-current-location get-current-location-details]]))


; TODO this will work for dev but we should probably use lifecycle stuff to handle this
(defn setup-pan []
  (def panzoom (.-panzoom js/window))
  (def element (.querySelector js/document "#scene"))
  (def ref (panzoom element (clj->js {:maxZoom 6 :minZoom 0.1
                                              :minScale 1
                                              :boundsPadding 1 ; it multiplies by this is in the code for panzoom
                                              :bounds true}))))

(js/setTimeout #(setup-pan) 1000)


(defn Main [active app-state]
  (let [explore-view (:explore-view @app-state)
        current-view (get-current-location (:current explore-view))]
    ; (get-current-location-details current-view (:current-location explore-view))
    [:div.Main.Page {:class active}
     [:div.Main__wrapper
      [:div.Main__wrapper__map
       [:div.Main__wrapper__map__frameWrapper
        [Frame]
        [Frame]
        [Frame]]
       [:div.Main__wrapper__map__mapContainer {:id "scene"}
        (for [location (:locations current-view)]
          [:p.mapMarker  {:key (:name location) :on-click #(handle-state-change {:type "set-location-key" :value (:key location)}) :style {:left (:x location) :top (:y location)}} (:name location)])
        [:img {:src "../images/town.jpg"}]]]
      [:div.Main__wrapper__container
       (if (:current-location explore-view)
         ; [:p (str "You are in a location with the key: " (:current-location explore-view))]
         (get-current-location-details (:current explore-view) current-view (:current-location explore-view))
         [:p (:description (:base current-view))])
       [Options-bar]]]]))
