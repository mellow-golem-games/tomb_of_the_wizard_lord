(ns wizard-lord.views.main
  (:require [wizard-lord.components.options :refer [Options-bar]]
            [wizard-lord.components.frame :refer [Frame]]))


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
  [:div.Main.Page {:class active}
   [:div.Main__wrapper
    [:div.Main__wrapper__map
     [:div.Main__wrapper__map__frameWrapper
      [Frame]
      [Frame]
      [Frame]]
     [:div.Main__wrapper__map__mapContainer { :id "scene"}
      [:p.mapMarker.tavern  {:on-click #(js/alert "enter tavern")} "The Blue Recluse"]
      [:img {:src "../images/town.jpg"}]]]
    [:div.Main__wrapper__container
     [Options-bar]]]])
