(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(20),i=c.n(s),r=(c(25),c(26),c(2)),o=c(0);function l(){return Object(o.jsx)("div",{className:"homepage",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Welcome To Pokebuy"}),Object(o.jsx)("img",{src:"https://www.gate-to-the-games.de/images/contentpics/pokemon-karten-kaufen.webp"}),Object(o.jsx)("h3",{children:"This Site is giving Users a chance to trade and handle their Pokemon Cards."}),Object(o.jsx)("p",{children:"Feel free to signup and login to trade your PokeCards"}),Object(o.jsx)("img",{src:"https://www.oldsportscards.com/wp-content/uploads/2020/07/Most-Expensive-Poke%CC%81mon-Cards-of-All-Time.jpg"}),Object(o.jsx)("h3",{children:"What are you waiting for?"})]})})}var u=c(3),j=c(4),d=c(5),b=c.n(d);function h(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),O=p[0],m=p[1],g=Object(n.useState)(void 0),x=Object(u.a)(g,2),f=x[0],v=x[1],k=Object(r.f)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"signup-h1",children:"Signup"}),Object(o.jsx)("div",{className:"loginsignup-form",children:Object(o.jsxs)("form",{className:"sign-log-form",onSubmit:function(e){e.preventDefault();var t={email:c,password:O,name:l};b.a.post("/auth/signup",t).then((function(e){k("/login")})).catch((function(e){var t=e.response.data.message;v(t)}))},children:[Object(o.jsx)("div",{className:"title",children:"Welcome"}),Object(o.jsx)("div",{className:"subtitle",children:"Let's create your account!"}),Object(o.jsxs)("div",{className:"input-container ic1",children:[Object(o.jsx)("input",{id:"email",className:"input",placeholder:"Enter Your Email ",type:"text",name:"email",value:c,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("div",{className:"cut"}),Object(o.jsxs)("div",{className:"input-container ic2",children:[Object(o.jsx)("input",{id:"password",className:"input",placeholder:"Enter Your Password",type:"password",value:O,onChange:function(e){return m(e.target.value)}}),Object(o.jsx)("div",{className:"cut"}),Object(o.jsxs)("div",{className:"input-container ic2",children:[Object(o.jsx)("input",{id:"name",className:"input",type:"text",placeholder:"Enter Your Name",value:l,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("button",{className:"submit",type:"submit",children:"Sign Up"}),f&&Object(o.jsx)("p",{className:"signup-message",children:f}),Object(o.jsx)("p",{className:"signup-message",children:"Already have an account?"}),Object(o.jsx)(j.b,{className:"link-signuptologin",to:"/login",children:"Login"})]})]})]})]})})]})}var p=a.a.createContext();function O(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(null),r=Object(u.a)(i,2),l=r[0],j=r[1],d=Object(n.useState)(!0),h=Object(u.a)(d,2),O=h[0],m=h[1],g=function(){var e=localStorage.getItem("authToken");e?b.a.get("/auth/verify",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){console.log(e);var t=e.data;j(t),s(!0),m(!1)})).catch((function(e){s(!1),j(null),m(!1)})):m(!1)};return Object(n.useEffect)((function(){g()}),[]),Object(o.jsx)(p.Provider,{value:{isLoggedIn:a,user:l,isLoading:O,loginUser:function(e){localStorage.setItem("authToken",e),g()},logoutUser:function(){localStorage.removeItem("authToken"),s(!1),j(null)}},children:e.children})}function m(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],h=Object(n.useState)(void 0),O=Object(u.a)(h,2),m=O[0],g=O[1],x=Object(r.f)(),f=Object(n.useContext)(p).loginUser;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"login-h1",children:"Login"}),Object(o.jsx)("div",{className:"loginsignup-form",children:Object(o.jsxs)("form",{className:"sign-log-form",onSubmit:function(e){e.preventDefault();var t={email:c,password:l};b.a.post("/auth/login",t).then((function(e){var t=e.data.authToken;f(t),x("/pokecards")})).catch((function(e){var t=e.response.data.message;g(t)}))},children:[Object(o.jsx)("div",{className:"title",children:"Welcome"}),Object(o.jsx)("div",{className:"subtitle",children:"Log in to continue to Website!"}),Object(o.jsxs)("div",{className:"input-container ic1",children:[Object(o.jsx)("input",{id:"email",className:"input",placeholder:"Enter Your Email ",type:"text",name:"email",value:c,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("div",{className:"cut"}),Object(o.jsxs)("div",{className:"input-container ic2",children:[Object(o.jsx)("input",{id:"password",className:"input",placeholder:"Enter Your Password",type:"password",value:l,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("button",{className:"submit",type:"submit",children:"Log In"}),m&&Object(o.jsx)("p",{className:"signup-message",children:m}),Object(o.jsx)("p",{className:"signup-message",children:"Don\xb4t have an account?"}),Object(o.jsx)(j.b,{className:"link-signuptologin",to:"/signup",children:"Signup"})]})]})]})})]})}function g(){var e=Object(n.useContext)(p),t=e.isLoggedIn,c=(e.user,e.logoutUser);return Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"nav-center",children:Object(o.jsxs)("div",{className:"nav-header",children:[Object(o.jsx)(j.b,{to:"/",children:Object(o.jsx)("button",{children:"Home"})}),t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(j.b,{to:"/pokebuy",children:[" ",Object(o.jsx)("button",{children:"PokeBuy"})]}),Object(o.jsx)(j.b,{to:"/pokecards",children:Object(o.jsx)("button",{children:"PokeCards"})}),Object(o.jsx)(j.b,{to:"/",children:Object(o.jsx)("button",{onClick:c,children:"Logout"})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.b,{to:"/signup",children:Object(o.jsx)("button",{children:"Signup"})}),Object(o.jsx)(j.b,{to:"/login",children:Object(o.jsx)("button",{children:"Login"})})]})]})})})}function x(){var e=Object(n.useContext)(p).user,t=Object(n.useState)(""),c=Object(u.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(0),r=Object(u.a)(i,2),l=r[0],d=r[1],h=Object(n.useState)(""),O=Object(u.a)(h,2),m=O[0],g=O[1],x=Object(n.useState)(""),f=Object(u.a)(x,2),v=f[0],k=f[1],N=Object(n.useState)([]),S=Object(u.a)(N,2),C=S[0],y=S[1],w=Object(n.useState)(!1),P=Object(u.a)(w,2),E=P[0],U=P[1],A=Object(n.useState)(""),L=Object(u.a)(A,2),T=(L[0],L[1],localStorage.getItem("authToken"));return Object(n.useEffect)((function(){b.a.get("/pokecards/pokemon",{headers:{Authorization:"Bearer ".concat(T)}}).then((function(e){return y(e.data.pokemons)})).catch((function(e){return console.log(e)}))}),[E]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" Add a Pokemon Card"}),Object(o.jsxs)("form",{className:"pokemon-form",onSubmit:function(t){t.preventDefault();var c={title:a,description:v,price:l,imageUrl:m,userId:e._id};""!==m&&b.a.post("/pokecards/pokemon",c,{headers:{Authorization:"Bearer ".concat(T)}}).then((function(){s(""),d(""),g(""),k(""),U(!E)})).catch((function(e){return console.log(e)}))},children:[Object(o.jsx)("label",{hmtlfor:"title",children:" Title : "}),Object(o.jsx)("input",{id:"title",type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("label",{hmtlfor:"price",children:" Price : "}),Object(o.jsx)("input",{id:"price",type:"Number",value:l,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("label",{hmtlfor:"description",children:" Description : "}),Object(o.jsx)("input",{className:"input-description",id:"description",placeholder:" write informations here",type:"text",value:v,onChange:function(e){return k(e.target.value)}}),Object(o.jsx)("input",{className:"file",id:"file",type:"file",name:"imageUrl",onChange:function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),function(e){return b.a.post("/pokecards/upload",e,{headers:{Authorization:"Bearer ".concat(T)}}).then((function(e){return e.data}))}(t).then((function(e){g(e.secure_url)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}}),Object(o.jsx)("button",{type:"submit",children:"Add this Card"})]}),C.map((function(t){if(e&&e._id===t.userId._id)return Object(o.jsxs)("div",{className:"pokecards",children:[Object(o.jsxs)("h1",{children:[" ",t.title]}),Object(o.jsx)("img",{className:"box",src:t.imageUrl}),Object(o.jsxs)("p",{className:"price",children:[" ",t.price," $"]}),Object(o.jsx)("p",{className:"description",children:t.description}),Object(o.jsx)(j.b,{to:"/pokecards/edit/".concat(t._id),children:Object(o.jsx)("button",{children:"Edit this PokeCard"})})]},t._id)}))]})}function f(){Object(n.useContext)(p).user;var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(u.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),O=h[0],m=h[1],g=Object(n.useState)(""),x=Object(u.a)(g,2),f=x[0],v=x[1],k=Object(r.g)().id,N=Object(r.f)(),S=localStorage.getItem("authToken");Object(n.useEffect)((function(){b.a.get("/pokecards/".concat(k),{headers:{Authorization:"Bearer ".concat(S)}}).then((function(e){var t=e.data,c=t.title,n=t.price,s=t.imageUrl,i=t.description;a(c),j(n),v(i),m(s)})).catch((function(e){return console.log(e)}))}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Edit Your PokeCard"}),Object(o.jsxs)("form",{className:"pokemon-form",onSubmit:function(e){e.preventDefault();var t={title:c,price:l,imageUrl:O,description:f};b.a.put("/pokecards/".concat(k),t,{headers:{Authorization:"Bearer ".concat(S)}}).then((function(e){console.log(e),N("/pokecards")}))},children:[Object(o.jsx)("label",{hmtlfor:"title",children:" Title : "}),Object(o.jsx)("input",{id:"title",type:"text",value:c,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{hmtlfor:"price",children:" Price : "}),Object(o.jsx)("input",{id:"price",type:"Number",value:l,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("label",{hmtlfor:"description",children:" Description : "}),Object(o.jsx)("input",{className:"input-description",id:"description",placeholder:" write informations here",type:"text",value:f,onChange:function(e){return v(e.target.value)}}),Object(o.jsx)("input",{className:"file",id:"file",type:"file",name:"imageUrl",onChange:function(e){var t,c=new FormData;console.log("uploadData",e.target.files[0]),c.append("imageUrl",e.target.files[0]),(t=c,b.a.post("/pokecards/upload",t,{headers:{Authorization:"Bearer ".concat(S)}}).then((function(e){return e.data}))).then((function(e){console.log("drin"),console.log(e.secure_url),m(e.secure_url)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}}),Object(o.jsx)("button",{children:"Edit this PokeCard"})]}),Object(o.jsx)("button",{onClick:function(){b.a.delete("/pokecards/".concat(k),{headers:{Authorization:"Bearer ".concat(S)}}).then((function(){console.log("deleted"),N("/pokecards")})).catch((function(e){return console.log(e)}))},children:"Delete this Pokecard from your List"})]})}function v(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(!1),d=Object(u.a)(j,2),h=d[0],p=(d[1],localStorage.getItem("authToken"));Object(n.useEffect)((function(){b.a.get("/pokecards/pokemon",{headers:{Authorization:"Bearer ".concat(p)}}).then((function(e){return l(e.data.pokemons)})).catch((function(e){return console.log(e)}))}),[h]);var O=r.filter((function(e){return"".concat(e.title).toLowerCase().includes(c)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Hi PokeBuy"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{hmtlfor:"search",placeholder:"Search by Name",children:" Search by Name : "}),Object(o.jsx)("input",{id:"search",type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),O.map((function(e){return Object(o.jsxs)("div",{className:"pokecards",children:[Object(o.jsxs)("h1",{children:[" ",e.title]}),Object(o.jsx)("img",{className:"box",src:e.imageUrl}),Object(o.jsxs)("p",{className:"price",children:[" ",e.price," $"]}),Object(o.jsx)("p",{className:"description",children:e.description})]},e._id)}))]})}var k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(g,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",element:Object(o.jsx)(l,{})}),Object(o.jsx)(r.a,{path:"/signup",element:Object(o.jsx)(h,{})}),Object(o.jsx)(r.a,{path:"/login",element:Object(o.jsx)(m,{})}),Object(o.jsx)(r.a,{path:"/pokecards",element:Object(o.jsx)(x,{})}),Object(o.jsx)(r.a,{path:"/pokebuy",element:Object(o.jsx)(v,{})}),Object(o.jsx)(r.a,{path:"/pokecards/edit/:id",element:Object(o.jsx)(f,{})})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(j.a,{children:Object(o.jsx)(O,{children:Object(o.jsx)(k,{})})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.0ee2f3e7.chunk.js.map