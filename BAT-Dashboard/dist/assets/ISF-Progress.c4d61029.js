import{_ as v,r as t,o as n,c as l,d as s,b as a,w as i,F as c,a as F,p as g,g as D,f as I,t as h}from"./index.df2ddb8f.js";const S=e=>(g("data-v-3289bc15"),e=e(),D(),e),b={class:"panel"},y={class:"panel"},P=S(()=>s("h2",null,"Total",-1)),C={class:"comparison-items"},f={class:"comparison-item"},x={class:"comparison-item-target"},L={data(){return{ISFFilter:"ALL",totalData:[{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Planned",value:4e3}],comparisonData:[{target:"CycleMaterial Cycle4",executed:1204,delivered:1359,notDelivered:641,planned:3e3},{target:"CycleMaterial Cycle5",executed:1204,delivered:1359,notDelivered:641,planned:3400},{target:"CycleMaterial Cycle6",executed:1204,delivered:1359,notDelivered:641,planned:4100}]}},provide(){return{ISFFilter:I(()=>this.ISFFilter),updateISFFilter:this.updateISFFilter}},methods:{updateISFFilter(e){this.ISFFilter=e}}},w=Object.assign(L,{setup(e){return(o,B)=>{const d=t("ProgressbarLegend"),_=t("TotalProgressbar"),p=t("ISFFilter"),u=t("ItemData"),m=t("ItemProgressbar");return n(),l(c,null,[s("div",b,[a(_,{inData:o.totalData},{legend:i(()=>[a(d,{inData:o.totalData},null,8,["inData"])]),_:1},8,["inData"])]),s("div",y,[P,s("div",C,[a(p),(n(!0),l(c,null,F(o.comparisonData,r=>(n(),l("div",f,[s("div",x,h(r.target),1),a(m,{inData:r},{data:i(()=>[a(u,{inData:r},null,8,["inData"])]),_:2},1032,["inData"])]))),256))])])],64)}}});var N=v(w,[["__scopeId","data-v-3289bc15"]]);export{N as default};
