import{_ as c,i as n,a as m,o as a,c as _,e,F as u,b as d,k as j,h as b,w as v,E as h,G as f,H as k,I as y,J as P,K as x,L as C,M as B,N as E,O as I,P as R,Q as V,R as w,S as L,t as N}from"./index.c78763f1.js";const O={class:"panel"},S={class:"project-list"},q={class:"project-item-img"},A=["src"],D={class:"project-item-name"},F={props:{modelValue:{type:Array,required:!0},options:{type:Array,required:!0}},emits:["update:modelValue"],setup(o,{emit:r}){const l=o,i=n(()=>l.options.filter(({value:s})=>s!==0));function g(s){return new URL({"./../../../assets/images/1.jpg":h,"./../../../assets/images/2.jpg":f,"./../../../assets/images/3.jpg":k,"./../../../assets/images/4.jpg":y,"./../../../assets/images/headers-1.jpg":P,"./../../../assets/images/MINI.jpg":x,"./../../../assets/images/PRO.jpg":C,"./../../../assets/images/project-1.jpg":B,"./../../../assets/images/project-2.jpg":E,"./../../../assets/images/project-3.jpg":I,"./../../../assets/images/project-4.jpg":R,"./../../../assets/images/project-5.jpg":V,"./../../../assets/images/project-6.jpg":w,"./../../../assets/images/SUPER.jpg":L}[`./../../../assets/images/${s}.jpg`],self.location).href}return(s,M)=>{const p=m("router-link");return a(),_("div",O,[e("div",S,[(a(!0),_(u,null,d(j(i),t=>(a(),b(p,{class:"project-item",to:"/panel/Projects/Delivery-Execution",onClick:U=>r("update:modelValue",[t.value])},{default:v(()=>[e("div",q,[e("img",{src:g(t.photo)},null,8,A)]),e("div",D,N(t.label),1)]),_:2},1032,["onClick"]))),256))])])}}};var G=c(F,[["__scopeId","data-v-7a54d170"]]);export{G as default};
