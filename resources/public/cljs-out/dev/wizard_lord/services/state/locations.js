// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.locations');
goog.require('cljs.core');
wizard_lord.services.state.locations.set_current_location_key = (function wizard_lord$services$state$locations$set_current_location_key(app_state,payload){
cljs.core.print.call(null,payload);

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explore-view","explore-view",-867029949),new cljs.core.Keyword(null,"current-location","current-location",-1897906618)], null),(function (_){
return payload;
}));
});

//# sourceMappingURL=locations.js.map
