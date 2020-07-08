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
wizard_lord.services.state.combat.update_attack_active = (function wizard_lord$services$state$combat$update_attack_active(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"attack-active","attack-active",440570527)], null),(function (_){
return payload;
}));
});
wizard_lord.services.state.combat.handle_character_attack = (function wizard_lord$services$state$combat$handle_character_attack(app_state,payload){

var character = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15050_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15050_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"combat-view","combat-view",585821215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),wizard_lord.services.state.combat.set_damage_to_enemy,character,payload);
});

//# sourceMappingURL=combat.js.map
