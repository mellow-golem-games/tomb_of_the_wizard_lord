(ns wizard-lord.components.options)





(defn Options-bar []
  [:div.OptionsBar
   [:img.OptionsBar__button.character {:src "./images/set/character.png" :width "45px"}]
   [:img.OptionsBar__button.inventory {:src "./images/set/inventory.png" :width "45px"}]
   [:img.OptionsBar__button.journal {:src "./images/set/journal.png" :width "45px"}]])
