// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.views.page');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.dispatcher');
wizard_lord.views.page.render = (function wizard_lord$views$page$render(active){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Page","div.Page",67221923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),active], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-active-view",new cljs.core.Keyword(null,"value","value",305978217),""], null));
})], null),"Go Back"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"I'm a page that takes my state"], null)], null);
});

//# sourceMappingURL=page.js.map
