// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.data.enemies.enemy');
goog.require('cljs.core');

/**
 * Defines base function of an Enemy
 * @interface
 */
wizard_lord.data.enemies.enemy.Enemy = function(){};

/**
 * attach function
 */
wizard_lord.data.enemies.enemy.attack = (function wizard_lord$data$enemies$enemy$attack(this$){
if((((!((this$ == null)))) && ((!((this$.wizard_lord$data$enemies$enemy$Enemy$attack$arity$1 == null)))))){
return this$.wizard_lord$data$enemies$enemy$Enemy$attack$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (wizard_lord.data.enemies.enemy.attack[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (wizard_lord.data.enemies.enemy.attack["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Enemy.attack",this$);
}
}
}
});

/**
 * moves the enemy
 */
wizard_lord.data.enemies.enemy.move = (function wizard_lord$data$enemies$enemy$move(this$){
if((((!((this$ == null)))) && ((!((this$.wizard_lord$data$enemies$enemy$Enemy$move$arity$1 == null)))))){
return this$.wizard_lord$data$enemies$enemy$Enemy$move$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (wizard_lord.data.enemies.enemy.move[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (wizard_lord.data.enemies.enemy.move["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Enemy.move",this$);
}
}
}
});

/**
 * uses an enemies ability
 */
wizard_lord.data.enemies.enemy.use_ability = (function wizard_lord$data$enemies$enemy$use_ability(this$){
if((((!((this$ == null)))) && ((!((this$.wizard_lord$data$enemies$enemy$Enemy$use_ability$arity$1 == null)))))){
return this$.wizard_lord$data$enemies$enemy$Enemy$use_ability$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (wizard_lord.data.enemies.enemy.use_ability[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (wizard_lord.data.enemies.enemy.use_ability["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Enemy.use-ability",this$);
}
}
}
});


//# sourceMappingURL=enemy.js.map
