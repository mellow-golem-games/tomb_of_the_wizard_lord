// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.scripts.helpers');
goog.require('cljs.core');
wizard_lord.services.scripts.helpers.get_active_player = (function wizard_lord$services$scripts$helpers$get_active_player(combat_state){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14024_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14024_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state));
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(combat_state)));
});
wizard_lord.services.scripts.helpers.get_active_enemy = (function wizard_lord$services$scripts$helpers$get_active_enemy(combat_state){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__14025_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14025_SHARP_),new cljs.core.Keyword(null,"current-initiative","current-initiative",62014760).cljs$core$IFn$_invoke$arity$1(combat_state));
}),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(combat_state)));
});
wizard_lord.services.scripts.helpers.is_enemy_turn_QMARK_ = (function wizard_lord$services$scripts$helpers$is_enemy_turn_QMARK_(currentInitiative,enemies){
return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__14026_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__14026_SHARP_),currentInitiative);
}),enemies)) > (0));
});

//# sourceMappingURL=helpers.js.map
