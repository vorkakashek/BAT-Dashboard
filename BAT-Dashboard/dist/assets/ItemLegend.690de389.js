import{_ as b,j as y,o as n,c as u,e as p,F as $,b as x,n as h,q as T,t as f,s as X,i as F,A as m,d as q,h as C}from"./index.ecd5d3eb.js";const S={class:"progressbar-container"},k={class:"progressbar-wrapper"},A={class:"progressbar-outer"},I={class:"after"},L={props:{data:{type:Array,required:!0},ignore:{type:Array,required:!1,default:["Target","Not Delivered","Potential","Not Executed"]}},setup(i){const t=i,d=y(()=>t.data.filter(r=>!t.ignore.includes(r.name))),c=y(()=>{if(t.data.find(({name:r})=>r==="Target")!==void 0)return t.data.find(({name:r})=>r==="Target").value;if(t.data.find(({name:r})=>r==="Potential")!==void 0)return t.data.find(({name:r})=>r==="Potential").value});function a(r){return parseFloat((r.value/(c.value/100)).toFixed(1))+"%"}function _(r){return r.name.split(/\s+/).map(e=>e[0].toUpperCase()+e.substring(1)).join("")}function s(r){return r.name==="Delivered to TMR"||r.name==="Transit to TMR"||r.name==="Delivered"?"bottom":"top"}function v(r){return parseFloat((r.value/(c.value/100)).toFixed(1))<4?"transform: translateX(0%)":parseFloat((r.value/(c.value/100)).toFixed(1))>97?"transform: translateX(-100%)":"transform: translateX(-50%)"}return(r,e)=>(n(),u("div",S,[p("div",k,[p("div",A,[(n(!0),u($,null,x(F(d),(o,l)=>(n(),u("div",{class:h(["progressbar-inner",_(o)]),style:T(["width: "+a(o)])},[o.value>0?(n(),u("div",{key:0,class:h(["progressbar-value",s(o)]),style:T(v(o))},f(a(o)),7)):X("",!0)],6))),256))])]),p("div",I,[m(r.$slots,"after",{},void 0,!0)])]))}};var N=b(L,[["__scopeId","data-v-3282d718"]]);const D={class:"total_progressbar_label"},E={props:{label:{type:String,required:!0}},setup(i){return(t,d)=>(n(),u("div",D,f(i.label),1))}};const B={class:"progressbar-legend"},R={class:"progressbar-legend__item-desc"},j={class:"progressbar-legend__item-name"},z={class:"progressbar-legend__item-value"},M={props:{data:{type:Array,required:!0}},setup(i){const t=i,d=a=>a.name.replace(/\s+/g,"");let c=y(()=>{let a=[];return t.data.forEach(_=>{_.forEach(s=>{a.find(v=>v.name===s.name)===void 0&&a.push(s)})}),a});return(a,_)=>(n(),u("div",B,[(n(!0),u($,null,x(F(c),s=>(n(),u("div",{class:h(["progressbar-legend__item",[d(s),{empty:!(s.value>0)}]])},[p("div",R,[p("div",j,f(a.$t(`${s.name}`)),1),p("div",z,f(s.value),1)])],2))),256))]))}};var Y=b(M,[["__scopeId","data-v-514e1bd8"]]);const U={class:"total_progressbar"},V={class:"total_progressbar_container"},w={props:{data:{type:Object,required:!0},ignore:{type:Array,required:!1,default:[]}},setup(i){return(t,d)=>(n(),u("div",U,[m(t.$slots,"label",{},()=>[q(E,{label:i.data.label},null,8,["label"])],!0),p("div",V,[m(t.$slots,"progressbar",{},()=>[(n(!0),u($,null,x(i.data.data,c=>(n(),C(N,{data:c,ignore:i.ignore},null,8,["data","ignore"]))),256))],!0)]),m(t.$slots,"legend",{},()=>[q(Y,{data:i.data.data},null,8,["data"])],!0),m(t.$slots,"data",{},void 0,!0)]))}};var ae=b(w,[["__scopeId","data-v-74097f5f"]]);const O={class:"progressbar-container rtl"},G={class:"progressbar-wrapper"},H={key:0,class:"progressbar-label"},J={class:"progressbar-outer"},K={class:"after"},Q={props:{data:{type:Array,required:!0},ignore:{type:Array,required:!1,default:["Target","Not Delivered","Potential","Not Executed"]}},setup(i){const t=i,d=y(()=>t.data.filter(e=>!t.ignore.includes(e.name))),c=y(()=>{if(t.data.find(({name:e})=>e==="Target")!==void 0)return t.data.find(({name:e})=>e==="Target").value;if(t.data.find(({name:e})=>e==="Potential")!==void 0)return t.data.find(({name:e})=>e==="Potential").value});function a(e){return parseFloat((e.value/(c.value/100)).toFixed(1))+"%"}function _(e){return e.name.split(/\s+/).map(o=>o[0].toUpperCase()+o.substring(1)).join("")}function s(e){return e.name==="Delivered to TMR"||e.name==="Transit to TMR"||e.name==="Delivered"?"bottom":"top"}function v(e){let o,l,P,g;if(g=e.value===d.value[0].value,P=e.value===d.value[1].value,o=parseFloat((d.value[0].value/(c.value/100)).toFixed(1)),l=parseFloat((d.value[1].value/(c.value/100)).toFixed(1)),g){if(o+l<10&&o<5)return"transform: translateX(0%)";if(o+l>94)return"transform: translateX(100%)"}if(P){if(l<5)return"transform: translateX(0%)";if(l>94)return"transform: translateX(100%) translateY(50%)";if(o+l<20)return l<5?"transform: translateX(0%) translateY(50%)":"transform: translateX(50%) translateY(50%)"}return"transform: translateX(50%)"}function r(e){if(e==="Stock"){let o=t.data.find(({name:g})=>g==="Target").value,l=t.data.find(({name:g})=>g==="No Stock").value;return 100/o*l}return"0"}return(e,o)=>(n(),u("div",O,[p("div",G,[t.label||t.total?(n(),u("div",H,f(e.$t(`${t.label}`)),1)):X("",!0),p("div",J,[(n(!0),u($,null,x(F(d),(l,P)=>(n(),u("div",{class:h(["progressbar-inner",_(l)]),style:T(["width: "+a(l),`right: ${r(l.name)}%`])},[l.value>0?(n(),u("div",{key:0,class:h(["progressbar-value",s(l)]),style:T(v(l))},f(a(l)),7)):X("",!0)],6))),256))])]),p("div",K,[m(e.$slots,"after",{},void 0,!0)])]))}};var se=b(Q,[["__scopeId","data-v-721b7ef8"]]);const W={class:"product-card-infographics"},Z={class:"stat-name"},ee={class:"stat-value"},te={props:{data:{type:Array,required:!0}},setup(i){const t=i;let d=y(()=>{let a=[];return t.data.forEach(_=>{_.forEach(s=>{a.find(v=>v.name===s.name)===void 0&&a.push(s)})}),a});function c(a){return a.split(/\s+/).map(_=>_[0].toUpperCase()+_.substring(1)).join("")}return(a,_)=>(n(),u("div",W,[(n(!0),u($,null,x(F(d),s=>(n(),u("div",{class:h(["stat",[c(s.name),{empty:!(s.value>0)}]])},[p("span",Z,f(s.name),1),p("span",ee,f(s.value),1)],2))),256))]))}};var ne=b(te,[["__scopeId","data-v-04f69e3e"]]);export{ne as I,N as P,ae as T,se as a};
