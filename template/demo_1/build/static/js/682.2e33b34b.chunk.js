"use strict";(self.webpackChunkcorona_react=self.webpackChunkcorona_react||[]).push([[682],{3682:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(181);var a=l(4942),r=l(1413),c=l(2982),m=l(885),o=l(2791),u=l.n(o),i=(l(4091),l(1341)),s=l(4880),d=function(){var e,t,l=(0,s.useHistory)(),d=(0,o.useState)([]),E=(0,m.Z)(d,2),f=E[0],h=E[1],p=(0,o.useState)([]),v=(0,m.Z)(p,2),y=v[0],N=v[1],b=(0,o.useState)(!1),g=(0,m.Z)(b,2),S=g[0],C=g[1],O=(0,o.useState)([]),w=(0,m.Z)(O,2),x=w[0],P=w[1],T=(0,o.useState)({itemStage:"",customerName:""}),I=(0,m.Z)(T,2),k=I[0],F=I[1],R=f.map((function(e){return e.customerName})),Z=(e=R,(0,c.Z)(new Set(e))).map((function(e){return{customerName:e}})),D=function(e){var t=e.target,l=t.name,n=t.value;F((0,r.Z)((0,r.Z)({},k),{},(0,a.Z)({},l,n)))},W=function(e){var t=e.currentTarget.nextSibling;t.className.indexOf("collapse show")>-1?t.classList.remove("show"):t.classList.add("show")},L=new Map,j=function(e,t){var l="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!l){if(Array.isArray(e)||(l=(0,n.Z)(e))||t&&e&&"number"===typeof e.length){l&&(e=l);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,m=!0,o=!1;return{s:function(){l=l.call(e)},n:function(){var e=l.next();return m=e.done,e},e:function(e){o=!0,c=e},f:function(){try{m||null==l.return||l.return()}finally{if(o)throw c}}}}(f);try{for(j.s();!(t=j.n()).done;){var Q=t.value;L.set(Q.orderNo,Q)}}catch(M){j.e(M)}finally{j.f()}var U=Array.from(L.values()),A=function(e){console.log(e),fetch("http://localhost:4000/CustomerOrderForm/newCustOrdModel/getAllCustOrdByorderRefNo/".concat(e)).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).then((function(e){x.find((function(t){return t.orderRefNo===e.orderRefNo}))?P(x.filter((function(t){return t.orderRefNo!==e.orderRefNo}))):(P([].concat((0,c.Z)(x),[e])),console.log(x))})).catch((function(e){console.error("Error fetching user data:",e)}))};return(0,o.useEffect)((function(){fetch("http://localhost:4000/CustomerOrderForm/getAllFromNew").then((function(e){return e.json()})).then((function(e){return console.log(e),e})).then((function(e){h(e)})).catch((function(e){return console.log(e)}))}),[]),u().createElement(u().Fragment,null,u().createElement("div",{className:"page-header"},u().createElement("h1",{className:"page-title"},"New Order Form View")),u().createElement("div",{className:"col-lg-12 grid-margin stretch-card"},u().createElement("div",{className:"card"},u().createElement("div",{className:"card-body"},u().createElement("h5",{className:"card-title"},"Filter"),u().createElement("div",{className:"row"},u().createElement("div",{className:"col-md-4"},u().createElement(i.Z.Group,null,u().createElement("div",{className:"input-group"},u().createElement(i.Z.Control,{autoComplete:"off",type:"text",value:k.customerName,onChange:D,name:"customerName",className:"form-control",placeholder:"Search by Customer Name"}),u().createElement("div",{className:"input-group-append"},u().createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return k.customerName,N([]),void fetch("http://localhost:4000/CustomerOrderForm/newCustOrdModel/getAllOrderBelongingToOneCustomer/".concat(k.customerName)).then((function(e){return e.json()})).then((function(e){N(e),C(!0),F({customerName:""})})).catch((function(e){alert("Enter a valid Customer Name "),console.log(e)}))},type:"submit"},"Search"),u().createElement("div",{className:"dropdown-menu DropDown"},Z.filter((function(e){var t=k.customerName.toLowerCase(),l=e.customerName.toLowerCase();return t&&l.startsWith(t)&&l!==t})).slice(0,10).map((function(e,t){return u().createElement("option",{className:"DropDown-row text-primary",onClick:function(){return F({customerName:e.customerName})},key:t},e.customerName)}))))))),u().createElement("div",{className:"col-md-4"},u().createElement(i.Z.Group,{className:"row"},u().createElement("label",{htmlFor:"itemStage",className:"col-sm-3 col-form-label"},"Item Stage"),u().createElement("div",{className:"col-sm-8"},u().createElement("select",{type:"text",value:k.itemStage,onChange:D,name:"itemStage",className:"form-control",id:"itemStage"},u().createElement("option",{value:""}," Select"),u().createElement("option",{value:"FINISHED"},"FINISHED "),u().createElement("option",{value:"FINISHED-WO SCREW"},"FINISHED-WO SCREW "),u().createElement("option",{value:"BLK-WO SCREW"},"BLK-WO SCREW "),u().createElement("option",{value:"DP-WO SCREW"},"DP-WO SCREW "),u().createElement("option",{value:"WO ST- DP-WO SCREW"},"WO ST- DP-WO SCREW "),u().createElement("option",{value:"WO CUTTING-DP-WO SCREW"},"WO CUTTING-DP-WO SCREW "))))),u().createElement("div",{className:"col-md-2"},u().createElement("button",{type:"submit",onClick:function(){C(!1)},className:"btn btn-outline-primary mr-2"},"View All")))))),u().createElement("div",{className:"col-lg-12 grid-margin stretch-card"},u().createElement("div",{className:"card"},u().createElement("div",{className:"card-body"},u().createElement("div",{className:"table-responsive OFtable-res "},S?u().createElement("table",{className:"table table-bordered OFtable "},u().createElement("thead",null,u().createElement("tr",null,u().createElement("th",null,"Select"),u().createElement("th",null,"SL.No"),u().createElement("th",null,"Customer Name"),u().createElement("th",null,"Order Ref No"),u().createElement("th",null,"Final Iname"),u().createElement("th",null,"Item Quantity"),u().createElement("th",null,"Available Quantity"),u().createElement("th",null,"Placed Order Date"),u().createElement("th",null,"required Date"),u().createElement("th",null,"Cust order Touch"),u().createElement("th",null,"Target Touch"),u().createElement("th",null,"seal"),u().createElement("th",null,"Quality series"),u().createElement("th",null,"Sale Name"),u().createElement("th",null,"Item Stage"),u().createElement("th",null,"No. Of Design"),u().createElement("th",null,"Quantity/Design"),u().createElement("th",null,"Unit Weight UL"),u().createElement("th",null,"Unit Weight LL"),u().createElement("th",null,"Estimated Weight"),u().createElement("th",null,"Screw Make"),u().createElement("th",null,"Screw Size"),u().createElement("th",null,"Cutting Type"),u().createElement("th",null,"Cutting Design"),u().createElement("th",null,"Stone Brand"),u().createElement("th",null,"Polish Type"),u().createElement("th",null,"Dimmy Col Type"),u().createElement("th",null,"SILSUR color Type"),u().createElement("th",null,"Surface Finish"),u().createElement("th",null,"Coat"),u().createElement("th",null,"Card Type"),u().createElement("th",null,"Card Fittin Plan"),u().createElement("th",null,"Stone Setting Type"),u().createElement("th",null,"Remarks"))),u().createElement("tbody",null,y.map((function(e,t,l){return u().createElement(u().Fragment,null,u().createElement("tr",{key:l},u().createElement("td",null,u().createElement("div",{className:"form-check form-check-muted m-0"},u().createElement("label",{className:"form-check-label"},u().createElement("input",{type:"checkbox",className:"form-check-input",onChange:function(){A(e.orderRefNo)}}),u().createElement("i",{className:"input-helper"})))),u().createElement("td",null,t+1),u().createElement("td",null,e.customerName),u().createElement("td",null,e.orderRefNo),u().createElement("td",null,e.finalIname),u().createElement("td",null,e.itemQuantity),u().createElement("td",{className:e.availQuantity===e.itemQuantity?"text-success":"text-warning"},e.availQuantity),u().createElement("td",null,e.placedOrderDate),u().createElement("td",null,e.requiredDate),u().createElement("td",null,e.customerOrderTouch),u().createElement("td",null,e.targetTouch),u().createElement("td",null,e.seal),u().createElement("td",null,e.qualitySeries),u().createElement("td",null,e.saleName),u().createElement("td",null,e.itemStage),u().createElement("td",null,e.noOfDesign),u().createElement("td",null,e.quantityPerDesign),u().createElement("td",null,e.unitWT_UL),u().createElement("td",null,e.unitWT_LL),u().createElement("td",null,e.estimatedWeight),u().createElement("td",null,e.screwMake),u().createElement("td",null,e.screwSize),u().createElement("td",null,e.cuttingType),u().createElement("td",null,e.cuttingDesign),u().createElement("td",null,e.stoneBrand),u().createElement("td",null,e.polishType),u().createElement("td",null,e.dimmyColType),u().createElement("td",null,e.SILSURColouringType),u().createElement("td",null,e.surfaceFinish),u().createElement("td",null,e.coat),u().createElement("td",null,e.cardType),u().createElement("td",null,e.cfPlan),u().createElement("td",null,e.stoneSettingType),u().createElement("td",null,e.remarks)))})))):u().createElement("table",{className:"table table-bordered OFtable "},u().createElement("thead",null,u().createElement("tr",null,u().createElement("th",null," SL No. "),u().createElement("th",null,"Customer Name"),u().createElement("th",null,"Order NO"))),u().createElement("tbody",null,U.map((function(e,t){return u().createElement(u().Fragment,null,u().createElement("tr",{className:"collapseRow",onClick:W},u().createElement("td",null,t+1),u().createElement("td",null,e.customerName),u().createElement("td",null,e.orderNo)),u().createElement("tr",{className:"collapse"},u().createElement("td",{colSpan:"6"},u().createElement("div",{className:"table-responsive OFtable-res "},u().createElement("table",{className:"table table-bordered OFtable "},u().createElement("thead",null,u().createElement("tr",null,u().createElement("th",null,"Select"),u().createElement("th",null,"SL.No"),u().createElement("th",null,"Order Ref No"),u().createElement("th",null,"Final Iname"),u().createElement("th",null,"Item Quantity"),u().createElement("th",null,"Available Quantity"),u().createElement("th",null,"Placed Order Date"),u().createElement("th",null,"required Date"),u().createElement("th",null,"Cust order Touch"),u().createElement("th",null,"Target Touch"),u().createElement("th",null,"seal"),u().createElement("th",null,"Quality series"),u().createElement("th",null,"Sale Name"),u().createElement("th",null,"Item Stage"),u().createElement("th",null,"No. Of Design"),u().createElement("th",null,"Quantity/Design"),u().createElement("th",null,"Unit Weight UL"),u().createElement("th",null,"Unit Weight LL"),u().createElement("th",null,"Estimated Weight"),u().createElement("th",null,"Screw Make"),u().createElement("th",null,"Screw Size"),u().createElement("th",null,"Cutting Type"),u().createElement("th",null,"Cutting Design"),u().createElement("th",null,"Stone Brand"),u().createElement("th",null,"Polish Type"),u().createElement("th",null,"Dimmy Col Type"),u().createElement("th",null,"SILSUR color Type"),u().createElement("th",null,"Surface Finish"),u().createElement("th",null,"Coat"),u().createElement("th",null,"Card Type"),u().createElement("th",null,"Card Fittin Plan"),u().createElement("th",null,"Stone Setting Type"),u().createElement("th",null,"Remarks"))),u().createElement("tbody",null,f.filter((function(t){return t.orderNo===e.orderNo})).map((function(e,t,l){return u().createElement(u().Fragment,null,u().createElement("tr",{key:l},u().createElement("td",null,u().createElement("div",{className:"form-check form-check-muted m-0"},u().createElement("label",{className:"form-check-label"},u().createElement("input",{type:"checkbox",className:"form-check-input",onChange:function(){A(e.orderRefNo)}}),u().createElement("i",{className:"input-helper"})))),u().createElement("td",null,t+1),u().createElement("td",null,e.orderRefNo),u().createElement("td",null,e.finalIname),u().createElement("td",null,e.itemQuantity),u().createElement("td",{className:e.availQuantity===e.itemQuantity?"text-success":"text-warning"},e.availQuantity),u().createElement("td",null,e.placedOrderDate),u().createElement("td",null,e.requiredDate),u().createElement("td",null,e.customerOrderTouch),u().createElement("td",null,e.targetTouch),u().createElement("td",null,e.seal),u().createElement("td",null,e.qualitySeries),u().createElement("td",null,e.saleName),u().createElement("td",null,e.itemStage),u().createElement("td",null,e.noOfDesign),u().createElement("td",null,e.quantityPerDesign),u().createElement("td",null,e.unitWT_UL),u().createElement("td",null,e.unitWT_LL),u().createElement("td",null,e.estimatedWeight),u().createElement("td",null,e.screwMake),u().createElement("td",null,e.screwSize),u().createElement("td",null,e.cuttingType),u().createElement("td",null,e.cuttingDesign),u().createElement("td",null,e.stoneBrand),u().createElement("td",null,e.polishType),u().createElement("td",null,e.dimmyColType),u().createElement("td",null,e.SILSURColouringType),u().createElement("td",null,e.surfaceFinish),u().createElement("td",null,e.coat),u().createElement("td",null,e.cardType),u().createElement("td",null,e.cfPlan),u().createElement("td",null,e.stoneSettingType),u().createElement("td",null,e.remarks)))}))))))))})))))))),u().createElement("div",{className:"col-lg-12 grid-margin stretch-card"},u().createElement("div",{className:"card"},u().createElement("div",{className:"card-body"},u().createElement("div",{className:"row"},u().createElement("div",{className:"col-md-3"},u().createElement("button",{type:"submit",onClick:function(){l.push("/gold-smith/order",{state:x})},className:"btn btn-primary mr-4"},"Create Gold Smith Order")))))))}},3573:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,r.default)((function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,l);null!=t&&(a=t)}})),a}))};var n,a=l(6054),r=(n=a)&&n.__esModule?n:{default:n};e.exports=t.default},6054:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,l,n,a,r,c){var m=a||"<<anonymous>>",o=c||n;if(null==l[n])return t?new Error("Required "+r+" `"+o+"` was not specified in `"+m+"`."):null;for(var u=arguments.length,i=Array(u>6?u-6:0),s=6;s<u;s++)i[s-6]=arguments[s];return e.apply(void 0,[l,n,m,r,o].concat(i))}var l=t.bind(null,!1);return l.isRequired=t.bind(null,!0),l},e.exports=t.default},2677:function(e,t,l){var n=l(7462),a=l(3366),r=l(1694),c=l.n(r),m=l(2791),o=l.n(m),u=l(162),i=["xl","lg","md","sm","xs"],s=o().forwardRef((function(e,t){var l=e.bsPrefix,r=e.className,m=e.as,s=void 0===m?"div":m,d=(0,a.Z)(e,["bsPrefix","className","as"]),E=(0,u.vE)(l,"col"),f=[],h=[];return i.forEach((function(e){var t,l,n,a=d[e];if(delete d[e],null!=a&&"object"===typeof a){var r=a.span;t=void 0===r||r,l=a.offset,n=a.order}else t=a;var c="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+E+c:""+E+c+"-"+t),null!=n&&h.push("order"+c+"-"+n),null!=l&&h.push("offset"+c+"-"+l)})),f.length||f.push(E),o().createElement(s,(0,n.Z)({},d,{ref:t,className:c().apply(void 0,[r].concat(f,h))}))}));s.displayName="Col",t.Z=s},1341:function(e,t,l){l.d(t,{Z:function(){return W}});var n=l(7462),a=l(3366),r=l(1694),c=l.n(r),m=l(2791),o=l.n(m),u=(l(3573),l(2007)),i=l.n(u),s={type:i().string.isRequired,as:i().elementType},d=o().forwardRef((function(e,t){var l=e.as,r=void 0===l?"div":l,m=e.className,u=e.type,i=(0,a.Z)(e,["as","className","type"]);return o().createElement(r,(0,n.Z)({},i,{ref:t,className:c()(m,u&&u+"-feedback")}))}));d.displayName="Feedback",d.propTypes=s,d.defaultProps={type:"valid"};var E=d,f=o().createContext({controlId:void 0}),h=l(162),p=o().forwardRef((function(e,t){var l=e.id,r=e.bsPrefix,u=e.bsCustomPrefix,i=e.className,s=e.isValid,d=e.isInvalid,E=e.isStatic,p=e.as,v=void 0===p?"input":p,y=(0,a.Z)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),N=(0,m.useContext)(f),b=N.controlId;return r=N.custom?(0,h.vE)(u,"custom-control-input"):(0,h.vE)(r,"form-check-input"),o().createElement(v,(0,n.Z)({},y,{ref:t,id:l||b,className:c()(i,r,s&&"is-valid",d&&"is-invalid",E&&"position-static")}))}));p.displayName="FormCheckInput",p.defaultProps={type:"checkbox"};var v=p,y=o().forwardRef((function(e,t){var l=e.bsPrefix,r=e.bsCustomPrefix,u=e.className,i=e.htmlFor,s=(0,a.Z)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=(0,m.useContext)(f),E=d.controlId;return l=d.custom?(0,h.vE)(r,"custom-control-label"):(0,h.vE)(l,"form-check-label"),o().createElement("label",(0,n.Z)({},s,{ref:t,htmlFor:i||E,className:c()(u,l)}))}));y.displayName="FormCheckLabel";var N=y,b=o().forwardRef((function(e,t){var l=e.id,r=e.bsPrefix,u=e.bsCustomPrefix,i=e.inline,s=e.disabled,d=e.isValid,p=e.isInvalid,y=e.feedback,b=e.className,g=e.style,S=e.title,C=e.type,O=e.label,w=e.children,x=e.custom,P=e.as,T=void 0===P?"input":P,I=(0,a.Z)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===C||x;r=k?(0,h.vE)(u,"custom-control"):(0,h.vE)(r,"form-check");var F=(0,m.useContext)(f).controlId,R=(0,m.useMemo)((function(){return{controlId:l||F,custom:k}}),[F,k,l]),Z=null!=O&&!1!==O&&!w,D=o().createElement(v,(0,n.Z)({},I,{type:"switch"===C?"checkbox":C,ref:t,isValid:d,isInvalid:p,isStatic:!Z,disabled:s,as:T}));return o().createElement(f.Provider,{value:R},o().createElement("div",{style:g,className:c()(b,r,k&&"custom-"+C,i&&r+"-inline")},w||o().createElement(o().Fragment,null,D,Z&&o().createElement(N,{title:S},O),(d||p)&&o().createElement(E,{type:d?"valid":"invalid"},y))))}));b.displayName="FormCheck",b.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},b.Input=v,b.Label=N;var g=b,S=(l(4237),o().forwardRef((function(e,t){var l,r,u=e.bsPrefix,i=e.type,s=e.size,d=e.id,E=e.className,p=e.isValid,v=e.isInvalid,y=e.plaintext,N=e.readOnly,b=e.as,g=void 0===b?"input":b,S=(0,a.Z)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=(0,m.useContext)(f).controlId;if(u=(0,h.vE)(u,"form-control"),y)(r={})[u+"-plaintext"]=!0,l=r;else if("file"===i){var O;(O={})[u+"-file"]=!0,l=O}else{var w;(w={})[u]=!0,w[u+"-"+s]=s,l=w}return o().createElement(g,(0,n.Z)({},S,{type:i,ref:t,readOnly:N,id:d||C,className:c()(E,l,p&&"is-valid",v&&"is-invalid")}))})));S.displayName="FormControl",S.Feedback=E;var C=S,O=o().forwardRef((function(e,t){var l=e.bsPrefix,r=e.className,u=e.children,i=e.controlId,s=e.as,d=void 0===s?"div":s,E=(0,a.Z)(e,["bsPrefix","className","children","controlId","as"]);l=(0,h.vE)(l,"form-group");var p=(0,m.useMemo)((function(){return{controlId:i}}),[i]);return o().createElement(f.Provider,{value:p},o().createElement(d,(0,n.Z)({},E,{ref:t,className:c()(r,l)}),u))}));O.displayName="FormGroup";var w=O,x=l(2677),P=o().forwardRef((function(e,t){var l=e.bsPrefix,r=e.column,u=e.srOnly,i=e.className,s=e.htmlFor,d=(0,a.Z)(e,["bsPrefix","column","srOnly","className","htmlFor"]),E=(0,m.useContext)(f).controlId;l=(0,h.vE)(l,"form-label");var p=c()(i,l,u&&"sr-only",r&&"col-form-label");return s=s||E,r?o().createElement(x.Z,(0,n.Z)({as:"label",className:p,htmlFor:s},d)):o().createElement("label",(0,n.Z)({ref:t,className:p,htmlFor:s},d))}));P.displayName="FormLabel",P.defaultProps={column:!1,srOnly:!1};var T=P,I=o().forwardRef((function(e,t){var l=e.bsPrefix,r=e.className,m=e.as,u=void 0===m?"small":m,i=e.muted,s=(0,a.Z)(e,["bsPrefix","className","as","muted"]);return l=(0,h.vE)(l,"form-text"),o().createElement(u,(0,n.Z)({},s,{ref:t,className:c()(r,l,i&&"text-muted")}))}));I.displayName="FormText";var k=I,F=o().forwardRef((function(e,t){return o().createElement(g,(0,n.Z)({},e,{ref:t,type:"switch"}))}));F.displayName="Switch",F.Input=g.Input,F.Label=g.Label;var R=F,Z=l(7272),D=o().forwardRef((function(e,t){var l=e.bsPrefix,r=e.inline,m=e.className,u=e.validated,i=e.as,s=void 0===i?"form":i,d=(0,a.Z)(e,["bsPrefix","inline","className","validated","as"]);return l=(0,h.vE)(l,"form"),o().createElement(s,(0,n.Z)({},d,{ref:t,className:c()(m,u&&"was-validated",r&&l+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=(0,Z.Z)("form-row"),D.Group=w,D.Control=C,D.Check=g,D.Switch=R,D.Label=T,D.Text=k;var W=D},4091:function(){},1413:function(e,t,l){l.d(t,{Z:function(){return r}});var n=l(4942);function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){(0,n.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}}}]);
//# sourceMappingURL=682.2e33b34b.chunk.js.map