(ns wizard-lord.views.main
  (:require [wizard-lord.components.options :refer [Options-bar]]
            [wizard-lord.components.frame :refer [Frame]]))




(defn Main [active app-state]
  [:div.Main.Page {:class active}
   [:div.Main__wrapper
    [:div.Main__wrapper__map
     [Frame]
     [Frame]
     [Frame]]
    [:div.Main__wrapper__container
     [Options-bar]]]])
