import{_ as h,r as s,o as i,c as r,b as o,d as t,w as d,F as c,a as D,p as F,g as I,f as S,t as b}from"./index.df2ddb8f.js";const f=a=>(F("data-v-51e8ae83"),a=a(),I(),a),P={class:"panel"},w={class:"panel"},x=f(()=>t("h2",null,"ISF",-1)),C={class:"comparison-wrap"},L=["src"],y={class:"comparison-items"},B={class:"comparison-item"},H={class:"comparison-item-target"},N={data(){return{ISFFilter:"ALL",visible:!1,index:0,imgs:"",totalData:[{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Planned",value:4e3}],comparisonData:[{target:"MBU",executed:1204,delivered:1359,notDelivered:641,planned:3e3},{target:"NW",executed:1204,delivered:1359,notDelivered:641,planned:3400},{target:"South",executed:1204,delivered:1359,notDelivered:641,planned:4100},{target:"Volga-Centre",executed:1204,delivered:1359,notDelivered:641,planned:2400},{target:"Ural",executed:1204,delivered:1359,notDelivered:641,planned:2e3},{target:"Siberia-FE",executed:1204,delivered:1359,notDelivered:641,planned:4e3}]}},provide(){return{ISFFilter:S(()=>this.ISFFilter),updateISFFilter:this.updateISFFilter}},computed:{productPhoto(){return new URL("/assets/PRO.fa9f914d.jpg",self.location).href}},methods:{showSingle(){this.imgs=this.productPhoto,this.show()},show(){this.visible=!0},handleHide(){this.visible=!1},updateISFFilter(a){this.ISFFilter=a}}},k=Object.assign(N,{setup(a){return(e,l)=>{const p=s("vue-easy-lightbox"),_=s("ProgressbarLegend"),u=s("TotalProgressbar"),v=s("ISFFilter"),m=s("ItemData"),g=s("ItemProgressbar");return i(),r(c,null,[o(p,{visible:e.visible,imgs:e.imgs,index:e.index,onHide:e.handleHide},null,8,["visible","imgs","index","onHide"]),t("div",P,[o(u,{inData:e.totalData},{legend:d(()=>[o(_,{inData:e.totalData},null,8,["inData"])]),_:1},8,["inData"])]),t("div",w,[x,t("div",C,[t("img",{src:e.productPhoto,onClick:l[0]||(l[0]=()=>e.showSingle())},null,8,L),t("div",y,[o(v),(i(!0),r(c,null,D(e.comparisonData,n=>(i(),r("div",B,[t("div",H,b(n.target),1),o(g,{inData:n},{data:d(()=>[o(m,{inData:n},null,8,["inData"])]),_:2},1032,["inData"])]))),256))])])])],64)}}});var U=h(k,[["__scopeId","data-v-51e8ae83"]]);export{U as default};
