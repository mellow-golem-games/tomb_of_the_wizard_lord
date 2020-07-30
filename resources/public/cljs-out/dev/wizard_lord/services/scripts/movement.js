// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.scripts.movement');
goog.require('cljs.core');
wizard_lord.services.scripts.movement.get_point_distance = (function wizard_lord$services$scripts$movement$get_point_distance(x1,y1,x2,y2){

return ((5) * (Math.abs((x1 - x2)) + Math.abs((y1 - y2))));
});
wizard_lord.services.scripts.movement.determine_least_distance = (function wizard_lord$services$scripts$movement$determine_least_distance(closestPlayer,currentPlayer,xPos,yPos){

if(cljs.core.truth_(closestPlayer)){
var distance = wizard_lord.services.scripts.movement.get_point_distance.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(currentPlayer),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(currentPlayer),xPos,yPos);
if((wizard_lord.services.scripts.movement.get_point_distance.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(currentPlayer),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(currentPlayer),xPos,yPos) < new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(closestPlayer))){
return cljs.core.conj.call(null,currentPlayer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"distance","distance",-1671893894),distance], null));
} else {
return closestPlayer;
}
} else {
return cljs.core.conj.call(null,currentPlayer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"distance","distance",-1671893894),wizard_lord.services.scripts.movement.get_point_distance.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(currentPlayer),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(currentPlayer),xPos,yPos)], null));
}
});
wizard_lord.services.scripts.movement.get_near_player_spot = (function wizard_lord$services$scripts$movement$get_near_player_spot(closestPlayer){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(closestPlayer),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(closestPlayer) + (1))], null);
});
wizard_lord.services.scripts.movement.find_closest_player = (function wizard_lord$services$scripts$movement$find_closest_player(xPos,yPos,players){

var index = (0);
var closestPlayer = null;
while(true){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,players))){
return closestPlayer;
} else {
var G__14907 = (index + (1));
var G__14908 = wizard_lord.services.scripts.movement.determine_least_distance.call(null,closestPlayer,cljs.core.nth.call(null,players,index),xPos,yPos);
index = G__14907;
closestPlayer = G__14908;
continue;
}
break;
}
});

//# sourceMappingURL=movement.js.map
