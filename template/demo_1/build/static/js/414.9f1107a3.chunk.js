"use strict";(self.webpackChunkcorona_react=self.webpackChunkcorona_react||[]).push([[414],{8414:function(e,t,l){l.r(t);var a=l(4165),r=l(5861),n=l(2982),c=l(4942),m=l(1413),o=l(885),i=l(2791),s=l.n(i),u=(l(4091),l(1341)),d=l(542);t.default=function(){var e,t=(0,d.k6)(),l=(0,i.useState)(!1),E=(0,o.Z)(l,2),h=E[0],f=E[1],N=(0,i.useState)([]),p=(0,o.Z)(N,2),y=p[0],v=p[1],g=(0,i.useState)([]),b=(0,o.Z)(g,2),C=b[0],S=(b[1],(0,i.useState)([])),O=(0,o.Z)(S,2),Q=O[0],w=O[1],T=(0,i.useState)(!1),A=(0,o.Z)(T,2),Z=A[0],R=(A[1],(0,i.useState)({orderNo:"",allocdQty:"",QtyToBeAllocd:"",allocdWt:"",WtToBeAllocd:""})),W=(0,o.Z)(R,2),x=W[0],k=W[1],G=function(e){var t=e.target,l=t.name,a=t.value;k((0,m.Z)((0,m.Z)({},x),{},(0,c.Z)({},l,a)))};return s().createElement(s().Fragment,null,s().createElement("div",{className:"col-lg-12 grid-margin stretch-card"},s().createElement("div",{className:"card"},s().createElement("div",{className:"card-body"},s().createElement("h3",{className:"card-title"},"Gold Smith Orders"),s().createElement("form",{className:"forms-sample"},s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-6"},s().createElement("p",{className:"text-warning"},"No Line Items Are Selected, go to Orders View Page and Select Line Items."),s().createElement(u.Z.Group,null,s().createElement("button",{type:"submit",onClick:function(){t.push("/customer-order-form/order-form-view")},className:"btn btn-outline-primary mr-4"},"Go To View Page.")))))))),Z?s().createElement("div",{className:"col-md-12 grid-margin stretch-card"},s().createElement("div",{className:"card"},s().createElement("div",{className:"card-body"},s().createElement("h4",null,"Order Number ",s().createElement("span",{className:"text-primary"},C.OrderNo)),s().createElement("br",null),s().createElement("h5",null,"CUstomer Name ",s().createElement("span",{className:"text-primary"},C.customerName)),s().createElement("br",null),s().createElement("div",{className:"table-responsive OFtable-res "},s().createElement("table",{className:"table table-bordered OFtable "},s().createElement("thead",null,s().createElement("tr",null,s().createElement("th",null,"SL.No"),s().createElement("th",null,"Click "),s().createElement("th",null,"Order Number"),s().createElement("th",null,"Order reference Number"),s().createElement("th",null,"Placed Order Date"),s().createElement("th",null,"required Date"),s().createElement("th",null,"Cust order Touch"),s().createElement("th",null,"Target Touch"),s().createElement("th",null,"seal"),s().createElement("th",null,"Quality series"),s().createElement("th",null,"Final Iname"),s().createElement("th",null,"Sale Name"),s().createElement("th",null,"Item Stage"),s().createElement("th",null,"No. Of Design"),s().createElement("th",null,"Quantity/Design"),s().createElement("th",null,"Item Quantity"),s().createElement("th",null,"Available Quantity"),s().createElement("th",null,"Unit Weight UL"),s().createElement("th",null,"Unit Weight LL"),s().createElement("th",null,"Estimated Weight"),s().createElement("th",null,"Screw Make"),s().createElement("th",null,"Screw Size"),s().createElement("th",null,"Cutting Type"),s().createElement("th",null,"Cutting Design"),s().createElement("th",null,"Stone Brand"),s().createElement("th",null,"Polish Type"),s().createElement("th",null,"Dimmy Col Type"),s().createElement("th",null,"SILSUR color Type"),s().createElement("th",null,"Surface Finish"),s().createElement("th",null,"Coat"),s().createElement("th",null,"Card Type"),s().createElement("th",null,"Card Fittin Plan"),s().createElement("th",null,"Stone Setting Type"),s().createElement("th",null,"Remarks"))),s().createElement("tbody",null,C&&C.lineItem.map((function(e,t){return s().createElement("tr",null,s().createElement("td",null,t+1),s().createElement("td",null,s().createElement("button",{className:"btn btn-outline-primary mr-4",onClick:function(){var t,l;t=e.orderRefNo,l=e.itemIndex,fetch("http://localhost:4000/CustomerOrderForm/getSpecificLineItem/".concat(t,"/").concat(l)).then((function(e){return e.json()})).then((function(e){w(e)})).catch((function(e){return console.log(e)}))}},"get")),s().createElement("td",null,e.OrderNo),s().createElement("td",null,e.orderRefNo),s().createElement("td",null,e.placedOrderDate),s().createElement("td",null,e.requiredDate),s().createElement("td",null,e.customerOrderTouch),s().createElement("td",null,e.targetTouch),s().createElement("td",null,e.seal),s().createElement("td",null,e.qualitySeries),s().createElement("td",null,e.finalIname),s().createElement("td",null,e.saleName),s().createElement("td",null,e.itemStage),s().createElement("td",null,e.noOfDesign),s().createElement("td",null,e.QuantityPerDesign),s().createElement("td",null,e.itemQuantity),s().createElement("td",{className:"text-success"},e.availQuantity),s().createElement("td",null,e.unitWT_UL),s().createElement("td",null,e.unitWT_LL),s().createElement("td",null,e.estimatedWeight),s().createElement("td",null,e.ScrewMake),s().createElement("td",null,e.screwSize),s().createElement("td",null,e.cuttingType),s().createElement("td",null,e.cuttingDesign),s().createElement("td",null,e.stoneBrand),s().createElement("td",null,e.polishType),s().createElement("td",null,e.dimmyColType),s().createElement("td",null,e.SILSURColouringType),s().createElement("td",null,e.surfaceFinish),s().createElement("td",null,e.Coat),s().createElement("td",null,e.cardType),s().createElement("td",null,e.cfPlan),s().createElement("td",null,e.stoneSettingType),s().createElement("td",null,e.remarks))})))))))):"",s().createElement("div",{className:"col-md-12 grid-margin stretch-card"},s().createElement("div",{className:"card"},s().createElement("div",{className:"card-body"},s().createElement("h4",{className:"card-title"},"Gold Smith Order"),s().createElement("form",{className:"forms-sample"},s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"orderNO",className:"col-sm-4 col-form-label"},"Order Number "),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"orderNO",value:Q.OrderNo,onChange:G,className:"form-control",id:"orderNO",placeholder:"Order Number"})))),s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"itemName",className:"col-sm-4 col-form-label"},"Item Name"),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"itemName",value:Q.finalIname,onChange:G,className:"form-control",id:"itemName",placeholder:"Item Name"}))))),s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"goldSmithName",className:"col-sm-4 col-form-label"},"Gold Smith Name "),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"GSName",value:x.GSName,onChange:G,className:"form-control",id:"goldSmithName",placeholder:"Gold Smith Name"})))),s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"orderQuantity",className:"col-sm-4 col-form-label"},"Available Quantity"),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"OrderedQty",value:Q.availQuantity,onChange:G,className:"form-control",id:"orderQuantity",placeholder:"Available Quantity"}))))),s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"allocdWt",className:"col-sm-4 col-form-label"}," Allocated Weight"),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"allocdWt",value:x.allocdWt,onChange:G,className:"form-control",id:"allocdWt",placeholder:"Allocated Weight"})))),s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"WtToBeAllocd",className:"col-sm-4 col-form-label"}," weight To Be Allocated"),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"WtToBeAllocd",value:x.WtToBeAllocd,onChange:G,className:"form-control",id:"WtToBeAllocd",placeholder:" Weight To Be Allocated"}))))),s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"AlloQty",className:"col-sm-4 col-form-label"}," Allocated Quantity"),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"allocdQty",value:x.allocdQty,onChange:G,className:"form-control",id:"AlloQty",placeholder:"Allocated Quantity"})))),s().createElement("div",{className:"col-md-6"},s().createElement(u.Z.Group,{className:"row"},s().createElement("label",{htmlFor:"productQuantity",className:"col-sm-4 col-form-label"}," Quantity To Be Allocated"),s().createElement("div",{className:"col-sm-8"},s().createElement(u.Z.Control,{required:!0,type:"text",name:"QtyToBeAllocd",value:x.QtyToBeAllocd,onChange:G,className:"form-control",id:"productQuantity",placeholder:" Quantity To Be Allocated"})))),s().createElement("div",{className:"col-md-6"},s().createElement("div",{className:"col"},s().createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),f(!0);var t={OrderNo:Q.OrderNo,orderRefNo:Q.orderRefNo,ItemName:Q.finalIname,availQuantity:Q.availQuantity,allocdWt:x.allocdWt,allocdQty:x.allocdQty,pendingQuantity:x.QtyToBeAllocd};v([].concat((0,n.Z)(y),[t]))},className:"btn btn-outline-primary mr-4"},"Save")))))))),h?s().createElement("div",{className:"col-lg-12 grid-margin stretch-card"},s().createElement("div",{className:"card"},s().createElement("div",{className:"card-body"},s().createElement("h4",{className:"card-title"},"Gold Smith Sub Orders"),s().createElement("h5",{className:"card-title"},"Gold Smith Name: ",s().createElement("span",{className:"text-warning"},x.GSName)),s().createElement("div",{className:"table-responsive OFtable-res"},s().createElement("table",{className:"table table-bordered OFtable"},s().createElement("thead",null,s().createElement("tr",null,s().createElement("th",null," SL No. "),s().createElement("th",null," Order No "),s().createElement("th",null," Item Name "),s().createElement("th",null," Item Quantity "),s().createElement("th",null," Allocated Quantity "),s().createElement("th",null," Allocated weight "),s().createElement("th",null," Pending Quantity"))),s().createElement("tbody",null,y.map((function(e,t){return s().createElement("tr",null,s().createElement("td",null,t+1),s().createElement("td",null,e.orderRefNo),s().createElement("td",null,e.ItemName),s().createElement("td",null,e.availQuantity),s().createElement("td",null,e.allocdQty),s().createElement("td",null,e.allocdWt),s().createElement("td",null,e.pendingQuantity))})))))))):"",s().createElement("div",{className:"col-md-12 grid-margin"},s().createElement("div",{className:"card"},s().createElement("div",{className:"card-body"},s().createElement("div",{className:"row"},s().createElement("div",{className:"col-md-3"},s().createElement("button",{type:"submit",onClick:function(t){return(e=e||(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(x);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)},className:"btn btn-primary mr-4"},"Create Gold Smith Order")))))))}},542:function(e,t,l){function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=l(4880),n=a(l(2791)),c=l(2610);l(2007),l(5501);var m=a(l(6111));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),s(e.prototype.constructor=e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],0<=t.indexOf(l)||(r[l]=e[l]);return r}var d=function(e){function t(){for(var t,l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).history=c.createBrowserHistory(t.props),t}return i(t,e),t.prototype.render=function(){return n.createElement(r.Router,{history:this.history,children:this.props.children})},t}(n.Component),E=function(e){function t(){for(var t,l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).history=c.createHashHistory(t.props),t}return i(t,e),t.prototype.render=function(){return n.createElement(r.Router,{history:this.history,children:this.props.children})},t}(n.Component),h=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},N=function(e){return e},p=n.forwardRef;void 0===p&&(p=N);var y=p((function(e,t){var l=e.innerRef,a=e.navigate,r=e.onClick,c=u(e,["innerRef","navigate","onClick"]),m=c.target,i=o({},c,{onClick:function(t){try{r&&r(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||m&&"_self"!==m||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),a())}});return i.ref=N!==p&&t||l,n.createElement("a",i)})),v=p((function(e,t){var l=e.component,a=void 0===l?y:l,i=e.replace,s=e.to,d=e.innerRef,E=u(e,["component","replace","to","innerRef"]);return n.createElement(r.__RouterContext.Consumer,null,(function(e){e||m(!1);var l=e.history,r=f(h(s,e.location),e.location),u=r?l.createHref(r):"",y=o({},E,{href:u,navigate:function(){var t=h(s,e.location),a=c.createPath(e.location)===c.createPath(f(t));(i||a?l.replace:l.push)(t)}});return N!==p?y.ref=t||d:y.innerRef=d,n.createElement(a,y)}))})),g=function(e){return e},b=n.forwardRef;void 0===b&&(b=g);var C=b((function(e,t){var l=e["aria-current"],a=void 0===l?"page":l,c=e.activeClassName,i=void 0===c?"active":c,s=e.activeStyle,d=e.className,E=e.exact,N=e.isActive,p=e.location,y=e.sensitive,C=e.strict,S=e.style,O=e.to,Q=e.innerRef,w=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return n.createElement(r.__RouterContext.Consumer,null,(function(e){e||m(!1);var l=p||e.location,c=f(h(O,l),l),u=c.pathname,T=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=T?r.matchPath(l.pathname,{path:T,exact:E,sensitive:y,strict:C}):null,Z=!!(N?N(A,l):A),R="function"==typeof d?d(Z):d,W="function"==typeof S?S(Z):S;Z&&(R=function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return t.filter((function(e){return e})).join(" ")}(R,i),W=o({},W,s));var x=o({"aria-current":Z&&a||null,className:R,style:W,to:c},w);return g!==b?x.ref=t||Q:x.innerRef=Q,n.createElement(v,x)}))}));Object.defineProperty(t,"k6",{enumerable:!0,get:function(){return r.useHistory}})},5501:function(e,t,l){l.r(t);t.default=function(e,t){}},4091:function(){}}]);
//# sourceMappingURL=414.9f1107a3.chunk.js.map