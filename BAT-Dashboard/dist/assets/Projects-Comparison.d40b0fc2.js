import{A as x,l as c,q as D,r as s,o,c as m,b as n,u as t,w as T,a,F as u,f as B,g as w}from"./index.f9852411.js";const N={class:"panel"},P=a("h2",null,"Projects",-1),C={class:"comparison-wrap"},L={class:"comparison-aside"},k=["src"],y={class:"comparison-items"},M={setup(E){const e=x({visible:!1,index:0,imgs:""}),l=c([{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}]),d=c([{label:"MBU",type:"OHD",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"NW",type:"BWD",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}]),i=D(()=>new URL("/BAT-Dashboard-new/assets/project-1.219e00a6.jpg",self.location).href);function v(){e.imgs=i.value,e.visible=!0}function _(){e.visible=!1}return(j,r)=>{const p=s("vue-easy-lightbox"),g=s("ProgressbarLegend"),b=s("TotalProgressbar"),h=s("ComparisonItem");return o(),m(u,null,[n(p,{visible:t(e).visible,imgs:t(e).imgs,index:t(e).index,onHide:_},null,8,["visible","imgs","index"]),n(b,{data:l.value},{legend:T(()=>[n(g,{data:l.value},null,8,["data"])]),_:1},8,["data"]),a("div",N,[P,a("div",C,[a("div",L,[a("img",{class:"zoom",src:t(i),onClick:r[0]||(r[0]=()=>v())},null,8,k)]),a("div",y,[(o(!0),m(u,null,B(d.value,f=>(o(),w(h,{comparisonData:f},null,8,["comparisonData"]))),256))])])])],64)}}};export{M as default};
