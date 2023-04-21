import{_ as $,j as m,o as n,c as o,e as p,F as P,b as T,n as y,G as b,t as g,D as F,i as X,y as x,d as C,h as D}from"./index.025e4536.js";const I={class:"progressbar-container"},k={class:"progressbar-wrapper"},q={class:"progressbar-outer"},N={class:"after"},R={props:{data:{type:Array,required:!0},ignore:{type:Array,required:!1,default:["Target","Not Delivered","Potential","Not Executed"]}},setup(c){const r=c,u=m(()=>r.data.filter(t=>!r.ignore.includes(t.name))),d=m(()=>{if(r.data.find(({name:t})=>t==="Target")!==void 0)return r.data.find(({name:t})=>t==="Target").value;if(r.data.find(({name:t})=>t==="Potential")!==void 0)return r.data.find(({name:t})=>t==="Potential").value});function l(t){return parseFloat((t.value/(d.value/100)).toFixed(1))+"%"}function _(t){return t.name.split(/\s+/).map(e=>e[0].toUpperCase()+e.substring(1)).join("")}function i(t){return t.name==="Delivered to TMR"||t.name==="Transit to TMR"||t.name==="Delivered"?"bottom":"top"}function v(t){return parseFloat((t.value/(d.value/100)).toFixed(1))<4?"transform: translateX(0%)":parseFloat((t.value/(d.value/100)).toFixed(1))>97?"transform: translateX(-100%)":"transform: translateX(-50%)"}return(t,e)=>(n(),o("div",I,[p("div",k,[p("div",q,[(n(!0),o(P,null,T(X(u),(a,s)=>(n(),o("div",{class:y(["progressbar-inner",_(a)]),style:b(["width: "+l(a)])},[a.value>0?(n(),o("div",{key:0,class:y(["progressbar-value",i(a)]),style:b(v(a))},g(l(a)),7)):F("",!0)],6))),256))])]),p("div",N,[x(t.$slots,"after",{},void 0,!0)])]))}};var A=$(R,[["__scopeId","data-v-056f0012"]]);const S={class:"total_progressbar_label"},L={props:{label:{type:String,required:!0}},setup(c){return(r,u)=>(n(),o("div",S,g(c.label),1))}};const E={class:"progressbar-legend"},B={class:"progressbar-legend__item-desc"},M={class:"progressbar-legend__item-name"},Y={class:"progressbar-legend__item-value"},j={props:{data:{type:Array,required:!0}},setup(c){const r=c,u=l=>l.name.replace(/\s+/g,"");let d=m(()=>{let l=[];return r.data.forEach(_=>{_.forEach(i=>{l.find(v=>v.name===i.name)===void 0&&l.push(i)})}),l});return(l,_)=>(n(),o("div",E,[(n(!0),o(P,null,T(X(d),i=>(n(),o("div",{class:y(["progressbar-legend__item",[u(i),{empty:!(i.value>0)}]])},[p("div",B,[p("div",M,g(i.name),1),p("div",Y,g(i.value),1)])],2))),256))]))}};var z=$(j,[["__scopeId","data-v-42e39d42"]]);const U={class:"total_progressbar"},w={class:"total_progressbar_container"},V={props:{data:{type:Object,required:!0},ignore:{type:Array,required:!1,default:[]}},setup(c){return(r,u)=>(n(),o("div",U,[x(r.$slots,"label",{},()=>[C(L,{label:c.data.label},null,8,["label"])],!0),p("div",w,[x(r.$slots,"progressbar",{},()=>[(n(!0),o(P,null,T(c.data.data,d=>(n(),D(A,{data:d,ignore:c.ignore},null,8,["data","ignore"]))),256))],!0)]),x(r.$slots,"legend",{},()=>[C(z,{data:c.data.data},null,8,["data"])],!0),x(r.$slots,"data",{},void 0,!0)]))}};var _e=$(V,[["__scopeId","data-v-268c4dfe"]]);const G={class:"progressbar-container rtl"},O={class:"progressbar-wrapper"},H={key:0,class:"progressbar-label"},J={class:"progressbar-outer"},K={class:"after"},Q={props:{data:{type:Array,required:!0},ignore:{type:Array,required:!1,default:["Target","Not Delivered","Potential","Not Executed"]}},setup(c){const r=c,u=m(()=>r.data.filter(e=>!r.ignore.includes(e.name))),d=m(()=>{if(r.data.find(({name:e})=>e==="Target")!==void 0)return r.data.find(({name:e})=>e==="Target").value;if(r.data.find(({name:e})=>e==="Potential")!==void 0)return r.data.find(({name:e})=>e==="Potential").value});function l(e){return parseFloat((e.value/(d.value/100)).toFixed(1))+"%"}function _(e){return e.name.split(/\s+/).map(a=>a[0].toUpperCase()+a.substring(1)).join("")}function i(e){return e.name==="Delivered to TMR"||e.name==="Transit to TMR"||e.name==="Delivered"?"bottom":"top"}function v(e){let a,s,h,f;if(f=e.value===u.value[0].value,h=e.value===u.value[1].value,a=parseFloat((u.value[0].value/(d.value/100)).toFixed(1)),s=parseFloat((u.value[1].value/(d.value/100)).toFixed(1)),f){if(a+s<10&&a<5)return"transform: translateX(0%)";if(a+s>94)return"transform: translateX(100%)"}if(h){if(s<5)return"transform: translateX(0%)";if(s>94)return"transform: translateX(100%) translateY(50%)";if(a+s<20)return s<5?"transform: translateX(0%) translateY(50%)":"transform: translateX(50%) translateY(50%)"}return"transform: translateX(50%)"}function t(e){if(e==="Stock"){let a=r.data.find(({name:f})=>f==="Target").value,s=r.data.find(({name:f})=>f==="No Stock").value;return 100/a*s}return"0"}return(e,a)=>(n(),o("div",G,[p("div",O,[r.label||r.total?(n(),o("div",H,g(r.label),1)):F("",!0),p("div",J,[(n(!0),o(P,null,T(X(u),(s,h)=>(n(),o("div",{class:y(["progressbar-inner",_(s)]),style:b(["width: "+l(s),`right: ${t(s.name)}%`])},[s.value>0?(n(),o("div",{key:0,class:y(["progressbar-value",i(s)]),style:b(v(s))},g(l(s)),7)):F("",!0)],6))),256))])]),p("div",K,[x(e.$slots,"after",{},void 0,!0)])]))}};var pe=$(Q,[["__scopeId","data-v-36371377"]]);const W={class:"progressbar-container"},Z={class:"progressbar-wrapper"},ee={class:"progressbar-outer"},te={props:{data:{type:Array,required:!0},ignore:{type:Array,required:!1,default:["Target","Not Delivered","Potential","Not Executed"]}},setup(c){const r=c,u=m(()=>r.data.filter(t=>!r.ignore.includes(t.name))),d=m(()=>{if(r.data.find(({name:t})=>t==="Target")!==void 0)return r.data.find(({name:t})=>t==="Target").value;if(r.data.find(({name:t})=>t==="Potential")!==void 0)return r.data.find(({name:t})=>t==="Potential").value});function l(t){return parseFloat((t.value/(d.value/100)).toFixed(1))+"%"}function _(t){return t.name.split(/\s+/).map(e=>e[0].toUpperCase()+e.substring(1)).join("")}function i(t){return t.name==="Delivered to TMR"||t.name==="Transit to TMR"||t.name==="Delivered"?"bottom":"top"}function v(t){return parseFloat((t.value/(d.value/100)).toFixed(1))<4?"transform: translateX(0%)":parseFloat((t.value/(d.value/100)).toFixed(1))>97?"transform: translateX(-100%)":"transform: translateX(-50%)"}return(t,e)=>(n(),o("div",W,[p("div",Z,[p("div",ee,[(n(!0),o(P,null,T(X(u),(a,s)=>(n(),o("div",{class:y(["progressbar-inner",_(a)]),style:b(["width: "+l(a)])},[a.value>0?(n(),o("div",{key:0,class:y(["progressbar-value",i(a)]),style:b(v(a))},g(l(a)),7)):F("",!0)],6))),256))])])]))}};var fe=$(te,[["__scopeId","data-v-17e2028a"]]);const re={class:"progressbar-container rtl"},ae={class:"progressbar-wrapper"},se={key:0,class:"progressbar-label"},ne={class:"progressbar-outer"},oe={props:{data:{type:Array,required:!0},ignore:{type:Array,required:!1,default:["Target","Not Delivered","Potential","Not Executed"]}},setup(c){const r=c,u=m(()=>r.data.filter(e=>!r.ignore.includes(e.name))),d=m(()=>{if(r.data.find(({name:e})=>e==="Target")!==void 0)return r.data.find(({name:e})=>e==="Target").value;if(r.data.find(({name:e})=>e==="Potential")!==void 0)return r.data.find(({name:e})=>e==="Potential").value});function l(e){return parseFloat((e.value/(d.value/100)).toFixed(1))+"%"}function _(e){return e.name.split(/\s+/).map(a=>a[0].toUpperCase()+a.substring(1)).join("")}function i(e){return e.name==="Delivered to TMR"||e.name==="Transit to TMR"||e.name==="Delivered"?"bottom":"top"}function v(e){let a,s,h,f;if(f=e.value===u.value[0].value,h=e.value===u.value[1].value,a=parseFloat((u.value[0].value/(d.value/100)).toFixed(1)),s=parseFloat((u.value[1].value/(d.value/100)).toFixed(1)),f){if(a+s<10&&a<5)return"transform: translateX(0%)";if(a+s>94)return"transform: translateX(100%)"}if(h){if(s<5)return"transform: translateX(0%)";if(s>94)return"transform: translateX(100%) translateY(50%)";if(a+s<20)return s<5?"transform: translateX(0%) translateY(50%)":"transform: translateX(50%) translateY(50%)"}return"transform: translateX(50%)"}function t(e){if(e==="Stock"){let a=r.data.find(({name:f})=>f==="Target").value,s=r.data.find(({name:f})=>f==="No Stock").value;return 100/a*s}return"0"}return(e,a)=>(n(),o("div",re,[p("div",ae,[r.label||r.total?(n(),o("div",se,g(r.label),1)):F("",!0),p("div",ne,[(n(!0),o(P,null,T(X(u),(s,h)=>(n(),o("div",{class:y(["progressbar-inner",_(s)]),style:b(["width: "+l(s),`right: ${t(s.name)}%`])},[s.value>0?(n(),o("div",{key:0,class:y(["progressbar-value",i(s)]),style:b(v(s))},g(l(s)),7)):F("",!0)],6))),256))])]),x(e.$slots,"data",{},void 0,!0)]))}};var ve=$(oe,[["__scopeId","data-v-7b299a3a"]]);const le={class:"product-card-infographics"},ie={class:"stat-name"},ue={class:"stat-value"},de={props:{data:{type:Array,required:!0}},setup(c){const r=c;let u=m(()=>{let l=[];return r.data.forEach(_=>{_.forEach(i=>{l.find(v=>v.name===i.name)===void 0&&l.push(i)})}),l});function d(l){return l.split(/\s+/).map(_=>_[0].toUpperCase()+_.substring(1)).join("")}return(l,_)=>(n(),o("div",le,[(n(!0),o(P,null,T(X(u),i=>(n(),o("div",{class:y(["stat",[d(i.name),{empty:!(i.value>0)}]])},[p("span",ie,g(i.name),1),p("span",ue,g(i.value),1)],2))),256))]))}};var ge=$(de,[["__scopeId","data-v-298eb08e"]]);export{fe as I,A as P,_e as T,pe as a,ve as b,ge as c};
