(ns wizard-lord.services.storage.storage
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))

; storage layout
; twl-characters PC character details - invs and all that jazz
; twl-quests - quest stuff and progress
; twl-npc - npc data - spaced by locations
; twl-locations - not sure if we need this yet but any location state we need to remember

(defn every [& args]
  (js/Promise.all (into-array args)))

(defn get-storage-item [item]
  (.getItem (.-localforage js/window) (str "twl-" item)))

(defn initial-load []
  "Loads all of our state and dispatches them to the store"
  (.then (every (get-storage-item "quests"))
    (fn [result]
      (let [current-state (js->clj result :keywordize-keys true)]
        (handle-state-change {:type "add-initial-quests" :value (first current-state)})))))


(defn handle-local-save [type value] ; TODO add callback
  "Saves our date takes a type and save to determine how to save the data"
  (.then
    (.setItem
      (.-localforage js/window) (str "twl-" type) (clj->js value)
        (fn []
          (print "test")))))
