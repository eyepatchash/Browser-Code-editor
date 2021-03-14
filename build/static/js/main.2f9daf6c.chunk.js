(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{37:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),u=a(12),o=a.n(u),s=a(14),i=a(6),m=a(59),E=a(57),d=a(58),p=a(55),b=a(31),O=a.n(b),f=(a(45),O.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_APP_ID})),v=f.auth(),_=r.a.createContext();function S(){return Object(n.useContext)(_)}function P(e){var t=e.children,a=Object(n.useState)(),c=Object(i.a)(a,2),l=c[0],u=c[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),m=s[0],E=s[1];Object(n.useEffect)((function(){return v.onAuthStateChanged((function(e){u(e),E(!1)}))}),[]);var d={currentUser:l,login:function(e,t){return v.signInWithEmailAndPassword(e,t)},signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},logout:function(){return v.signOut()},resetPassword:function(e){return v.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement(_.Provider,{value:d},!m&&t)}var h=a(5),j=a(8);function w(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=S().signup,l=Object(n.useState)(""),u=Object(i.a)(l,2),b=u[0],O=u[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),_=v[0],P=v[1],w=Object(h.g)();function C(){return(C=Object(s.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",O("Passwords do not match"));case 3:return n.prev=3,O(""),P(!0),n.next=8,c(e.current.value,t.current.value);case 8:w.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),O("Failed to create an account");case 14:P(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),b&&r.a.createElement(E.a,{variant:"danger"},b),r.a.createElement(d.a,{onSubmit:function(e){return C.apply(this,arguments)}},r.a.createElement(d.a.Group,{id:"email"},r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(d.a.Group,{id:"password"},r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(d.a.Group,{id:"password-confirm"},r.a.createElement(d.a.Label,null,"Password Confirmation"),r.a.createElement(d.a.Control,{type:"password",ref:a,required:!0})),r.a.createElement(p.a,{disabled:_,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",r.a.createElement(j.b,{to:"/login"},"Log In")))}var C=a(56);function T(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=S(),u=l.currentUser,d=l.logout,b=Object(h.g)();function O(){return(O=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,d();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Profile"),a&&r.a.createElement(E.a,{variant:"danger"},a),r.a.createElement("strong",null,"Email:")," ",u.email,r.a.createElement(j.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3"},"Update Profile"))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(p.a,{variant:"link",onClick:function(){return O.apply(this,arguments)}},"Log Out")))}function g(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=S().login,c=Object(n.useState)(""),l=Object(i.a)(c,2),u=l[0],b=l[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),v=f[0],_=f[1],P=Object(h.g)();function w(){return(w=Object(s.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,b(""),_(!0),n.next=6,a(e.current.value,t.current.value);case 6:P.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),b("Failed to log in");case 12:_(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),u&&r.a.createElement(E.a,{variant:"danger"},u),r.a.createElement(d.a,{onSubmit:function(e){return w.apply(this,arguments)}},r.a.createElement(d.a.Group,{id:"email"},r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(d.a.Group,{id:"password"},r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(p.a,{disabled:v,className:"w-100",type:"submit"},"Log In")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(j.b,{to:"/forgot-password"},"Forgot Password?")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(j.b,{to:"/signup"},"Sign Up")))}var R=a(35);function A(e){var t=e.component,a=Object(R.a)(e,["component"]),n=S().currentUser;return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/login"})}}))}function D(){var e=Object(n.useRef)(),t=S().resetPassword,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],u=c[1],b=Object(n.useState)(""),O=Object(i.a)(b,2),f=O[0],v=O[1],_=Object(n.useState)(!1),P=Object(i.a)(_,2),h=P[0],w=P[1];function C(){return(C=Object(s.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,v(""),u(""),w(!0),a.next=7,t(e.current.value);case 7:v("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),u("Failed to reset password");case 13:w(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),l&&r.a.createElement(E.a,{variant:"danger"},l),f&&r.a.createElement(E.a,{variant:"success"},f),r.a.createElement(d.a,{onSubmit:function(e){return C.apply(this,arguments)}},r.a.createElement(d.a.Group,{id:"email"},r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(p.a,{disabled:h,className:"w-100",type:"submit"},"Reset Password")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(j.b,{to:"/login"},"Login")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(j.b,{to:"/signup"},"Sign Up")))}function N(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=S(),l=c.currentUser,u=c.updatePassword,o=c.updateEmail,s=Object(n.useState)(""),b=Object(i.a)(s,2),O=b[0],f=b[1],v=Object(n.useState)(!1),_=Object(i.a)(v,2),P=_[0],w=_[1],C=Object(h.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),O&&r.a.createElement(E.a,{variant:"danger"},O),r.a.createElement(d.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return f("Passwords do not match");var r=[];w(!0),f(""),e.current.value!==l.email&&r.push(o(e.current.value)),t.current.value&&r.push(u(t.current.value)),Promise.all(r).then((function(){C.push("/")})).catch((function(){f("Failed to update account")})).finally((function(){w(!1)}))}},r.a.createElement(d.a.Group,{id:"email"},r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})),r.a.createElement(d.a.Group,{id:"password"},r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),r.a.createElement(d.a.Group,{id:"password-confirm"},r.a.createElement(d.a.Label,null,"Password Confirmation"),r.a.createElement(d.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),r.a.createElement(p.a,{disabled:P,className:"w-100",type:"submit"},"Update")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(j.b,{to:"/"},"Cancel")))}var y=function(){return r.a.createElement(C.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(j.a,null,r.a.createElement(P,null,r.a.createElement(h.d,null,r.a.createElement(A,{exact:!0,path:"/",component:T}),r.a.createElement(A,{path:"/update-profile",component:N}),r.a.createElement(h.b,{path:"/signup",component:w}),r.a.createElement(h.b,{path:"/login",component:g}),r.a.createElement(h.b,{path:"/forgot-password",component:D}))))))};a(52);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2f9daf6c.chunk.js.map