(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(31),i=a.n(n),r=(a(72),a(8)),o=(a(73),a(74),a(115)),l=a(110),d=a(57),j=a.n(d),m=a(58),u=a.n(m),b=a(59),h=a.n(b),O=a(111),p=(a(75),a(28)),f=p.a.initializeApp({apiKey:"AIzaSyCYmU-SnsQxAGOpnFFhcR5khqHbo3XH_FI",authDomain:"whatsappclone-ba70f.firebaseapp.com",projectId:"whatsappclone-ba70f",storageBucket:"whatsappclone-ba70f.appspot.com",messagingSenderId:"504204411802",appId:"1:504204411802:web:7e96ba30cd343b3d0d7023",measurementId:"G-HHC2HRPXGP"}),x=f.firestore(),v=f.auth(),g=new p.a.auth.GoogleAuthProvider,N=p.a.storage(),S=(p.a.firestore.FieldValue.serverTimestamp,x),y=a(36),w=a(5),k=Object(c.createContext)(),C=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(w.jsx)(k.Provider,{value:Object(c.useReducer)(t,a),children:s})},F=function(){return Object(c.useContext)(k)};var E=function(e){var t,a=e.addChat,s=e.name,n=e.id,i=Object(c.useState)(" "),l=Object(r.a)(i,2),d=l[0],j=l[1],m=Object(c.useState)(""),u=Object(r.a)(m,2),b=u[0],h=u[1],O=F(),p=Object(r.a)(O,2),f=p[0].user;return p[1],Object(c.useEffect)((function(){n&&S.collection("rooms").doc(n).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){j(e.docs.map((function(e){return e.data()})))}))}),[n]),Object(c.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[]),a?Object(w.jsx)("div",{onClick:function(){var e=null===f||void 0===f?void 0:f.displayName;e&&S.collection("rooms").add({name:e,user:f.email})},className:"sidebar-chat",children:Object(w.jsx)("h2",{children:" Add New Chat"})}):Object(w.jsx)(y.b,{to:"/rooms/".concat(n),children:Object(w.jsxs)("div",{className:"sidebar-chat",children:[Object(w.jsx)(o.a,{src:"https://avatars.dicebear.com/api/initials/".concat(b,".svg")}),Object(w.jsxs)("div",{className:"sidebar-chat-info ".concat("tanvirrezaanik@gmail.com"!==f.email&&"jainfariha@gmail.com"!==f.email&&"anikreza22@gmail.com"!==f.email&&"sagar.alpha@gmail.com"!==f.email&&"hidden-photo"),children:[Object(w.jsxs)("h2",{children:["  ",s,"'s Room"]}),Object(w.jsx)("p",{children:null===(t=d[0])||void 0===t?void 0:t.message})]})]})})},I=function(){var e=F(),t=Object(r.a)(e,2),a=t[0].user,s=(t[1],Object(c.useState)([])),n=Object(r.a)(s,2),i=n[0],d=n[1];return Object(c.useEffect)((function(){var e=S.collection("rooms").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(w.jsxs)("div",{className:"sidebar",children:[Object(w.jsxs)("div",{className:"sidebar-header",children:[Object(w.jsx)(o.a,{src:a.photoURL}),Object(w.jsxs)("div",{className:"sidebar-header-right",children:[Object(w.jsx)(l.a,{children:Object(w.jsx)(j.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(u.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(h.a,{})})]})]}),Object(w.jsx)("div",{className:"sidebar-search",children:Object(w.jsxs)("div",{className:"sidebar-searchContainer",children:[Object(w.jsx)(O.a,{}),Object(w.jsx)("input",{placeholder:"start a new chat",type:"text"})]})}),Object(w.jsxs)("div",{className:"sidebar-chatlist",children:[Object(w.jsx)(E,{addChat:!0}),i.map((function(e){return Object(w.jsx)(E,{id:e.id,name:e.data.name},e.id)}))]})]})},R=a(23),T=a.n(R),A=a(33),P=(a(90),a.p,a.p,a(112)),L=a(113),z=a(61),B=a.n(z),D=a(12),G=a(51),H=a.n(G),U=(a(92),a(60)),W=function(){Object(c.useRef)();var e,t,a=F(),s=Object(r.a)(a,2),n=s[0].user,i=(s[1],Object(c.useState)("")),d=Object(r.a)(i,2),j=(d[0],d[1],Object(D.f)().roomId),m=Object(c.useState)(""),u=Object(r.a)(m,2),b=u[0],h=u[1],f=Object(c.useState)([]),x=Object(r.a)(f,2),v=x[0],g=x[1],y=Object(c.useState)(" "),k=Object(r.a)(y,2),C=k[0],E=k[1],I=Object(c.useState)(""),R=Object(r.a)(I,2),z=R[0],G=R[1],W=Object(c.useState)(""),_=Object(r.a)(W,2),M=(_[0],_[1]),V=Object(c.useState)(0),J=Object(r.a)(V,2),X=(J[0],J[1]),q=Object(c.useState)(""),K=Object(r.a)(q,2),Q=K[0],Y=K[1];Object(c.useEffect)((function(){S.collection("rooms").doc(j).onSnapshot((function(e){h(e.data().name)})),S.collection("rooms").doc(j).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){g(e.docs.map((function(e){return e.data()})))}))}),[j]),Object(c.useEffect)((function(){z&&Z.put(C).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;X(t)}),(function(e){M(e)}),Object(A.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.collection("rooms").doc(j).collection("messages").add({timestamp:p.a.firestore.FieldValue.serverTimestamp(),image:z,name:null===n||void 0===n?void 0:n.displayName}),G("");case 2:case"end":return e.stop()}}),e)}))))}),[z]);var Z=N.ref("images/".concat(C.name)),$=function(){var e=Object(A.a)(T.a.mark((function e(t){var a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target.files[0])){e.next=9;break}return c=new FileReader,e.next=5,E(a);case 5:c.onloadend=function(){G(c.result)},c.readAsDataURL(a),e.next=11;break;case 9:E(null),M("Please select an image file");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"chat",children:[Object(w.jsxs)("div",{className:"chat-header",children:[Object(w.jsx)(o.a,{src:n.photoURL}),Object(w.jsxs)("div",{className:"chat-header-info",children:[Object(w.jsx)("h3",{children:b}),Object(w.jsxs)("p",{children:["Last Active ."," ",H()(null===(e=v[v.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).startOf("minute").fromNow()]})]}),Object(w.jsxs)("div",{className:"chat-header-right",children:[Object(w.jsx)(l.a,{children:Object(w.jsx)(O.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsxs)("label",{htmlFor:"image",children:[Object(w.jsx)(P.a,{style:{cursor:"pointer"}}),Object(w.jsx)("input",{type:"file",onChange:$,id:"image",style:{display:"none"}})]})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(L.a,{})})]})]}),Object(w.jsx)("div",{className:"chat-body ".concat("tanvirrezaanik@gmail.com"!==n.email&&"jainfariha@gmail.com"!==n.email&&"anikreza22@gmail.com"!==n.email&&"sagar.alpha@gmail.com"!==n.email&&"hidden-photo"),children:v.map((function(e){var t;return Object(w.jsxs)("p",{className:"message ".concat(e.name===n.displayName&&"reciever"),children:[e.message," ",Object(w.jsx)("img",{className:"media",src:e.image}),Object(w.jsxs)("span",{className:"sender-name",children:[" ",e.name," "]}),Object(w.jsxs)("span",{className:"emoti",children:[" ",e.emoti," "]}),Object(w.jsx)("span",{className:"timestamp",children:H()(null===(t=v.timestamp)||void 0===t?void 0:t.toDate()).format("LT")})]})}))}),Object(w.jsxs)("div",{className:"chat-footer",children:[Object(w.jsx)(B.a,{}),Object(w.jsx)(U.a,{value:Q,onChange:Y,cleanOnEnter:!0,onEnter:function(){Q&&(S.collection("rooms").doc(j).collection("messages").add({message:Q,name:null===n||void 0===n?void 0:n.displayName,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),Y(""))},placeholder:"Type a message",borderRadius:"20"})]})]})},_=a(62),M=(a(93),a(114)),V=a(34),J="SET_USER",X=function(e,t){switch(t.type){case J:return Object(V.a)(Object(V.a)({},e),{},{user:t.user});default:return e}},q=function(){var e=F(),t=Object(r.a)(e,2);Object(_.a)(t[0]);var a=t[1];return Object(w.jsx)("div",{className:"login",children:Object(w.jsxs)("div",{className:"login-container",children:[Object(w.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),Object(w.jsx)("div",{className:"login_text",children:Object(w.jsx)("h1",{children:"Sign in to Whatsapp"})}),Object(w.jsx)(M.a,{type:"submit",onClick:function(){v.signInWithPopup(g).then((function(e){return a({type:J,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in With Google"})]})})};var K=function(){var e=F(),t=Object(r.a)(e,2),a=t[0].user;return t[1],Object(c.useEffect)((function(){a&&S.collection("users").doc(a.uid).set({user:a.email,token:a.refreshToken})}),[]),Object(w.jsx)("div",{className:"app",children:a?Object(w.jsx)("div",{className:"app-container",children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(I,{}),Object(w.jsxs)(D.c,{children:[Object(w.jsx)(D.a,{path:"/rooms/:roomId",children:Object(w.jsx)(W,{})}),Object(w.jsx)(D.a,{path:"/",children:Object(w.jsx)("h1",{})})]})]})}):Object(w.jsx)(q,{})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(C,{initialState:{user:null},reducer:X,children:Object(w.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[94,1,2]]]);
//# sourceMappingURL=main.108a7818.chunk.js.map