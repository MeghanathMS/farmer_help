(this.webpackJsonpfarmer_help=this.webpackJsonpfarmer_help||[]).push([[0],{211:function(e,a,t){e.exports=t(241)},216:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),o=t.n(r),c=(t(216),t(193)),i=t(194),u=t(203),s=t(202),m=t(46),p=t(80),E=t(272),h=t(273),d=t(274),f=t(275),b=t(276),g=t(277),v=t(278),k=t(286),O=t(79),C=t(269),w=t(280),y=t(267),j=t(268),I=t(287),S=t(201),R=t.n(S),A=t(242),D=t(263),N=t(271),x=t(49),L=t.n(x),P=t(195),U=Object(x.initializeApp)({apiKey:"AIzaSyCCnr1bgNgAv9O7Pn19twDRvNyPAU7ctLg",authDomain:"farmer-help-6.firebaseapp.com",databaseURL:"https://farmer-help-6.firebaseio.com",projectId:"farmer-help-6",storageBucket:"farmer-help-6.appspot.com",messagingSenderId:"924281053135",appId:"1:924281053135:web:044ee4280481b4ab433cba",measurementId:"G-JCF9P7LMRH"}),z=t(270),B=l.a.forwardRef((function(e,a){return l.a.createElement(A.a,Object.assign({direction:"up",ref:a},e))}));function M(e){var a=e.onClose,t=e.open,n={signInOptions:[L.a.auth.GoogleAuthProvider.PROVIDER_ID,L.a.auth.FacebookAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return l.a.createElement(D.a,{fullWidth:!0,TransitionComponent:B,open:t},l.a.createElement(y.a,null,l.a.createElement(j.a,null,l.a.createElement(C.a,{edge:"start",color:"inherit",onClick:function(){a()},"aria-label":"close"},l.a.createElement(z.a,null)),l.a.createElement(N.a,null,"Sign In"))),l.a.createElement(P.StyledFirebaseAuth,{uiConfig:n,firebaseAuth:U.auth()}))}var F=t(279),W=t(281),_=t(282),G=t(283),J=t(284),T=Object(E.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1},grow:{flexGrow:1},sectionDesktop:Object(p.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(p.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function V(e){var a=U.auth().currentUser,t=l.a.useState(0),n=Object(m.a)(t,2),r=n[0],o=(n[1],l.a.useState(0)),c=Object(m.a)(o,2),i=c[0],u=(c[1],l.a.useState(!1)),s=Object(m.a)(u,2),p=s[0],E=s[1],S=l.a.useState(!1),A=Object(m.a)(S,2),D=A[0],N=A[1],x=function(e){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&N(e)}},L=T(),P=l.a.useState(null),z=Object(m.a)(P,2),B=z[0],V=z[1],H=Boolean(B),K=function(e){V(e.currentTarget)},$=function(){V(null)},q=l.a.createElement(l.a.Fragment,null,null!=a&&l.a.createElement(h.a,{id:"user-menu",anchorEl:B,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:H,onClose:$},l.a.createElement(d.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,{onClick:$},l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(k.a,{src:a.photoURL})),l.a.createElement(v.a,null,a.displayName))),l.a.createElement(b.a,{onClick:$},l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(k.a,{color:O.a.white},l.a.createElement(F.a,null))),l.a.createElement(v.a,null," Log Out")))))));l.a.Fragment,h.a,null==a&&b.a,null!=a&&(b.a,C.a,w.a,W.a,b.a,C.a,w.a,_.a,b.a,C.a,k.a,a.photoURL);return l.a.createElement("div",null,l.a.createElement(y.a,{position:"fixed",className:L.appBar},l.a.createElement(j.a,null,l.a.createElement(C.a,{onClick:x(!0)},l.a.createElement(R.a,null)),l.a.createElement("div",{className:L.grow}),null==a&&l.a.createElement("div",{className:L.sectionDesktop},l.a.createElement(C.a,{onClick:function(){E(!0)}},l.a.createElement(G.a,null))),null!=a&&l.a.createElement("div",{className:L.sectionDesktop},l.a.createElement(C.a,null,l.a.createElement(w.a,{badgeContent:r},l.a.createElement(W.a,null))),l.a.createElement(C.a,null,l.a.createElement(w.a,{badgeContent:i},l.a.createElement(_.a,null))),l.a.createElement(C.a,{edge:"end","aria-label":"account of current user","aria-controls":"user-menu","aria-haspopup":"true",color:"inherit",onClick:K},l.a.createElement(k.a,{src:a.photoURL}))),l.a.createElement("div",{className:L.sectionMobile},l.a.createElement(C.a,null,l.a.createElement(J.a,null))))),q,l.a.createElement(M,{open:p,onClose:function(){E(!1)}}),l.a.createElement(I.a,{anchor:"left",open:D,onClose:x(!1),onOpen:x(!0)},l.a.createElement("div",null,"Meghanath")))}var H=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={user:U.auth().currentUser},e.componentDidMount=function(){U.auth().onAuthStateChanged((function(a){e.setState({user:a})}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(V,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.7138f67b.chunk.js.map