import{r as l,a as e,o as a,c as s,h as r,d as t,T as _,w as x,e as o,F as c,b as g}from"./index.dea29483.js";const D={class:"panel"},T=o("h2",null,"Total",-1),E={class:"comparison-items"},f={setup(b){const n=l([{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}]),m=l([{label:"MBU",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"NW",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}]);return(h,N)=>{const u=e("ExportExcel"),i=e("ProgressbarLegend"),v=e("TotalProgressbar"),d=e("ComparisonItem");return a(),s(c,null,[(a(),r(_,{to:"#export-excel"},[t(u)])),t(v,{data:n.value},{legend:x(()=>[t(i,{inData:n.value},null,8,["inData"])]),_:1},8,["data"]),o("div",D,[T,o("div",E,[(a(!0),s(c,null,g(m.value,p=>(a(),r(d,{comparisonData:p,vertical:!0},null,8,["comparisonData"]))),256))])])],64)}}};export{f as default};