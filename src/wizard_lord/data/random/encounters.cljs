(ns wizard-lord.data.random.encounters
  (:require [wizard-lord.data.characters.character-handler :refer [open-dialogue-menu]]))


(def random-encounters
  {
   :1 {:display [:div.Location__dialogueWrap [:p "A"]
                 [:p.ActionText {:on-click #(open-dialogue-menu 4) :dangerouslySetInnerHTML {:__html "&nbsp;plainy dressed man&nbsp;"}}]
                 [:p "sits in the corner."]]}
   :2 {}
   :3 {}})


(defn get-encounters [encounters]
  (let [encounter-list (map #(% random-encounters) encounters)
        chosen-encounter (nth encounter-list (rand-int (count encounter-list)))]
    (:display chosen-encounter)))


(defn is-encounter? [chance]
  (> (+ 1 (rand-int 100)) chance))






