import{_ as c,j as n,a as m,o as a,c as _,e,F as u,b as j,i as d,h as b,w as v,H as h,I as f,J as y,K as P,L as k,M as x,N as C,O as q,P as B,Q as I,R,S as V,U as w,X as E,Y as L,Z as N,t as O}from"./index.ecd5d3eb.js";const S={class:"panel"},U={class:"project-list"},A={class:"project-item-img"},D=["src"],F={class:"project-item-name"},M={props:{modelValue:{type:Array,required:!0},options:{type:Array,required:!0}},emits:["update:modelValue"],setup(o,{emit:r}){const i=o,g=n(()=>i.options.filter(({value:s})=>s!==0));function l(s){return new URL({"./../../../assets/images/1.jpg":h,"./../../../assets/images/2.jpg":f,"./../../../assets/images/3.jpg":y,"./../../../assets/images/4.jpg":P,"./../../../assets/images/MINI.jpg":k,"./../../../assets/images/PRO.jpg":x,"./../../../assets/images/SUPER.jpg":C,"./../../../assets/images/equipment-1.jpg":q,"./../../../assets/images/equipment-2.jpg":B,"./../../../assets/images/headers-1.jpg":I,"./../../../assets/images/project-1.jpg":R,"./../../../assets/images/project-2.jpg":V,"./../../../assets/images/project-3.jpg":w,"./../../../assets/images/project-4.jpg":E,"./../../../assets/images/project-5.jpg":L,"./../../../assets/images/project-6.jpg":N}[`./../../../assets/images/${s}.jpg`],self.location).href}return(s,$)=>{const p=m("router-link");return a(),_("div",S,[e("div",U,[(a(!0),_(u,null,j(d(g),t=>(a(),b(p,{class:"project-item",to:"/panel/Projects/Delivery-Execution",onClick:H=>r("update:modelValue",[t.value])},{default:v(()=>[e("div",A,[e("img",{src:l(t.photo)},null,8,D)]),e("div",F,O(t.label),1)]),_:2},1032,["onClick"]))),256))])])}}};var K=c(M,[["__scopeId","data-v-60c4dbf2"]]);export{K as default};
