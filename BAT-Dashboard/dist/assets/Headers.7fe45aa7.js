import{F as g}from"./FavoriteToggler.013d8b43.js";import{O as y}from"./OptionalToggler.3d08dc1a.js";import{_ as V,j as N,k as h,l as u,s as m,r as b,o as i,c as C,g as _,b as d,D as w,w as c,T as x,a as v,h as F,F as k,t as p,d as T}from"./index.4cc97ec1.js";const B={class:"tag"},D={class:"filter-group"},H={setup(O){const o=N();h(()=>{o.togglers.find(a=>a.name==="headers_1").value!=="unset"&&(l.value=o.togglers.find(a=>a.name==="headers_1").value),o.togglers.find(a=>a.name==="headers_4").value!=="unset"&&(s.value=o.togglers.find(a=>a.name==="headers_4").value)});const n=[{value:1,label:"Cycle Name 1",year:"2023"},{value:2,label:"Cycle Name 2",year:"2022"},{value:3,label:"Cycle Name 3",favorite:!0,year:"2022"},{value:4,label:"Cycle Name 4",favorite:!0,year:"2022"}],l=u([]),r=u([{value:"optional_1",label:"Name 1"},{value:"optional_2",label:"Name 2"},{value:"optional_3",label:"Name 3"}]),s=u([0]);return m(()=>l.value,a=>{a.length!==void 0&&o.save(l.value,"headers_1")}),m(()=>s.value,a=>{a.length!==void 0&&o.save(s.value,"headers_4")}),(a,t)=>{const f=b("RouterView");return i(),C(k,null,[(i(),_(x,{to:"#Headers"},[d(w,{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=[e.value]),value:n.filter(e=>e.value===l.value[0])[0],isWhite:"",isFill:"",options:n,placeholder:"Cycle Name"},{option:c(({option:e})=>[v("span",null,p(e.label),1),v("span",B,p(e.year),1)]),value:c(({value:e})=>[T(p((e==null?void 0:e.label)||"Cycle Name"),1)]),_:1},8,["value"])])),v("div",D,[d(g,{options:n,modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e)},null,8,["modelValue"]),r.value&&r.value.length>0?(i(),_(y,{key:0,options:r.value,modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e)},null,8,["options","modelValue"])):F("",!0)]),d(f)],64)}}};var j=V(H,[["__scopeId","data-v-1084dd2a"]]);export{j as default};