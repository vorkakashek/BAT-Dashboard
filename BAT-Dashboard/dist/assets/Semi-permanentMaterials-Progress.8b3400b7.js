import{r as m,j as v,a as o,o as r,c as _,d as p,i as l,w as x,e as c,F as f,b as E,h as P}from"./index.02a19384.js";const T={class:"panel"},w=c("h2",null,"Total",-1),B={class:"comparison-items"},D={setup(L){const t=m([{name:"Executed",value:222},{name:"Stock",value:777}]),n=m([{label:"MBU",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"NW",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]}]),u=v(()=>t.value.find(({name:e})=>e==="Target")===void 0?[...t.value,i("Potential",d(t.value))]:t.value),g=v(()=>(n.value.find(({stats:e})=>e.find(({name:a})=>a==="Target"))===void 0&&n.value.forEach(e=>e.stats=[...e.stats,i("Potential",d(e.stats))]),n.value)),d=e=>{let a=0;return e.forEach(s=>{a+=s.value}),a},i=(e,a)=>({name:e,value:a});return(e,a)=>{const s=o("ProgressbarLegend"),h=o("TotalProgressbar"),b=o("ComparisonItem");return r(),_(f,null,[p(h,{data:l(u)},{legend:x(()=>[p(s,{data:l(u)},null,8,["data"])]),_:1},8,["data"]),c("div",T,[w,c("div",B,[(r(!0),_(f,null,E(l(g),k=>(r(),P(b,{comparisonData:k,vertical:!0},null,8,["comparisonData"]))),256))])])],64)}}};export{D as default};