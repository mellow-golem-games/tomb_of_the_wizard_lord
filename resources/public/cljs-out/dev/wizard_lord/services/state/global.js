// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.global');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof wizard_lord !== 'undefined') && (typeof wizard_lord.services !== 'undefined') && (typeof wizard_lord.services.state !== 'undefined') && (typeof wizard_lord.services.state.global !== 'undefined') && (typeof wizard_lord.services.state.global.app_state !== 'undefined')){
} else {
wizard_lord.services.state.global.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example-page","example-page",1944873874),false,new cljs.core.Keyword(null,"combat-view","combat-view",585821215),"active"], null)], null));
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
