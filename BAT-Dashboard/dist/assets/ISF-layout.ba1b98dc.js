import{F as g}from"./FavoriteToggler.8ece90c0.js";import{O as y}from"./OptionalToggler.bd808599.js";import{_ as V,j as N,k as b,l as r,m as d,r as C,o as i,c as F,g as f,b as m,D as h,w as c,T as w,a as p,h as k,F as x,t as v,d as T}from"./index.d3815172.js";/* empty css                                                               *//* empty css                                                                    *//* empty css                                                                    */const B={class:"tag"},D={class:"filter-group"},O={setup(S){const o=N();b(()=>{o.togglers.find(a=>a.name==="isf_1").value!=="unset"&&(l.value=[o.togglers.find(a=>a.name==="isf_1").value]),o.togglers.find(a=>a.name==="isf_11").value!=="unset"&&(s.value=o.togglers.find(a=>a.name==="isf_11").value)});const n=[{value:1,label:"Cycle Name 1",year:"2023"},{value:2,label:"Cycle Name 2",year:"2023"},{value:3,label:"Cycle Name 3",favorite:!0,year:"2023"},{value:4,label:"Cycle Name 3",favorite:!0,year:"2022"}],u=r([{value:"optional_1",label:"Name 1"},{value:"optional_2",label:"Name 2"},{value:"optional_3",label:"Name 3"}]),s=r([""]),l=r([n.length-1]);return d(()=>l.value,a=>{a.length!==void 0&&o.save(l.value[0],"isf_1")}),d(()=>s.value,a=>{a.length!==void 0&&o.save(s.value,"isf_11")}),(a,t)=>{const _=C("router-view");return i(),F(x,null,[(i(),f(w,{to:"#Equipment"},[m(h,{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=[e.value]),value:n.filter(e=>e.value===l.value[0])[0],isWhite:"",isFill:"",options:n,placeholder:"Cycle Name",isDefaultValue:""},{option:c(({option:e})=>[p("span",null,v(e.label),1),p("span",B,v(e.year),1)]),value:c(({value:e})=>[T(v((e==null?void 0:e.label)||"Cycle Name"),1)]),_:1},8,["value"])])),p("div",D,[m(g,{options:n,modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e)},null,8,["modelValue"]),u.value&&u.value.length>0?(i(),f(y,{key:0,options:u.value,modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e)},null,8,["options","modelValue"])):k("",!0)]),m(_)],64)}}};var M=V(O,[["__scopeId","data-v-98b19b84"]]);export{M as default};
