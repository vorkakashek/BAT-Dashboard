import{F}from"./FilterTogglerMulti.5f072560.js";import{u as b,f as w,r as o,j as f,g as C,a as r,o as m,c as g,d as l,i,w as P,e as T,F as k,b as V,h as O}from"./index.ecd5d3eb.js";/* empty css                                                                       */const R={class:"panel"},K={setup(A){const u=b();w(()=>{u.togglers.find(e=>e.name==="semiperm_2").value!=="unset"&&(t.value=u.togglers.find(e=>e.name==="semiperm_2").value)});const n=o([{name:"GLO_Shelf Stopper",photo:"4",type_rka:"Indep",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{name:"GLO_Device Premium Presenter 2 sku",photo:"3",type_rka:"Local",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{name:"GLO_Device Premium Presenter 2 sku sad asd asd asd asdasdasdasd asd",photo:"3",type_rka:"Rka",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]}]),s=o([{name:"Executed",value:222},{name:"Stock",value:777}]),h=o(["Indep/Local","RKA"]),t=o(["Indep/Local","RKA"]),p=f(()=>s.value.find(({name:e})=>e==="Target")===void 0?[...s.value,_("Potential",v(s.value))]:s.value),L=f(()=>(n.value.find(({stats:e})=>e.find(({name:a})=>a==="Target"))===void 0&&n.value.forEach(e=>e.stats=[...e.stats,_("Potential",v(e.stats))]),n.value)),v=e=>{let a=0;return e.forEach(d=>{a+=d.value}),a},_=(e,a)=>({name:e,value:a});return C(()=>t.value,e=>{e.length!==void 0&&u.save(t.value,"semiperm_2")}),(e,a)=>{const d=r("ProgressbarLegend"),S=r("TotalProgressbar"),x=r("ProductCard"),E=r("ProductCards");return m(),g(k,null,[l(S,{data:i(p)},{legend:P(()=>[l(d,{data:i(p)},null,8,["data"])]),_:1},8,["data"]),T("div",R,[l(F,{options:h.value,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,8,["options","modelValue"]),l(E,null,{items:P(()=>[(m(!0),g(k,null,V(i(L),c=>(m(),O(x,{product:c},null,8,["product"]))),256))]),_:1})])],64)}}};export{K as default};
