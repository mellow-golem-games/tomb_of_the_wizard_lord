// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.views.combat');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.dispatcher');
goog.require('wizard_lord.services.scripts.helpers');
goog.require('wizard_lord.services.scripts.range');
goog.require('wizard_lord.services.scripts.attacks');
goog.require('wizard_lord.services.scripts.movement');
goog.require('wizard_lord.data.enemies.enemy');
goog.require('wizard_lord.data.enemies.orc');
goog.require('wizard_lord.components.combat.player');
goog.require('wizard_lord.components.combat.enemy');
goog.require('wizard_lord.data.battlemats.generic');
goog.require('wizard_lord.services.state.initiative');
wizard_lord.views.combat.get_moveable_grid = (function wizard_lord$views$combat$get_moveable_grid(x,y,combat_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"move-active","move-active",-410074174).cljs$core$IFn$_invoke$arity$1(combat_state))){
var character = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15588_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15588_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(combat_state)));
var moveDistance = ((5) * (Math.abs((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(character) - x)) + Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(character) - y))));
if((moveDistance > new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))){
return false;
} else {
return true;
}
} else {
return true;
}
});
wizard_lord.views.combat.handle_attack_action = (function wizard_lord$views$combat$handle_attack_action(e,combat_state){
var character = wizard_lord.services.scripts.helpers.get_active_player.call(null,combat_state);
if(((wizard_lord.services.scripts.range.is_attack_in_range_QMARK_.call(null,character,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.dataset.x,new cljs.core.Keyword(null,"y","y",-1757859776),e.dataset.y], null),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(character))))) && ((new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(character))) <= new cljs.core.Keyword(null,"remaining-action-points","remaining-action-points",-1961707422).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))))){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"handle-character-attack",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),parseInt(e.dataset.id),new cljs.core.Keyword(null,"cost","cost",-1094861735),new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(character)))], null)], null));
} else {
return alert("Attack Out Of Range Or Points");
}
});
wizard_lord.views.combat.handle_grid_click = (function wizard_lord$views$combat$handle_grid_click(e,combat_state){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"attack-active","attack-active",440570527).cljs$core$IFn$_invoke$arity$1(combat_state);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,e.tagName,"IMG");
} else {
return and__4120__auto__;
}
})())){
return wizard_lord.views.combat.handle_attack_action.call(null,e,combat_state);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"move-active","move-active",-410074174).cljs$core$IFn$_invoke$arity$1(combat_state);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,e.tagName,"IMG");
} else {
return and__4120__auto__;
}
})())){
var character = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15589_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15589_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(combat_state)));
var x = e.dataset.x;
var y = e.dataset.y;
var moveDistance = ((5) * (Math.abs((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(character) - x)) + Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(character) - y))));
if((moveDistance > new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))){
return alert("Move too far!");
} else {
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"handle-character-move",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"movementVal","movementVal",585611898),(new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)) - moveDistance)], null)], null));
}
} else {
return null;
}
}
});
wizard_lord.views.combat.generate_combat_holder_size = (function wizard_lord$views$combat$generate_combat_holder_size(mat){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((50) * new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(mat)),new cljs.core.Keyword(null,"height","height",1025178622),((50) * new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(mat))], null);
});
wizard_lord.views.combat.generate_battlemat = (function wizard_lord$views$combat$generate_battlemat(mat,combat_state){
var index = (0);
var rows = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,index,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(mat))){
return rows;
} else {
var G__15590 = ((1) + index);
var G__15591 = cljs.core.conj.call(null,rows,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Battlemat__row","div.Battlemat__row",1134184751),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null),(function (){var innerIndex = (0);
var innerRow = cljs.core.List.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,innerIndex,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(mat))){
return cljs.core.reverse.call(null,innerRow);
} else {
var G__15592 = ((1) + innerIndex);
var G__15593 = cljs.core.conj.call(null,innerRow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Battlemat__column","div.Battlemat__column",-1566715691),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-x","data-x",369429472),innerIndex,new cljs.core.Keyword(null,"data-y","data-y",1384135050),index,new cljs.core.Keyword(null,"key","key",-1516042587),innerIndex,new cljs.core.Keyword(null,"class","class",-2030961996),(((!(wizard_lord.views.combat.get_moveable_grid.call(null,innerIndex,index,combat_state))))?"Battlemat__column--oor":null)], null)], null));
innerIndex = G__15592;
innerRow = G__15593;
continue;
}
break;
}
})()], null));
index = G__15590;
rows = G__15591;
continue;
}
break;
}
});
wizard_lord.views.combat.currentMat = new cljs.core.Keyword(null,"small-room","small-room",2083736772).cljs$core$IFn$_invoke$arity$1(wizard_lord.data.battlemats.generic.generic_battlemat);
wizard_lord.views.combat.do_enemy_turn = (function wizard_lord$views$combat$do_enemy_turn(combat_state){
wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"set-enemey-turn-in-progress",new cljs.core.Keyword(null,"value","value",305978217),true], null));

var enemy = wizard_lord.services.scripts.helpers.get_active_enemy.call(null,combat_state);
var closestPlayer = wizard_lord.services.scripts.movement.find_closest_player.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(combat_state));
var spotToMove = wizard_lord.services.scripts.movement.get_near_player_spot.call(null,closestPlayer);
wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"handle-enemy-move",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,spotToMove,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(enemy)], null))], null));

wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"handle-enemy-attack",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),enemy,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(closestPlayer)], null)], null));


return setTimeout(((function (enemy,closestPlayer,spotToMove){
return (function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"set-enemey-turn-in-progress",new cljs.core.Keyword(null,"value","value",305978217),false], null)).call(null);
});})(enemy,closestPlayer,spotToMove))
,(1000));
});
wizard_lord.views.combat.start_enemy_turn = (function wizard_lord$views$combat$start_enemy_turn(combat_state){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"enemy-turn-in-progress","enemy-turn-in-progress",-644868101).cljs$core$IFn$_invoke$arity$1(combat_state))){
return wizard_lord.views.combat.do_enemy_turn.call(null,combat_state);
} else {
return null;
}
});
wizard_lord.views.combat.Combat = (function wizard_lord$views$combat$Combat(active,app_state){
var character = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15594_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15594_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var combat_state = new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
cljs.core.print.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(combat_state));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat.Page","div.Combat.Page",-235972779),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view.Combat__section","div.Combat__view.Combat__section",-1824937940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view__inner","div.Combat__view__inner",-363296804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__view__inner__container","div.Combat__view__inner__container",-196832227),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),wizard_lord.views.combat.generate_combat_holder_size.call(null,wizard_lord.views.combat.currentMat),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (character,combat_state){
return (function (p1__15595_SHARP_){
return wizard_lord.views.combat.handle_grid_click.call(null,p1__15595_SHARP_.target,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
});})(character,combat_state))
], null),(function (){var iter__4523__auto__ = ((function (character,combat_state){
return (function wizard_lord$views$combat$Combat_$_iter__15596(s__15597){
return (new cljs.core.LazySeq(null,((function (character,combat_state){
return (function (){
var s__15597__$1 = s__15597;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15597__$1);
if(temp__5457__auto__){
var s__15597__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15597__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15597__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15599 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15598 = (0);
while(true){
if((i__15598 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__15598);
cljs.core.chunk_append.call(null,b__15599,row);

var G__15608 = (i__15598 + (1));
i__15598 = G__15608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15599),wizard_lord$views$combat$Combat_$_iter__15596.call(null,cljs.core.chunk_rest.call(null,s__15597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15599),null);
}
} else {
var row = cljs.core.first.call(null,s__15597__$2);
return cljs.core.cons.call(null,row,wizard_lord$views$combat$Combat_$_iter__15596.call(null,cljs.core.rest.call(null,s__15597__$2)));
}
} else {
return null;
}
break;
}
});})(character,combat_state))
,null,null));
});})(character,combat_state))
;
return iter__4523__auto__.call(null,wizard_lord.views.combat.generate_battlemat.call(null,wizard_lord.views.combat.currentMat,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
})(),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (character,combat_state){
return (function wizard_lord$views$combat$Combat_$_iter__15600(s__15601){
return (new cljs.core.LazySeq(null,((function (character,combat_state){
return (function (){
var s__15601__$1 = s__15601;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15601__$1);
if(temp__5457__auto__){
var s__15601__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15601__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15601__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15603 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15602 = (0);
while(true){
if((i__15602 < size__4522__auto__)){
var player = cljs.core._nth.call(null,c__4521__auto__,i__15602);
cljs.core.chunk_append.call(null,b__15603,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.combat.player.Player,player,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player)], null)));

var G__15609 = (i__15602 + (1));
i__15602 = G__15609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15603),wizard_lord$views$combat$Combat_$_iter__15600.call(null,cljs.core.chunk_rest.call(null,s__15601__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15603),null);
}
} else {
var player = cljs.core.first.call(null,s__15601__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.combat.player.Player,player,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player)], null)),wizard_lord$views$combat$Combat_$_iter__15600.call(null,cljs.core.rest.call(null,s__15601__$2)));
}
} else {
return null;
}
break;
}
});})(character,combat_state))
,null,null));
});})(character,combat_state))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
})()),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (character,combat_state){
return (function wizard_lord$views$combat$Combat_$_iter__15604(s__15605){
return (new cljs.core.LazySeq(null,((function (character,combat_state){
return (function (){
var s__15605__$1 = s__15605;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15605__$1);
if(temp__5457__auto__){
var s__15605__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15605__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15605__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15607 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15606 = (0);
while(true){
if((i__15606 < size__4522__auto__)){
var enemy = cljs.core._nth.call(null,c__4521__auto__,i__15606);
cljs.core.chunk_append.call(null,b__15607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.combat.enemy.Enemy,enemy,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(enemy)], null)));

var G__15610 = (i__15606 + (1));
i__15606 = G__15610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15607),wizard_lord$views$combat$Combat_$_iter__15604.call(null,cljs.core.chunk_rest.call(null,s__15605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15607),null);
}
} else {
var enemy = cljs.core.first.call(null,s__15605__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizard_lord.components.combat.enemy.Enemy,enemy,new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(enemy)], null)),wizard_lord$views$combat$Combat_$_iter__15604.call(null,cljs.core.rest.call(null,s__15605__$2)));
}
} else {
return null;
}
break;
}
});})(character,combat_state))
,null,null));
});})(character,combat_state))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
})())], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Combat__history.Combat__Section","div.Combat__history.Combat__Section",1262100334),((wizard_lord.services.scripts.helpers.is_enemy_turn_QMARK_.call(null,new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(combat_state)))?(function (){
wizard_lord.views.combat.start_enemy_turn.call(null,combat_state);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enemy Turn"], null);
})()
:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your Turn"], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"move-active","move-active",-410074174).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (character,combat_state){
return (function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-move-active",new cljs.core.Keyword(null,"value","value",305978217),false], null));
});})(character,combat_state))
], null),"Cancel Move"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (character,combat_state){
return (function (){
return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-move-active",new cljs.core.Keyword(null,"value","value",305978217),true], null));
});})(character,combat_state))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))], null),"move"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (character,combat_state){
return (function (){
wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-move-active",new cljs.core.Keyword(null,"value","value",305978217),false], null));

return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-attack-active",new cljs.core.Keyword(null,"value","value",305978217),true], null));
});})(character,combat_state))
], null),"Attack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (character,combat_state){
return (function (){
return wizard_lord.services.state.initiative.handle_end_turn.call(null,character);
});})(character,combat_state))
], null),"End Turn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Action Points ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining-action-points","remaining-action-points",-1961707422).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max-action-points","max-action-points",-460864491).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This is the history of rolls and such"], null)], null)], null);
});

//# sourceMappingURL=combat.js.map
