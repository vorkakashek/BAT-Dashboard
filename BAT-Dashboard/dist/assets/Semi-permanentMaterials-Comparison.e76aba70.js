import{r as o,o as a,c as l,b as i,d as e,w as _,F as r,a as p,e as h,_ as g}from"./index.f7bf68a6.js";const b={class:"panel"},D={class:"panel"},x=e("h2",null,"Touchpoints",-1),f={class:"comparison-wrap"},w={class:"comparison-aside"},P=["src"],C={class:"comparison-items"};function B(k,n,H,L,t,s){const d=o("vue-easy-lightbox"),c=o("ProgressbarLegend"),m=o("TotalProgressbar"),v=o("ComparisonItem");return a(),l(r,null,[i(d,{visible:t.visible,imgs:t.imgs,index:t.index,onHide:s.handleHide},null,8,["visible","imgs","index","onHide"]),e("div",b,[i(m,{inData:t.totalData},{legend:_(()=>[i(c,{inData:t.totalData},null,8,["inData"])]),_:1},8,["inData"])]),e("div",D,[x,e("div",f,[e("div",w,[e("img",{class:"zoom",src:s.importPhoto,onClick:n[0]||(n[0]=()=>s.showSingle())},null,8,P)]),e("div",C,[(a(!0),l(r,null,p(t.comparisonData,u=>(a(),h(v,{comparisonData:u},null,8,["comparisonData"]))),256))])])])],64)}const S={data(){return{totalData:[{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}],comparisonData:[{label:"MBU",executed:1204,delivered:1359,notDelivered:641,target:3e3},{label:"NW",executed:1204,delivered:1359,notDelivered:641,target:3400},{label:"South",executed:1204,delivered:1359,notDelivered:641,target:4100},{label:"Volga-Centre",executed:1204,delivered:1359,notDelivered:641,target:2400},{label:"Ural",executed:1204,delivered:1359,notDelivered:641,target:2e3},{label:"Siberia-FE",executed:1204,delivered:1359,notDelivered:641,target:4e3}],visible:!1,index:0,imgs:""}},computed:{importPhoto(){return new URL("/assets/1.3bcd0fda.jpg",self.location).href}},methods:{showSingle(){this.imgs=this.importPhoto,this.show()},show(){this.visible=!0},handleHide(){this.visible=!1}}};var T=g(S,[["render",B]]);export{T as default};
