"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[189],{189:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i=t(439),o=t(791),a=t(168),c=t(931),u=c.Z.div(r||(r=(0,a.Z)(["\n  width: 650px;\n  margin: 10px auto 10px;\n"]))),s=t(184);function l(n){var e=n.onSubmit,t=(0,o.useState)(""),r=(0,i.Z)(t,2),a=r[0],c=r[1];return(0,s.jsx)(u,{children:(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""===a.trim()&&alert("input search request"),e(a),c("")},children:[(0,s.jsx)("input",{type:"text",autoComplete:"off",placeholder:"Search movies",onChange:function(n){c(n.currentTarget.value.toLowerCase())},value:a}),(0,s.jsx)("button",{type:"submit",className:"button",children:"Search"})]})})}var h,d,p,x,f=t(87),m=t(689),v=t(277),g=c.Z.div(h||(h=(0,a.Z)(["\n  margin: 0 auto;\n  width: 650px;\n"]))),j=c.Z.ul(d||(d=(0,a.Z)(["\n  margin: 16px 0 0 0;\n  padding: 0;\n"]))),Z=c.Z.li(p||(p=(0,a.Z)(["\n  margin: 0;\n  border-radius: 5px;\n  /* padding: 10px 0 10px 40px; */\n  list-style-type: none;\n\n  > a {\n    text-decoration: none;\n  }\n  :hover {\n    > a {\n      color: white;\n    }\n\n    background-color: blue;\n  }\n"]))),b=c.Z.p(x||(x=(0,a.Z)(["\n  margin: 0;\n  padding: 10px 0 10px 40px;\n"])));function _(){var n,e=(0,o.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1],c=(0,m.TH)(),u=(0,f.lr)(),h=(0,i.Z)(u,2),d=h[0],p=h[1],x=null!==(n=d.get("filter"))&&void 0!==n?n:"";(0,o.useEffect)((function(){x&&fetch("".concat(v._n,"/search/movie?api_key=").concat(v.$h,"&query=").concat(x)).then((function(n){return n.json()})).then((function(n){a(n.results)})).catch(console.error())}),[x]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(l,{onSubmit:function(n){p(""!==n?{filter:n}:{})}}),r.length>0&&(0,s.jsx)(g,{children:(0,s.jsx)(j,{children:r.map((function(n){var e=n.id,t=n.name,r=n.title;return(0,s.jsx)(Z,{children:(0,s.jsx)(f.OL,{to:"../../movies/".concat(e),state:{from:c},children:t?(0,s.jsx)(b,{children:t}):(0,s.jsx)(b,{children:r})})},e)}))})})]})}}}]);
//# sourceMappingURL=189.ff239a51.chunk.js.map