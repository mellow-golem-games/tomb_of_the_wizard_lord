// Compiled by ClojureScript 1.10.520 {}
goog.provide('wizard_lord.data.enemies.orc');
goog.require('cljs.core');
goog.require('wizard_lord.data.enemies.enemy');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {wizard_lord.data.enemies.enemy.Enemy}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
wizard_lord.data.enemies.orc.Orc = (function (health,attack,defense,__meta,__extmap,__hash){
this.health = health;
this.attack = attack;
this.defense = defense;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k13984,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__13988 = k13984;
var G__13988__$1 = (((G__13988 instanceof cljs.core.Keyword))?G__13988.fqn:null);
switch (G__13988__$1) {
case "health":
return self__.health;

break;
case "attack":
return self__.attack;

break;
case "defense":
return self__.defense;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13984,else__4388__auto__);

}
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__13989){
var vec__13990 = p__13989;
var k__4408__auto__ = cljs.core.nth.call(null,vec__13990,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__13990,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

wizard_lord.data.enemies.orc.Orc.prototype.wizard_lord$data$enemies$enemy$Enemy$ = cljs.core.PROTOCOL_SENTINEL;

wizard_lord.data.enemies.orc.Orc.prototype.wizard_lord$data$enemies$enemy$Enemy$attack$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Handles an Orc Attack";
});

wizard_lord.data.enemies.orc.Orc.prototype.wizard_lord$data$enemies$enemy$Enemy$move$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Handles an Orc Attack";
});

wizard_lord.data.enemies.orc.Orc.prototype.wizard_lord$data$enemies$enemy$Enemy$use_ability$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Handles an Orc Attack";
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#wizard-lord.data.enemies.orc.Orc{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"health","health",-295520649),self__.health],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack","attack",1957061788),self__.attack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"defense","defense",1755014992),self__.defense],null))], null),self__.__extmap));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13983){
var self__ = this;
var G__13983__$1 = this;
return (new cljs.core.RecordIter((0),G__13983__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"defense","defense",1755014992)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new wizard_lord.data.enemies.orc.Orc(self__.health,self__.attack,self__.defense,self__.__meta,self__.__extmap,self__.__hash));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1474809596 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13985,other13986){
var self__ = this;
var this13985__$1 = this;
return (((!((other13986 == null)))) && ((this13985__$1.constructor === other13986.constructor)) && (cljs.core._EQ_.call(null,this13985__$1.health,other13986.health)) && (cljs.core._EQ_.call(null,this13985__$1.attack,other13986.attack)) && (cljs.core._EQ_.call(null,this13985__$1.defense,other13986.defense)) && (cljs.core._EQ_.call(null,this13985__$1.__extmap,other13986.__extmap)));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defense","defense",1755014992),null,new cljs.core.Keyword(null,"health","health",-295520649),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new wizard_lord.data.enemies.orc.Orc(self__.health,self__.attack,self__.defense,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__13983){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__13993 = cljs.core.keyword_identical_QMARK_;
var expr__13994 = k__4393__auto__;
if(cljs.core.truth_(pred__13993.call(null,new cljs.core.Keyword(null,"health","health",-295520649),expr__13994))){
return (new wizard_lord.data.enemies.orc.Orc(G__13983,self__.attack,self__.defense,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13993.call(null,new cljs.core.Keyword(null,"attack","attack",1957061788),expr__13994))){
return (new wizard_lord.data.enemies.orc.Orc(self__.health,G__13983,self__.defense,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13993.call(null,new cljs.core.Keyword(null,"defense","defense",1755014992),expr__13994))){
return (new wizard_lord.data.enemies.orc.Orc(self__.health,self__.attack,G__13983,self__.__meta,self__.__extmap,null));
} else {
return (new wizard_lord.data.enemies.orc.Orc(self__.health,self__.attack,self__.defense,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__13983),null));
}
}
}
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"health","health",-295520649),self__.health,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attack","attack",1957061788),self__.attack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"defense","defense",1755014992),self__.defense,null))], null),self__.__extmap));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__13983){
var self__ = this;
var this__4384__auto____$1 = this;
return (new wizard_lord.data.enemies.orc.Orc(self__.health,self__.attack,self__.defense,G__13983,self__.__extmap,self__.__hash));
});

wizard_lord.data.enemies.orc.Orc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

wizard_lord.data.enemies.orc.Orc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"health","health",1345010878,null),new cljs.core.Symbol(null,"attack","attack",-697373981,null),new cljs.core.Symbol(null,"defense","defense",-899420777,null)], null);
});

wizard_lord.data.enemies.orc.Orc.cljs$lang$type = true;

wizard_lord.data.enemies.orc.Orc.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"wizard-lord.data.enemies.orc/Orc",null,(1),null));
});

wizard_lord.data.enemies.orc.Orc.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"wizard-lord.data.enemies.orc/Orc");
});

/**
 * Positional factory function for wizard-lord.data.enemies.orc/Orc.
 */
wizard_lord.data.enemies.orc.__GT_Orc = (function wizard_lord$data$enemies$orc$__GT_Orc(health,attack,defense){
return (new wizard_lord.data.enemies.orc.Orc(health,attack,defense,null,null,null));
});

/**
 * Factory function for wizard-lord.data.enemies.orc/Orc, taking a map of keywords to field values.
 */
wizard_lord.data.enemies.orc.map__GT_Orc = (function wizard_lord$data$enemies$orc$map__GT_Orc(G__13987){
var extmap__4424__auto__ = (function (){var G__13996 = cljs.core.dissoc.call(null,G__13987,new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"defense","defense",1755014992));
if(cljs.core.record_QMARK_.call(null,G__13987)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__13996);
} else {
return G__13996;
}
})();
return (new wizard_lord.data.enemies.orc.Orc(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(G__13987),new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(G__13987),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(G__13987),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


//# sourceMappingURL=orc.js.map
