import{l as d,q as p,r as o,o as r,c as v,b as _,u as l,w as E,a as u,t as P,F as f,f as w,g as x}from"./index.d5bcc7a0.js";const B={class:"panel"},D={class:"comparison-items"},T={setup(L){const t=d([{name:"Executed",value:222},{name:"Stock",value:777}]),n=d([{label:"MBU",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]},{label:"NW",stats:[{name:"Executed",value:80},{name:"Stock",value:20}]}]),c=p(()=>t.value.find(({name:e})=>e==="Target")===void 0?[...t.value,i("Potential",m(t.value))]:t.value),g=p(()=>(n.value.find(({stats:e})=>e.find(({name:a})=>a==="Target"))===void 0&&n.value.forEach(e=>e.stats=[...e.stats,i("Potential",m(e.stats))]),n.value)),m=e=>{let a=0;return e.forEach(s=>{a+=s.value}),a},i=(e,a)=>({name:e,value:a});return(e,a)=>{const s=o("ProgressbarLegend"),b=o("TotalProgressbar"),h=o("ComparisonItem");return r(),v(f,null,[_(b,{data:l(c)},{legend:E(()=>[_(s,{data:l(c)},null,8,["data"])]),_:1},8,["data"]),u("div",B,[u("h2",null,P(e.$t("total")),1),u("div",D,[(r(!0),v(f,null,w(l(g),k=>(r(),x(h,{comparisonData:k},null,8,["comparisonData"]))),256))])])],64)}}};export{T as default};
