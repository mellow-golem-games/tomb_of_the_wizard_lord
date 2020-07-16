// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.views.main');
goog.require('cljs.core');
goog.require('wizard_lord.components.options');
goog.require('wizard_lord.components.frame');
wizard_lord.views.main.setup_pan = (function wizard_lord$views$main$setup_pan(){
wizard_lord.views.main.panzoom = window.panzoom;

wizard_lord.views.main.element = document.querySelector("#scene");

return (
wizard_lord.views.main.ref = wizard_lord.views.main.panzoom.call(null,wizard_lord.views.main.element,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(6),new cljs.core.Keyword(null,"minZoom","minZoom",1002989305),0.1,new cljs.core.Keyword(null,"minScale","minScale",1093857194),(1),new cljs.core.Keyword(null,"boundsPadding","boundsPadding",-909561009),(1),new cljs.core.Keyword(null,"bounds","bounds",1691609455),true], null))))
;
});
setTimeout((function (){
return wizard_lord.views.main.setup_pan.call(null);
}),(1000));
wizard_lord.views.main.Main = (function wizard_lord$views$main$Main(active,app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main.Page","div.Main.Page",-2128240800),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),active], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper","div.Main__wrapper",-1615604670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__map","div.Main__wrapper__map",289642521),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__map__frameWrapper","div.Main__wrapper__map__frameWrapper",414349961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.frame.Frame], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.frame.Frame], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.frame.Frame], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__map__mapContainer","div.Main__wrapper__map__mapContainer",-69752426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mapMarker.tavern","p.mapMarker.tavern",-552931850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("enter tavern");
})], null),"The Blue Recluse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"../images/town.jpg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__container","div.Main__wrapper__container",483772276),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.options.Options_bar], null)], null)], null)], null);
});

//# sourceMappingURL=main.js.map
