import{F as v}from"./FavoriveToggler.72bdea93.js";import{r as i,a as n,o as s,c as d,f,d as a,T as V,F as g}from"./index.595621bb.js";const F={setup(_){const l=[{value:1,label:"Item 1"},{value:2,label:"Item 2"},{value:3,label:"Item 3",favorite:!0},{value:4,label:"Item 3 last",favorite:!0}],e=i([l.length]),u=m=>e.value=[],r=()=>{e.value.length<1&&(e.value=[l.length])};return(m,o)=>{const c=n("Multiselect"),p=n("RouterView");return s(),d(g,null,[(s(),f(V,{to:"#multiselector"},[a(c,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value=t),"close-on-select":!0,options:l,mode:"tags",max:1,onOpen:u,onClose:r,canClear:!1,searchable:!0},null,8,["modelValue"])])),a(v,{options:l,modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=t=>e.value=t)},null,8,["modelValue"]),a(p)],64)}}};export{F as default};
