import{f as z,g as d,o as u,h as _,w as o,r as f,n as h,i as x,u as t,m as R,j as w,k as A,V,l as I,b as e,q as O,s as j,v as N,x as P,y as M,X as q,z as F,a as m,A as L,c as T,B as E,C as S,D as H,d as v,t as K}from"./entry.CJL3LHO-.js";import{_ as C,a as X}from"./Container.vue.DGR_DxcD.js";import{_ as G}from"./Heading1.epQVQEb8.js";import{_ as J}from"./nuxt-link.RHeywEqH.js";import{_ as Q}from"./ContentRendererMarkdown.vue.dOoOYXzT.js";import U from"./ContentRenderer.BV21HJZy.js";import{u as W,q as Y}from"./query.CQlj6OuC.js";import{C as Z}from"./chevron-left.DNHdxSQZ.js";import"./index.BsYmvPZw.js";import"./preview.Di_EnW8E.js";/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=z("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),et=d({__name:"AspectRatio",props:{ratio:{},asChild:{type:Boolean},as:{}},setup(c){const a=c;return(s,r)=>(u(),_(t(R),h(x(a)),{default:o(()=>[f(s.$slots,"default")]),_:3},16))}}),ot=d({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(c,{emit:a}){const l=w(c,a);return(n,i)=>(u(),_(t(A),h(x(t(l))),{default:o(()=>[f(n.$slots,"default")]),_:3},16))}}),at=d({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(c){const a=c;return(s,r)=>(u(),_(t(V),h(x(a)),{default:o(()=>[f(s.$slots,"default")]),_:3},16))}}),st=m("span",{class:"sr-only"},"Close",-1),nt=d({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(c,{emit:a}){const s=c,r=a,l=I(()=>{const{class:i,...p}=s;return p}),n=w(l,r);return(i,p)=>(u(),_(t(F),null,{default:o(()=>[e(t(O),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),e(t(j),N(t(n),{class:t(P)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s.class)}),{default:o(()=>[f(i.$slots,"default"),e(t(M),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:o(()=>[e(t(q),{class:"w-4 h-4"}),st]),_:1})]),_:3},16,["class"])]),_:3}))}}),ct={class:"relative"},rt=["src"],lt=["src"],it=d({__name:"ImageDialog",props:{src:{}},setup(c){const a=c,{src:s}=L(a);return(r,l)=>{const n=et,i=C,p=at,g=nt,y=ot;return u(),T("div",ct,[e(n,{ratio:4/3,class:"overflow-hidden rounded-md"},{default:o(()=>[m("img",{src:t(s),alt:"Image",class:"object-cover object-center"},null,8,rt)]),_:1}),e(y,null,{default:o(()=>[e(p,null,{default:o(()=>[e(i,{variant:"outline",class:"absolute right-2 top-2 h-5 w-5 p-0.5 opacity-50 hover:opacity-100 bg-gray-200 rounded"},{default:o(()=>[e(t(tt))]),_:1})]),_:1}),e(g,{class:"max-w-screen-lg p-3"},{default:o(()=>[e(n,{ratio:4/3,class:"overflow-hidden rounded-md"},{default:o(()=>[m("img",{src:t(s),alt:"Image",class:"object-cover"},null,8,lt)]),_:1})]),_:1})]),_:1})])}}}),dt={class:"flex justify-between"},wt=d({__name:"[slug]",async setup(c){let a,s;const l=E().params.slug,{data:n}=([a,s]=S(()=>W("page-data",()=>Y(`/articles/${l}`).findOne())),a=await a,s(),a);return(i,p)=>{const g=it,y=G,b=C,B=J,$=Q,k=X,D=U;return t(n)?(u(),_(D,{key:0,value:t(n)},{default:o(()=>[e(k,{size:"3xl"},{default:o(()=>[e(g,{src:t(n).image},null,8,["src"]),m("div",dt,[e(y,null,{default:o(()=>[v(K(t(n).title),1)]),_:1}),e(B,{to:"/"},{default:o(()=>[e(b,{variant:"outline",size:"sm"},{default:o(()=>[e(t(Z),{class:"-ml-2"}),v(" Retour ")]),_:1})]),_:1})]),e($,{value:t(n)},null,8,["value"])]),_:1})]),_:1},8,["value"])):H("",!0)}}});export{wt as default};
