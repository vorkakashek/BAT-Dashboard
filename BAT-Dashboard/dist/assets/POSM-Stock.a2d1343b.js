import{F as b}from"./FilterTogglerMulti.5f072560.js";import{u as G,r as a,f as O,g as d,a as n,o as s,c as T,h as g,d as p,T as F,w as i,e as P,F as v,W as I,s as y,b as Y}from"./index.ecd5d3eb.js";/* empty css                                                                       */const H={class:"panel"},C={setup(R){const t=G(),o=a("bar");O(()=>{t.togglers.find(e=>e.name==="posm_stock_1").value!=="unset"&&(l.value=t.togglers.find(e=>e.name==="posm_stock_1").value),t.togglers.find(e=>e.name==="posm_stock_2").value!=="unset"&&(c.value=t.togglers.find(e=>e.name==="posm_stock_2").value),o.value=t.togglers.find(e=>e.name==="viewType_5").value});const h=a(["Strings","Acts","Sum"]),l=a("Strings"),M=a(["WORK","OFFICE","TMR"]),c=a(["WORK","OFFICE","TMR"]),m=a([{name:">1 Year",value:1235,class:"More1y"},{name:"3-12 Month",value:3200,class:"Three12Month"},{name:"Target",value:4e3,class:"GreenTarget"}]),_=a({info:{name:"GC_A_TN_Big_Mini_Sas # Lucky Strike",image:3,targetPercent:89.3,target:4e3,totalqty:4e3,centralstorage:"02/05/2022"},weeks:[{week:"Week 22.1",number:"-4",dateStart:"30/05",dateEnd:"31/05",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:3e3,percent:90,class:"Three12Month"},Target:{qty:1e3,percent:10,class:"GreenTarget"}}},{week:"Week 22.2",number:"-3",dateStart:"01/06",dateEnd:"05/06",graph:{">1 YEAR":{qty:1e3,percent:10,class:"More1y"},"3-12 MONTH":{qty:2e3,percent:80,class:"Three12Month"},Target:{qty:1e3,percent:10,class:"GreenTarget"}}},{week:"Week 23",number:"-2",dateStart:"06/06",dateEnd:"12/06",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:3e3,percent:90,class:"Three12Month"},Target:{qty:1e3,percent:10,class:"GreenTarget"}}},{week:"Week 24",number:"-1",dateStart:"13/06",dateEnd:"19/06",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:3e3,percent:90,class:"Three12Month"},Target:{qty:1e3,percent:10,class:"GreenTarget"}}},{week:"Week 25",number:"+1",dateStart:"20/06",dateEnd:"26/06",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:3e3,percent:90,class:"Three12Month"},Target:{qty:1e3,percent:10,class:"GreenTarget"}}},{week:"Week 26",number:"+2",current:!0,dateStart:"20/06",dateEnd:"26/06",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:3e3,percent:90,class:"Three12Month"},Target:{qty:1e3,percent:10,class:"GreenTarget"}}},{week:"Week 27",number:"+3",dateStart:"09/05",dateEnd:"15/05",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:0,percent:0,class:"Three12Month"},Target:{qty:0,percent:0,class:"GreenTarget"}}},{week:"Week 28",number:"+4",dateStart:"16/05",dateEnd:"22/05",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:0,percent:0,class:"Three12Month"},Target:{qty:0,percent:0,class:"GreenTarget"}}},{week:"Week 29",number:"+5",dateStart:"23/05",dateEnd:"29/05",graph:{">1 YEAR":{qty:0,percent:0,class:"More1y"},"3-12 MONTH":{qty:0,percent:0,class:"Three12Month"},Target:{qty:0,percent:0,class:"GreenTarget"}}}]}),k=a([{name:"TYPE: Equipment",photo:"MINI",percentage:"10%",ignore:[],notImportant:!0,stats:[{name:">1 year",value:"140",class:"More1y"},{name:"3-12 Month",value:"800",class:"Three12Month"},{name:"New",value:"1000",class:"GreenTarget"},{name:"Target",value:"1000",class:"Hidden"}]},{name:"TYPE: Parts",photo:"MINI",percentage:"10%",ignore:[],notImportant:!0,stats:[{name:">1 year",value:"140",class:"More1y"},{name:"3-12 Month",value:"800",class:"Three12Month"},{name:"New",value:"1000",class:"GreenTarget"},{name:"Target",value:"1000",class:"Hidden"}]},{name:"TYPE: Souvenirs",photo:"MINI",percentage:"10%",ignore:[],notImportant:!0,stats:[{name:">1 year",value:"140",class:"More1y"},{name:"3-12 Month",value:"800",class:"Three12Month"},{name:"New",value:"1000",class:"GreenTarget"},{name:"Target",value:"1000",class:"Hidden"}]},{name:"TYPE: POSM",photo:"MINI",percentage:"10%",ignore:[],notImportant:!0,stats:[{name:">1 year",value:"140",class:"More1y"},{name:"3-12 Month",value:"800",class:"Three12Month"},{name:"New",value:"1000",class:"GreenTarget"},{name:"Target",value:"1000",class:"Hidden"}]}]);return d(t.togglers,e=>{o.value=e.find(r=>r.name==="viewType_5").value}),d(()=>l.value,e=>{e.length!==void 0&&t.save(l.value,"posm_stock_1")}),d(()=>c.value,e=>{e.length!==void 0&&t.save(c.value,"posm_stock_2")}),(e,r)=>{const E=n("ExportExcel"),q=n("ProgressbarLegend"),w=n("TotalProgressbar"),S=n("FilterToggler"),N=n("ProductCard"),f=n("ProductCards");return s(),T(v,null,[(s(),g(F,{to:"#export-excel"},[p(E)])),p(w,{data:m.value,ignore:[],viewType:o.value},{legend:i(()=>[o.value==="graph"?(s(),g(I,{key:0,data:_.value,type:"progress-bar",valueStore:"viewType_5"},null,8,["data"])):y("",!0),o.value==="bar"?(s(),g(q,{key:1,data:m.value,type:"progress-bar",valueStore:"viewType_5"},null,8,["data"])):y("",!0)]),_:1},8,["data","viewType"]),P("div",H,[p(S,{options:h.value,modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=u=>l.value=u)},null,8,["options","modelValue"]),p(b,{options:M.value,modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=u=>c.value=u)},null,8,["options","modelValue"]),p(f,null,{items:i(()=>[(s(!0),T(v,null,Y(k.value,u=>(s(),g(N,{product:u},null,8,["product"]))),256))]),_:1})])],64)}}};export{C as default};
