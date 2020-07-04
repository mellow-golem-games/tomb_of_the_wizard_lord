// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.combat');
goog.require('cljs.core');
wizard_lord.services.state.combat.update_move_active = (function wizard_lord$services$state$combat$update_move_active(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"move-active","move-active",-410074174)], null),(function (_){
return payload;
}));
});
wizard_lord.services.state.combat.update_character_positions = (function wizard_lord$services$state$combat$update_character_positions(players,payload){
return cljs.core.map.call(null,(function (character){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))){
return cljs.core.conj.call(null,character,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(payload)], null));
} else {
return character;
}
}),players);
});
wizard_lord.services.state.combat.handle_character_move = (function wizard_lord$services$state$combat$handle_character_move(app_state,payload){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combat-view","combat-view",585821215),new cljs.core.Keyword(null,"players","players",-1361554569)], null),wizard_lord.services.state.combat.update_character_positions,payload);
});

//# sourceMappingURL=combat.js.map
