import{p as x,r as c,j as f,a as s,o,c as m,d as n,i as t,w as T,e as a,F as u,b as B,h as N}from"./index.dea29483.js";const P={class:"panel"},w=a("h2",null,"Projects",-1),C={class:"comparison-wrap"},L={class:"comparison-aside"},j=["src"],k={class:"comparison-items"},M={setup(y){const e=x({visible:!1,index:0,imgs:""}),l=c([{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}]),d=c([{label:"MBU",type:"OHD",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"NW",type:"BWD",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}]),i=f(()=>new URL("/BAT-Dashboard/assets/project-1.219e00a6.jpg",self.location).href);function v(){e.imgs=i.value,e.visible=!0}function p(){e.visible=!1}return(E,r)=>{const _=s("vue-easy-lightbox"),g=s("ProgressbarLegend"),b=s("TotalProgressbar"),h=s("ComparisonItem");return o(),m(u,null,[n(_,{visible:t(e).visible,imgs:t(e).imgs,index:t(e).index,onHide:p},null,8,["visible","imgs","index"]),n(b,{data:l.value},{legend:T(()=>[n(g,{inData:l.value},null,8,["inData"])]),_:1},8,["data"]),a("div",P,[w,a("div",C,[a("div",L,[a("img",{class:"zoom",src:t(i),onClick:r[0]||(r[0]=()=>v())},null,8,j)]),a("div",k,[(o(!0),m(u,null,B(d.value,D=>(o(),N(h,{comparisonData:D},null,8,["comparisonData"]))),256))])])])],64)}}};export{M as default};