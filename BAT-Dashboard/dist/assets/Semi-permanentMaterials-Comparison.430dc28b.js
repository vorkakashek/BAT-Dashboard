import{F}from"./FilterTogglerMulti.508a5ac2.js";import{u as P,f as y,p as V,r,i as p,g as A,a as u,o as _,c as x,d as c,k as a,w as C,e as s,F as k,b as I,h as R}from"./index.c78763f1.js";const K={class:"panel"},M=s("h2",null,"Touchpoints",-1),N={class:"comparison-wrap"},U={class:"comparison-aside"},j=["src"],H={class:"comparison-content"},O={class:"comparison-items"},G={setup(W){const d=P();y(()=>{d.togglers.find(e=>e.name==="semiperm_3").value!=="unset"&&(o.value=d.togglers.find(e=>e.name==="semiperm_3").value)});const n=V({visible:!1,index:0,imgs:""}),l=r([{name:"Executed",value:222},{name:"Stock",value:777}]),i=r([{label:"MBU",type_rla:"",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"NW",type_rla:"",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"MBU",type_rla:"",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"NW",type_rla:"",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]}]),w=r(["Indep/Local","RKA"]),o=r(["Indep/Local","RKA"]),g=p(()=>new URL("/BAT-Dashboard/assets/2.d779d4d3.jpg",self.location).href),f=p(()=>l.value.find(({name:e})=>e==="Target")===void 0?[...l.value,b("Potential",h(l.value))]:l.value),E=p(()=>(i.value.find(({stats:e})=>e.find(({name:t})=>t==="Target"))===void 0&&i.value.forEach(e=>e.stats=[...e.stats,b("Potential",h(e.stats))]),i.value)),h=e=>{let t=0;return e.forEach(m=>{t+=m.value}),t},b=(e,t)=>({name:e,value:t});function L(){n.imgs=g.value,n.visible=!0}function S(){n.visible=!1}return A(()=>o.value,e=>{e.length!==void 0&&d.save(o.value,"semiperm_3")}),(e,t)=>{const m=u("vue-easy-lightbox"),T=u("ProgressbarLegend"),B=u("TotalProgressbar"),D=u("ComparisonItem");return _(),x(k,null,[c(m,{visible:a(n).visible,imgs:a(n).imgs,index:a(n).index,onHide:S},null,8,["visible","imgs","index"]),c(B,{data:a(f)},{legend:C(()=>[c(T,{inData:a(f)},null,8,["inData"])]),_:1},8,["data"]),s("div",K,[M,s("div",N,[s("div",U,[s("img",{class:"zoom",src:a(g),onClick:t[0]||(t[0]=()=>L())},null,8,j)]),s("div",H,[c(F,{options:w.value,modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=v=>o.value=v)},null,8,["options","modelValue"]),s("div",O,[(_(!0),x(k,null,I(a(E),v=>(_(),R(D,{comparisonData:v},null,8,["comparisonData"]))),256))])])])])],64)}}};export{G as default};
