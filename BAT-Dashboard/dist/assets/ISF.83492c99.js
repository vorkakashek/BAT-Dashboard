import{F as g}from"./FavoriteToggler.f8928388.js";import{u as y,f as V,r as C,g as _,a as r,o as u,c as b,h,d as n,w,T as N,F,e as c,t as i,n as x,i as B}from"./index.dea29483.js";const D={setup(k){const s=y();V(()=>{s.togglers.find(a=>a.name==="isf_1").value!=="unset"&&(e.value=[s.togglers.find(a=>a.name==="isf_1").value])});const o=[{value:1,label:"Cycle Name 1",year:"2023"},{value:2,label:"Cycle Name 2",year:"2023"},{value:3,label:"Cycle Name 3",favorite:!0,year:"2023"},{value:4,label:"Cycle Name 3",favorite:!0,year:"2022"}],e=C([o.length]),m=a=>e.value=[],v=()=>{e.value.length<1&&(e.value=[o.length])};_(()=>e.value,a=>{a.length!==void 0&&s.save(e.value[0],"isf_1")});let d=a=>{let t=new Date;return Number(a)===t.getFullYear()};return(a,t)=>{const f=r("Multiselect"),p=r("RouterView");return u(),b(F,null,[(u(),h(N,{to:"#multiselector"},[n(f,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),"close-on-select":!0,options:o,mode:"tags",max:1,onOpen:m,onClose:v,canClear:!1,searchable:!0},{option:w(({option:l})=>[c("span",null,i(l.label),1),c("span",{class:x(["tag",{current:B(d)(l.year)}])},i(l.year),3)]),_:1},8,["modelValue"])])),n(g,{options:o,modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l)},null,8,["modelValue"]),n(p)],64)}}};export{D as default};
