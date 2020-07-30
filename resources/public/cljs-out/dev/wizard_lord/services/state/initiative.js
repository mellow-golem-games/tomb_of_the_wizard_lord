// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.services.state.initiative');
goog.require('cljs.core');
goog.require('wizard_lord.services.state.dispatcher');
wizard_lord.services.state.initiative.handle_end_turn = (function wizard_lord$services$state$initiative$handle_end_turn(character){
wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-move-active",new cljs.core.Keyword(null,"value","value",305978217),false], null));

wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-attack-active",new cljs.core.Keyword(null,"value","value",305978217),false], null));

return wizard_lord.services.state.dispatcher.handle_state_change.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"handle-end-turn",new cljs.core.Keyword(null,"value","value",305978217),character], null));
});

//# sourceMappingURL=initiative.js.map
