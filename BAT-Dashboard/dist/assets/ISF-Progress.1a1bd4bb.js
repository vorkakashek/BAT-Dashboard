import{r as e,o as l,c as n,d as t,b as r,w as p,F as s,a as _,f as v,e as F}from"./index.c8e66e9f.js";const D={class:"panel"},g={class:"panel"},C=t("h2",null,"Total",-1),b={class:"comparison-items"},h={data(){return{ISFFilter:"ALL",totalData:[{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}],comparisonData:[{label:"CycleMaterial Cycle4",executed:1204,delivered:1359,notDelivered:641,target:3e3},{label:"CycleMaterial Cycle5",executed:1204,delivered:1359,notDelivered:641,target:3400},{label:"CycleMaterial Cycle6",executed:1204,delivered:1359,notDelivered:641,target:4100},{label:"CycleMaterial Cycle6",executed:4,delivered:5,notDelivered:641,target:4100},{label:"CycleMaterial Cycle6",executed:4089,delivered:4090,notDelivered:641,target:4100}]}},provide(){return{ISFFilter:v(()=>this.ISFFilter),updateISFFilter:this.updateISFFilter}},methods:{updateISFFilter(o){this.ISFFilter=o}}},S=Object.assign(h,{setup(o){return(a,I)=>{const i=e("ProgressbarLegend"),c=e("TotalProgressbar"),d=e("ISFFilter"),u=e("ComparisonItem");return l(),n(s,null,[t("div",D,[r(c,{inData:a.totalData},{legend:p(()=>[r(i,{inData:a.totalData},null,8,["inData"])]),_:1},8,["inData"])]),t("div",g,[C,r(d),t("div",b,[(l(!0),n(s,null,_(a.comparisonData,m=>(l(),F(u,{comparisonData:m,vertical:!0},null,8,["comparisonData"]))),256))])])],64)}}});export{S as default};