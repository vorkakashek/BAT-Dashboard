import{F}from"./FilterTogglerMulti.bc855428.js";import{j as P,k as R,A as y,l as r,q as p,m as I,r as u,o as _,c as k,b as c,u as a,w as K,a as s,F as x,f as V,g as C}from"./index.f9852411.js";/* empty css                                                                       */const D={class:"panel"},M=s("h2",null,"Touchpoints",-1),N={class:"comparison-wrap"},U={class:"comparison-aside"},j=["src"],H={class:"comparison-content"},O={class:"comparison-items"},J={setup(W){const d=P();R(()=>{d.togglers.find(e=>e.name==="semiperm_3").value!=="unset"&&(o.value=d.togglers.find(e=>e.name==="semiperm_3").value)});const n=y({visible:!1,index:0,imgs:""}),l=r([{name:"Executed",value:222},{name:"Stock",value:777}]),i=r([{label:"MBU",type_rka:"Local",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"NW",type_rka:"RKA",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"MBU",type_rka:"RKA",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"NW",type_rka:"Indep",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]}]),w=r(["Indep/Local","RKA"]),o=r(["Indep/Local","RKA"]),g=p(()=>new URL("/BAT-Dashboard-new/assets/2.d779d4d3.jpg",self.location).href),f=p(()=>l.value.find(({name:e})=>e==="Target")===void 0?[...l.value,h("Potential",b(l.value))]:l.value),L=p(()=>(i.value.find(({stats:e})=>e.find(({name:t})=>t==="Target"))===void 0&&i.value.forEach(e=>e.stats=[...e.stats,h("Potential",b(e.stats))]),i.value)),b=e=>{let t=0;return e.forEach(m=>{t+=m.value}),t},h=(e,t)=>({name:e,value:t});function A(){n.imgs=g.value,n.visible=!0}function E(){n.visible=!1}return I(()=>o.value,e=>{e.length!==void 0&&d.save(o.value,"semiperm_3")}),(e,t)=>{const m=u("vue-easy-lightbox"),S=u("ProgressbarLegend"),T=u("TotalProgressbar"),B=u("ComparisonItem");return _(),k(x,null,[c(m,{visible:a(n).visible,imgs:a(n).imgs,index:a(n).index,onHide:E},null,8,["visible","imgs","index"]),c(T,{data:a(f)},{legend:K(()=>[c(S,{data:a(f)},null,8,["data"])]),_:1},8,["data"]),s("div",D,[M,s("div",N,[s("div",U,[s("img",{class:"zoom",src:a(g),onClick:t[0]||(t[0]=()=>A())},null,8,j)]),s("div",H,[c(F,{options:w.value,modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=v=>o.value=v)},null,8,["options","modelValue"]),s("div",O,[(_(!0),k(x,null,V(a(L),v=>(_(),C(B,{comparisonData:v},null,8,["comparisonData"]))),256))])])])])],64)}}};export{J as default};
