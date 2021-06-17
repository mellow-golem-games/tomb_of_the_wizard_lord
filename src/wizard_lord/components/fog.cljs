(ns wizard-lord.components.Fog)

; TODO this file was built for testing -should probably refactor to a looping thing

(defn get-bg [state row col]
  (if (= 1 (nth (nth state row) col))
    "transparent"
    "black"))

(defn Fog [fog-state]
  [:div {:style {:position "absolute" :top 0 :left 0 :height "100%" :width "100%"}}
   [:div {:style {:position "abolute" :left 0 :top 0 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 0 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 256 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 1 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 512 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 2 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 768 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 3 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 1024 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 4 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 1280 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 5 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 1536 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 6 7)}}]]

   [:div {:style {:position "abolute" :left 0 :top 1792 :display "flex"}}
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 0)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 1)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 2)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 3)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 4)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 5)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 6)}}]
    [:div {:style {:height "256px" :width "256px" :background (get-bg fog-state 7 7)}}]]])
