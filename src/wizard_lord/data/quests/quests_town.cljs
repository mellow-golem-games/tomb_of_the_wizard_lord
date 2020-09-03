(ns wizard-lord.data.quests.quests_town)



(def quest1
  {:id 1
   :name "A Fire Eel Stew"
   :steps [
           "I've been asked to aquire a few fire eels for ${char names} stew."
           "I found a few fire eels and was able to succesfully aquire them. I should return them to ${char name} in ${town name}"
           "I returned the fire eels and received my reward"]
   :rewards [{:type "gold" :amount "50"}]})



(def quest2
  {:id 2
   :name "The Lost Tomb"
   :steps [
           "I've heard of lost tomb that was uncovered in the woods. Perhaps I should investiage"
           "I received a map of the nearby woods, this should help me find my way easier"
           "I heard a rumor that the tomb is deeper in the woods, maybe I should continue deeper"
           "I found the tomb deep in the woods"]
   :rewards []})

(def quests_town 
  [quest1 quest2])
