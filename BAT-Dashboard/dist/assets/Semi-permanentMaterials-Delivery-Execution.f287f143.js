import{r as e,o as t,c as o,d as n,b as r,w as s,F as l,a as v,g as p,_}from"./index.c83ba64f.js";const D={class:"panel"},g={class:"panel"};function P(h,f,C,b,a,E){const c=e("ProgressbarLegend"),u=e("TotalProgressbar"),d=e("ProductCard"),m=e("ProductCards");return t(),o(l,null,[n("div",D,[r(u,{data:a.totalData},{legend:s(()=>[r(c,{inData:a.totalData},null,8,["inData"])]),_:1},8,["data"])]),n("div",g,[r(m,null,{items:s(()=>[(t(!0),o(l,null,v(a.products,i=>(t(),p(d,{product:i},null,8,["product"]))),256))]),_:1})])],64)}const x={data(){return{totalData:[{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}],products:[{name:"GLO_Shelf Stopper",photo:"4",stats:[{name:"Executed",value:"2"},{name:"Delivered",value:"1359"},{name:"Not Delivered",value:"1012"},{name:"Target",value:"4000"}]},{name:"GLO_Device Premium Presenter 2 sku",photo:"3",stats:[{name:"Executed",value:"2"},{name:"Delivered",value:"1359"},{name:"Not Delivered",value:"1012"},{name:"Target",value:"4000"}]}]}}};var N=_(x,[["render",P]]);export{N as default};