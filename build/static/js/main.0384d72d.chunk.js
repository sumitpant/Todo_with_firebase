(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{55:function(t,e,o){},56:function(t,e,o){},61:function(t,e,o){},66:function(t,e,o){"use strict";o.r(e);var c=o(7),n=o(2),a=o.n(n),i=o(15),r=o.n(i),d=(o(55),o(21)),s=(o(56),o(89)),j=o(93),l=o(91),u=o(86),b=o(36),p=b.a.initializeApp({apiKey:"AIzaSyDAh5P7bwwqD-9CbLtU_0h14J7XLu1QE_Q",authDomain:"todo-app-react-95130.firebaseapp.com",databaseURL:"https://todo-app-react-95130.firebaseio.com",projectId:"todo-app-react-95130",storageBucket:"todo-app-react-95130.appspot.com",messagingSenderId:"670096958572",appId:"1:670096958572:web:625031cda500f88cc5a449",measurementId:"G-84RJCEHXDT"}).firestore(),h=(o(61),o(90)),O=o(87),f=o(88),m=o(94),x=o(92);var v=function(t){var e=Object(n.useState)(!1),o=Object(d.a)(e,2),i=o[0],r=o[1],s=Object(n.useState)(""),j=Object(d.a)(s,2),l=j[0],b=j[1];return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(h.a,{open:i,onClose:function(t){return r(!1)},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Modal"}),Object(c.jsx)("input",{placeholder:t.todo.todo,value:l,onChange:function(t){return b(t.target.value)}}),Object(c.jsx)(u.a,{onClick:function(){p.collection("todos").doc(t.todo.id).set({todo:l},{merge:!0}),r(!1)},children:"Update Todo"})]})}),Object(c.jsxs)(O.a,{className:"todo__list",children:[Object(c.jsx)(f.a,{children:Object(c.jsx)(m.a,{secondary:"",primary:t.todo.todo})}),Object(c.jsx)("hr",{}),Object(c.jsx)(u.a,{onClick:function(t){return r(!0)},variant:"contained",children:"Edit"}),Object(c.jsx)(x.a,{onClick:function(e){p.collection("todos").doc(t.todo.id).delete()}})]})]})};var g=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),o=e[0],a=e[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),h=r[0],O=r[1];return Object(n.useEffect)((function(){p.collection("todos").orderBy("timestamp","desc").onSnapshot((function(t){a(t.docs.map((function(t){return{id:t.id,todo:t.data().todo}})))}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("h2",{children:"Write Your To-Do"}),Object(c.jsxs)(s.a,{children:[Object(c.jsx)(j.a,{children:"Write a Todo"}),Object(c.jsx)(l.a,{value:h,onChange:function(t){O(t.target.value)}})]}),Object(c.jsx)(u.a,{disabled:!h,type:"submit",variant:"contained",color:"primary",onClick:function(t){t.preventDefault(),p.collection("todos").add({todo:h,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),O("")},children:"Add todo"})]}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("h4",{children:"Your_List"}),o.map((function(t){return Object(c.jsx)(v,{todo:t})}))]})]})},C=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,96)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;o(t),c(t),n(t),a(t),i(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.0384d72d.chunk.js.map