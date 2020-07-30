// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.data.locations.locations');
goog.require('cljs.core');
goog.require('wizard_lord.data.locations.town');
wizard_lord.data.locations.locations.get_current_location = (function wizard_lord$data$locations$locations$get_current_location(location){
if(cljs.core._EQ_.call(null,location,"town")){
return wizard_lord.data.locations.town.town;
} else {
return null;
}
});

//# sourceMappingURL=locations.js.map
