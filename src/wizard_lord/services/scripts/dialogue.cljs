(ns wizard-lord.services.scripts.dialogue
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))
; :constrain
;  :visited? true - first :tree  else second tree

; If first :tree size > 1 then we can continue to nest from there, else we just take the thrid


; return value

(defn inventory-button-handler [dialogue-tree]
  "easier to move it here since we need 2 events called"
  (handle-state-change {:type "handle-open-npc-inventory" :value {:sub-view "npc-inventory" :value true :inv (:inv dialogue-tree)}})
  (handle-state-change {:type "close-dialogue" :value nil}))

 ;should be a [:div    "text"  _options or next button]
(defn generate-dialogue-button [dialogue-tree]
  (cond
    (= (:type dialogue-tree) "path") [:button {:on-click #(handle-state-change {:type "update-dialogue-flow" :value (:path dialogue-tree)})} "Continue"]
    (= (:type dialogue-tree) "end") [:button {:on-click #(handle-state-change {:type "close-dialogue" :value nil})} "Continue"]
    (= (:type dialogue-tree) "inventory") [:button {:on-click #(inventory-button-handler dialogue-tree)} "Continue"]))

(defn get-npc-dialogue-for-visited [visited dialogue]
  (if visited
    (first dialogue)
    (second dialogue)))

(defn get-dialogue-for-visited-constraint [character-state dialogue]
  (let [npcDialogue (get-npc-dialogue-for-visited (:visited? character-state) (:dialogue dialogue))]
    npcDialogue))

(defn handle-constraint [character-state dialogue]
  (cond
    (= (:constraint dialogue) :visited?) (get-dialogue-for-visited-constraint character-state dialogue)))

(defn get-user-options [dialogue]
  (let [dialogue-tree (or (last (:dialogue dialogue)) (last dialogue))] ;there's either a dialogue option for map or the rest
    (if (:button dialogue-tree)
      (generate-dialogue-button dialogue-tree)
      (for [tree-leaf dialogue-tree]
        ^{:key tree-leaf} [:p {:on-click #(handle-state-change {:type "update-dialogue-flow" :value (:path tree-leaf)})} (:text tree-leaf)]))))

(defn dialogue-generator [character-state character-dialogue-tree flow]
  (let [dialogue-tree (:dialogue character-dialogue-tree)
        current-flow ((keyword flow) dialogue-tree)]
    [:div.Dialogue
     [:div.Dialogue__npc
      [:p "NPC Name"]
      (if (:constraint current-flow)
        [:p (str "\"" (handle-constraint character-state current-flow) "\"")]
        [:p (first current-flow)])]
     [:div.Dialogue__options
      (get-user-options current-flow)]]))
