import{F as V}from"./FavoriteToggler.6974c804.js";import{j as x,k as C,l as b,s as w,r as n,o as u,c as N,g as m,b as r,T as c,w as h,F,a as i,t as p,n as E,u as k}from"./index.d5bcc7a0.js";const T={setup(B){const s=x();C(()=>{s.togglers.find(a=>a.name==="semiperm_1").value!=="unset"&&(e.value=s.togglers.find(a=>a.name==="semiperm_1").value)});const o=[{value:1,label:"Cycle Name 1",year:"2023"},{value:2,label:"Cycle Name 2",year:"2023"},{value:3,label:"Cycle Name 3",favorite:!0,year:"2022"},{value:4,label:"Cycle Name 3",favorite:!0,year:"2022"}],e=b([o.length]),v=a=>e.value=[],d=()=>{e.value.length<1&&(e.value=[o.length])};w(()=>e.value,a=>{a.length!==void 0&&s.save(e.value,"semiperm_1")});let f=a=>{let t=new Date;return Number(a)===t.getFullYear()};return(a,t)=>{const g=n("ExportExcel"),_=n("Multiselect"),y=n("RouterView");return u(),N(F,null,[(u(),m(c,{to:"#export-excel"},[r(g,{disabled:""})])),(u(),m(c,{to:"#Semi-permanentMaterials"},[r(_,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),"close-on-select":!0,options:o,mode:"tags",max:1,onOpen:v,onClose:d,canClear:!1,searchable:!0},{option:h(({option:l})=>[i("span",null,p(l.label),1),i("span",{class:E(["tag",{current:k(f)(l.year)}])},p(l.year),3)]),_:1},8,["modelValue"])])),r(V,{options:o,modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l)},null,8,["modelValue"]),r(y)],64)}}};export{T as default};
