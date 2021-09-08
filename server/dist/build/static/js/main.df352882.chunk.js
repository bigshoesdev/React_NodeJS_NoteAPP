(this["webpackJsonpnote-frontend"]=this["webpackJsonpnote-frontend"]||[]).push([[0],{131:function(e,t,n){},135:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),o=n.n(c),s=(n(131),n(132),n(31)),i=n.n(s),u=n(51),l=n(55),d=n(64),j=n(85),v=n(223),p=n(224),f=n(41),x=n(17),b=v.a.TextArea,m=function(e){var t=e.saveNote,n=e.note,a=Object(r.useState)({}),c=Object(l.a)(a,2),o=c[0],s=c[1];Object(r.useEffect)((function(){s(n)}),[n]);var i=function(e){var t=e.currentTarget;s(Object(j.a)(Object(j.a)({},o),{},Object(d.a)({},t.name,t.value)))};return Object(x.jsxs)("form",{className:"Form",children:[Object(x.jsx)(v.a,{name:"name",placeholder:"Name",onChange:i,allowClear:!0,value:null===o||void 0===o?void 0:o.name,style:{marginBottom:"1rem"}}),Object(x.jsx)(b,{name:"text",placeholder:"Text",onChange:i,allowClear:!0,maxLength:250,value:null===o||void 0===o?void 0:o.text,style:{marginBottom:"1rem"},rows:5}),Object(x.jsx)(f.a,{type:"primary",disabled:!(null===o||void 0===o?void 0:o.name)||!(null===o||void 0===o?void 0:o.text),onClick:function(){(null===o||void 0===o?void 0:o.text)&&(null===o||void 0===o?void 0:o.name)||p.a.error({title:"Error!",content:"Please fill up the inputs."}),t(Object(j.a)({},o))},children:"Save Note"})]})},h=(n(135),n(86)),O=n.n(h),w=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/notes");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={name:t.name,text:t.text},e.next=4,O.a.post("/notes",n);case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={text:t.text,name:t.name},e.next=4,O.a.put("".concat("","/notes/").concat(t._id),n);case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),k=n(225),N=n(226),E=n(227),C=n(222),S=function(e){var t=e.note,n=e.notes,r=e.setNote;return Object(x.jsx)(C.a,{mode:"inline",theme:"dark",onClick:function(e){var t=n.find((function(t){return t._id==e.key}));r(t)},selectedKeys:[null===t||void 0===t?void 0:t._id],children:null===n||void 0===n?void 0:n.map((function(e){return Object(x.jsx)(C.a.Item,{children:e.name},e._id)}))})},_=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({}),o=Object(l.a)(c,2),s=o[0],d=o[1];Object(r.useEffect)((function(){j()}),[]);var j=function(){w().then((function(e){var t=e.data.notes;return a(t)})).catch((function(e){return console.log(e)}))},v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._id){e.next=6;break}return e.next=3,y(t);case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,g(t);case 8:n=e.sent;case 9:c=(r=n).status,o=r.data,console.log(c,o),201!=c&&200!=c&&p.a.error({title:"Error!",content:"Note is not saved."}),a(o.notes);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("main",{className:"App",children:[Object(x.jsx)(k.a,{children:Object(x.jsxs)(N.a,{xs:24,sm:24,md:24,className:"Header",children:[Object(x.jsx)(f.a,{type:"primary",size:"large",icon:Object(x.jsx)(E.a,{}),onClick:function(){d({})}}),Object(x.jsx)("h1",{children:"My Awesome Notepad"})]})}),Object(x.jsxs)(k.a,{children:[Object(x.jsx)(N.a,{xs:24,sm:24,lg:10,children:Object(x.jsx)(S,{notes:n,note:s,setNote:d})}),Object(x.jsx)(N.a,{xs:24,sm:24,lg:14,children:Object(x.jsx)(m,{note:s,saveNote:v})})]})]})};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.df352882.chunk.js.map