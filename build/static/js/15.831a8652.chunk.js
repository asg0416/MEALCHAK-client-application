(this.webpackJsonpmealchak=this.webpackJsonpmealchak||[]).push([[15],{405:function(e,t,r){"use strict";r.r(t);var n=r(12),c=r(8),i=r(156),o=r(0),a=r.n(o),s=r(11),b=r(2),l=r(151),d=r(4),j=r(129),m=r(146);var g,h,u=r(213),O=r(58),f=r(25),x=r(14),p=(r(3),r(26)),v=(r(212),r(153)),y=r(154),k=r(152),_=r(403),w=r(382),z=(r(190),r(191),r(192),r(193),r(1)),A=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(j.a)(),n=Object(m.a)({theme:r,name:"MuiUseMediaQuery",props:{}}),c="function"===typeof e?e(r):e;c=c.replace(/^@media( ?)/m,"");var i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=Object(d.a)({},n,t),s=a.defaultMatches,b=void 0!==s&&s,l=a.matchMedia,g=void 0===l?i?window.matchMedia:null:l,h=a.noSsr,u=void 0!==h&&h,O=a.ssrMatchMedia,f=void 0===O?null:O,x=o.useState((function(){return u&&i?g(c).matches:f?f(c).matches:b})),p=x[0],v=x[1];return o.useEffect((function(){var e=!0;if(i){var t=g(c),r=function(){e&&v(t.matches)};return r(),t.addListener(r),function(){e=!1,t.removeListener(r)}}}),[c,g,i]),p}("(min-width: 950px)"),r=p.a.color,n=(p.a.border,p.a.btn_border),s=p.a.fontSize,g=Object(f.d)(),h=Object(f.e)((function(e){return e.user.user})),A=Object(f.e)((function(e){var t;return null===(t=e.post)||void 0===t?void 0:t.list})),P=Object(f.e)((function(e){var t;return null===(t=e.post)||void 0===t?void 0:t.rank})),X=(Object(f.e)((function(e){return e.user.is_loading})),a.a.useState("")),S=Object(i.a)(X,2),M=S[0],W=S[1],B=a.a.useState({recent:!0,nearBy:!1}),R=Object(i.a)(B,2),E=R[0],H=R[1],J=a.a.useState({all:!0,kr:!1,bunsik:!1,cn:!1,jp:!1,west:!1,cafe:!1,etc:!1}),N=Object(i.a)(J,2),D=N[0],F=N[1];a.a.useEffect((function(){return document.querySelector("body").scrollTo({top:0,left:0,behavior:"instant"}),0===A.length||(null===h||void 0===h?void 0:h.user_address)?(g(O.a.getPostAX("\uc804\uccb4")),W("\uc804\uccb4"),void g(O.a.getRankDB())):void 0}),[]);var L=a.a.useRef(null),V=a.a.useRef(null),q=a.a.useRef(null),I=Object(u.a)(q,!1),Q=Object(i.a)(I,2),U=Q[0],G=Q[1];return Object(z.jsxs)(a.a.Fragment,{children:[Object(z.jsx)(l.n,Object(c.a)({},e)),Object(z.jsx)("div",{ref:V}),Object(z.jsxs)(b.b,{minHeight:"100vh",margin:"0 auto",padding:t?"0":"0 0 5.2rem 0",children:[Object(z.jsxs)(b.b,{shape:"container",children:[Object(z.jsx)(l.h,Object(c.a)(Object(c.a)({},e),{},{shape:"\ud648",children:null===h||void 0===h?void 0:h.user_address})),Object(z.jsx)(l.g,Object(c.a)({},e)),Object(z.jsx)(b.a,{width:"4rem",height:"4rem",radius:"2rem",bg:"orange",position:"fixed",border:"none",margin:t?"0 0 0 29.8rem":"0 0 0 30rem",bottom:t?"2rem":"7rem",z_index:"100",cursor:"t",_onClick:function(){G(!U)},children:Object(z.jsx)(b.e,{color:"white",size:"2.4rem",bold:!0,cursor:"t",children:U?"!":"?"})}),Object(z.jsx)("div",{className:"link-container",children:Object(z.jsx)("nav",{ref:q,className:"link ".concat(U?"active":"inactive"),style:t?{bottom:"6.7rem"}:{bottom:"11.5rem"},children:Object(z.jsxs)(b.b,{width:"fit-content",height:"fit-content",radius:"inherit",text_align:"center",absolute:"relative",children:[Object(z.jsx)(b.e,{size:s.small,children:"\ubc00\ucc29\uc5d0\uc11c\uc758 \uacbd\ud5d8\uc740 \uc5b4\ub5a0\uc168\ub098\uc694!"}),Object(z.jsx)(b.e,{size:s.small,children:"\uc5ec\ub7ec\ubd84\uc758 \uc18c\uc911\ud55c \uc758\uacac\uc5d0 \uadc0 \uae30\uc6b8\uc774\uaca0\uc2b5\ub2c8\ub2e4."}),Object(z.jsx)(b.e,{size:s.small,children:Object(z.jsx)("a",{href:"https://forms.gle/j2616Jgt3toPf4Dd8",target:"_blank",rel:"noreferrer",children:"\ud6c4\uae30 \ubc0f \uc758\uacac \uc791\uc131\ud558\uae30"})})]})})})]}),Object(z.jsx)(b.b,{width:"36rem",margin:"0 auto",children:Object(z.jsx)(b.a,{width:"32rem",height:"4.4rem",margin:"0 1.8rem",bg:r.bg0,border:n.bg40,radius:"1.2rem",cursor:"t",_onClick:function(){x.b.push("/search")},children:Object(z.jsxs)(b.b,{is_flex4:"t",flex_direction:"row",justify_content:"space-between",padding:"0.2rem 1.4rem 0",children:[Object(z.jsx)(b.e,{minWidth:"17rem",height:"2rem",size:s.small,bold2:"400",line_height:"150%",color:r.bg80,text_align:"left",children:"\uc624\ub298\uc740 \uc5b4\ub5a4 \uc74c\uc2dd\uc744 \ubc30\ub2ec \uc2dc\ud0ac\uae4c?"}),Object(z.jsx)(b.c,{size:"2.4",src:Object(k.isWebpSupported)()?y.a.searchWebp:v.a.search,margin:"0 0 0.4rem"})]})})}),Object(z.jsxs)(b.b,{is_float:"left",children:[Object(z.jsx)(b.b,{maxWidth:"fit-content",children:Object(z.jsx)(b.e,{size:"1.6rem",color:r.bg100,padding:"2.4rem 0 0 0",margin:"0 0 0 2.1rem",bold:!0,children:"#\uc624\ub298\uc758 \uc778\uae30 \uba54\ub274"})}),Object(z.jsx)(l.i,Object(c.a)(Object(c.a)({scrollToCategory:function(){L.current.scrollIntoView({behavior:"smooth"})}},P),{},{category:D,getCategory:function(e){return F(Object(c.a)(Object(c.a)({},{category:!1}),e))},getCtg:function(e){return W(e)},getSort:function(){return H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))}})),Object(z.jsx)(b.b,{height:"0.8rem",bg:"#f4f4f3"}),Object(z.jsx)("div",{ref:L})]}),Object(z.jsx)(b.b,{maxWidth:"34.9rem",height:"4.5rem",margin:t?"0 0 0 2rem":"0 0 0 2.8rem",flex:!0,flex_direction:"row",align_items:"center",padding:"2rem 0 1.6rem 0",children:Object(z.jsxs)(_.a,{className:"category",slidesPerView:"7.55",style:{transform:"none"},children:[Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:s.base,color:D.all?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0.1rem 0rem",padding:"1.6rem 0 2.8rem 0",border_bottom:D.all?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{all:!0})),W(e.target.innerText)},children:"\uc804\uccb4"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.kr?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:D.kr?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{kr:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\ud55c\uc2dd"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.bunsik?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:D.bunsik?"0.2rem solid black":"none",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{bunsik:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\ubd84\uc2dd"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.cn?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:D.cn?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{cn:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\uc911\uc2dd"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.jp?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:D.jp?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{jp:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\uc77c\uc2dd"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.west?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:(null===D||void 0===D?void 0:D.west)?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{west:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\uc591\uc2dd"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.cafe?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:D.cafe?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{cafe:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\uce74\ud398"})}),Object(z.jsx)(w.a,{style:{width:"fit-content",textAlign:"center"},children:Object(z.jsx)(b.e,{width:"fit-content",height:"2.4rem",size:"1.6rem",color:D.etc?r.bg100:r.bg80,bold:!0,cursor:"t",margin:"-0.4rem 1.6rem 0 0",padding:"1.6rem 0 2.8rem 0",border_bottom:D.etc?"0.2rem solid black":"",_onClick:function(e){g(O.a.getPostAX(e.target.innerText)),F(Object(c.a)(Object(c.a)({},{category:!1}),{},{etc:!0})),W(e.target.innerText),H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0}))},children:"\uae30\ud0c0"})})]})}),Object(z.jsx)(T,{}),Object(z.jsxs)(b.b,{is_flex2:!0,maxWidth:"32rem",margin:"1.6rem auto",children:[Object(z.jsx)(b.b,{children:Object(z.jsx)(b.e,{size:"1.3rem",color:"#9A9896",bold2:"500",children:"\uc815\ub82c \uae30\uc900"})}),Object(z.jsxs)(b.b,{flex:!0,justify_content:"flex-end",children:[Object(z.jsx)(b.e,{size:"1.3rem",color:(null===E||void 0===E?void 0:E.recent)?"#ff9425":"#cecac7",bold:!0,cursor:"t",_onClick:function(){H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{recent:!0})),g(O.a.getPostAX(M))},children:"\ub9c8\uac10\uc784\ubc15\uc21c"}),Object(z.jsx)(b.e,{size:"1.3rem",color:(null===E||void 0===E?void 0:E.nearBy)?"#ff9425":"#cecac7",bold:!0,margin:"0 0 0 1rem",cursor:"t",_onClick:function(){H(Object(c.a)(Object(c.a)({},{sort:!1}),{},{nearBy:!0})),g(O.a.getPostAX(M,"nearBy"))},children:"\uac70\ub9ac\uc21c"})]})]}),Object(z.jsxs)(b.b,{children:[(null===A||void 0===A?void 0:A.length)>0?A.map((function(e,t){return D.all||D.kr&&"\ud55c\uc2dd"===e.category||D.bunsik&&"\ubd84\uc2dd"===e.category||D.cn&&"\uc911\uc2dd"===e.category||D.jp&&"\uc77c\uc2dd"===e.category||D.west&&"\uc591\uc2dd"===e.category||D.cafe&&"\uce74\ud398"===e.category||D.etc&&"\uae30\ud0c0"===e.category?Object(o.createElement)(l.o,Object(c.a)(Object(c.a)({},e),{},{key:e.post_id})):null})):Object(z.jsx)(a.a.Fragment,{children:Object(z.jsxs)(b.b,{children:[Object(z.jsx)(b.b,{is_flex_column:!0,height:"20rem",margin:"3.2rem 0 0 0",children:Object(z.jsx)(C,{src:Object(k.isWebpSupported)()?y.a.emptyHome_3xWebp:v.a.emptyHome_3x})}),Object(z.jsx)(b.e,{size:s.base,color:r.bg80,text_align:"center",children:"\uc124\uc815\ud55c \uc8fc\uc18c \uadfc\ucc98\uc5d0 \uc62c\ub77c\uc628 \uae00\uc774 \uc5c6\uc5b4\uc694!"})]})}),0===A.length&&Object(z.jsx)(b.b,{height:"8.4rem"})]})]})]})};A.defaultProps={};var T=s.c.hr(g||(g=Object(n.a)(["\n  width: 36rem;\n  height: 0.1rem;\n  background-color: #f4f4f3;\n  border: none;\n  margin: 0;\n"]))),C=s.c.div(h||(h=Object(n.a)(['\n  margin: 0 auto 1rem auto;\n  background-image: url("','");\n  width: 18.4rem;\n  height: 16.7rem;\n  background-size: cover;\n  background-position: center;\n'])),(function(e){return e.src}));t.default=A}}]);
//# sourceMappingURL=15.831a8652.chunk.js.map