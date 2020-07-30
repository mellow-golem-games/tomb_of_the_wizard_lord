// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.combat');
goog.require('cljs.core');
goog.require('wizard_lord.services.scripts.attacks');
wizard_lord.services.state.combat.set_damage_to_enemy = (function wizard_lord$services$state$combat$set_damage_to_enemy(enemies,character,enemyId){
return cljs.core.map.call(null,(function (enemy){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(enemy),enemyId)){
return cljs.core.assoc_in.call(null,enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"health","health",-295520649)], null),(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(enemy)) - wizard_lord.services.scripts.attacks.resolve_attack_damage.call(null,new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(character)),new cljs.core.Keyword(null,"defence","defence",1626052913).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(enemy)))));
} else {
return enemy;
}
}),enemies);
});
wizard_lord.services.state.combat.reduce_action_points_of_charater = (function wizard_lord$services$state$combat$reduce_action_points_of_charater(players,character,cost){
return cljs.core.map.call(null,(function (player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"remaining-action-points","remaining-action-points",-1961707422)], null),(new cljs.core.Keyword(null,"remaining-action-points","remaining-action-points",-1961707422).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(player)) - cost));
} else {
return player;
}
}),players);
});
wizard_lord.services.state.combat.reset_character_action_points = (function wizard_lord$services$state$combat$reset_character_action_points(players,character){
return cljs.core.map.call(null,(function (player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character))){
return cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"remaining-action-points","remaining-action-points",-1961707422)], null),new cljs.core.Keyword(null,"max-action-points","max-action-points",-460864491).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(player)));
} else {
return player;
}
}),players);
});
wizard_lord.services.state.combat.handle_reset_character_action_points = (function wizard_lord$services$state$combat$handle_reset_character_action_points(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.combat.reset_character_action_points,payload);
});
wizard_lord.services.state.combat.update_attack_active = (function wizard_lord$services$state$combat$update_attack_active(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"attack-active","attack-active",440570527)], null),(function (_){
return payload;
}));
});
wizard_lord.services.state.combat.handle_character_attack = (function wizard_lord$services$state$combat$handle_character_attack(app_state,payload){

var character = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14769_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14769_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),wizard_lord.services.state.combat.set_damage_to_enemy,character,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload));

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.combat.reduce_action_points_of_charater,character,new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(payload));
});
wizard_lord.services.state.combat.update_initiative_value = (function wizard_lord$services$state$combat$update_initiative_value(app_state){
var combat_view = new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var new_initiative_index = ((1) + new cljs.core.Keyword(null,"initiative-order","initiative-order",788074407).cljs$core$IFn$_invoke$arity$1(combat_view).indexOf(new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_view)));
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"initiative-order","initiative-order",788074407).cljs$core$IFn$_invoke$arity$1(combat_view),new_initiative_index)){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760)], null),((function (combat_view,new_initiative_index){
return (function (_){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"initiative-order","initiative-order",788074407).cljs$core$IFn$_invoke$arity$1(combat_view),new_initiative_index);
});})(combat_view,new_initiative_index))
);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760)], null),((function (combat_view,new_initiative_index){
return (function (_){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"initiative-order","initiative-order",788074407).cljs$core$IFn$_invoke$arity$1(combat_view),(0));
});})(combat_view,new_initiative_index))
);
}
});

//# sourceMappingURL=combat.js.map
