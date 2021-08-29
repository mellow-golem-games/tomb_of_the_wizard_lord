(ns wizard-lord.views.main
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.components.options :refer [Options-bar]]
            [wizard-lord.components.frame :refer [Frame]]
            [wizard-lord.views.sub.inventory :refer [Inventory]]
            [wizard-lord.views.sub.character :refer [Character]]
            [wizard-lord.views.sub.journal :refer [Journal]]
            [wizard-lord.views.sub.npc-inventory :refer [NPC-Inventory]]
            [wizard-lord.data.characters.town.town-npcs.cljs :refer [Town-Npcs]]
            [wizard-lord.services.scripts.dialogue :refer [dialogue-generator]]
            [wizard-lord.components.map-marker :refer [MapMarker]]
            [wizard-lord.components.exit :refer [Exit]]
            [wizard-lord.components.Fog :refer [Fog]]
            [wizard-lord.data.characters.character-handler :refer [get-character-dialogue-details]]
            [wizard-lord.data.locations.locations :refer [get-current-location get-current-location-details]]))


; TODO this will work for dev but we should probably use lifecycle stuff to handle this
(defn setup-pan []
  (def panzoom (.-Panzoom js/window))

  (def element (.querySelector js/document "#scene"))

  (def ref (panzoom element (clj->js {:maxScale 5
                                      :minScale 0.25
                                      :contain "outside"})))
  ; (def ref (panzoom element (clj->js {:maxZoom 4 :minZoom 0.25
  ;                                             :minScale 1
  ;                                             :transformOrigin {:x 0.5 :y 0.5}
  ;                                             :boundsPadding 1 ; it multiplies by this is in the code for panzoom
  ;                                             :bounds true})))

  ; TODO fix this
  (js/setTimeout #(.pan ref 600 -1550))
  (js/setTimeout #(.zoom ref 0.25))
  (js/setTimeout #(.addEventListener element "wheel" (.-zoomWithWheel ref))))



(js/setTimeout #(setup-pan) 1000)

(defn play-scene-animation []
  "does a quick fade when transitioning to a new overworld location"
  (.add (.-classList (.getElementById js/document "Map-container")) "scene-animator")
  (js/setTimeout #(.remove (.-classList (.getElementById js/document "Map-container")) "scene-animator") 300))

(defn handle-scene-change [last-view-ref new-scene position]
  (.zoom ref 0.5)
  ; not sure why but the print here fixes a weird bug
  (js/setTimeout #(do (print "test") (.pan ref (:x position) (:y position))) 100)
  (reset! last-view-ref new-scene)
  (play-scene-animation))

(defn Main [active app-state]
  (let [explore-view (:explore-view @app-state)
        current-view (get-current-location (:current explore-view))
        last-view (atom "town") ; we use this to handle our new scene setup
        dialogue (:dialogue @app-state)]
    (if (not= @last-view (:current explore-view))
      (handle-scene-change last-view (:current explore-view) (:position current-view)))
    [:div.Main.Page {:class active}
     [:div.Main__wrapper
      [Character (:show-character @app-state)]
      [Inventory (:show-inventory @app-state)]
      [Journal (:show-journal @app-state) (:quests @app-state)]
      [NPC-Inventory (:show-npc-inventory @app-state) (:npc-inventory @app-state)]
      [:div.Main__wrapper__map {:id "Map-container"}
       [:div.Main__wrapper__map__frameWrapper
        [Frame]
        [Frame]
        [Frame]]
       [:div.Main__wrapper__map__mapContainer {:id "scene"}
        (for [details (:exits current-view)]
          [Exit details])
        (for [location (:locations current-view)]
          [MapMarker location])
        [:img {:src (str "../images/"(:main-image (:base current-view))".jpg")}]
        (if (:fog current-view)
          [Fog (:fog @app-state)]
          nil)]]
      [:div.Main__wrapper__container
       (if (:dialogue-active @app-state)
         (dialogue-generator (:character-state dialogue) (get-character-dialogue-details (:character dialogue) (:current explore-view)) (:flow dialogue))
         (if (:current-location explore-view) ; Dont show on dialogue
           ; [:p (str "You are in a location with the key: " (:current-location explore-view))]
           (get-current-location-details (:current explore-view) current-view (:current-location explore-view))
           [:p (:description (:base current-view))]))
       [Options-bar]]]]))
