import{_ as f}from"./POSM-layout.80c4f384.js";/* empty css                                                                       */import{_ as P,j as L,l as a,k as x,m as v,r as s,o as n,g as c,w as u,T as M,b as p,W,h as _,a as g,D,c as N,f as V,F as A}from"./index.497511f8.js";import"./FavoriteToggler.9b1e6b03.js";/* empty css                                                                    */const F={class:"panel"},I={class:"panel__row"},X={setup(B){const d=L(),r=a("bar");x(()=>{d.togglers.find(e=>e.name==="posm_capex").value!=="unset"&&(l.value=d.togglers.find(e=>e.name==="posm_capex").value),r.value=d.togglers.find(e=>e.name==="viewType_3").value});const y=a(["Strings","Acts","Sum"]),l=a("Sum"),k=a(["New","Pending","Canceled","Shipped"]),m=a(null),q=a({info:{name:"GC_A_TN_Big_Mini_Sas # Lucky Strike",image:3,target:4e3,totalqty:4e3,centralstorage:"02/05/2022"},weeks:[{week:"Week 22.1",number:"-4",dateStart:"30/05",dateEnd:"31/05",graph:{"90-180 d":{qty:30,percent:33.33,class:"d90d180"},"30-90 d":{qty:30,percent:33.33,class:"d30d90"},"< 30 d":{qty:30,percent:33.33,class:"Less30d"}}},{week:"Week 22.2",number:"-3",dateStart:"01/06",dateEnd:"05/06",graph:{"90-180 d":{qty:30,percent:33.33,class:"d90d180"},"30-90 d":{qty:30,percent:33.33,class:"d30d90"},"< 30 d":{qty:30,percent:33.33,class:"Less30d"}}},{week:"Week 23",number:"-2",dateStart:"06/06",dateEnd:"12/06",graph:{"90-180 d":{qty:30,percent:33.33,class:"d90d180"},"30-90 d":{qty:30,percent:33.33,class:"d30d90"},"< 30 d":{qty:30,percent:33.33,class:"Less30d"}}},{week:"Week 24",number:"-1",dateStart:"13/06",dateEnd:"19/06",graph:{"90-180 d":{qty:30,percent:33.33,class:"d90d180"},"30-90 d":{qty:30,percent:33.33,class:"d30d90"},"< 30 d":{qty:30,percent:33.33,class:"Less30d"}}},{week:"Week 25",number:"+1",dateStart:"20/06",dateEnd:"26/06",graph:{"90-180 d":{qty:30,percent:33.33,class:"d90d180"},"30-90 d":{qty:30,percent:33.33,class:"d30d90"},"< 30 d":{qty:30,percent:33.33,class:"Less30d"}}},{week:"Week 26",number:"+2",current:!0,dateStart:"20/06",dateEnd:"26/06",graph:{"90-180 d":{qty:30,percent:33.33,class:"d90d180"},"30-90 d":{qty:30,percent:33.33,class:"d30d90"},"< 30 d":{qty:30,percent:33.33,class:"Less30d"}}},{week:"Week 27",number:"+3",dateStart:"09/05",dateEnd:"15/05",graph:{">90 D":{qty:0,percent:0,class:"More90d"},Current:{qty:0,percent:0},Total:{qty:0,percent:0}}},{week:"Week 28",number:"+4",dateStart:"16/05",dateEnd:"22/05",graph:{">90 D":{qty:0,percent:0,class:"More90d"},Current:{qty:0,percent:0},Total:{qty:0,percent:0}}},{week:"Week 29",number:"+5",dateStart:"23/05",dateEnd:"29/05",graph:{">90 D":{qty:0,percent:0,class:"More90d"},Current:{qty:0,percent:0},Total:{qty:0,percent:0}}}]}),i=a([{name:"90-180 d",value:"10",class:"d90d180"},{name:"30-90 d",value:"20",class:"d30d90"},{name:"< 30 d",value:"10",class:"Less30d"}]),w=a([{name:"\u041C\u043E\u0441\u043A\u0432\u0430",photo:"MINI",percentage:"10%",ignore:[],stats:[{name:"> 180 d",value:"1",class:"More180d"},{name:"90-180 d",value:"1",class:"d90d180"},{name:"30-90 d",value:"20",class:"d30d90"},{name:"< 30 d",value:"10",class:"Less30d"},{name:"NEW",value:"10",class:"new"}]},{name:"\u0421\u0435\u0432\u0435\u0440\u043E-\u0417\u0430\u043F\u0430\u0434",photo:"MINI",percentage:"10%",ignore:[],stats:[{name:"> 180 d",value:"90",class:"More180d"},{name:"90-180 d",value:"3",class:"d90d180"},{name:"30-90 d",value:"3",class:"d30d90"},{name:"< 30 d",value:"3",class:"Less30d"},{name:"NEW",value:"1",class:"new"}]},{name:"\u042E\u0433",photo:"MINI",percentage:"10%",ignore:[],stats:[{name:"> 180 d",value:"10",class:"More180d"},{name:"90-180 d",value:"10",class:"d90d180"},{name:"30-90 d",value:"20",class:"d30d90"},{name:"< 30 d",value:"10",class:"Less30d"},{name:"NEW",value:"10",class:"new"}]}]);return v(()=>l.value,e=>{e.length!==void 0&&d.save(l.value,"posm_capex")}),v(d.togglers,e=>{r.value=e.find(t=>t.name==="viewType_3").value}),(e,t)=>{const h=s("ExportExcel"),E=s("ProgressbarLegend"),S=s("TotalProgressbar"),T=s("FilterToggler"),b=s("ProductCard"),C=s("ProductCards");return n(),c(f,null,{default:u(()=>[(n(),c(M,{to:"#export-excel"},[p(h)])),p(S,{isMillion:"",hasTotal:"",data:i.value,ignore:[],viewType:r.value},{legend:u(()=>[r.value==="graph"?(n(),c(W,{key:0,data:q.value,type:"progress-bar",valueStore:"viewType_3"},null,8,["data"])):_("",!0),r.value==="bar"?(n(),c(E,{key:1,hasTotal:"",data:i.value,type:"progress-bar",valueStore:"viewType_3"},null,8,["data"])):_("",!0)]),_:1},8,["data","viewType"]),g("div",F,[g("div",I,[p(T,{options:y.value,modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o)},null,8,["options","modelValue"]),p(D,{multiselect:"",options:k.value,modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=o=>m.value=o),placeholder:"Document status"},null,8,["options","modelValue"])]),p(C,null,{items:u(()=>[(n(!0),N(A,null,V(w.value,o=>(n(),c(b,{product:o,hasTotal:""},null,8,["product"]))),256))]),_:1})])]),_:1})}}};var z=P(X,[["__scopeId","data-v-80d8e8be"]]);export{z as default};