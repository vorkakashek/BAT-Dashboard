import{_ as B,u as S,r as u,f as q,g as V,a as v,o as r,c as T,h as E,d as e,T as D,i as t,w as a,e as L,E as W,F as f,b as y,x as l}from"./index.02a19384.js";import{T as i,P as p,a as g,I,b as w,c as C}from"./ItemLegend.19a2b7b7.js";const F=l("outlet"),O=l("equip"),G=l("outlet"),R=l("equip"),A=l("outlet"),M=l("equip"),U={class:"panel"},j={setup(z){const d=S(),N=u(["ALL","BWD","VITRINE"]),s=u("ALL");q(()=>{d.togglers.find(o=>o.name==="equipment_2").value!=="unset"&&(s.value=d.togglers.find(o=>o.name==="equipment_2").value)});let m=u({label:"Total BWD Multicategory",data:[[{name:"Executed",value:1200},{name:"Not Executed",value:800},{name:"Target",value:4e3}],[{name:"Stock",value:2e3},{name:"No Stock",value:800},{name:"Target",value:4e3}]]}),c=u({label:"Total Vitrine / Taylor made",data:[[{name:"Executed",value:1e3},{name:"Not Executed",value:800},{name:"Target",value:4e3}],[{name:"Stock",value:2e3},{name:"No Stock",value:1e3},{name:"Target",value:4e3}]]}),_=u({label:"Total BWD + Vitrine",data:[[{name:"Executed",value:1200},{name:"Not Executed",value:800},{name:"Target",value:4e3}],[{name:"Stock",value:2800},{name:"No Stock",value:0},{name:"Target",value:4e3}]]}),P=u([{name:"GLO_Vitrine_PP_1000 (\u043F\u0440\u0430\u0432\u044B\u0439)",photo:"equipment-1",type_bwd:"VITRINE",stats:[[{name:"Executed",value:"3000"},{name:"Not Executed",value:"1000"},{name:"Target",value:"4000"}],[{name:"Stock",value:"500"},{name:"No Stock",value:"500"},{name:"Target",value:"4000"}]],info:{photo:["equipment-1","equipment-2"],html:"<div><strong>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </strong> <span>BWD \u041F\u0440\u0435\u043C\u0438\u0443\u043C 11x15 \u0447\u0435\u0440\u043D\u044B\u0439</span></div><div><strong>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </strong> <span>BWD \u041F\u0440\u0435\u043C\u0438\u0443\u043C 11x15 \u0447\u0435\u0440\u043D\u044B\u0439</span></div>"}},{name:"GLO_Vitrine_PP_1000 (\u043B\u0435\u0432\u044B\u0439)",photo:"equipment-1",type_bwd:"BWD",stats:[[{name:"Executed",value:"1000"},{name:"Not Executed",value:"3000"},{name:"Target",value:"4000"}],[{name:"Stock",value:"2000"},{name:"No Stock",value:"1000"},{name:"Target",value:"4000"}]],info:{photo:["equipment-1"],html:"<div><strong>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </strong> <span>BWD \u041F\u0440\u0435\u043C\u0438\u0443\u043C 11x15 \u0447\u0435\u0440\u043D\u044B\u0439</span></div><div><strong>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </strong> <span>BWD \u041F\u0440\u0435\u043C\u0438\u0443\u043C 11x15 \u0447\u0435\u0440\u043D\u044B\u0439</span></div>"}},{name:"GLO_Vitrine_PP_1500 (\u043F\u0440\u0430\u0432\u044B\u0439)",photo:"equipment-1",type_bwd:"BWD",stats:[[{name:"Executed",value:"1500"},{name:"Not Executed",value:"2500"},{name:"Target",value:"4000"}],[{name:"Stock",value:"3000"},{name:"No Stock",value:"0"},{name:"Target",value:"4000"}]]},{name:"GLO_Vitrine_PP_1500 (\u043F\u0440\u0430\u0432\u044B\u0439)",photo:"equipment-1",type_bwd:"BWD",stats:[[{name:"Executed",value:"1500"},{name:"Not Executed",value:"2500"},{name:"Target",value:"4000"}],[{name:"Stock",value:"3000"},{name:"No Stock",value:"0"},{name:"Target",value:"4000"}]]},{name:"GLO_Vitrine_PP_1500 (\u043F\u0440\u0430\u0432\u044B\u0439)",photo:"equipment-1",type_bwd:"BWD",stats:[[{name:"Executed",value:"1500"},{name:"Not Executed",value:"2500"},{name:"Target",value:"4000"}],[{name:"Stock",value:"3000"},{name:"No Stock",value:"0"},{name:"Target",value:"4000"}]]}]);return V(()=>s.value,o=>{o.length!==void 0&&d.save(s.value,"equipment_2")}),(o,x)=>{const b=v("ExportExcel"),h=v("ProductCard"),k=v("ProductCards");return r(),T(f,null,[(r(),E(D,{to:"#export-excel"},[e(b)])),e(i,{data:t(m)},{progressbar:a(()=>[e(p,{data:t(m).data[0]},{after:a(()=>[F]),_:1},8,["data"]),e(g,{data:t(m).data[1]},{after:a(()=>[O]),_:1},8,["data"])]),_:1},8,["data"]),e(i,{data:t(c)},{progressbar:a(()=>[e(p,{data:t(c).data[0]},{after:a(()=>[G]),_:1},8,["data"]),e(g,{data:t(c).data[1]},{after:a(()=>[R]),_:1},8,["data"])]),_:1},8,["data"]),e(i,{data:t(_)},{progressbar:a(()=>[e(p,{data:t(_).data[0]},{after:a(()=>[A]),_:1},8,["data"]),e(g,{data:t(_).data[1]},{after:a(()=>[M]),_:1},8,["data"])]),_:1},8,["data"]),L("div",U,[e(W,{options:N.value,modelValue:s.value,"onUpdate:modelValue":x[0]||(x[0]=n=>s.value=n)},null,8,["options","modelValue"]),e(k,null,{items:a(()=>[(r(!0),T(f,null,y(t(P),n=>(r(),E(h,{product:n},{progressbar:a(()=>[e(I,{data:n.stats[0]},null,8,["data"]),e(w,{data:n.stats[1]},null,8,["data"])]),legend:a(()=>[e(C,{data:n.stats},null,8,["data"])]),_:2},1032,["product"]))),256))]),_:1})])],64)}}};var K=B(j,[["__scopeId","data-v-5509c8c9"]]);export{K as default};