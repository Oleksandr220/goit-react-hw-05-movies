(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{14:function(e,t,c){e.exports={link:"Navigation_link__2BM9A",activeLink:"Navigation_activeLink__2BSDe"}},31:function(e,t,c){e.exports={container:"Container_container__3RIox"}},34:function(e,t,c){},39:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(30),r=c.n(i),s=c(6),o=(c(39),c(2)),j=c(31),l=c.n(j),d=c(0);function b(e){var t=e.children;return Object(d.jsx)("div",{className:l.a.container,children:t})}var u=c(14),h=c.n(u),m=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(s.c,{exact:!0,to:"/",className:h.a.link,activeClassName:h.a.activeLink,children:"Home"}),Object(d.jsx)(s.c,{to:"/movies",className:h.a.link,activeClassName:h.a.activeLink,children:"Movies"})]})},v=c(34),O=c.n(v);function x(){return Object(d.jsx)("header",{className:O.a.header,children:Object(d.jsx)(m,{})})}var f=c(7),p=c(11),g=c.n(p),_="https://api.themoviedb.org/3",k="b5ba239bc5da81cfffad558060f470c9";c(65);function N(){var e=Object(o.g)(),t=Object(n.useState)(null),c=Object(f.a)(t,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){g.a.get("".concat(_,"/trending/movie/day?api_key=").concat(k)).then((function(e){var t=e.data.results.map((function(e){return e}));i(t)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Trending today"}),a&&Object(d.jsx)("ul",{className:"trend__movies-list",children:a.map((function(t){return Object(d.jsx)("li",{className:"trend__movies-item",children:Object(d.jsx)(s.b,{to:{pathname:"/movies/".concat(t.id,"}"),state:{from:e}},className:"trend__movies-link",children:t.original_title})},t.id)}))})]})}c(66);function S(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],i=Object(o.h)().movieId;return Object(n.useEffect)((function(){var e;(e=i,g.a.get("".concat(_,"/movie/").concat(e,"/credits?api_key=").concat(k,"&language=en-US"))).then((function(e){return a(e.data.cast)}))}),[i]),Object(d.jsx)("ul",{children:c.map((function(e){var t=e.profile_path,c=e.name,n=e.character;return Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w200"+t:"../image/logo192.png",alt:c}),Object(d.jsx)("p",{children:c}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Character:"}),n]})]},c)}))})}function w(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],i=Object(o.h)().movieId;return Object(n.useEffect)((function(){var e;(e=i,g.a.get("".concat(_,"/movie/").concat(e,"/reviews?api_key=").concat(k,"&language=en-US"))).then((function(e){return a(e.data.results)}))}),[i]),Object(d.jsx)("ul",{children:c.length>0?c.map((function(e){var t=e.author,c=e.content;return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("p",{children:c})]},t)})):Object(d.jsx)("li",{children:Object(d.jsx)("p",{children:"We don't have any reviews for this movie."})})})}function y(){var e,t,c=Object(o.f)(),a=Object(o.g)(),i=Object(o.i)(),r=i.url,j=i.path,l=Object(n.useState)(),b=Object(f.a)(l,2),u=b[0],h=b[1],m=Object(o.h)().movieId;Object(n.useEffect)((function(){var e;(e=m,g.a.get("".concat(_,"/movie/").concat(e,"?api_key=").concat(k,"&language=en-US"))).then((function(e){var t,c={img:e.data.poster_path,name:null!==(t=e.data.title)&&void 0!==t?t:e.data.name,score:e.data.vote_average,overview:e.data.overview,genres:e.data.genres};return h(c)}))}),[m]);return Object(d.jsx)(d.Fragment,{children:u&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",className:"go-back-button",onClick:function(){var e;c.push(null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from)},children:"\u21e6 Go Back"}),Object(d.jsxs)("div",{className:"movie-container",children:[Object(d.jsx)("div",{className:"movie-image-container",children:Object(d.jsx)("img",{src:null!==u.img?"https://image.tmdb.org/t/p/w400"+u.img:"../image/logo512.png",alt:u.name})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"movie-name",children:u.name}),Object(d.jsxs)("p",{children:["User Score: ",u.score]}),Object(d.jsx)("h3",{children:"Overview:"}),Object(d.jsx)("p",{children:u.overview}),Object(d.jsx)("h3",{children:"Genres:"}),Object(d.jsx)("p",{children:u.genres.map((function(e){return e.name})).join(" ")})]})]}),Object(d.jsxs)("div",{className:"information-container",children:[Object(d.jsx)("h3",{className:"information-title",children:"Additional information"}),Object(d.jsxs)("nav",{children:[Object(d.jsx)(s.c,{to:{pathname:"".concat(r,"/cast"),state:{from:null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from}},className:"information-link",children:"Cast"}),Object(d.jsx)(s.c,{to:{pathname:"".concat(r,"/reviews"),state:{from:null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from}},className:"information-link",children:"Reviews"})]})]}),Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)("h3",{children:"Loading"}),children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"".concat(j,"/cast"),exact:!0,children:Object(d.jsx)(S,{})}),Object(d.jsx)(o.a,{path:"".concat(j,"/reviews"),exact:!0,children:Object(d.jsx)(w,{})})]})})]})})}var I=c(20);c(67);function C(e){var t=e.onSearch,c=Object(n.useState)(""),a=Object(f.a)(c,2),i=a[0],r=a[1],s=function(){r("")};return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),s()},children:[Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){r(e.currentTarget.value)},placeholder:"add movie"}),Object(d.jsx)("button",{type:"submit",children:"Search"})]})}function E(){var e=Object(o.g)(),t=Object(n.useState)([]),c=Object(f.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(""),j=Object(f.a)(r,2),l=j[0],b=j[1];Object(n.useEffect)((function(){var e;""!==l&&(e=l,g.a.get("".concat(_,"/search/movie?api_key=").concat(k,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))).then((function(e){var t=e.data.results.map((function(e){var t;return{movieId:e.id,movieName:null!==(t=e.title)&&void 0!==t?t:e.name}}));i((function(e){return[].concat(Object(I.a)(e),Object(I.a)(t))}))}))}),[l]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C,{onSearch:function(e){b(e),i([])}}),a&&a.map((function(t){var c=t.movieId,n=t.movieName;return Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:{pathname:"/movies/".concat(c),state:{from:e}},children:n})},c)}))]})}var L=function(){return Object(d.jsxs)(b,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)("h3",{children:"Loading"}),children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{path:"/movies",exact:!0,children:Object(d.jsx)(E,{})}),Object(d.jsx)(o.a,{path:"/movies/:movieId",children:Object(d.jsx)(y,{})})]})})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(L,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.6a8960cc.chunk.js.map