(ns wizard-lord.core
    (:require [reagent.core :as reagent :refer [atom]]
              [wizard-lord.components.textbox :as textbox]
              [wizard-lord.views.page :as page]
              [wizard-lord.services.state.global :refer [app-state]]
              [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))

(enable-console-print!)

(defn core []
  [:div.Main
    [:p {:on-click #(handle-state-change {:type "update-state-text" :value "Test Text Here"})} "Click to update state text"]
    [textbox/render (:text @app-state)]
    [page/render (:example-page (:active-page @app-state))]
    [:h3 {:on-click #(handle-state-change {:type "update-active-view" :value "example-page"})} "click me to open a new page"]])

(reagent/render-component [core]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

