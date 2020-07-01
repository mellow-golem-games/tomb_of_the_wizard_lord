// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('wizard_lord.services.state.global');
goog.require('wizard_lord.services.state.dispatcher');
goog.require('wizard_lord.views.combat');
wizard_lord.core.get_app_element = (function wizard_lord$core$get_app_element(){
return goog.dom.getElement("app");
});
wizard_lord.core.hello_world = (function wizard_lord$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.views.combat.Combat,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wizard_lord.services.state.global.app_state)))], null)], null);
});
wizard_lord.core.mount = (function wizard_lord$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.core.hello_world], null),el);
});
wizard_lord.core.mount_app_element = (function wizard_lord$core$mount_app_element(){
var temp__5457__auto__ = wizard_lord.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return wizard_lord.core.mount.call(null,el);
} else {
return null;
}
});
wizard_lord.core.mount_app_element.call(null);
wizard_lord.core.on_reload = (function wizard_lord$core$on_reload(){
return wizard_lord.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
