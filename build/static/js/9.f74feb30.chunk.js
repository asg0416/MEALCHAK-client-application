(this.webpackJsonpmealchak=this.webpackJsonpmealchak||[]).push([[9],{363:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t);var a,s,o=n(12),c=n(8),i=n(159),r=n(1),u=n.n(r),d=n(22),b=n(15),l=n(14),h=n(47),j=n.n(h),O=n(327),f=n.n(O),g=n(334),m=n.n(g),v=n(10),p=n(57),y=n(154),w=n(2),k=n(46),x=n(23),_=n(4),S=n(7),N=(n(363),n(364)),C=n(0),I=v.c.div(a||(a=Object(o.a)(["\n  position: absolute;\n  width: 30rem;\n  height: 100vh;\n  z-index: 101;\n  text-align: right;\n  display: ",";\n  touch-action: none;\n"])),(function(e){return e.isOpen?"auto":"none"})),A=v.c.div(s||(s=Object(o.a)(["\n  --inputBox: 4.4rem;\n  height: 100vh;\n  margin: 0 auto;\n  background-color: #7b6e62;\n  width: 100%;\n  overflow: scroll;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));t.default=function(e){var t,n,a,s,o,r=u.a.useState(!1),h=Object(i.a)(r,2),O=h[0],g=h[1],v=function(){g(!O)},J=new m.a("https://gorokke.shop/chatting"),M=f.a.over(J),R=Object(d.d)(),B=null===(t=e.history.location.state)||void 0===t?void 0:t.roomName,L=null===(n=e.history.location.state)||void 0===n?void 0:n.room_id,E=null===(a=e.history.location.state)||void 0===a?void 0:a.post_id,K=null===(s=e.history.location.state)||void 0===s?void 0:s.own_user_id,T=null===(o=e.history.location.state)||void 0===o?void 0:o.order_time,Y=Object(d.e)((function(e){var t;return null===(t=e.chat)||void 0===t?void 0:t.userInList})),F=Object(d.e)((function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.user_nickname})),H=Object(d.e)((function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.user_profile})),D=Object(d.e)((function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.user_id}));u.a.useEffect((function(){Object(_.a)("chat props",e),Object(_.a)("chat sender info",H),Object(_.a)("chat user_in_chat",Y),R(x.a.loginCheck()),b.b&&(R(k.a.moveChatRoom(L,B,E,K,T)),R(k.a.getChatMessagesAX()),R(k.a.getChatUserAX(L)))}),[]),u.a.useEffect((function(){return L?(X(),function(){z()}):S.a.sweetOK("\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4.","\ud648\uc73c\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4.","\ucc44\ud305 \uc2e0\uccad \ud6c4 \ucc44\ud305\ud0ed\uc744 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.","\ud655\uc778").then((function(e){return l.b.replace("/home")}))}),[L||null]);var X=function(){try{M.debug=null,M.connect({token:b.b},(function(){M.subscribe("/sub/api/chat/rooms/".concat(L),(function(e){var t=JSON.parse(e.body);Object(_.a)("\uad6c\ub3c5\ud6c4 \uc0c8\ub85c\uc6b4 \uba54\uc138\uc9c0 data",t);var n=j()().format("YYYY-MM-DD HH:mm:ss");R(k.a.getMessages(Object(c.a)(Object(c.a)({},t),{},{createdAt:n})))}),{token:b.b})}))}catch(e){Object(_.a)("\uc18c\ucf13 \ucee4\ub125\ud2b8 \uc5d0\ub7ec",e)}},z=function(){try{M.debug=null,M.disconnect((function(){M.unsubscribe("sub-0"),clearTimeout(U)}),{token:b.b})}catch(e){Object(_.a)("\uc5f0\uacb0 \uad6c\ub3c5 \ud574\uccb4 \uc5d0\ub7ec",e)}},U=function e(t,n){setTimeout((function(){1===t.ws.readyState?n():e(t,n)}),.1)},q=Object(d.e)((function(e){return e.chat.messages})),G=u.a.useRef();return u.a.useEffect((function(){G.current&&(G.current.scrollTop=G.current.scrollHeight),Object(_.a)("tell me you are moving now",G)}),[q.length]),L?Object(C.jsxs)(u.a.Fragment,{children:[Object(C.jsx)(y.o,Object(c.a)({},e)),Object(C.jsx)(A,{ref:G,children:Object(C.jsxs)(w.b,{shape:"container",align_items:"flex-end",children:[Object(C.jsx)(I,{isOpen:O,children:Object(C.jsx)(N.a,{transitions:!0,touch:!0,pullRight:!0,sidebar:Object(C.jsx)(y.t,{own_user_id:K,order_time:T,roomName:B,_onClick:v,post_id:E,sendBen:function(e,t){try{b.b||S.a.sweetNeedLogin();var n={type:"BAN",roomId:L,senderId:D,message:e};U(M,(function(){M.debug=null,M.send("/pub/message",{token:b.b},JSON.stringify(n)),Object(_.a)("\uac15\ud1f4 \uba54\uc138\uc9c0 \uc0c1\ud0dc",M.ws.readyState),S.a.sweetOK("\ud1f4\uc7a5 \ucc98\ub9ac\uac00 \uc644\ub8cc\ub418\uc5c8\uc5b4\uc694","".concat(t,"\ub2d8\uc744"),"\ucc44\ud305\uc5d0\uc11c \ub0b4\ubcf4\ub0c8\uc5b4\uc694.","")}))}catch(a){S.a.sweetConfirmReload("\ud1f4\uc7a5 \ucc98\ub9ac \uc2e4\ud328",["\ucc44\ud305\uc5d0\uc11c \ub0b4\ubcf4\ub0b4\ub294 \ub370 \uc2e4\ud328\ud588\uc5b4\uc694.","\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."],""),Object(_.a)("message \uc18c\ucf13 \ud568\uc218 \uc5d0\ub7ec",a),Object(_.a)("\uac15\ud1f4 \uba54\uc138\uc9c0 \uc0c1\ud0dc",M.ws.readyState)}},sendBreak:function(){try{if(!b.b)return S.a.sweetNeedLogin();var e={type:"BREAK",roomId:L,senderId:D,message:"\ubc29\uc7a5\uc774 \uc0ad\uc81c\ud55c \ucc44\ud305\ubc29\uc774\uc5d0\uc694."};U(M,(function(){M.debug=null,M.send("/pub/message",{token:b.b},JSON.stringify(e)),Object(_.a)("\ubc29\ud3ed \uba54\uc138\uc9c0 \uc0c1\ud0dc",M.ws.readyState)}))}catch(t){S.a.sweetConfirmReload("\ubc29 \uc0ad\uc81c \uc2e4\ud328",["\ubc29 \uc0ad\uc81c \uc694\uccad\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694."],""),Object(_.a)("message \uc18c\ucf13 \ud568\uc218 \uc5d0\ub7ec",t),Object(_.a)("\ubc29\ud3ed \uba54\uc138\uc9c0 \uc0c1\ud0dc",M.ws.readyState)}}}),open:O,onSetOpen:g,sidebarClassName:O?"side-nav active":"side-nav",styles:{content:{text_align:"right"}},children:Object(C.jsx)(C.Fragment,{})})}),Object(C.jsx)(y.h,Object(c.a)(Object(c.a)({},e),{},{shape:"\ucc44\ud305\ubc29",roomName:B,_onClick:v,children:B})),Object(C.jsx)(y.l,{}),Object(C.jsx)(y.m,{sendMessage:function(e){try{b.b||S.a.sweetNeedLogin();var t={type:"TALK",roomId:L,sender:F,senderImg:H,senderId:D,message:e};U(M,(function(){M.debug=null,M.send("/pub/message",{token:b.b},JSON.stringify(t)),Object(_.a)("\uba54\uc138\uc9c0\ubcf4\ub0b4\uae30 \uc0c1\ud0dc",M.ws.readyState),R(k.a.writeMessage(""))}))}catch(n){Object(_.a)("message \uc18c\ucf13 \ud568\uc218 \uc5d0\ub7ec",n),Object(_.a)("\uba54\uc138\uc9c0\ubcf4\ub0b4\uae30 \uc0c1\ud0dc",M.ws.readyState)}}})]})})]}):Object(C.jsx)(u.a.Fragment,{children:Object(C.jsx)(p.a,{})})}}}]);
//# sourceMappingURL=9.f74feb30.chunk.js.map