// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('wizard_lord.services.state.global');
goog.require('wizard_lord.services.state.dispatcher');
goog.require('wizard_lord.views.main');
goog.require('wizard_lord.views.combat');
wizard_lord.core.get_app_element = (function wizard_lord$core$get_app_element(){
return goog.dom.getElement("app");
});
wizard_lord.core.render_game = (function wizard_lord$core$render_game(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.App","div.App",-1240868706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.background","div.background",1316303945)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.background.tr","div.background.tr",-515379313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.background.bl","div.background.bl",1711486179)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.background.br","div.background.br",-1316633743)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.backgroundBar","div.backgroundBar",740443042)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.backgroundBar.bottom","div.backgroundBar.bottom",1644688378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.backgroundBar.right","div.backgroundBar.right",-759442728)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.backgroundBar.left","div.backgroundBar.left",-2053849400)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.views.main.Main,new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wizard_lord.services.state.global.app_state))),wizard_lord.services.state.global.app_state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.views.combat.Combat,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wizard_lord.services.state.global.app_state))),wizard_lord.services.state.global.app_state], null)], null);
});
wizard_lord.core.mount = (function wizard_lord$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.core.render_game], null),el);
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
