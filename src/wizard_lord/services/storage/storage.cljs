(ns wizard-lord.services.storage.storage)

; storage layout
; twl-characters PC character details - invs and all that jazz
; twl-quests - quest stuff and progress
; twl-npc - npc data - spaced by locations
; twl-locations - not sure if we need this yet but any location state we need to remember



(defn initial-load []
  "Loads all of our state and dispatches them to the store")


(defn handle-local-save [type]
  "Saves our date takes a type and save to determine how to override the data")