// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.views.combat');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.dispatcher');
goog.require('wizard_lord.data.enemies.enemy');
goog.require('wizard_lord.data.enemies.orc');
goog.require('wizard_lord.components.combat.player');
goog.require('wizard_lord.data.battlemats.generic');
wizard_lord.views.combat.generate_combat_holder_size = (function wizard_lord$views$combat$generate_combat_holder_size(mat){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((50) * new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(mat)),new cljs.core.Keyword(null,"height","height",1025178622),((50) * new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(mat))], null);
});
wizard_lord.views.combat.generate_battlemat = (function wizard_lord$views$combat$generate_battlemat(mat){
var index = (0);
var rows = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,index,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(mat))){
return rows;
} else {
var G__14809 = ((1) + index);
var G__14810 = cljs.core.conj.call(null,rows,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Battlemat__row","div.Battlemat__row",1134184751),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null),(function (){var innerIndex = (0);
var innerRow = cljs.core.List.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,innerIndex,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(mat))){
return cljs.core.reverse.call(null,innerRow);
} else {
var G__14811 = ((1) + innerIndex);
var G__14812 = cljs.core.conj.call(null,innerRow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Battlemat__column","div.Battlemat__column",-1566715691),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-x","data-x",369429472),index,new cljs.core.Keyword(null,"data-y","data-y",1384135050),innerIndex,new cljs.core.Keyword(null,"key","key",-1516042587),innerIndex], null)], null));
innerIndex = G__14811;
innerRow = G__14812;
continue;
}
break;
}
})()], null));
index = G__14809;
rows = G__14810;
continue;
}
break;
}
});
wizard_lord.views.combat.currentMat = new cljs.core.Keyword(null,"small-room","small-room",2083736772).cljs$core$IFn$_invoke$arity$1(wizard_lord.data.battlemats.generic.generic_battlemat);
wizard_lord.views.combat.Combat = (function wizard_lord$views$combat$Combat(active,app_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat.Page","div.Combat.Page",-235972779),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view.Combat__section","div.Combat__view.Combat__section",-1824937940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view__inner","div.Combat__view__inner",-363296804),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view__inner__container","div.Combat__view__inner__container",-196832227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),wizard_lord.views.combat.generate_combat_holder_size.call(null,wizard_lord.views.combat.currentMat)], null),(function (){var iter__4523__auto__ = (function wizard_lord$views$combat$Combat_$_iter__14813(s__14814){
return (new cljs.core.LazySeq(null,(function (){
var s__14814__$1 = s__14814;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14814__$1);
if(temp__5457__auto__){
var s__14814__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14814__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14814__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14816 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14815 = (0);
while(true){
if((i__14815 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__14815);
cljs.core.chunk_append.call(null,b__14816,row);

var G__14821 = (i__14815 + (1));
i__14815 = G__14821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14816),wizard_lord$views$combat$Combat_$_iter__14813.call(null,cljs.core.chunk_rest.call(null,s__14814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14816),null);
}
} else {
var row = cljs.core.first.call(null,s__14814__$2);
return cljs.core.cons.call(null,row,wizard_lord$views$combat$Combat_$_iter__14813.call(null,cljs.core.rest.call(null,s__14814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,wizard_lord.views.combat.generate_battlemat.call(null,wizard_lord.views.combat.currentMat));
})(),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = (function wizard_lord$views$combat$Combat_$_iter__14817(s__14818){
return (new cljs.core.LazySeq(null,(function (){
var s__14818__$1 = s__14818;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14818__$1);
if(temp__5457__auto__){
var s__14818__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14818__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14818__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14820 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14819 = (0);
while(true){
if((i__14819 < size__4522__auto__)){
var player = cljs.core._nth.call(null,c__4521__auto__,i__14819);
cljs.core.chunk_append.call(null,b__14820,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.combat.player.Player,player,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player)], null)));

var G__14822 = (i__14819 + (1));
i__14819 = G__14822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14820),wizard_lord$views$combat$Combat_$_iter__14817.call(null,cljs.core.chunk_rest.call(null,s__14818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14820),null);
}
} else {
var player = cljs.core.first.call(null,s__14818__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.combat.player.Player,player,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player)], null)),wizard_lord$views$combat$Combat_$_iter__14817.call(null,cljs.core.rest.call(null,s__14818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
})())], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__history.Combat__Section","div.Combat__history.Combat__Section",1262100334),(cljs.core.truth_(new cljs.core.Keyword(null,"move-active","move-active",-410074174).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-move-active",new cljs.core.Keyword(null,"value","value",305978217),false], null));
})], null),"Cancel Move"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-move-active",new cljs.core.Keyword(null,"value","value",305978217),true], null));
})], null),"move"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This is the history of rolls and such"], null)], null)], null);
});

//# sourceMappingURL=combat.js.map
