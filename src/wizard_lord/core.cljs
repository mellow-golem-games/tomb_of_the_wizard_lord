(ns ^:figwheel-hooks wizard-lord.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [wizard-lord.services.state.global :refer [app-state]]
   [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
   [wizard-lord.services.storage.storage :refer [initial-load]]
   [wizard-lord.views.main :refer [Main]]
   [wizard-lord.views.combat :refer [Combat]]))

(initial-load)

(defn get-app-element []
  (gdom/getElement "app"))

(defn render-game []
  [:div.App
   [:div.background]
   [:div.background.tr]
   [:div.background.bl]
   [:div.background.br]
   [:div.backgroundBar]
   [:div.backgroundBar.bottom]
   [:div.backgroundBar.right]
   [:div.backgroundBar.left]
   [Main (:main-view (:active-page @app-state)) app-state]
   [Combat (:combat-view (:active-page @app-state)) app-state]])

(defn mount [el]
  (reagent/render-component [render-game] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

