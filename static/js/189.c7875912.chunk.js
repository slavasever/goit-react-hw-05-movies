"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[189],{2383:function(e,t,r){r.d(t,{Df:function(){return o},IQ:function(){return d},Jh:function(){return m},TP:function(){return f},XT:function(){return h}});var n=r(5861),a=r(7757),s=r.n(a),c=r(4569),u=r.n(c);u().defaults.baseURL="https://api.themoviedb.org/3";var i="7ec6aaa9ac74287271b32dacda62a7bd";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7108:function(e,t,r){r.d(t,{Z:function(){return c}});r(2791);var n=r(6373),a=(r(3158),"Loader_loader__+lRPl"),s=r(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.Ll,{color:"#fc950e",height:80,width:80})})}},1266:function(e,t,r){r.r(t);var n=r(5861),a=r(885),s=r(7757),c=r.n(s),u=r(6871),i=r(501),o=r(2791),p=r(2383),f=r(6066),l=r(7108),h=r(3226),_=r(184),d="loading",v="pending",m="resolved";t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],y=(0,o.useState)(v),x=(0,a.Z)(y,2),w=x[0],k=x[1],g=(0,u.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(d),e.prev=1,e.next=4,p.Df();case 4:0!==(t=e.sent).length&&s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f.Am.error(e.t0.message);case 11:return e.prev=11,k(m),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{className:h.Z.header,children:"Trending today"}),w===d&&(0,_.jsx)(l.Z,{}),w===m&&(0,_.jsx)("ul",{children:r.map((function(e){var t=e.id,r=e.title;return(0,_.jsx)("li",{className:h.Z.homeItem,children:(0,_.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:g},children:r})},t)}))})]})}},3226:function(e,t){t.Z={homeItem:"styles_homeItem__CYDJw",header:"styles_header__rqNRg",cardWrapper:"styles_cardWrapper__xhdCp",button:"styles_button__3EfhQ",poster:"styles_poster__qrzCF",title:"styles_title__e4Gdh",rating:"styles_rating__xvu70",overview:"styles_overview__5+zsr",infoHeader:"styles_infoHeader__EsjDB",infoList:"styles_infoList__LXAVF",infoItem:"styles_infoItem__8Kicm",moviesListItem:"styles_moviesListItem__pakrP"}}}]);
//# sourceMappingURL=189.c7875912.chunk.js.map