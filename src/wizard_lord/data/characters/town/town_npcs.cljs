(ns wizard-lord.data.characters.town.town-npcs.cljs)


; :constrain
;  :visited? true - first :tree  else second tree

; If first :tree size > 1 then we can continue to nest from there, else we just take the thrid


; return value

 ;should be a [:div    "text"  _options or next button]

(def character-state {:visited? false})

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
  (let [dialogue-tree (:dialogue dialogue)
        tree-level-size (- (count dialogue-tree) 1)] ; our options always come last
    (for [tree-leaf (nth dialogue-tree tree-level-size)]
      [:p (first tree-leaf)])))

(defn dialogue-generator [character-state dialogue-tree depth]
  (let [current-depth (nth dialogue-tree depth)]
    [:div.Dialogue
     [:div.Dialogue_npc
      (if (:constraint current-depth)
        (handle-constraint character-state current-depth))]
     [:div.Dialouge_options
        (get-user-options current-depth)]]))



(def Town-Npcs
  [{:id 1
    :name "Helsing Halfpour"
    :race "Halfling"
    :description "A short halfing stands behind the bar. He appears upbeat, and is dressed brighly to match his demeanor"
    :dialogue [
               {:constraint :visited? :dialogue ["Welcome back" "It Is Good to Finally Meet you" '(["Option 1" ("More" "more2" "more3")] ["Option 2" ("More" "more2" "more3")])]}]}])


(def dialogue (:dialogue (first Town-Npcs)))
(dialogue-generator character-state dialogue 0)




