// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.views.combat');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.dispatcher');
goog.require('wizard_lord.data.enemies.enemy');
goog.require('wizard_lord.data.enemies.orc');
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
var G__14076 = ((1) + index);
var G__14077 = cljs.core.conj.call(null,rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Battlemat__row","div.Battlemat__row",1134184751),(function (){var innerIndex = (0);
var innerRow = cljs.core.List.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,innerIndex,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(mat))){
return innerRow;
} else {
var G__14078 = ((1) + innerIndex);
var G__14079 = cljs.core.conj.call(null,innerRow,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Battlemat__column","div.Battlemat__column",-1566715691)], null));
innerIndex = G__14078;
innerRow = G__14079;
continue;
}
break;
}
})()], null));
index = G__14076;
rows = G__14077;
continue;
}
break;
}
});
wizard_lord.views.combat.currentMat = new cljs.core.Keyword(null,"small-room","small-room",2083736772).cljs$core$IFn$_invoke$arity$1(wizard_lord.data.battlemats.generic.generic_battlemat);
wizard_lord.views.combat.Combat = (function wizard_lord$views$combat$Combat(active){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat.Page","div.Combat.Page",-235972779),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view.Combat__section","div.Combat__view.Combat__section",-1824937940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view__inner","div.Combat__view__inner",-363296804),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view__inner__container","div.Combat__view__inner__container",-196832227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),wizard_lord.views.combat.generate_combat_holder_size.call(null,wizard_lord.views.combat.currentMat)], null),(function (){var iter__4523__auto__ = (function wizard_lord$views$combat$Combat_$_iter__14080(s__14081){
return (new cljs.core.LazySeq(null,(function (){
var s__14081__$1 = s__14081;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14081__$1);
if(temp__5457__auto__){
var s__14081__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14081__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14081__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14083 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14082 = (0);
while(true){
if((i__14082 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__14082);
cljs.core.chunk_append.call(null,b__14083,row);

var G__14084 = (i__14082 + (1));
i__14082 = G__14084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14083),wizard_lord$views$combat$Combat_$_iter__14080.call(null,cljs.core.chunk_rest.call(null,s__14081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14083),null);
}
} else {
var row = cljs.core.first.call(null,s__14081__$2);
return cljs.core.cons.call(null,row,wizard_lord$views$combat$Combat_$_iter__14080.call(null,cljs.core.rest.call(null,s__14081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,wizard_lord.views.combat.generate_battlemat.call(null,wizard_lord.views.combat.currentMat));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",8830217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/player.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"48px"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__history.Combat__Section","div.Combat__history.Combat__Section",1262100334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This is the history of rolls and such"], null)], null)], null);
});

//# sourceMappingURL=combat.js.map
