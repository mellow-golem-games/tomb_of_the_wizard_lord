// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.scripts.range');
goog.require('cljs.core');
wizard_lord.services.scripts.range.get_attack_distance = (function wizard_lord$services$scripts$range$get_attack_distance(x1,y1,x2,y2){
return ((5) * (Math.abs((x1 - x2)) + Math.abs((y1 - y2))));
});
wizard_lord.services.scripts.range.is_attack_in_range_QMARK_ = (function wizard_lord$services$scripts$range$is_attack_in_range_QMARK_(character,target,attackRange){
var distance = wizard_lord.services.scripts.range.get_attack_distance.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target));
return (distance <= attackRange);
});

//# sourceMappingURL=range.js.map
