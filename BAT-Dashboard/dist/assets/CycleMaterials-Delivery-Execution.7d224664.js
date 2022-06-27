import{o as s,c as d,d as r,F as v,a as T,t as C,q as R,_ as y,r as u,b as a,s as x,x as k,w as m,y as b,z as M,A as S,g as _}from"./index.c83ba64f.js";const w={class:"cycle-materials-list"},E={class:"cycle-materials-list-header"},N={class:"cycle-materials-header__label"};function I(t,e,i,c,o,l){return s(),d("div",w,[r("div",E,[(s(!0),d(v,null,T(i.labels,n=>(s(),d("div",N,C(n),1))),256))]),R(t.$slots,"item",{},void 0,!0)])}const P={props:["labels"],data(){return{}}};var h=y(P,[["render",I],["__scopeId","data-v-5c4fca7d"]]);const L={class:"cycle-materials-item-data"},H={class:"cycle-materials-item-data"},j=["src"],W={class:"cycle-materials-item-data"};function A(t,e,i,c,o,l){const n=u("ModalConstructor"),p=u("vue-easy-lightbox"),D=u("ItemData"),f=u("ItemProgressbar");return s(),d(v,null,[a(n,{visible:o.modalVisible,modalName:"CycleMaterialsModal",onHide:l.hideModal,data:o.cycleMaterialsData},null,8,["visible","onHide","data"]),a(p,{visible:o.visible,imgs:o.imgs,index:o.index,onHide:l.handleHide},null,8,["visible","imgs","index","onHide"]),r("div",{class:"cycle-materials-item showmodal",onClick:e[1]||(e[1]=()=>l.showmodal())},[r("div",L,C(i.item.label),1),r("div",H,[i.item.photo!==null?(s(),d("img",{key:0,class:"zoom cycle-materials-item__photo",src:l.importPhoto(i.item.photo),onClick:e[0]||(e[0]=x(()=>l.showSingle(l.importPhoto(i.item.photo)),["stop"]))},null,8,j)):k("",!0)]),r("div",W,[a(f,{data:i.item.stats},{data:m(()=>[a(D,{data:i.item.stats},null,8,["data"])]),_:1},8,["data"])])])],64)}const V={props:["item"],data(){return{visible:!1,modalVisible:!1,index:0,imgs:"",cycleMaterialsData:{info:{name:"GC_A_TN_Big_Mini_Sas # Lucky Strike (221100591, 221200665, 221200666, 221200668, 221200669, 221200670, 221200671, 221200672)",image:"3",totalqty:"15800",centralstorage:"02/05/2022"},weeks:[{week:"Week 22.1",number:"-4",dateStart:"30/05",dateEnd:"31/05",graph:{notDeliveredToCS:0,deliveredToCS:10,transitToCity:40,deliveredToCity:20,transitToTMR:20,deliveredToTMR:10,executed:0}},{week:"Week 22.2",number:"-3",dateStart:"01/06",dateEnd:"05/06",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:20,deliveredToCity:40,transitToTMR:10,deliveredToTMR:30,executed:25}},{week:"Week 23",number:"-2",dateStart:"06/06",dateEnd:"12/06",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:10,deliveredToCity:20,transitToTMR:20,deliveredToTMR:50,executed:40}},{week:"Week 24",number:"-1",dateStart:"13/06",dateEnd:"19/06",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:0,deliveredToCity:10,transitToTMR:30,deliveredToTMR:60,executed:45}},{week:"Week 25",number:"+1",dateStart:"20/06",dateEnd:"26/06",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:0,deliveredToCity:10,transitToTMR:20,deliveredToTMR:70,executed:50}},{week:"Week 26",number:"+2",current:!0,dateStart:"20/06",dateEnd:"26/06",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:0,deliveredToCity:0,transitToTMR:0,deliveredToTMR:100,executed:80}},{week:"Week 27",number:"+3",dateStart:"09/05",dateEnd:"15/05",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:0,deliveredToCity:0,transitToTMR:0,deliveredToTMR:0,executed:0}},{week:"Week 28",number:"+4",dateStart:"16/05",dateEnd:"22/05",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:0,deliveredToCity:0,transitToTMR:0,deliveredToTMR:0,executed:0}},{week:"Week 29",number:"+5",dateStart:"23/05",dateEnd:"29/05",graph:{notDeliveredToCS:0,deliveredToCS:0,transitToCity:0,deliveredToCity:0,transitToTMR:0,deliveredToTMR:0,executed:0}}]}}},methods:{importPhoto(t){return new URL({"./../assets/images/Cycle Materials/1.jpg":b,"./../assets/images/Cycle Materials/2.jpg":M,"./../assets/images/Cycle Materials/3.jpg":S}[`./../assets/images/Cycle Materials/${t}.jpg`],self.location).href},showSingle(t){this.imgs=t,this.show()},show(){this.visible=!0},handleHide(){this.visible=!1},showmodal(){this.modalVisible=!0,document.querySelector("body").style.overflow="hidden"},hideModal(){this.modalVisible=!1,document.querySelector("body").removeAttribute("style")}}};var g=y(V,[["render",A],["__scopeId","data-v-6bc291fa"]]);const G={class:"panel"},B={class:"panel"},q={class:"panel"},O={data(){return{mustSetTotalData:[{name:"Executed",value:902},{name:"Delivered to TMR",value:1235},{name:"Transit to TMR",value:300},{name:"Delivered to City",value:3200},{name:"Not Delivered",value:800},{name:"Target",value:4e3}],otherTotal:[{name:"Executed",value:139},{name:"Delivered to TMR",value:4124},{name:"Transit to TMR",value:300},{name:"Delivered to City",value:5900},{name:"Not Delivered",value:1100},{name:"Target",value:7e3}],mustSetProducts:[{label:"GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",photo:"1",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Transit to TMR",value:"300"},{name:"Delivered to City",value:"3500"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",photo:"1",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Transit to TMR",value:"300"},{name:"Delivered to City",value:"3500"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",photo:"1",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Transit to TMR",value:"300"},{name:"Delivered to City",value:"3500"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}],otherProducts:[{label:"GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",photo:"1",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Transit to TMR",value:"300"},{name:"Delivered to City",value:"3500"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]},{label:"GC A TN Insert for Crtystal # LS Surf (211800080 / 211800081 / 211800082)",photo:"1",stats:[{name:"Executed",value:"301"},{name:"Delivered to TMR",value:"1204"},{name:"Transit to TMR",value:"300"},{name:"Delivered to City",value:"3500"},{name:"Not Delivered",value:"500"},{name:"Target",value:"4000"}]}],visible:!1,index:0,imgs:""}},methods:{itemPhoto(t){return new URL({"./../../../assets/images/Cycle Materials/1.jpg":b,"./../../../assets/images/Cycle Materials/2.jpg":M,"./../../../assets/images/Cycle Materials/3.jpg":S}[`./../../../assets/images/Cycle Materials/${t}.jpg`],self.location).href},showSingle(t){this.imgs=t,this.show()},show(){this.visible=!0},handleHide(){this.visible=!1}}},F=Object.assign(O,{setup(t){return(e,i)=>{const c=u("vue-easy-lightbox"),o=u("ProgressbarLegend"),l=u("TotalProgressbar");return s(),d(v,null,[a(c,{visible:e.visible,imgs:e.imgs,index:e.index,onHide:e.handleHide},null,8,["visible","imgs","index","onHide"]),r("div",G,[a(l,{data:e.mustSetTotalData,label:"Must set total"},{legend:m(()=>[a(o,{inData:e.mustSetTotalData},null,8,["inData"])]),_:1},8,["data"])]),r("div",B,[a(l,{data:e.otherTotal,label:"Other total"},{legend:m(()=>[a(o,{inData:e.otherTotal},null,8,["inData"])]),_:1},8,["data"])]),r("div",q,[a(h,{labels:["Must set","Image","Execution status"]},{item:m(()=>[(s(!0),d(v,null,T(e.mustSetProducts,n=>(s(),_(g,{item:n},null,8,["item"]))),256))]),_:1}),a(h,{labels:["Other","Image","Execution status"]},{item:m(()=>[(s(!0),d(v,null,T(e.otherProducts,n=>(s(),_(g,{item:n},null,8,["item"]))),256))]),_:1})])],64)}}});export{F as default};