import{F as v}from"./FavoriteToggler.4a53e7b0.js";import{u as p,f,r as g,g as V,a as u,o as r,c as h,h as _,d as s,T as C,F as b}from"./index.c78763f1.js";const k={setup(F){const t=p();f(()=>{t.togglers.find(l=>l.name==="headers_1").value!=="unset"&&(e.value=t.togglers.find(l=>l.name==="headers_1").value)});const a=[{value:1,label:"Cycle Name 1"},{value:2,label:"Cycle Name 2"},{value:3,label:"Cycle Name 3",favorite:!0},{value:4,label:"Cycle Name 4 (last)",favorite:!0}],e=g([a.length]),m=l=>e.value=[],c=()=>{e.value.length<1&&(e.value=[a.length])};return V(()=>e.value,l=>{l.length!==void 0&&t.save(e.value,"headers_1")}),(l,o)=>{const d=u("Multiselect"),i=u("RouterView");return r(),h(b,null,[(r(),_(C,{to:"#multiselector"},[s(d,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),"close-on-select":!0,options:a,mode:"tags",max:1,onOpen:m,onClose:c,canClear:!1,searchable:!0},null,8,["modelValue"])])),s(v,{options:a,modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=n=>e.value=n)},null,8,["modelValue"]),s(i)],64)}}};export{k as default};
