(this.webpackJsonpaestickers=this.webpackJsonpaestickers||[]).push([[0],{102:function(e,c,t){},103:function(e,c,t){},104:function(e,c,t){},105:function(e,c,t){},106:function(e,c,t){},107:function(e,c,t){},108:function(e,c,t){},109:function(e,c,t){},110:function(e,c,t){},111:function(e,c,t){"use strict";t.r(c);var a=t(4),s=t(28),n=t.n(s),o=t(18),r=t(16),l=(t(68),t.p+"static/media/logoBlack.4c3139b5.svg"),i=t.p+"static/media/logoWhite.5617289a.svg",j=(t(69),t(26)),d=t(57),m=t(44),b=t(8),u=t(54),x=t(53),O=t(46),h=t(2),p=Object(a.createContext)(),f=function(){return Object(a.useContext)(p)},g=function(e){var c=e.children,t=Object(a.useState)([]),s=Object(b.a)(t,2),n=s[0],o=s[1],r=function(e){return n.find((function(c){return c.sticker.id===e}))};return Object(h.jsx)(p.Provider,{value:{cart:n,addItem:function(e,c){if(r(e.id)){var t=Object(O.a)(n);t.map((function(t){t.sticker.id===e.id&&(t.cantidad+=c)})),o(t)}else o([].concat(Object(O.a)(n),[{sticker:e,cantidad:c}]))},clear:function(){return o([])},removeSticker:function(e){var c=n.filter((function(c){return c.sticker.id!==e}));o(c)}},children:c})},v=Object(a.createContext)(),k=function(){return Object(a.useContext)(v)},N=function(e){var c=e.children,t=Object(a.useState)(!1),s=Object(b.a)(t,2),n=s[0],o=s[1];return Object(h.jsx)(v.Provider,{value:{dark:n,setDark:o},children:c})},y=(t(71),function(){var e=k().dark,c=f().cart,t=Object(a.useState)(0),s=Object(b.a)(t,2),n=s[0],o=s[1],r=Object(a.useState)(!1),l=Object(b.a)(r,2),i=l[0],j=l[1],d=function(){j(!i)};return Object(a.useEffect)((function(){!function(){var e=0;0!=c.length?c.map((function(c){e+=c.cantidad,o(e)})):o(0)}()}),[c]),Object(h.jsxs)("button",{onMouseEnter:d,onMouseLeave:d,className:"".concat(e?"dark":"light"," cartWidget position-relative"),children:[i?Object(h.jsx)(x.a,{}):Object(h.jsx)(u.a,{}),Object(h.jsx)("div",{className:"".concat(i?"cantCartMiddle position-absolute translate-middle top-50 start-50":"cantCartTop position-absolute translate-middle top-0 start-100 pt-4 pe-4"),children:n?Object(h.jsx)("span",{children:n}):Object(h.jsx)("span",{})})]})}),_=function(){var e=k(),c=e.dark,t=e.setDark;return Object(h.jsxs)("div",{className:"".concat(c?"navBarDark":"navBarLight"," fixed-top col-12 row m-0 p-0 px-3 justify-content-center"),children:[Object(h.jsx)("div",{className:"".concat(c?"logoDark":"logoLight"," col-10 col-sm-8 col-md-6 col-lg-5 col-xxl-4 my-3"),children:Object(h.jsx)(o.b,{to:"/aeStickers/",children:Object(h.jsx)("img",{className:"logo__img",src:c?i:l,alt:"logo"})})}),Object(h.jsxs)("div",{className:"nav col-12 col-md-10 col-lg-8 col-xxl-9 row",children:[Object(h.jsx)("button",{id:"modoClaro",onClick:function(){c?(t(!1),console.log(c)):(t(!0),console.log(c))},className:"".concat(c?"nav__itemDark":"nav__itemLight"," btn col-1 my-1 p-1"),children:c?Object(h.jsx)(j.b,{}):Object(h.jsx)(j.c,{})}),Object(h.jsx)("div",{className:"".concat(c?"nav__itemDark":"nav__itemLight"," col-1 m-1 p-1"),children:Object(h.jsx)(o.c,{to:"/aeStickers/categoria/ojos",activeClassName:"nav__itemSelectedLight",children:Object(h.jsx)(d.a,{})})}),Object(h.jsx)("div",{className:"".concat(c?"nav__itemDark":"nav__itemLight"," col-1 m-1 p-1"),children:Object(h.jsx)(o.c,{to:"/aeStickers/categoria/narices",activeClassName:"nav__itemSelectedLight",children:Object(h.jsx)(m.b,{})})}),Object(h.jsx)("div",{className:"".concat(c?"nav__itemDark":"nav__itemLight"," col-1 m-1 p-1"),children:Object(h.jsx)(o.c,{to:"/aeStickers/categoria/bocas",activeClassName:"nav__itemSelectedLight",children:Object(h.jsx)(m.a,{})})}),Object(h.jsx)("div",{id:"".concat(c?"cartDark":"cartLight"),className:"col-1 px-1",children:Object(h.jsx)(o.b,{to:"/aeStickers/carrito",style:{textDecoration:"none"},children:Object(h.jsx)(y,{})})})]})]})},S=t(24),C=t.n(S),w=t(27),D=(t(41),t(30)),L=t.n(D),I=(t(95),t(58)),E=(t(96),function(e){var c=e.id,t=e.sticker,a=e.nombre,s=e.precio,n=k().dark;return Object(h.jsxs)("div",{className:"".concat(n?"dark":"light"," sticker col-5 col-lg-3 col-xxl-2 mx-sm-3 mx-xl-4 my-4 p-0 p-sm-3 row justify-content-center"),children:[Object(h.jsx)("img",{src:t,alt:"sticker",className:"col-12 sticker__img img-fluid p-2 my-1"}),Object(h.jsxs)("p",{className:"col-12 sticker__precio my-2",children:["$",s]}),Object(h.jsx)("h5",{className:"col-12 sticker__nombre my-3",children:a}),Object(h.jsx)(o.b,{className:"col-9 col-sm-6 col-md-5 col-lg-6 col-xl-5 col-xxl-8 my-2 my-md-3 my-xl-4 p-0 text-decoration-none",to:"/aeStickers/detalles/".concat(c),children:Object(h.jsxs)("button",{className:"".concat(n?"btnDark":"btnLight"," sticker__usar"),children:["USAR ",Object(h.jsx)(I.a,{})]})})]})}),T=function(e){var c=e.stk,t=c.id,a=c.sticker,s=c.nombre,n=c.precio;return Object(h.jsx)(E,{id:t,sticker:a,nombre:s,precio:n})},G=t(35),R=(t(50),G.a.initializeApp({apiKey:"AIzaSyBDl77O9FL0vK7Yg1XbD2oNyIClTbRvTVs",authDomain:"aestickers-8d12f.firebaseapp.com",projectId:"aestickers-8d12f",storageBucket:"aestickers-8d12f.appspot.com",messagingSenderId:"787847911185",appId:"1:787847911185:web:db2e4ced652f6aa474deb0"}));function A(){return G.a.firestore(R)}var B=function(e){var c=e.ctg,t=k().dark,s=Object(a.useState)([]),n=Object(b.a)(s,2),o=n[0],r=n[1],l=Object(a.useState)(!0),i=Object(b.a)(l,2),j=i[0],d=i[1],m=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t=e.sent,setTimeout((function(){var e=t.collection("stickers"),a=e.where("categoria","==",c);c?a.get().then((function(e){0===e.size&&console.log("No hay resultados"),r(e.docs.map((function(e){return e.data()})))})).catch((function(e){console.log("Error:",e)})).finally((function(){d(!1)})):(e.orderBy("nombre","asc"),e.get().then((function(e){0===e.size&&console.log("No hay resultados"),r(e.docs.map((function(e){return e.data()})))})).catch((function(e){console.log("Error:",e)})).finally((function(){d(!1)})))}),1400),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error catch:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d(!0),m()}),[c]),Object(h.jsx)("div",{className:"col-12 col-xl-11 col-xxl-10 contenedorItemList row py-4 px-0 justify-content-center align-items-center",children:j?Object(h.jsx)("div",{className:"cargando col-12",children:Object(h.jsx)(L.a,{type:"ThreeDots",color:"".concat(t?"white":"black"),height:90,width:90,timeout:4e3})}):o.map((function(e){return Object(h.jsx)(T,{stk:e},e.id)}))})},z=function(){var e=k().dark;return Object(h.jsx)("div",{className:"row justify-content-center",style:e?{backgroundColor:"black"}:{backgroundColor:"white"},children:Object(h.jsx)(B,{ctg:!1})})},P=t(6),M=t(25),F=t(59),$=(t(102),function(e){var c=e.onBuy,t=e.initial,s=e.stock,n=k().dark,r=Object(a.useState)(t),l=Object(b.a)(r,2),i=l[0],j=l[1],d=Object(a.useState)(!1),m=Object(b.a)(d,2),u=m[0],x=m[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"counter col-12 d-flex justify-content-center",children:[Object(h.jsx)("button",{id:"".concat(n?"btnDark":"btnLight"),className:"counter__btn pb-1",onClick:function(){i>t&&j(i-1)},children:" - "}),Object(h.jsxs)("p",{className:"".concat(n?"dark":"light"," counter__qty my-2 mx-4"),children:[i," "]}),Object(h.jsx)("button",{id:"".concat(n?"btnDark":"btnLight"),className:"counter__btn pb-1",onClick:function(){i<s&&j(i+1)},children:" + "})]}),Object(h.jsxs)("div",{className:"col-12 row justify-content-center",children:[Object(h.jsx)("button",{className:"".concat(n?"cartDark":"cartLight"," btn__cart"),onClick:function(){i<=s?(c(i),j(t),x(!0)):alert("Lo sentimos, ya no quedan m\xe1s :(")},children:Object(h.jsx)(F.a,{})}),u?Object(h.jsx)(o.b,{className:"col-12 mt-3 d-flex justify-content-center text-decoration-none",to:"/aeStickers/carrito",children:Object(h.jsx)("button",{className:"".concat(n?"verDark":"verLight"," ver__cart"),children:"IR AL CARRITO "})}):Object(h.jsx)("div",{})]})]})}),q=(t(103),function(e){var c=e.stk,t=c.sticker,s=c.stock,n=c.nombre,r=c.precio,l=(c.categoria,c.descripcion),i=(c.ejemplo,f().addItem),j=k().dark,d=Object(a.useState)(s),m=Object(b.a)(d,2),u=m[0],x=m[1];return Object(h.jsxs)("div",{className:"detalle col-11 col-md-10 col-xl-8 col-xxl-6 row p-0 py-xxl-5",children:[Object(h.jsx)("div",{className:"".concat(j?"dark":"light"," goHome col-12 mb-3 p-0 row"),children:Object(h.jsx)(o.b,{to:"/aeStickers/",className:"col-1 p-0 ms-auto text-decoration-none",children:Object(h.jsx)(M.a,{})})}),Object(h.jsxs)("div",{className:"stkDetail col-12 row p-0 justify-content-evenly align-items-center",children:[Object(h.jsx)("div",{className:"stkDetail__img col-8 mb-2 mx-2",children:Object(h.jsx)("img",{src:t,className:"img-fluid",alt:"sticker"})}),Object(h.jsxs)("div",{className:"stkDetail__info col-11 mt-1",children:[Object(h.jsx)("h4",{className:"".concat(j?"dark":"light"," info__nombre my-1"),children:n}),Object(h.jsx)("p",{className:"".concat(j?"dark":"light"," info__desc my-3 ps-2"),children:l}),Object(h.jsxs)("h5",{className:"".concat(j?"dark":"light"," info__precio mt-3"),children:["$",r]})]}),Object(h.jsx)("div",{className:"stkDetail__buy col-8 row justify-content-center",children:Object(h.jsx)($,{onBuy:function(e){e<=u?(x(u-e),i(c,e)):console.log("Ocurri\xf3 un error!")},initial:1,stock:u})})]})]})}),H=(t(104),function(e){var c=e.id,t=k().dark,s=Object(a.useState)([]),n=Object(b.a)(s,2),o=n[0],r=n[1],l=Object(a.useState)(!0),i=Object(b.a)(l,2),j=i[0],d=i[1],m=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t=e.sent,setTimeout((function(){t.collection("stickers").doc(c).get().then((function(e){e.exists?r(Object(P.a)({id:e.id},e.data())):console.log("No existe sticker con ese id")})).catch((function(e){console.log("Error buscando stickers:",e)})).finally((function(){d(!1)}))}),1700),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en la funcion:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(h.jsx)("div",{className:"col-12 col-lg-10 col-xl-8 col-xxl-6 contenedorItemDetail py-5 justify-content-evenly align-items-center",children:j?Object(h.jsx)("div",{className:"cargando",children:Object(h.jsx)(L.a,{type:"Rings",color:"".concat(t?"white":"black"),height:130,width:130,timeout:4e3})}):Object(h.jsx)("div",{className:"row p-0 justify-content-center",children:Object(h.jsx)(q,{stk:o})})})}),K=function(){var e=Object(r.f)().id,c=k().dark;return Object(h.jsx)("div",{style:c?{backgroundColor:"black"}:{backgroundColor:"white"},className:"row p-0 justify-content-center",children:Object(h.jsx)(H,{id:e})})},J=function(){var e=Object(r.f)().ctg,c=k().dark;return Object(h.jsx)("div",{style:c?{backgroundColor:"black"}:{backgroundColor:"white"},className:"row p-0 justify-content-center",children:Object(h.jsx)(B,{ctg:e})})},U=t(113),V=(t(105),function(){var e=k().dark;return Object(h.jsxs)("div",{className:"contenedorNoItems col-10 col-sm-8 p-0 pb-5 row justify-content-center align-items-start",children:[Object(h.jsx)("h4",{className:"".concat(e?"dark":"light"," noHay col-12 mt-5 text-center"),children:"NO HAY STICKERS AGREGADOS"}),Object(h.jsxs)(U.a,{className:"col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-0",fade:!0,controls:!1,indicators:!1,children:[Object(h.jsx)(U.a.Item,{interval:1300,children:Object(h.jsx)("img",{className:"img-fluid rounded-circle",src:"https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieChico-14_llursj.jpg",alt:"storie de persona usando nuestros stickers 1"})}),Object(h.jsx)(U.a.Item,{interval:1300,children:Object(h.jsx)("img",{className:"img-fluid rounded-circle",src:"https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieRubia-14_ozuqj7.jpg",alt:"storie de persona usando nuestros stickers 2"})}),Object(h.jsx)(U.a.Item,{interval:1300,children:Object(h.jsx)("img",{className:"img-fluid rounded-circle",src:"https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieHipster-14_nbzwsw.jpg",alt:"storie de persona usando nuestros stickers 3"})}),Object(h.jsx)(U.a.Item,{interval:1300,children:Object(h.jsx)("img",{className:"img-fluid rounded-circle",src:"https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieGorrita-14_jcqczq.jpg",alt:"storie de persona usando nuestros stickers 4"})})]}),Object(h.jsx)("h6",{className:"".concat(e?"dark":"light"," verColeccion col-12 m-0 text-center"),children:"Quer\xe9s ver nuestra colecci\xf3n?"}),Object(h.jsx)("div",{className:"col-12 mb-5 text-center",children:Object(h.jsx)(o.b,{to:"/aeStickers/",children:Object(h.jsx)("button",{className:"".concat(e?"btnDark":"btnLight"," irHome__btn"),children:"VER STICKERS"})})})]})}),W=t(114),X=t(34),Y=(t(106),function(e){var c=e.total,t=e.setBuying,s=e.setOrdenId,n=k().dark,o=f(),r=o.clear,l=o.cart,i=Object(a.useState)(!1),d=Object(b.a)(i,2),m=d[0],u=d[1],x=Object(a.useState)(!1),O=Object(b.a)(x,2),p=O[0],g=O[1],v=Object(a.useState)(""),N=Object(b.a)(v,2),y=N[0],_=N[1],S=Object(a.useState)(""),D=Object(b.a)(S,2),L=D[0],I=D[1],E=Object(a.useState)(""),T=Object(b.a)(E,2),R=T[0],B=T[1],z=Object(a.useState)(""),P=Object(b.a)(z,2),F=P[0],$=P[1],q=Object(a.useState)(""),H=Object(b.a)(q,2),K=H[0],J=H[1],U=function(){var e=Object(w.a)(C.a.mark((function e(){var a,n,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:a=e.sent,n=a.collection("ordenes"),o={buyer:{nombre:y,apellido:L,email:R,telefono:K},stickers:l,fecha:G.a.firestore.Timestamp.fromDate(new Date),totalCompra:c},console.log(o),n.add(o).then((function(e){var c=e.id;console.log(c),s(c)})).catch((function(e){return console.log("error al crear orden:",e)})).finally((function(){t(!1),r()})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error de compra");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u(""!==y&&""!==L&&""!==R&&""!==K&&R===F),g(R===F)}),[y,L,R,K,F]),Object(h.jsxs)(W.a,{className:"col-12 col-sm-11 col-md-10 col-xxl-8 row p-1 justify-content-center",onSubmit:function(e){e.preventDefault(),console.log("Compra realizada!"),U()},children:[Object(h.jsxs)(W.a.Group,{className:"formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3",controlId:"formNombre",children:[Object(h.jsxs)(W.a.Label,{className:"".concat(n?"dark":"light"," formGroup__label"),children:["Nombre",""!==y?Object(h.jsx)(j.a,{className:"check ms-2"}):Object(h.jsx)(M.b,{className:"error ms-2"})]}),Object(h.jsx)(W.a.Control,{className:"formGroup__control",onChange:function(e){return _(e.target.value)},type:"name",placeholder:"Nombre"})]}),Object(h.jsxs)(W.a.Group,{className:"formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3",controlId:"formApellido",children:[Object(h.jsxs)(W.a.Label,{className:"".concat(n?"dark":"light"," formGroup__label"),children:["Apellido",""!==L?Object(h.jsx)(j.a,{className:"check ms-2"}):Object(h.jsx)(M.b,{className:"error ms-2"})]}),Object(h.jsx)(W.a.Control,{className:"formGroup__control",onChange:function(e){return I(e.target.value)},type:"name",placeholder:"Apellido"})]}),Object(h.jsxs)(W.a.Group,{className:"formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3",controlId:"formEmail",children:[Object(h.jsxs)(W.a.Label,{className:"".concat(n?"dark":"light"," formGroup__label"),children:["Tu email",""!==R?p?Object(h.jsx)(j.a,{className:"check ms-2"}):Object(h.jsx)(M.b,{className:"error ms-2"}):Object(h.jsx)(h.Fragment,{})]}),Object(h.jsx)(W.a.Control,{className:"formGroup__control",onChange:function(e){return B(e.target.value)},type:"email",placeholder:"ejemplo@mail.com"})]}),Object(h.jsxs)(W.a.Group,{className:"formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3",controlId:"formConfirmEmail",children:[Object(h.jsxs)(W.a.Label,{className:"".concat(n?"dark":"light"," formGroup__label"),children:["Confirm\xe1 tu email",""!==F?p?Object(h.jsx)(j.a,{className:"check ms-2"}):Object(h.jsx)(M.b,{className:"error ms-2"}):Object(h.jsx)(h.Fragment,{})]}),Object(h.jsx)(W.a.Control,{className:"formGroup__control",onChange:function(e){return $(e.target.value)},type:"email",placeholder:"ejemplo@mail.com"})]}),Object(h.jsxs)(W.a.Group,{className:"formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3",controlId:"formTelefono",children:[Object(h.jsxs)(W.a.Label,{className:"".concat(n?"dark":"light"," formGroup__label"),children:["Tel\xe9fono",""!==K?Object(h.jsx)(j.a,{className:"check ms-2"}):Object(h.jsx)(M.b,{className:"error ms-2"})]}),Object(h.jsx)(W.a.Control,{className:"formGroup__control",onChange:function(e){return J(e.target.value)},type:"phone",placeholder:"11 666 345"})]}),Object(h.jsx)("div",{className:"col-12 my-3 d-flex justify-content-center",children:m?Object(h.jsx)(X.a,{className:"".concat(n?"comprarDark":"comprarLight"," col-4 my-2 py-1 btnComprar"),variant:"primary",type:"submit",children:"COMPRAR"}):Object(h.jsx)(X.a,{disabled:!0,className:"col-4 my-2 py-1 btnComprar",variant:"primary",type:"submit",children:"COMPRAR"})})]})}),Q=t(38),Z=t.p+"static/media/ticketTop.d0625b6b.svg",ee=t.p+"static/media/ticketBottom.6a448dbc.svg",ce=(t(107),function(e){var c=e.compra,t=e.ordenId,a=c.buyer,s=c.fecha,n=c.stickers,r=c.totalCompra;return Object(h.jsxs)("div",{className:"col-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 ticket row py-3 my-3 my-md-5 position-relative justify-content-center",children:[Object(h.jsx)("div",{className:"corteTop col-12 px-0 position-absolute translate-middle",children:Object(h.jsx)("img",{className:"corte__svg",src:Z,alt:"ticketTop"})}),Object(h.jsx)("div",{className:"col-11 mt-4 row",children:Object(h.jsx)(o.b,{to:"/aeStickers/",className:"cerrar col-1 p-0 ms-auto text-decoration-none",children:Object(h.jsx)(M.a,{})})}),Object(h.jsx)("div",{className:"col-10 col-sm-10 col-lg-8 col-xxl-7 my-4",children:Object(h.jsx)("img",{className:"img-fluid",src:l,alt:"logo"})}),Object(h.jsx)("h1",{className:"col-11 mt-3 tuCompra text-center",children:"TU COMPRA"}),Object(h.jsxs)("div",{className:"col-11 px-3 mt-3",children:[Object(h.jsx)("p",{className:"my-1 ordenIdLabel",children:"ORDEN:"}),Object(h.jsx)("p",{className:"my-1 ordenId",children:t}),Object(h.jsx)("p",{className:"my-2 fecha",children:s.toDate().toLocaleString()})]}),Object(h.jsxs)("div",{className:"col-11 mt-3 px-3 encabezado d-flex justify-content-between",children:[Object(h.jsx)("span",{children:"CANT."}),Object(h.jsx)("span",{children:"STICKER"}),Object(h.jsx)("span",{children:"PRECIO"})]}),Object(h.jsx)("div",{className:"col-11 mt-2 mb-4 px-3",children:n.map((function(e){var c=e.cantidad,t=e.sticker;return Object(h.jsxs)("div",{className:"itemComprado my-1 d-flex justify-content-between",children:[Object(h.jsx)("span",{children:c}),Object(h.jsx)("span",{children:t.nombre}),Object(h.jsxs)("span",{children:["$",t.precio]})]},t.id)}))}),Object(h.jsxs)("div",{className:"col-11 my-2 px-3 text-end",children:[Object(h.jsx)("span",{className:"totalLabel mx-1",children:"TOTAL:"}),Object(h.jsxs)("span",{className:"total mx-1",children:["$",r]})]}),Object(h.jsxs)("div",{className:"col-11 my-3 px-3",children:[Object(h.jsx)("p",{className:"datosLabel",children:"DATOS DE COMPRA:"}),Object(h.jsxs)("p",{className:"datos",children:[Object(h.jsx)(Q.c,{})," ",a.nombre," ",a.apellido]}),Object(h.jsxs)("p",{className:"datos",children:[Object(h.jsx)(Q.a,{})," ",a.email]}),Object(h.jsxs)("p",{className:"datos",children:[Object(h.jsx)(Q.b,{})," ",a.telefono]})]}),Object(h.jsx)("div",{className:"corteBottom col-12 px-0 position-absolute translate-middle",children:Object(h.jsx)("img",{className:"corte__svg",src:ee,alt:"ticketBottom"})})]})}),te=(t(108),function(e){var c=e.ordenId,t=Object(a.useState)([]),s=Object(b.a)(t,2),n=s[0],o=s[1],r=Object(a.useState)(!1),l=Object(b.a)(r,2),i=l[0],j=l[1],d=k().dark,m=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t=e.sent,setTimeout((function(){t.collection("ordenes").doc(c).get().then((function(e){e.exists?o(Object(P.a)({id:e.id},e.data())):console.log("No existe orden con ese id")})).catch((function(e){console.log("Error buscando orden:",e)})).finally((function(){j(!0)}))}),1500),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en la funcion:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(h.jsx)("div",{className:"contenedorBuyComplete",children:i?Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)(ce,{compra:n,ordenId:c})}):Object(h.jsx)("div",{className:"cargando",children:Object(h.jsx)(L.a,{type:"TailSpin",color:"".concat(d?"white":"black"),height:100,width:100,timeout:5e3})})})}),ae=(t(109),function(){var e=f(),c=e.clear,t=e.removeSticker,s=e.cart,n=Object(a.useState)(0),o=Object(b.a)(n,2),r=o[0],l=o[1],i=k().dark;return Object(a.useEffect)((function(){!function(){var e=0;s.map((function(c){e+=c.cantidad*c.sticker.precio,l(e)}))}()}),[s]),Object(h.jsxs)("div",{className:"carritoCierre col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 row p-1 justify-content-center",children:[Object(h.jsx)("div",{className:"col-12 row p-0 justify-content-start",children:Object(h.jsxs)("button",{className:"".concat(i?"vaciarDark":"vaciarLight"," col-2 my-3 ms-3 p-1 pb-2 vaciarCarrito"),onClick:c,children:[" ",Object(h.jsx)(M.c,{})," "]})}),s.map((function(e){var c=e.sticker,a=c.sticker,s=c.nombre,n=c.precio,o=c.id;return Object(h.jsxs)("div",{className:"item col-5 col-md-3 row m-2 m-md-4 p-1",children:[Object(h.jsx)("div",{className:"col-3 ms-auto p-0",children:Object(h.jsx)("button",{onClick:function(){return t(o)},type:"button",className:"".concat(i?"dark":"light"," borrarStk"),"aria-label":"Remove",children:" X "})}),Object(h.jsx)("div",{className:"col-12 my-2",children:Object(h.jsx)("img",{className:"img-fluid",src:a,alt:"sticker"})}),Object(h.jsxs)("div",{className:"col-12 my-2",children:[Object(h.jsx)("h5",{className:"".concat(i?"dark":"light"," itemNombre"),children:s}),Object(h.jsxs)("h6",{className:"".concat(i?"dark":"light"," itemPrecio"),children:["$",n]}),Object(h.jsxs)("span",{className:"".concat(i?"dark":"light"," itemCantidad"),children:["Llev\xe1s ",e.cantidad]})]})]},o)})),Object(h.jsx)("div",{className:"col-10 my-3 text-end",children:Object(h.jsxs)("h4",{className:"".concat(i?"dark":"light"," totalPrecio"),children:["Total $",r]})})]})}),se=function(){var e=Object(a.useState)(""),c=Object(b.a)(e,2),t=c[0],s=c[1],n=k().dark,o=f().cart,r=Object(a.useState)(0),l=Object(b.a)(r,2),i=l[0],j=l[1],d=Object(a.useState)(!1),m=Object(b.a)(d,2),u=m[0],x=m[1],O=Object(a.useState)(!0),p=Object(b.a)(O,2),g=p[0],v=p[1];return Object(a.useEffect)((function(){!function(){var e=0;o.map((function(c){e+=c.cantidad*c.sticker.precio,j(e)}))}(),x(0!=o)}),[o]),Object(h.jsx)("div",{style:n?{backgroundColor:"black"}:{backgroundColor:"white"},className:"col-12 row p-0 justify-content-center",children:g?u?Object(h.jsxs)("div",{className:"col-12 row p-1 justify-content-center align-items-center",children:[Object(h.jsx)(ae,{}),Object(h.jsx)(Y,{total:i,setBuying:v,setOrdenId:s})]}):Object(h.jsx)(V,{}):Object(h.jsx)(te,{ordenId:t})})},ne=(t(110),t.p+"static/media/logoMin__white.7866990a.svg"),oe=t.p+"static/media/logoMin__black.cfa5e45c.svg",re=function(){var e=k().dark;return Object(h.jsx)("div",{className:"".concat(e?"footerDark":"footerLight"," col-12 row p-0 pb-2 px-md-3 justify-content-center"),children:Object(h.jsxs)("div",{className:"col-12 col-lg-10 col-xl-8 col-xxl-10 row m-0 p-0",children:[Object(h.jsx)("div",{className:"col-5 col-xl-4 mt-5 ms-4 me-auto logoFooter",children:Object(h.jsx)("img",{className:"logoFooter__img",src:e?oe:ne,alt:"logo"})}),Object(h.jsxs)("div",{className:"".concat(e?"credDark":"credLight"," creditos col-11 mt-4 mb-5 mb-md-3 ms-auto me-2"),children:[Object(h.jsx)("p",{className:"creditos__des my-2",children:"Desarrollado x Paloma Gonz\xe1lez"}),Object(h.jsx)("p",{className:"creditos__dis my-2",children:"Dise\xf1ado x Ail\xedn Carl\xe9s"}),Object(h.jsx)("p",{className:"creditos__ano my-2",children:"- 2021 -"})]})]})})};var le=function(){return Object(h.jsx)(o.a,{children:Object(h.jsx)(g,{children:Object(h.jsxs)(N,{children:[Object(h.jsx)(_,{}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/aeStickers/detalles/:id",children:Object(h.jsx)(K,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/aeStickers/categoria/:ctg",children:Object(h.jsx)(J,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/aeStickers/carrito",children:Object(h.jsx)(se,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/aeStickers/",children:Object(h.jsx)(z,{})})]}),Object(h.jsx)(re,{})]})})})};n.a.render(Object(h.jsx)(le,{}),document.getElementById("root"))},69:function(e,c,t){},71:function(e,c,t){},95:function(e,c,t){},96:function(e,c,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.eec2c23d.chunk.js.map