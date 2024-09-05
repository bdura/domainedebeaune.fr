import{e as z,f as p,o as u,g as _,w as o,r as f,n as x,h,u as t,T as R,x as w,G as A,q as I,i as O,b as e,j,k as N,m as P,l as T,H as q,X as M,a as m,p as V,s as F,c as H,v as L,y as E,z as G,d as v,t as S}from"./BpP3tD0y.js";import{_ as b,a as K}from"./BFINVMLY.js";import{_ as X}from"./Az8lU3C0.js";import{_ as J}from"./C4OryG5o.js";import{_ as Q}from"./gkK8gTiH.js";import U from"./DZLij62L.js";import{u as W,q as Y}from"./BRPDcuMK.js";import{C as Z}from"./JoAnvguF.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./j6EgMRxO.js";/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=z("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),et=p({__name:"AspectRatio",props:{ratio:{},asChild:{type:Boolean},as:{}},setup(r){const a=r;return(s,l)=>(u(),_(t(R),x(h(a)),{default:o(()=>[f(s.$slots,"default")]),_:3},16))}}),ot=p({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(r,{emit:a}){const i=w(r,a);return(n,d)=>(u(),_(t(A),x(h(t(i))),{default:o(()=>[f(n.$slots,"default")]),_:3},16))}}),at=p({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(r){const a=r;return(s,l)=>(u(),_(t(I),x(h(a)),{default:o(()=>[f(s.$slots,"default")]),_:3},16))}}),st=p({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(r,{emit:a}){const s=r,l=a,i=O(()=>{const{class:d,...c}=s;return c}),n=w(i,l);return(d,c)=>(u(),_(t(V),null,{default:o(()=>[e(t(j),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),e(t(N),P(t(n),{class:t(T)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s.class)}),{default:o(()=>[f(d.$slots,"default"),e(t(q),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:o(()=>[e(t(M),{class:"w-4 h-4"}),c[0]||(c[0]=m("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),nt={class:"relative"},rt=["src"],ct=["src"],lt=p({__name:"ImageDialog",props:{src:{}},setup(r){const a=r,{src:s}=F(a);return(l,i)=>{const n=et,d=b,c=at,g=st,y=ot;return u(),H("div",nt,[e(n,{ratio:4/3,class:"overflow-hidden rounded-md"},{default:o(()=>[m("img",{src:t(s),alt:"Image",class:"object-cover object-center"},null,8,rt)]),_:1}),e(y,null,{default:o(()=>[e(c,null,{default:o(()=>[e(d,{variant:"outline",class:"absolute right-2 top-2 h-5 w-5 p-0.5 opacity-50 hover:opacity-100 bg-gray-200 rounded"},{default:o(()=>[e(t(tt))]),_:1})]),_:1}),e(g,{class:"max-w-screen-lg p-3"},{default:o(()=>[e(n,{ratio:4/3,class:"overflow-hidden rounded-md"},{default:o(()=>[m("img",{src:t(s),alt:"Image",class:"object-cover"},null,8,ct)]),_:1})]),_:1})]),_:1})])}}}),it={class:"flex justify-between"},wt=p({__name:"[slug]",async setup(r){let a,s;const i=L().params.slug,{data:n}=([a,s]=E(()=>W("page-data",()=>Y(`/articles/${i}`).findOne())),a=await a,s(),a);return(d,c)=>{const g=lt,y=X,C=b,$=J,B=Q,k=K,D=U;return t(n)?(u(),_(D,{key:0,value:t(n)},{default:o(()=>[e(k,{size:"3xl"},{default:o(()=>[e(g,{src:t(n).image},null,8,["src"]),m("div",it,[e(y,null,{default:o(()=>[v(S(t(n).title),1)]),_:1}),e($,{to:"/"},{default:o(()=>[e(C,{variant:"outline",size:"sm"},{default:o(()=>[e(t(Z),{class:"-ml-2"}),c[0]||(c[0]=v(" Retour "))]),_:1})]),_:1})]),e(B,{value:t(n)},null,8,["value"])]),_:1})]),_:1},8,["value"])):G("",!0)}}});export{wt as default};