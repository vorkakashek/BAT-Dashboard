import{r as s,a as e,o as a,c as n,d as l,w as i,e as t,F as r,b as _,h as p}from"./index.02a19384.js";const g={class:"panel"},D=t("h2",null,"Total",-1),T={class:"comparison-items"},B={setup(b){const o=s([{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}]),c=s([{label:"MBU",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"NW",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}]);return(h,x)=>{const m=e("ProgressbarLegend"),u=e("TotalProgressbar"),d=e("ComparisonItem");return a(),n(r,null,[l(u,{data:o.value},{legend:i(()=>[l(m,{data:o.value},null,8,["data"])]),_:1},8,["data"]),t("div",g,[D,t("div",T,[(a(!0),n(r,null,_(c.value,v=>(a(),p(d,{comparisonData:v,vertical:!0},null,8,["comparisonData"]))),256))])])],64)}}};export{B as default};