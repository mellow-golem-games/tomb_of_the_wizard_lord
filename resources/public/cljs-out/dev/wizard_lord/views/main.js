// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.views.main');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.dispatcher');
goog.require('wizard_lord.components.options');
goog.require('wizard_lord.components.frame');
goog.require('wizard_lord.data.locations.locations');
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
var explore_view = new cljs.core.Keyword(null,"explore-view","explore-view",-867029949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var current_view = wizard_lord.data.locations.locations.get_current_location.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(explore_view));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main.Page","div.Main.Page",-2128240800),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),active], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper","div.Main__wrapper",-1615604670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__map","div.Main__wrapper__map",289642521),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__map__frameWrapper","div.Main__wrapper__map__frameWrapper",414349961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.frame.Frame], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.frame.Frame], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.frame.Frame], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__map__mapContainer","div.Main__wrapper__map__mapContainer",-69752426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scene"], null),(function (){var iter__4523__auto__ = ((function (explore_view,current_view){
return (function wizard_lord$views$main$Main_$_iter__14394(s__14395){
return (new cljs.core.LazySeq(null,((function (explore_view,current_view){
return (function (){
var s__14395__$1 = s__14395;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14395__$1);
if(temp__5457__auto__){
var s__14395__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14395__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14395__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14397 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14396 = (0);
while(true){
if((i__14396 < size__4522__auto__)){
var location = cljs.core._nth.call(null,c__4521__auto__,i__14396);
cljs.core.chunk_append.call(null,b__14397,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mapMarker","p.mapMarker",795701155),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(location),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14396,location,c__4521__auto__,size__4522__auto__,b__14397,s__14395__$2,temp__5457__auto__,explore_view,current_view){
return (function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"set-location-key",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(location)], null));
});})(i__14396,location,c__4521__auto__,size__4522__auto__,b__14397,s__14395__$2,temp__5457__auto__,explore_view,current_view))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(location),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(location)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(location)], null));

var G__14398 = (i__14396 + (1));
i__14396 = G__14398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14397),wizard_lord$views$main$Main_$_iter__14394.call(null,cljs.core.chunk_rest.call(null,s__14395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14397),null);
}
} else {
var location = cljs.core.first.call(null,s__14395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mapMarker","p.mapMarker",795701155),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(location),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (location,s__14395__$2,temp__5457__auto__,explore_view,current_view){
return (function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"set-location-key",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(location)], null));
});})(location,s__14395__$2,temp__5457__auto__,explore_view,current_view))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(location),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(location)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(location)], null),wizard_lord$views$main$Main_$_iter__14394.call(null,cljs.core.rest.call(null,s__14395__$2)));
}
} else {
return null;
}
break;
}
});})(explore_view,current_view))
,null,null));
});})(explore_view,current_view))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(current_view));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"../images/town.jpg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main__wrapper__container","div.Main__wrapper__container",483772276),(cljs.core.truth_(new cljs.core.Keyword(null,"current-location","current-location",-1897906618).cljs$core$IFn$_invoke$arity$1(explore_view))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["You are in a location with the key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-location","current-location",-1897906618).cljs$core$IFn$_invoke$arity$1(explore_view))].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(current_view))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.options.Options_bar], null)], null)], null)], null);
});

//# sourceMappingURL=main.js.map
