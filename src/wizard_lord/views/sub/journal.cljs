(ns wizard-lord.views.sub.journal
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]
            [wizard-lord.data.quests.quest-handler :refer [get-quest-details]]))

(defn generate-quest-log [location quest-log]
  (map
    (fn [item]
      (let [quest-details (get-quest-details (:id item))]
        [:div.Journal__questBlock__questProgress
         [:h3 (:name quest-details)]
         (loop [step 0
                dom ()]
          (if (= step (:step item))
            (reverse dom)
            (recur (inc step) (conj dom [:p (nth (:steps quest-details) step)]))))]))
    quest-log))

(defn toggle-location-quests-active [elem]
  "Well just do dom manipulation here as it's
   too much of a pain to put this into an atom now"
  (.toggle (.-classList elem) "active"))

(defn Journal [active quests]
  (let [quest-list (seq quests)] ;turns it into a itterable sequence.
    [:div.Journal.Page {:class (if active "active" "")}
     [:div.Page__inner
      [:div.Journal__header
       [:h1 "Active Quests"]
       [:p {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "journal" :value false}})} "close"]]
      (map (fn [item]
             ^{:key (name (first item))}
             [:div.Journal__questBlock
              [:h2 {:on-click #(toggle-location-quests-active (-> % .-target .-parentElement))} (name (first item))]
              (generate-quest-log (first item) (second item))]) quest-list)]]))


