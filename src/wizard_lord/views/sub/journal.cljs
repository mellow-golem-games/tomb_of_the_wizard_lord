(ns wizard-lord.views.sub.journal
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.quests.quest-handler :refer [get-quest-details]]))

(defn generate-quest-log [location quest-log]
  (map
    (fn [item]
      (let [quest-details (get-quest-details (:id item))]
        (print quest-details)
        (print item)
        [:div.Journal__questBlock__questProgress
         [:h3 (:name quest-details)]
         (loop [step 0
                dom ()]
          (if (= step (:step item))
            (reverse dom)
            (recur (inc step) (conj dom [:p (nth (:steps quest-details) step)]))))
        ])) quest-log))

(defn Journal [active quests]
  (let [quest-list (seq quests)] ;turns it into a itterable sequence.
    ; (print quest-list)
    [:div.Journal.Page {:class (if active "active" "")}
     [:div.Page__inner
      [:h1 "This is the quest journal page"]
      (map (fn [item]
             ^{:key (name (first item))}
             [:div.Journal__questBlock
              [:h2 (name (first item))]
              (generate-quest-log (first item) (second item))]) quest-list)

      [:h1 {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "journal" :value false}})} "close"]]]))
