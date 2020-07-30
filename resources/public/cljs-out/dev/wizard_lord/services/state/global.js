// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.global');
goog.require('cljs.core');
goog.require('reagent.core');
wizard_lord.services.state.global.explore_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),"town",new cljs.core.Keyword(null,"current-location","current-location",-1897906618),null], null);
wizard_lord.services.state.global.combat_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"move","move",-2110884309),(20),new cljs.core.Keyword(null,"remaining","remaining",-138926777),(20),new cljs.core.Keyword(null,"max-health","max-health",-220583603),(50),new cljs.core.Keyword(null,"health","health",-295520649),(50),new cljs.core.Keyword(null,"defence","defence",1626052913),(5),new cljs.core.Keyword(null,"attack","attack",1957061788),(15),new cljs.core.Keyword(null,"max-action-points","max-action-points",-460864491),(2),new cljs.core.Keyword(null,"remaining-action-points","remaining-action-points",-1961707422),(2)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),(5),new cljs.core.Keyword(null,"cost","cost",-1094861735),(1)], null)], null)], null)], null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"move","move",-2110884309),(20),new cljs.core.Keyword(null,"remaining","remaining",-138926777),(20),new cljs.core.Keyword(null,"max-health","max-health",-220583603),(10),new cljs.core.Keyword(null,"health","health",-295520649),(10),new cljs.core.Keyword(null,"defence","defence",1626052913),(10),new cljs.core.Keyword(null,"attack","attack",1957061788),(5)], null)], null)], null),new cljs.core.Keyword(null,"initiative-order","initiative-order",788074407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760),(1),new cljs.core.Keyword(null,"move-active","move-active",-410074174),false,new cljs.core.Keyword(null,"attack-active","attack-active",440570527),false,new cljs.core.Keyword(null,"enemy-turn-in-progress","enemy-turn-in-progress",-644868101),false], null);
if((typeof wizard_lord !== 'undefined') && (typeof wizard_lord.services !== 'undefined') && (typeof wizard_lord.services.state !== 'undefined') && (typeof wizard_lord.services.state.global !== 'undefined') && (typeof wizard_lord.services.state.global.app_state !== 'undefined')){
} else {
wizard_lord.services.state.global.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main-view","main-view",343997885),"active",new cljs.core.Keyword(null,"combat-view","combat-view",585821215),false], null),new cljs.core.Keyword(null,"combat-view","combat-view",585821215),wizard_lord.services.state.global.combat_state,new cljs.core.Keyword(null,"explore-view","explore-view",-867029949),wizard_lord.services.state.global.explore_state], null));
}
wizard_lord.services.state.global.update_scroll_position = (function wizard_lord$services$state$global$update_scroll_position(val,scroll){

if(cljs.core.truth_(scroll)){
window.scrollTo((0),new cljs.core.Keyword(null,"scrollOffset","scrollOffset",-136986511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wizard_lord.services.state.global.app_state)));
} else {
}

return cljs.core.swap_BANG_.call(null,wizard_lord.services.state.global.app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollOffset","scrollOffset",-136986511),val], null));
});
wizard_lord.services.state.global.handle_scroll_func = (function wizard_lord$services$state$global$handle_scroll_func(payload){

if(cljs.core._EQ_.call(null,payload,"")){
document.body.classList.remove("hide-scroll");

return wizard_lord.services.state.global.update_scroll_position.call(null,(0),true);
} else {
wizard_lord.services.state.global.update_scroll_position.call(null,window.pageYOffset,false);

return setTimeout((function (){
return document.body.classList.add("hide-scroll");
}),(100));
}
});
wizard_lord.services.state.global.update_active_view = (function wizard_lord$services$state$global$update_active_view(app_state,payload){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-page","active-page",370357330),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,payload),"active"])], null));

return wizard_lord.services.state.global.handle_scroll_func.call(null,payload);
});

//# sourceMappingURL=global.js.map
