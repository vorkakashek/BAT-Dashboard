import{i as x,r as c,h as f,a as s,o,c as d,d as n,u as t,w as T,e as a,F as m,b as B,g as N}from"./index.2af05fba.js";const w={class:"panel"},C=a("h2",null,"Touchpoints",-1),L={class:"comparison-wrap"},P={class:"comparison-aside"},k=["src"],y={class:"comparison-items"},R={setup(E){const e=x({visible:!1,index:0,imgs:""}),l=c([{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}]),u=c([{label:"MBU",type:"OHD",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"NW",type:"BWD",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}]),i=f(()=>new URL("/BAT-Dashboard/assets/2.d779d4d3.jpg",self.location).href);function v(){e.imgs=i.value,e.visible=!0}function _(){e.visible=!1}return(H,r)=>{const p=s("vue-easy-lightbox"),g=s("ProgressbarLegend"),b=s("TotalProgressbar"),h=s("ComparisonItem");return o(),d(m,null,[n(p,{visible:t(e).visible,imgs:t(e).imgs,index:t(e).index,onHide:_},null,8,["visible","imgs","index"]),n(b,{data:l.value},{legend:T(()=>[n(g,{inData:l.value},null,8,["inData"])]),_:1},8,["data"]),a("div",w,[C,a("div",L,[a("div",P,[a("img",{class:"zoom",src:t(i),onClick:r[0]||(r[0]=()=>v())},null,8,k)]),a("div",y,[(o(!0),d(m,null,B(u.value,D=>(o(),N(h,{comparisonData:D},null,8,["comparisonData"]))),256))])])])],64)}}};export{R as default};
