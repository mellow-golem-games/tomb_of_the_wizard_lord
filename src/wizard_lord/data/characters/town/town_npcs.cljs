(ns wizard-lord.data.characters.town.town-npcs.cljs
  (:require [wizard-lord.data.characters.town.linzor-halfpour :refer [Linzor-Halfpour]]
            [wizard-lord.data.characters.town.lumberjack :refer [Lumberjack]]
            [wizard-lord.data.characters.town.boaster :refer [Boaster]]
            [wizard-lord.data.characters.town.townsfolk :refer [Townsfolk]]
            [wizard-lord.data.characters.town.mathias :refer [Mathias]]))

; TODO we should create a list of id's so we don't have to search through them
(def Town-Npcs
  [Linzor-Halfpour
   Lumberjack
   Boaster
   Townsfolk
   Mathias])




