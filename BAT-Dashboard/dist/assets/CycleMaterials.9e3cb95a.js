import{F as T}from"./FavoriteToggler.9b7e1849.js";import{O as w}from"./OptionalToggler.ef575890.js";import{F as R}from"./FilterTogglerMulti.3285126e.js";import{_ as k,j as L,k as M,l as n,m as U,q as g,s as p,r as f,o as d,c as B,a as c,t as u,u as i,g as _,b as r,T as b,D as C,w as m,h as D,F as K,d as A}from"./index.d7756a36.js";/* empty css                                                                       */const S={class:"tag"},I={class:"tag"},W={class:"filter-group"},j={setup(q){const t=L();M(()=>{s.value=[""],t.togglers.find(e=>e.name==="cycle_1").value!=="unset"&&(l.cycleValue=[t.togglers.find(e=>e.name==="cycle_1").value]),t.togglers.find(e=>e.name==="cycle_2").value!=="unset"&&(l.activityValue=t.togglers.find(e=>e.name==="cycle_2").value),t.togglers.find(e=>e.name==="cycle_3").value!=="unset"&&(v.value=t.togglers.find(e=>e.name==="cycle_3").value),t.togglers.find(e=>e.name==="cycle_5").value!=="unset"&&(s.value=t.togglers.find(e=>e.name==="cycle_5").value)});const N=n(["Indep/Local","RKA"]),v=n(["Indep/Local","RKA"]),y=n([{value:3,label:"Cycle Name 4",activities:[5],favorite:!0,year:"2023"},{value:2,label:"Cycle Name 3",activities:[2,3,4],year:"2023"},{value:1,label:"Cycle Name 2",activities:[1,2,4],favorite:!0,year:"2022"},{value:0,label:"Cycle Name 1",activities:[1,3,4],favorite:!0,year:"2022"}]),V=n([{value:"optional_1",label:"Name 1"},{value:"optional_2",label:"Name 2"},{value:"optional_3",label:"Name 3"}]),s=n([""]),x=n([{value:0,label:"ALL SELECTED"},{value:1,label:"Activity 1"},{value:2,label:"Activity 2"},{value:3,label:"Activity 3"},{value:4,label:"Activity 4"},{value:5,label:"Activity 5"}]),l=U({cycleValue:"",activityValue:[]}),F=g(()=>y.value.filter(e=>l.cycleValue===e.value)),h=g(()=>x.value.filter(({value:e})=>e===0||l.cycleValue===""?!0:F.value.some(({activities:o})=>o.includes(e))));return p(()=>l.cycleValue,e=>{e.length<1&&(l.cycleValue=[y.value.length-1]),t.save(l.cycleValue,"cycle_1")}),p(()=>l.activityValue,e=>{e.length<1&&(l.activityValue=[]),t.save(l.activityValue,"cycle_2")}),p(()=>v.value,e=>{e.length!==void 0&&t.save(v.value,"cycle_3")}),p(()=>s.value,e=>{e.length!==void 0&&t.save(s.value,"cycle_5")}),(e,o)=>{const E=f("ExportExcel"),O=f("RouterView");return d(),B(K,null,[c("div",null,u(i(l).SalesChannelFilter_Value),1),(d(),_(b,{to:"#export-excel"},[r(E,{disabled:""})])),(d(),_(b,{to:"#CycleMaterials"},[r(C,{modelValue:i(l).cycleValue,"onUpdate:modelValue":o[0]||(o[0]=a=>i(l).cycleValue=a),value:i(l).cycleValue,isWhite:"",isFill:"",options:y.value,placeholder:"Cycle Name"},{option:m(({option:a})=>[c("span",null,u(a.label),1),c("span",S,u(a.year),1)]),value:m(({value:a})=>[A(u(a.label||"Cycle Name"),1)]),_:1},8,["modelValue","value","options"]),r(C,{modelValue:i(l).activityValue,"onUpdate:modelValue":o[1]||(o[1]=a=>i(l).activityValue=a),value:i(l).activityValue,isWhite:"",isFill:"",isTags:"",options:i(h),placeholder:"Activity"},{option:m(({option:a})=>[c("span",null,u(a.label),1),c("span",I,u(a.year),1)]),value:m(({value:a})=>[A(u(a.label||"Activity"),1)]),_:1},8,["modelValue","value","options"])])),c("div",W,[r(T,{options:y.value,modelValue:i(l).cycleValue,"onUpdate:modelValue":o[2]||(o[2]=a=>i(l).cycleValue=a)},null,8,["options","modelValue"]),r(R,{options:N.value,modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=a=>v.value=a)},null,8,["options","modelValue"]),V.value&&V.value.length>0?(d(),_(w,{key:0,options:V.value,modelValue:s.value,"onUpdate:modelValue":o[4]||(o[4]=a=>s.value=a)},null,8,["options","modelValue"])):D("",!0)]),r(O)],64)}}};var Q=k(j,[["__scopeId","data-v-ba9a3026"]]);export{Q as default};
