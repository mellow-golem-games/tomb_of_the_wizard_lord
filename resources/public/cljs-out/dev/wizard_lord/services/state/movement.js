// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.movement');
goog.require('cljs.core');
wizard_lord.services.state.movement.update_move_active = (function wizard_lord$services$state$movement$update_move_active(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"move-active","move-active",-410074174)], null),(function (_){
return payload;
}));
});
wizard_lord.services.state.movement.update_character_positions = (function wizard_lord$services$state$movement$update_character_positions(players,payload){
return cljs.core.map.call(null,(function (character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))){
return cljs.core.conj.call(null,character,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(payload)], null));
} else {
return character;
}
}),players);
});
wizard_lord.services.state.movement.update_character_movement = (function wizard_lord$services$state$movement$update_character_movement(players,payload){
return cljs.core.map.call(null,(function (character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))){
return cljs.core.assoc_in.call(null,character,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),new cljs.core.Keyword(null,"movementVal","movementVal",585611898).cljs$core$IFn$_invoke$arity$1(payload));
} else {
return character;
}
}),players);
});
wizard_lord.services.state.movement.reset_character_movement = (function wizard_lord$services$state$movement$reset_character_movement(players,character){
return cljs.core.map.call(null,(function (player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)));
} else {
return player;
}
}),players);
});
wizard_lord.services.state.movement.handle_reset_character_movement = (function wizard_lord$services$state$movement$handle_reset_character_movement(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.movement.reset_character_movement,payload);
});
wizard_lord.services.state.movement.handle_character_move_reduce_value = (function wizard_lord$services$state$movement$handle_character_move_reduce_value(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.movement.update_character_movement,payload);
});
wizard_lord.services.state.movement.handle_character_move_check_remaining = (function wizard_lord$services$state$movement$handle_character_move_check_remaining(app_state,payload){
var character = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14844_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14844_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)))){
return wizard_lord.services.state.movement.update_move_active.call(null,app_state,false);
} else {
return null;
}
});
wizard_lord.services.state.movement.handle_character_move = (function wizard_lord$services$state$movement$handle_character_move(app_state,payload){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.movement.update_character_positions,payload);

wizard_lord.services.state.movement.handle_character_move_reduce_value.call(null,app_state,payload);

return wizard_lord.services.state.movement.handle_character_move_check_remaining.call(null,app_state,payload);
});

//# sourceMappingURL=movement.js.map
