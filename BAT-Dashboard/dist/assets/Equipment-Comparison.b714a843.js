import{_ as y,u as D,f as P,p as q,r as n,j as C,g as R,a as g,o as m,c as f,h as N,d as e,T as W,i as a,w as r,e as t,E as F,F as S,b as A,q as M,s as O}from"./index.02a19384.js";import{T as b,P as x,a as T,I as U,b as j,c as G}from"./ItemLegend.19a2b7b7.js";const H=d=>(M("data-v-d23f1d48"),d=d(),O(),d),z={class:"panel"},J=H(()=>t("h2",null,"Equipment in PP",-1)),K={class:"comparison-wrap"},Q={class:"comparison-aside"},X=["src"],Y={class:"comparison-content"},Z={class:"comparison-items"},$={setup(d){const c=D();P(()=>{c.togglers.find(l=>l.name==="equipment_3").value!=="unset"&&(u.value=c.togglers.find(l=>l.name==="equipment_3").value)});const o=q({visible:!1,index:0,imgs:""}),h=n(["ALL","BWD","VITRINE"]),u=n("ALL");let v=n({label:"Total BWD Multicategory",data:[[{name:"Executed",value:1200},{name:"Not Executed",value:800},{name:"Target",value:4e3}],[{name:"Stock",value:2e3},{name:"No Stock",value:800},{name:"Target",value:4e3}]]}),p=n({label:"Total Vitrine / Taylor made",data:[[{name:"Executed",value:1e3},{name:"Not Executed",value:800},{name:"Target",value:4e3}],[{name:"Stock",value:2e3},{name:"No Stock",value:1e3},{name:"Target",value:4e3}]]}),_=n({label:"Total BWD + Vitrine",data:[[{name:"Executed",value:1200},{name:"Not Executed",value:800},{name:"Target",value:4e3}],[{name:"Stock",value:2800},{name:"No Stock",value:0},{name:"Target",value:4e3}]]}),k=n([{label:"MBU",type_bwd:"VITRINE",stats:[[{name:"Executed",value:"3470"},{name:"Not Executed",value:"1012"},{name:"Target",value:"4000"}],[{name:"Stock",value:"30"},{name:"No Stock",value:"500"},{name:"Target",value:"4000"}]]},{label:"NW",type_bwd:"BWD",stats:[[{name:"Executed",value:"2000"},{name:"Not Executed",value:"2000"},{name:"Target",value:"4000"}],[{name:"Stock",value:"1000"},{name:"No Stock",value:"1000"},{name:"Target",value:"4000"}]]},{label:"VOLGA",type_bwd:"VITRINE",stats:[[{name:"Executed",value:"10"},{name:"Not Executed",value:"3090"},{name:"Target",value:"4000"}],[{name:"Stock",value:"10"},{name:"No Stock",value:"3980"},{name:"Target",value:"4000"}]]},{label:"VOLGA",type_bwd:"VITRINE",stats:[[{name:"Executed",value:"10"},{name:"Not Executed",value:"3090"},{name:"Target",value:"4000"}],[{name:"Stock",value:"3980"},{name:"No Stock",value:"10"},{name:"Target",value:"4000"}]]}]);const E=C(()=>new URL("/BAT-Dashboard/assets/equipment-1.2680b41d.jpg",self.location).href);function I(){o.imgs=E.value,o.visible=!0}function V(){o.visible=!1}return R(()=>u.value,l=>{l.length!==void 0&&c.save(u.value,"equipment_3")}),(l,i)=>{const B=g("ExportExcel"),L=g("vue-easy-lightbox"),w=g("ComparisonItem");return m(),f(S,null,[(m(),N(W,{to:"#export-excel"},[e(B)])),e(L,{visible:a(o).visible,imgs:a(o).imgs,index:a(o).index,onHide:V},null,8,["visible","imgs","index"]),e(b,{data:a(v)},{progressbar:r(()=>[e(x,{data:a(v).data[0]},null,8,["data"]),e(T,{data:a(v).data[1]},null,8,["data"])]),_:1},8,["data"]),e(b,{data:a(p)},{progressbar:r(()=>[e(x,{data:a(p).data[0]},null,8,["data"]),e(T,{data:a(p).data[1]},null,8,["data"])]),_:1},8,["data"]),e(b,{data:a(_)},{progressbar:r(()=>[e(x,{data:a(_).data[0]},null,8,["data"]),e(T,{data:a(_).data[1]},null,8,["data"])]),_:1},8,["data"]),t("div",z,[J,t("div",K,[t("div",Q,[t("img",{class:"zoom",src:a(E),onClick:i[0]||(i[0]=()=>I())},null,8,X)]),t("div",Y,[e(F,{options:h.value,modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=s=>u.value=s)},null,8,["options","modelValue"]),t("div",Z,[(m(!0),f(S,null,A(a(k),s=>(m(),N(w,{comparisonData:s},{progressbar:r(()=>[e(U,{data:s.stats[0]},null,8,["data"]),e(j,{data:s.stats[1]},null,8,["data"])]),data:r(()=>[e(G,{data:s.stats},null,8,["data"])]),_:2},1032,["comparisonData"]))),256))])])])])],64)}}};var te=y($,[["__scopeId","data-v-d23f1d48"]]);export{te as default};