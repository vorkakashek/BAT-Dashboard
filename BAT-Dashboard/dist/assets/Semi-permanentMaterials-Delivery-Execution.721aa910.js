import{r as e,o as t,c as o,b as r,w as n,d as i,F as s,a as v,g as p,_}from"./index.47bf1de4.js";const D={class:"panel"};function g(x,f,h,C,a,b){const l=e("ProgressbarLegend"),c=e("TotalProgressbar"),u=e("ProductCard"),d=e("ProductCards");return t(),o(s,null,[r(c,{data:a.totalData},{legend:n(()=>[r(l,{inData:a.totalData},null,8,["inData"])]),_:1},8,["data"]),i("div",D,[r(d,null,{items:n(()=>[(t(!0),o(s,null,v(a.products,m=>(t(),p(u,{product:m},null,8,["product"]))),256))]),_:1})])],64)}const P={data(){return{totalData:[{name:"Executed",value:1235},{name:"Delivered",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}],products:[{name:"GLO_Shelf Stopper",photo:"4",stats:[{name:"Executed",value:"2"},{name:"Delivered",value:"1359"},{name:"Not Delivered",value:"1012"},{name:"Target",value:"4000"}]},{name:"GLO_Device Premium Presenter 2 sku",photo:"3",stats:[{name:"Executed",value:"2"},{name:"Delivered",value:"1359"},{name:"Not Delivered",value:"1012"},{name:"Target",value:"4000"}]}]}}};var L=_(P,[["render",g]]);export{L as default};
