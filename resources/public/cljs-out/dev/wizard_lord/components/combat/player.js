// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.components.combat.player');
goog.require('cljs.core');
wizard_lord.components.combat.player.get_remaining_health = (function wizard_lord$components$combat$player$get_remaining_health(player){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(player) / new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(player)))),"%"].join('');
});
wizard_lord.components.combat.player.get_player_classes = (function wizard_lord$components$combat$player$get_player_classes(player,combat_state){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"move-active","move-active",-410074174).cljs$core$IFn$_invoke$arity$1(combat_state);
} else {
return and__4120__auto__;
}
})())){
return "Player-moveActive";
} else {
return "";
}
});
wizard_lord.components.combat.player.Player = (function wizard_lord$components$combat$player$Player(player,combat_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Player","div.Player",1155736850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),wizard_lord.components.combat.player.get_player_classes.call(null,player,combat_state),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),((50) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"top","top",-1856271961),((50) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(player))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/player.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Player.healthbar","div.Player.healthbar",-1765312181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.healthbar__inner","div.healthbar__inner",1357257662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),wizard_lord.components.combat.player.get_remaining_health.call(null,new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(player))], null)], null)], null)], null)], null);
});

//# sourceMappingURL=player.js.map
