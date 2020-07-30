// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.dispatcher');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.global');
goog.require('wizard_lord.services.state.movement');
goog.require('wizard_lord.services.state.combat');
goog.require('wizard_lord.services.state.enemy');
goog.require('wizard_lord.services.state.locations');
goog.require('wizard_lord.services.state.textstate');
if((typeof wizard_lord !== 'undefined') && (typeof wizard_lord.services !== 'undefined') && (typeof wizard_lord.services.state !== 'undefined') && (typeof wizard_lord.services.state.dispatcher !== 'undefined') && (typeof wizard_lord.services.state.dispatcher.handle_state_change !== 'undefined')){
} else {
wizard_lord.services.state.dispatcher.handle_state_change = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"wizard-lord.services.state.dispatcher","handle-state-change"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (action){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"update-active-view",(function (action){
return wizard_lord.services.state.global.update_active_view.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"update-move-active",(function (action){
return wizard_lord.services.state.movement.update_move_active.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"handle-character-move",(function (action){
return wizard_lord.services.state.movement.handle_character_move.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"handle-enemy-move",(function (action){
return wizard_lord.services.state.enemy.handle_enemy_move.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"update-attack-active",(function (action){
return wizard_lord.services.state.combat.update_attack_active.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"handle-character-attack",(function (action){
return wizard_lord.services.state.combat.handle_character_attack.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"handle-enemy-attack",(function (action){
return wizard_lord.services.state.enemy.handle_enemy_attack.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"set-enemey-turn-in-progress",(function (action){
return wizard_lord.services.state.enemy.set_in_progress.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"handle-end-turn",(function (action){
wizard_lord.services.state.combat.handle_reset_character_action_points.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));

wizard_lord.services.state.movement.handle_reset_character_movement.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));

return wizard_lord.services.state.combat.update_initiative_value.call(null,wizard_lord.services.state.global.app_state);
}));
cljs.core._add_method.call(null,wizard_lord.services.state.dispatcher.handle_state_change,"set-location-key",(function (action){
return wizard_lord.services.state.locations.set_current_location_key.call(null,wizard_lord.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));

//# sourceMappingURL=dispatcher.js.map
