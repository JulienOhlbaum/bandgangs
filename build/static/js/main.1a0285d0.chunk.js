(this.webpackJsonpp2template=this.webpackJsonpp2template||[]).push([[0],{52:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c(9),i=c(26),r=c.n(i),o=c(4),l=c(2),j=c(11),u=c.n(j),d=c(29),h=(c(52),function(e){var t=Object.assign({},e),c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],r=s[1],j=Object(l.f)();return Object(a.jsxs)("div",{className:"grid-item",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},onClick:function(){return e=t.id,void j.push("/playlist/".concat(e));var e},children:[Object(a.jsx)("img",{src:t.icons[0].url,alt:"picture",className:i&&"hoveredImage"}),i&&Object(a.jsx)("p",{className:"hoveredItem",children:t.name.replace(/[&]/g,"n").replace(/[/-]/g," ")})]})}),b=(c(58),function(e){var t=e.filterGenres;return Object(a.jsx)("div",{className:"grid-container",children:t.map((function(e,t){return Object(a.jsx)(h,Object(d.a)({},e),t)}))})}),O=(c(59),function(e){var t=e.tracks,c=e.setSong;return Object(a.jsx)("div",{className:"playlist-item track-container",children:t.map((function(e,t){return Object(a.jsx)("div",{className:"tracks",onClick:function(){return c(e.track.preview_url)},children:Object(a.jsxs)("p",{children:[e.track.artists[0].name,"       -       ",e.track.name]})},t)}))})}),m=(c(60),function(e){var t=e.token,c=e.setCatchid,s=e.playlists,i=Object(l.g)().id;c(i);var r=Object(n.useState)([]),j=Object(o.a)(r,2),d=j[0],h=j[1],b=Object(n.useState)(""),m=Object(o.a)(b,2),p=m[0],f=m[1],x=Object(n.useState)(!1),v=Object(o.a)(x,2),g=v[0],y=v[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{className:"category-title",children:i.replace(/[&]/g,"n").replace(/[/-_]/g," ")}),Object(a.jsx)("div",{className:"playlist-container",children:Object(a.jsx)("div",{className:"scrollx-section",children:s.map((function(e){return Object(a.jsx)("div",{className:"playlist-item",onClick:function(){return function(e){y(!0),u()("https://api.spotify.com/v1/playlists/".concat(e,"/tracks?limit=50"),{method:"GET",headers:{Authorization:"Bearer "+t}}).then((function(e){h(e.data.items)}))}(e.id)},children:Object(a.jsx)("img",{src:e.images[0].url,alt:"picture"})},e.id)}))})}),g&&Object(a.jsxs)("div",{className:"trackAndPlayer-container",children:[Object(a.jsx)("h2",{className:"track-title",children:"Tracks"}),Object(a.jsx)("audio",{controls:!0,autoPlay:!1,name:"media",src:p,type:"audio/mpeg",className:"player"})]}),g&&Object(a.jsx)(O,{tracks:d,setSong:f})]})}),p=c(28),f=(c(61),function(e){var t=e.setValueInput,c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],r=s[1];return Object(a.jsx)(p.a.Provider,{value:{size:"50",color:"white",oppacity:"0.8",padding:"50"},children:Object(a.jsxs)("div",{className:"search-container",children:[i&&Object(a.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"search...",className:"search-txt"}),Object(a.jsx)("button",{onClick:function(){return r(!i)},className:"search-btn"})]})})}),x=(c(62),function(e){var t=e.setValueInput;return Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{className:"header",id:"section-home",children:[Object(a.jsx)(s.b,{to:"/home",className:"link-title",children:Object(a.jsx)("div",{title:"title-container",children:Object(a.jsx)("h1",{className:"title",children:"BANDGANGS"})})}),Object(a.jsx)(f,{setValueInput:t})]})})}),v=(c(63),function(){return Object(a.jsx)("div",{className:"container-homepage",children:Object(a.jsxs)("header",{className:"app-header",children:[Object(a.jsx)("h2",{className:"text-homepage",children:"Relax. Chill. Discover gooooood music."}),Object(a.jsx)("h3",{className:"intro-homepage",children:"Welcome to Bandgangs, an innovative way to listen to music, discover artists, only providing you with the cream of the crop. Let yourself drop in this thrilling and sensory experience."}),Object(a.jsx)(s.b,{to:"/home",children:Object(a.jsx)("div",{className:"arrow",children:Object(a.jsx)("a",{href:"#section-home"})})})]})})}),g=(c(64),function(){var e={ClientId:"c76a95966a23433f8a6ee8aa561d66ac",ClientSecret:"e35b7518201e448b854e8a4a4b2b6d24"},t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),d=j[0],h=j[1],O=Object(n.useState)(""),p=Object(o.a)(O,2),f=p[0],g=p[1],y=Object(n.useState)([]),N=Object(o.a)(y,2),k=N[0],S=N[1],C=Object(n.useState)(""),w=Object(o.a)(C,2),I=w[0],E=w[1],A=Object(n.useState)(k),B=Object(o.a)(A,2),G=B[0],T=B[1];return Object(n.useEffect)((function(){T(k.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())})))}),[I,k]),Object(n.useEffect)((function(){u()("https://accounts.spotify.com/api/token",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(e.ClientId+":"+e.ClientSecret)},data:"grant_type=client_credentials",method:"POST"}).then((function(e){g(e.data.access_token)}))}),[e.ClientId,e.ClientSecret]),Object(n.useEffect)((function(){u()("https://api.spotify.com/v1/browse/categories?limit=50&country=US&locale=UK",{method:"GET",headers:{Authorization:"Bearer "+f}}).then((function(e){S(e.data.categories.items)}))}),[f]),Object(n.useEffect)((function(){u()("https://api.spotify.com/v1/browse/categories/".concat(d,"/playlists?limit=50"),{method:"GET",headers:{Authorization:"Bearer "+f}}).then((function(e){i(e.data.playlists.items)}))}),[f,d]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(x,{setValueInput:E}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/playlist/:id",playlists:s,children:Object(a.jsx)(m,{token:f,playlists:s,setCatchid:h})}),Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(v,{})}),Object(a.jsx)(l.a,{path:"/home",children:Object(a.jsx)(b,{filterGenres:G})})]})]})});c(65);r.a.render(Object(a.jsx)(s.a,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.1a0285d0.chunk.js.map