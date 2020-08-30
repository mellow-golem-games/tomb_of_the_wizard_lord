(ns wizard-lord.views.sub.journal
  (:require [wizard-lord.services.state.dispatcher :refer [handle-state-change]]))


(defn Journal [active]
  [:div.Journal.Page {:class (if active "active" "")}
   [:div.Page__inner
    [:h1 "This is the journal page"]
    [:h1 {:on-click #(handle-state-change {:type "toggle-sub-view" :value {:sub-view "journal" :value false}})} "close"]]])
