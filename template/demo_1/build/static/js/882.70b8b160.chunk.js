"use strict";(self.webpackChunkcorona_react=self.webpackChunkcorona_react||[]).push([[882],{6882:function(e,t,a){a.r(t);var n=a(4165),l=a(5861),r=a(2982),c=a(4942),o=a(1413),m=a(885),s=a(2791),i=a.n(s),u=a(1341),p=(a(4091),a(542));t.default=function(){var e,t=(0,p.k6)(),a=(0,s.useState)([]),d=(0,m.Z)(a,2),E=d[0],f=(d[1],(0,s.useState)([])),N=(0,m.Z)(f,2),y=N[0],v=N[1],h=(0,s.useState)(!1),b=(0,m.Z)(h,2),g=b[0],C=b[1],G=(0,s.useState)(!1),S=(0,m.Z)(G,2),w=S[0],Q=(S[1],(0,s.useState)({GSONo:"",pureGoldValueQnty:"",pureGoldValueAmt:"",compType:"",compName:"",compQnty:"",compAmt:""})),A=(0,m.Z)(Q,2),O=A[0],Z=A[1],x=function(e){var t=e.target,a=t.name,n=t.value;Z((0,o.Z)((0,o.Z)({},O),{},(0,c.Z)({},a,n)))};return i().createElement(i().Fragment,null,i().createElement("div",{className:"row"},i().createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i().createElement("div",{className:"card"},i().createElement("div",{className:"card-body"},i().createElement("h3",{className:"card-title"},"Gold Smith Issuance "),i().createElement("form",{className:"forms-sample"},i().createElement("div",{className:"row"},i().createElement("div",{className:"col-md-6"},i().createElement("p",{className:"text-warning"},"No Gold Smith Order Selected, go to Gold Smith View Page and Select Gold Smith Order."),i().createElement(u.Z.Group,null,i().createElement("button",{type:"submit",onClick:function(){t.push("/gold-smith/GSOrder-view")},className:"btn btn-outline-primary mr-4"},"Go To GS View Page.")))))))),w?i().createElement("div",{className:"col-12 grid-margin stretch-card"},i().createElement("div",{className:"card"},i().createElement("div",{className:"card-body"},i().createElement("h4",{className:"card-title"},"GSO Number: ",i().createElement("span",{className:"text-primary"},E.GSOrderNo)),i().createElement("h5",{className:"card-title"},"Gold Smith Name: ",i().createElement("span",{className:"text-primary"},E.GSName)),i().createElement("div",{className:"table-responsive OFtable-res"},i().createElement("table",{className:"table table-bordered OFtable "},i().createElement("thead",null,i().createElement("tr",null,i().createElement("th",null,"SL.NO"),i().createElement("th",null,"Sub Order Number"),i().createElement("th",null,"Item Name"),i().createElement("th",null,"Available Quantity"),i().createElement("th",null,"Allocated Quantity"),i().createElement("th",null,"Pending Quantity"),i().createElement("th",null,"Allocated Weight "))),i().createElement("tbody",null,E&&E.subOrder.map((function(e,t,a){return i().createElement(i().Fragment,null,i().createElement("tr",{key:a},i().createElement("td",null,t+1),i().createElement("td",null,e.subOrderNo),i().createElement("td",null,e.ItemName),i().createElement("td",null,e.availQuantity),i().createElement("td",null,e.allocdQty),i().createElement("td",null,e.pendingQuantity),i().createElement("td",null,e.allocdWt)))})))))))):""),i().createElement("div",{className:"row showStoneProperties"},i().createElement("div",{className:"col-md-6 grid-margin stretch-card"},i().createElement("div",{className:"card"},i().createElement("div",{className:"card-body"},i().createElement("h4",{className:"card-title"},"pure gold"),i().createElement("form",{className:"forms-sample"},i().createElement("div",{className:"col-md-12"},i().createElement(u.Z.Group,{className:"row"},i().createElement("label",{htmlFor:"goldQuantity",className:"col-sm-4 col-form-label"},"Gold Quantity "),i().createElement("div",{className:"col-sm-8"},i().createElement(u.Z.Control,{type:"text",name:"pureGoldValueQnty",value:O.pureGoldValueQnty,onChange:x,className:"form-control",id:"goldQuantity",placeholder:"Gold Quantity"})))),i().createElement("div",{className:"col-md-12"},i().createElement(u.Z.Group,{className:"row"},i().createElement("label",{htmlFor:"goldAmount",className:"col-sm-4 col-form-label"},"Gold Amount "),i().createElement("div",{className:"col-sm-8"},i().createElement(u.Z.Control,{type:"text",name:"pureGoldValueAmt",value:O.pureGoldValueAmt,onChange:x,className:"form-control",id:"goldAmount",placeholder:"Gold Amount"})))))))),i().createElement("div",{className:"col-6 grid-margin stretch-card"},i().createElement("div",{className:"card"},i().createElement("div",{className:"card-body"},i().createElement("h4",{className:"card-title"},"Components"),i().createElement("form",{className:"forms-sample"},i().createElement("div",{className:"col-md-12"},i().createElement(u.Z.Group,{className:"row"},i().createElement("label",{htmlFor:"compType",className:"col-sm-4 col-form-label"},"Component Type "),i().createElement("div",{className:"col-sm-8"},i().createElement("select",{type:"text",name:"compType",value:O.compType,onChange:x,className:"form-control",id:"compType",placeholder:"Component Type"},i().createElement("option",{value:""},"Select"),i().createElement("option",{value:"Metal"},"Metal"),i().createElement("option",{value:"Non metal"},"Non Metal"),i().createElement("option",{value:"Stones"},"Stones"))))),i().createElement("div",{className:"col-md-12"},i().createElement(u.Z.Group,{className:"row"},i().createElement("label",{htmlFor:"compName",className:"col-sm-4 col-form-label"},"Component Name "),i().createElement("div",{className:"col-sm-8"},i().createElement(u.Z.Control,{type:"text",name:"compName",value:O.compName,onChange:x,className:"form-control",id:"compName",placeholder:"Component Name"})))),i().createElement("div",{className:"col-md-12"},i().createElement(u.Z.Group,{className:"row"},i().createElement("label",{htmlFor:"compQuantity",className:"col-sm-4 col-form-label"},"Componemt Quantity "),i().createElement("div",{className:"col-sm-8"},i().createElement(u.Z.Control,{type:"text",name:"compQnty",value:O.compQnty,onChange:x,className:"form-control",id:"compQuantity",placeholder:"Componemt Quantity"})))),i().createElement("div",{className:"col-md-12"},i().createElement(u.Z.Group,{className:"row"},i().createElement("label",{htmlFor:"compamount",className:"col-sm-4 col-form-label"},"Componemt Amount "),i().createElement("div",{className:"col-sm-8"},i().createElement(u.Z.Control,{type:"text",name:"compAmt",value:O.compAmt,onChange:x,className:"form-control",id:"compamount",placeholder:"Componemt Amount"})))),i().createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),C(!0);var t={compType:O.compType,compName:O.compName,compQnty:O.compQnty,compAmt:O.compAmt};v([].concat((0,r.Z)(y),[t]))},className:"btn btn-primary mr-4"},"Add  another component")))))),g?i().createElement("div",{className:"row"},i().createElement("div",{className:"col-12 grid-margin stretch-card"},i().createElement("div",{className:"card"},i().createElement("div",{className:"card-body"},i().createElement("h4",{className:"card-title"},"Components List"),i().createElement("div",{className:"table-responsive OFtable-res "},i().createElement("table",{className:"table table-bordered OFtable "},i().createElement("thead",null,i().createElement("th",null,"SL.No"),i().createElement("th",null,"component Type"),i().createElement("th",null,"component Name"),i().createElement("th",null,"component Quantity")),i().createElement("tbody",null,y.map((function(e,t){return i().createElement(i().Fragment,null,i().createElement("tr",null,i().createElement("td",null,t+1),i().createElement("td",null,e.compType),i().createElement("td",null,e.compName),i().createElement("td",null,e.compQnty)))}))))),i().createElement("div",{style:{margin:"2%  0 0 95%"}},i().createElement("button",{type:"submit",onClick:function(t){return(e=e||(0,l.Z)((0,n.Z)().mark((function e(t){var a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=O.pureGoldValueQnty,l=O.pureGoldValueAmt,console.log({GSOrderNo:E.GSOrderNo,GSName:E.GSName,pureGoldValueQnty:a,pureGoldValueAmt:l,components:y});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)},className:"btn btn-primary mr-4"},"Issue")))))):"")}},542:function(e,t,a){function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var l=a(4880),r=n(a(2791)),c=a(2610);a(2007),a(5501);var o=n(a(6111));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),i(e.prototype.constructor=e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(l[a]=e[a]);return l}var p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).history=c.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return r.createElement(l.Router,{history:this.history,children:this.props.children})},t}(r.Component),d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).history=c.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return r.createElement(l.Router,{history:this.history,children:this.props.children})},t}(r.Component),E=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},N=function(e){return e},y=r.forwardRef;void 0===y&&(y=N);var v=y((function(e,t){var a=e.innerRef,n=e.navigate,l=e.onClick,c=u(e,["innerRef","navigate","onClick"]),o=c.target,s=m({},c,{onClick:function(t){try{l&&l(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return s.ref=N!==y&&t||a,r.createElement("a",s)})),h=y((function(e,t){var a=e.component,n=void 0===a?v:a,s=e.replace,i=e.to,p=e.innerRef,d=u(e,["component","replace","to","innerRef"]);return r.createElement(l.__RouterContext.Consumer,null,(function(e){e||o(!1);var a=e.history,l=f(E(i,e.location),e.location),u=l?a.createHref(l):"",v=m({},d,{href:u,navigate:function(){var t=E(i,e.location),n=c.createPath(e.location)===c.createPath(f(t));(s||n?a.replace:a.push)(t)}});return N!==y?v.ref=t||p:v.innerRef=p,r.createElement(n,v)}))})),b=function(e){return e},g=r.forwardRef;void 0===g&&(g=b);var C=g((function(e,t){var a=e["aria-current"],n=void 0===a?"page":a,c=e.activeClassName,s=void 0===c?"active":c,i=e.activeStyle,p=e.className,d=e.exact,N=e.isActive,y=e.location,v=e.sensitive,C=e.strict,G=e.style,S=e.to,w=e.innerRef,Q=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.createElement(l.__RouterContext.Consumer,null,(function(e){e||o(!1);var a=y||e.location,c=f(E(S,a),a),u=c.pathname,A=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=A?l.matchPath(a.pathname,{path:A,exact:d,sensitive:v,strict:C}):null,Z=!!(N?N(O,a):O),x="function"==typeof p?p(Z):p,k="function"==typeof G?G(Z):G;Z&&(x=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(x,s),k=m({},k,i));var R=m({"aria-current":Z&&n||null,className:x,style:k,to:c},Q);return b!==g?R.ref=t||w:R.innerRef=w,r.createElement(h,R)}))}));Object.defineProperty(t,"k6",{enumerable:!0,get:function(){return l.useHistory}})},5501:function(e,t,a){a.r(t);t.default=function(e,t){}},4091:function(){}}]);
//# sourceMappingURL=882.70b8b160.chunk.js.map