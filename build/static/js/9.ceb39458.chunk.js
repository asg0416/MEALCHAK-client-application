(this.webpackJsonpmealchak=this.webpackJsonpmealchak||[]).push([[9],{361:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);var a,o,s=n(12),c=n(8),i=n(157),r=n(0),u=n.n(r),d=n(58),b=n.n(d),l=n(4),h=n(15),j=n(22),O=n(14),f=n(45),m=n(23),g=n(325),v=n.n(g),p=n(332),y=n.n(p),w=n(11),k=n(56),_=n(152),x=n(2),S=n(5),N=(n(361),n(362)),C=n(1),I=w.c.div(a||(a=Object(s.a)(["\n  position: absolute;\n  width: 30rem;\n  height: 100vh;\n  z-index: 101;\n  text-align: right;\n  display: ",";\n  touch-action: none;\n"])),(function(e){return e.isOpen?"auto":"none"})),A=w.c.div(o||(o=Object(s.a)(["\n  --inputBox: 4.4rem;\n  height: 100vh;\n  margin: 0 auto;\n  background-color: #7b6e62;\n  width: 100%;\n  overflow: scroll;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));t.default=function(e){var t,n,a,o,s,r=u.a.useState(!1),d=Object(i.a)(r,2),g=d[0],p=d[1],w=function(){p(!g)},J=new y.a("https://gorokke.shop/chatting"),R=v.a.over(J),B=Object(j.d)(),L=null===(t=e.history.location.state)||void 0===t?void 0:t.roomName,M=null===(n=e.history.location.state)||void 0===n?void 0:n.room_id,E=null===(a=e.history.location.state)||void 0===a?void 0:a.post_id,K=null===(o=e.history.location.state)||void 0===o?void 0:o.own_user_id,T=null===(s=e.history.location.state)||void 0===s?void 0:s.order_time,Y=Object(j.e)((function(e){var t;return null===(t=e.chat)||void 0===t?void 0:t.userInList})),H=Object(j.e)((function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.user_nickname})),D=Object(j.e)((function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.user_profile})),F=Object(j.e)((function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.user_id}));u.a.useEffect((function(){Object(l.a)("chat props",e),Object(l.a)("chat sender info",D),Object(l.a)("chat user_in_chat",Y),B(m.a.loginCheck()),h.b&&(B(f.a.moveChatRoom(M,L,E,K,T)),B(f.a.getChatMessagesAX()),B(f.a.getChatUserAX(M)))}),[]),u.a.useEffect((function(){return M?(X(),function(){z()}):S.a.sweetOK("\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4.","\ud648\uc73c\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4.","\ucc44\ud305 \uc2e0\uccad \ud6c4 \ucc44\ud305\ud0ed\uc744 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.","\ud655\uc778").then((function(e){return O.b.replace("/home")}))}),[M||null]);var X=function(){try{R.debug=null,R.connect({token:h.b},(function(){R.subscribe("/sub/api/chat/rooms/".concat(M),(function(e){var t=JSON.parse(e.body);Object(l.a)("\uad6c\ub3c5\ud6c4 \uc0c8\ub85c\uc6b4 \uba54\uc138\uc9c0 data",t);var n=b()().format("YYYY-MM-DD HH:mm:ss");B(f.a.getMessages(Object(c.a)(Object(c.a)({},t),{},{createdAt:n})))}),{token:h.b})}))}catch(e){Object(l.a)("\uc18c\ucf13 \ucee4\ub125\ud2b8 \uc5d0\ub7ec",e)}},z=function(){try{R.debug=null,R.disconnect((function(){R.unsubscribe("sub-0"),clearTimeout(U)}),{token:h.b})}catch(e){Object(l.a)("\uc5f0\uacb0 \uad6c\ub3c5 \ud574\uccb4 \uc5d0\ub7ec",e)}},U=function e(t,n){setTimeout((function(){1===t.ws.readyState?n():e(t,n)}),.1)},q=Object(j.e)((function(e){return e.chat.messages})),G=u.a.useRef();return u.a.useEffect((function(){G.current&&(G.current.scrollTop=G.current.scrollHeight),Object(l.a)("tell me you are moving now",G)}),[q.length]),M?Object(C.jsxs)(u.a.Fragment,{children:[Object(C.jsx)(_.o,Object(c.a)({},e)),Object(C.jsx)(A,{ref:G,children:Object(C.jsxs)(x.b,{shape:"container",align_items:"flex-end",children:[Object(C.jsx)(I,{isOpen:g,children:Object(C.jsx)(N.a,{transitions:!0,touch:!0,pullRight:!0,sidebar:Object(C.jsx)(_.t,{own_user_id:K,order_time:T,roomName:L,_onClick:w,post_id:E,sendBen:function(e,t){try{h.b||S.a.sweetNeedLogin();var n={type:"BAN",roomId:M,senderId:F,message:e};U(R,(function(){R.debug=null,R.send("/pub/message",{token:h.b},JSON.stringify(n)),Object(l.a)("\uac15\ud1f4 \uba54\uc138\uc9c0 \uc0c1\ud0dc",R.ws.readyState),S.a.sweetOK("\ud1f4\uc7a5 \ucc98\ub9ac\uac00 \uc644\ub8cc\ub418\uc5c8\uc5b4\uc694","".concat(t,"\ub2d8\uc744"),"\ucc44\ud305\uc5d0\uc11c \ub0b4\ubcf4\ub0c8\uc5b4\uc694.","")}))}catch(a){S.a.sweetConfirmReload("\ud1f4\uc7a5 \ucc98\ub9ac \uc2e4\ud328",["\ucc44\ud305\uc5d0\uc11c \ub0b4\ubcf4\ub0b4\ub294 \ub370 \uc2e4\ud328\ud588\uc5b4\uc694.","\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."],""),Object(l.a)("message \uc18c\ucf13 \ud568\uc218 \uc5d0\ub7ec",a),Object(l.a)("\uac15\ud1f4 \uba54\uc138\uc9c0 \uc0c1\ud0dc",R.ws.readyState)}},sendBreak:function(){try{if(!h.b)return S.a.sweetNeedLogin();var e={type:"BREAK",roomId:M,senderId:F,message:"\ubc29\uc7a5\uc774 \uc0ad\uc81c\ud55c \ucc44\ud305\ubc29\uc774\uc5d0\uc694."};U(R,(function(){R.debug=null,R.send("/pub/message",{token:h.b},JSON.stringify(e)),Object(l.a)("\ubc29\ud3ed \uba54\uc138\uc9c0 \uc0c1\ud0dc",R.ws.readyState)}))}catch(t){S.a.sweetConfirmReload("\ubc29 \uc0ad\uc81c \uc2e4\ud328",["\ubc29 \uc0ad\uc81c \uc694\uccad\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694."],""),Object(l.a)("message \uc18c\ucf13 \ud568\uc218 \uc5d0\ub7ec",t),Object(l.a)("\ubc29\ud3ed \uba54\uc138\uc9c0 \uc0c1\ud0dc",R.ws.readyState)}}}),open:g,onSetOpen:p,sidebarClassName:g?"side-nav active":"side-nav",styles:{content:{text_align:"right"}}})}),Object(C.jsx)(_.h,Object(c.a)(Object(c.a)({},e),{},{shape:"\ucc44\ud305\ubc29",roomName:L,_onClick:w,children:L})),Object(C.jsx)(_.l,{}),Object(C.jsx)(_.m,{sendMessage:function(e){try{h.b||S.a.sweetNeedLogin();var t={type:"TALK",roomId:M,sender:H,senderImg:D,senderId:F,message:e};U(R,(function(){R.debug=null,R.send("/pub/message",{token:h.b},JSON.stringify(t)),Object(l.a)("\uba54\uc138\uc9c0\ubcf4\ub0b4\uae30 \uc0c1\ud0dc",R.ws.readyState)}))}catch(n){Object(l.a)("message \uc18c\ucf13 \ud568\uc218 \uc5d0\ub7ec",n),Object(l.a)("\uba54\uc138\uc9c0\ubcf4\ub0b4\uae30 \uc0c1\ud0dc",R.ws.readyState)}}})]})})]}):Object(C.jsx)(u.a.Fragment,{children:Object(C.jsx)(k.a,{})})}}}]);
//# sourceMappingURL=9.ceb39458.chunk.js.map