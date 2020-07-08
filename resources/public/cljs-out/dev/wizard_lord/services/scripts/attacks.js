// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.scripts.attacks');
goog.require('cljs.core');
wizard_lord.services.scripts.attacks.resolve_attack_damage = (function wizard_lord$services$scripts$attacks$resolve_attack_damage(attackVal,defenceVal){
var damage = (attackVal - defenceVal);
if((damage > (0))){
return damage;
} else {
return (0);
}
});

//# sourceMappingURL=attacks.js.map
