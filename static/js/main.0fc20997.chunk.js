(this["webpackJsonpreact-google-keep-app"]=this["webpackJsonpreact-google-keep-app"]||[]).push([[0],{39:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),r=n.n(a),s=(n(39),n(40),n(12)),o=n(13),i=n(2),l=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{className:" text-center my-auto",children:"React Google Keep App"})})},j=n(9),b=n(25),u=n(62),d=n(30),O=n.n(d),m=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),d=l[0],m=l[1],x=function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},n,c))}))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"main_div",onDoubleClick:function(){m(!1)},children:Object(i.jsx)("div",{className:"center_div",children:Object(i.jsxs)("form",{className:"frmNote",children:[Object(i.jsx)("br",{}),d?Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("input",{type:"text",name:"title",value:a.title,className:"form-control",autoComplete:"false",placeholder:"Title",onChange:x})}):null,Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{name:"content",value:a.content,className:"form-control",rows:"",placeholder:"Take a note...",onChange:x,onClick:function(){m(!0)}})}),d?Object(i.jsx)(u.a,{className:"newBtn",onClick:function(){e.passNote(a),r({title:"",content:""})},children:Object(i.jsx)(O.a,{})}):null]})})})})},x=n(31),h=n.n(x),f=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"note-parent",children:Object(i.jsxs)("div",{className:"note",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsx)("p",{children:e.content}),Object(i.jsx)(u.a,{className:"deleteBtn",onClick:function(){e.deleteItem(e.id)},children:Object(i.jsx)(h.a,{})})]})})})},p=(new Date).getFullYear(),g=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:" position-fixed bottom-0 text-center w-100 footer-page",children:["\xa9 ",p," Copyright"]})})})},v=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{passNote:function(e){a((function(t){return[].concat(Object(s.a)(t),[e])}))}}),n.map((function(e,t){return Object(i.jsx)(f,{id:t,title:e.title,content:e.content,deleteItem:r},t)})),Object(i.jsx)(g,{})]})};r.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0fc20997.chunk.js.map