import{_ as c,q as p,o as t,c as o,F as _,f as g,s as m,y as f,u as v,a as u,x as y,t as V}from"./index.f9852411.js";/* empty css                                                                    */const h={class:"filter_toggler"},x={class:"filter_toggler-option"},b=["value"],k={class:"filter_toggler-option-label"},q={props:{options:{type:Array,required:!0},modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(s,{emit:i}){const n=s,e=p({get:()=>n.modelValue,set:a=>i("update:modelValue",a)});return(a,l)=>(t(),o("div",h,[(t(!0),o(_,null,g(s.options,r=>(t(),o("label",x,[m(u("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":l[0]||(l[0]=d=>y(e)?e.value=d:null)},null,8,b),[[f,v(e)]]),u("div",k,V(r.label),1)]))),256))]))}};var D=c(q,[["__scopeId","data-v-3fed3e56"]]);export{D as O};
