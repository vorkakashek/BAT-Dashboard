import{F}from"./FilterTogglerMulti.6d736fc8.js";import{j as b,k as w,l as o,q as f,s as C,r,o as m,c as g,b as l,u as i,w as k,a as T,F as P,f as V,g as O}from"./index.d5bcc7a0.js";/* empty css                                                                       */const R={class:"panel"},K={setup(A){const u=b();w(()=>{u.togglers.find(e=>e.name==="semiperm_2").value!=="unset"&&(t.value=u.togglers.find(e=>e.name==="semiperm_2").value)});const s=o([{name:"GLO_Shelf Stopper",photo:"4",type_rka:"Indep",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{name:"GLO_Device Premium Presenter 2 sku",photo:"3",type_rka:"Local",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{name:"GLO_Device Premium Presenter 2 sku sad asd asd asd asdasdasdasd asd",photo:"3",type_rka:"Rka",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]}]),n=o([{name:"Executed",value:222},{name:"Stock",value:777}]),L=o(["Indep/Local","RKA"]),t=o(["Indep/Local","RKA"]),p=f(()=>n.value.find(({name:e})=>e==="Target")===void 0?[...n.value,_("Potential",v(n.value))]:n.value),h=f(()=>(s.value.find(({stats:e})=>e.find(({name:a})=>a==="Target"))===void 0&&s.value.forEach(e=>e.stats=[...e.stats,_("Potential",v(e.stats))]),s.value)),v=e=>{let a=0;return e.forEach(d=>{a+=d.value}),a},_=(e,a)=>({name:e,value:a});return C(()=>t.value,e=>{e.length!==void 0&&u.save(t.value,"semiperm_2")}),(e,a)=>{const d=r("ProgressbarLegend"),S=r("TotalProgressbar"),x=r("ProductCard"),E=r("ProductCards");return m(),g(P,null,[l(S,{data:i(p)},{legend:k(()=>[l(d,{data:i(p)},null,8,["data"])]),_:1},8,["data"]),T("div",R,[l(F,{options:L.value,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,8,["options","modelValue"]),l(E,null,{items:k(()=>[(m(!0),g(P,null,V(i(h),c=>(m(),O(x,{product:c},null,8,["product"]))),256))]),_:1})])],64)}}};export{K as default};
