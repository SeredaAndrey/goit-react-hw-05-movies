"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[418],{418:function(n,e,i){i.r(e),i.d(e,{default:function(){return m}});var r,c,t,o,s=i(439),a=i(791),d=i(87),l=i(689),h=i(277),x=i(168),u=i(931),v=u.Z.div(r||(r=(0,x.Z)(["\n  width: 650px;\n  margin: 20px auto;\n"]))),p=u.Z.div(c||(c=(0,x.Z)(["\n  display: flex;\n\n  margin: 20px 0;\n"]))),j=u.Z.div(t||(t=(0,x.Z)(["\n  margin: 0 0 0 50px;\n\n  width: 300px;\n"]))),f=u.Z.div(o||(o=(0,x.Z)(["\n  margin: 20px 0 20px 0;\n  padding: 0;\n\n  > a {\n    padding: 12px 30px;\n    border-radius: 5px;\n    text-decoration: none;\n\n    color: black;\n\n    text-transform: uppercase;\n  }\n\n  .active {\n    background-color: blue;\n    color: white;\n  }\n  :hover :not(.active) {\n    color: blue;\n  }\n"]))),g=i(184);function m(){var n,e,i=(0,l.UO)(),r=(0,a.useState)([]),c=(0,s.Z)(r,2),t=c[0],o=c[1],x=(0,l.TH)();if((0,a.useEffect)((function(){fetch("".concat(h._n,"/movie/").concat(i.movieId,"?api_key=").concat(h.$h)).then((function(n){return n.json()})).then((function(n){o(n)})).catch(console.error())}),[]),!1===t.success)return(0,g.jsxs)(v,{children:[(0,g.jsx)(d.OL,{to:"/",children:"go back"}),(0,g.jsx)(p,{children:(0,g.jsx)("div",{children:"We don`t have any details for this movie"})})]});var u=t.original_title,m=t.poster_path,_=t.overview,w=t.vote_average,b=t.genres,k=null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,g.jsxs)(v,{children:[(0,g.jsx)(d.OL,{to:k,children:"go back"}),(0,g.jsxs)(p,{children:[(0,g.jsx)("img",{src:"".concat(h.f_).concat(m),alt:u,width:"300"}),(0,g.jsxs)(j,{children:[(0,g.jsx)("h2",{children:u}),(0,g.jsxs)("p",{children:["User score ",10*w,"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:_}),(0,g.jsx)("h3",{children:"Genres"}),b&&b.map((function(n){return n.name+" "}))]})]}),(0,g.jsx)("h3",{children:"Additional information"}),(0,g.jsxs)(f,{children:[(0,g.jsx)(d.OL,{to:"cast",children:"Cast"}),(0,g.jsx)(d.OL,{to:"reviews",children:"Reviews"})]}),(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=418.aeb546c4.chunk.js.map