import{r as i,f as p,a,o,c as d,g as v,d as s,T as f,F as _}from"./index.2af05fba.js";const g={setup(V){const n=[{value:0,label:"ALL SELECTED"},{value:1,label:"Item 1"},{value:2,label:"Item 2"},{value:3,label:"Item 3"},{value:4,label:"Item 3 asdas das asd"}],e=i([0]);p(e,l=>{l.length<1&&(e.value=[0])});function u(l){l==0&&(e.value=[0]),l!==0&&e.value.includes(0)&&(e.value=e.value.filter(t=>t!==0))}return(l,t)=>{const c=a("Multiselect"),r=a("RouterView");return o(),d(_,null,[(o(),v(f,{to:"#multiselector"},[s(c,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m),"close-on-select":!0,options:n,mode:"tags",onSelect:u,searchable:!0,placeholder:"Start typing or select..."},null,8,["modelValue"])])),s(r)],64)}}};export{g as default};
