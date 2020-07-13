// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.enemy');
goog.require('cljs.core');
wizard_lord.services.state.enemy.set_in_progress = (function wizard_lord$services$state$enemy$set_in_progress(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"enemy-turn-in-progress","enemy-turn-in-progress",-644868101)], null),(function (_){
return payload;
}));
});
wizard_lord.services.state.enemy.update_enemy_positions = (function wizard_lord$services$state$enemy$update_enemy_positions(enemies,payload){
return cljs.core.map.call(null,(function (enemy){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))){
return cljs.core.conj.call(null,enemy,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(payload)], null));
} else {
return enemy;
}
}),enemies);
});
wizard_lord.services.state.enemy.handle_enemy_move = (function wizard_lord$services$state$enemy$handle_enemy_move(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),wizard_lord.services.state.enemy.update_enemy_positions,payload);
});
wizard_lord.services.state.enemy.set_damage_to_player = (function wizard_lord$services$state$enemy$set_damage_to_player(players,enemy,playerId){
return cljs.core.map.call(null,(function (player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),playerId)){
return cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"health","health",-295520649)], null),(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(player)) - (10)));
} else {
return player;
}
}),players);
});
wizard_lord.services.state.enemy.handle_enemy_attack = (function wizard_lord$services$state$enemy$handle_enemy_attack(app_state,payload){

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.enemy.set_damage_to_player,new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload));
});

//# sourceMappingURL=enemy.js.map
