import{F as b}from"./FavoriteToggler.6974c804.js";import{O as C}from"./OptionalToggler.e01d627f.js";import{_ as N,j as w,k as x,l as u,s as m,r as p,o as i,c as F,g as c,b as d,w as k,T as O,a as v,h as B,F as T,t as _,n as M,u as U}from"./index.d5bcc7a0.js";const D={class:"filter-group"},H={setup(R){const o=w();x(()=>{o.togglers.find(e=>e.name==="headers_1").value!=="unset"&&(a.value=o.togglers.find(e=>e.name==="headers_1").value),o.togglers.find(e=>e.name==="headers_4").value!=="unset"&&(s.value=o.togglers.find(e=>e.name==="headers_4").value)});const n=[{value:1,label:"Cycle Name 1",year:"2023"},{value:2,label:"Cycle Name 2",year:"2022"},{value:3,label:"Cycle Name 3",favorite:!0,year:"2022"},{value:4,label:"Cycle Name 4",favorite:!0,year:"2022"}],a=u([n.length]),r=u([{value:"optional_1",label:"Name 1"},{value:"optional_2",label:"Name 2"},{value:"optional_3",label:"Name 3"}]),s=u([""]),g=e=>a.value=[],f=()=>{a.value.length<1&&(a.value=[n.length])};m(()=>a.value,e=>{e.length!==void 0&&o.save(a.value,"headers_1")}),m(()=>s.value,e=>{e.length!==void 0&&o.save(s.value,"headers_4")});let V=e=>{let t=new Date;return Number(e)===t.getFullYear()};return(e,t)=>{const h=p("Multiselect"),y=p("RouterView");return i(),F(T,null,[(i(),c(O,{to:"#multiselector"},[d(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),"close-on-select":!0,options:n,mode:"tags",max:1,onOpen:g,onClose:f,canClear:!1,searchable:!0},{option:k(({option:l})=>[v("span",null,_(l.label),1),v("span",{class:M(["tag",{current:U(V)(l.year)}])},_(l.year),3)]),_:1},8,["modelValue"])])),v("div",D,[d(b,{options:n,modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l)},null,8,["modelValue"]),r.value&&r.value.length>0?(i(),c(C,{key:0,options:r.value,modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value=l)},null,8,["options","modelValue"])):B("",!0)]),d(y)],64)}}};var z=N(H,[["__scopeId","data-v-4c4b3d4c"]]);export{z as default};
