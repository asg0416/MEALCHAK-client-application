(this.webpackJsonpmealchak=this.webpackJsonpmealchak||[]).push([[20],{397:function(e,n,r){"use strict";r.r(n);var i,t,o,a,l=r(12),c=r(199),d=r.n(c),s=r(201),b=r(8),u=r(159),g=r(1),m=r.n(g),h=r(10),j=r(22),p=r(23),f=r(48),v=r(185),O=r(373),x=r.n(O),w=r(2),k=r(6),_=r(154),z=r(57),C=r(4),y=r(20),A=r(0),P=function(e){var n=function(e){return new Promise((function(n){x.a.imageFileResizer(e,300,300,"JPEG",95,0,(function(e){n(e)}),"file")}))},r=y.a.color,i=y.a.border,t=y.a.radius,o=y.a.fontSize,a=y.a.btn_border,l=Object(j.d)(),c=Object(j.e)((function(e){return e.user.is_login})),h=Object(j.e)((function(e){return e.user.user})),O=Object(j.e)((function(e){var n;return null===(n=e.image)||void 0===n?void 0:n.preview})),P=[{value:"10~19",label:"10\ub300"},{value:"20~29",label:"20\ub300"},{value:"30~39",label:"30\ub300"},{value:"40~49",label:"40\ub300"},{value:"50~59",label:"50\ub300"}],D=Object(g.useState)(!0),L=Object(u.a)(D,2),U=L[0],V=L[1],E=Object(g.useState)({nickname:null===h||void 0===h?void 0:h.user_nickname,comment:(null===h||void 0===h?void 0:h.user_comment)?null===h||void 0===h?void 0:h.user_comment:"",image:null===h||void 0===h?void 0:h.user_profile,gender:(null===h||void 0===h?void 0:h.user_gender)?null===h||void 0===h?void 0:h.user_gender:null,age:(null===h||void 0===h?void 0:h.user_age)?null===h||void 0===h?void 0:h.user_age:null}),H=Object(u.a)(E,2),J=H[0],I=H[1],X=m.a.useRef(),B=function(){var e=Object(s.a)(d.a.mark((function e(r){var i,t,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new FileReader,t=X.current.files[0],e.next=4,n(t);case 4:o=e.sent,Object(C.a)("\uc774\ubbf8\uc9c0 \uc815\ubcf4",t),Object(C.a)("resize \uc774\ubbf8\uc9c0 \uc815\ubcf4",o),I(Object(b.a)(Object(b.a)({},J),{},{image:o})),i.readAsDataURL(o),i.onloadend=function(){l(f.a.setPreview(i.result))};case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return m.a.useEffect((function(){l(p.a.loginCheck("/profile"))}),[]),m.a.useEffect((function(){J.comment&&J.nickname?J.age&&J.gender?(J.comment||J.nickname)&&V(!1):(null===h||void 0===h?void 0:h.user_age)&&(null===h||void 0===h?void 0:h.user_gender)?I(Object(b.a)(Object(b.a)({},J),{},{gender:null===h||void 0===h?void 0:h.user_gender,age:null===h||void 0===h?void 0:h.user_age})):V(!0):V(!0)}),[J.comment,J.nickname,J.age,J.gender]),c?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(_.n,Object(b.a)({},e)),Object(A.jsxs)(w.b,{minWidth:"32rem",minHeight:"100vh",margin:"0 auto",children:[Object(A.jsxs)(w.b,{shape:"container",minWidth:"32rem",children:[Object(A.jsx)(_.h,Object(b.a)(Object(b.a)({},e),{},{shape:"\ud504\ub85c\ud544\uc218\uc815"})),Object(A.jsxs)(w.b,{is_flex2:!0,margin:"3.6rem auto 2rem",children:[Object(A.jsx)(W,{user_profile:O||(null===h||void 0===h?void 0:h.user_profile)}),Object(A.jsxs)(F,{children:[Object(A.jsx)("input",{type:"file",accept:"image/jpg,image/png,image/jpeg,image/bmp",id:"input-file",ref:X,onChange:B,style:{display:"none"}}),Object(A.jsx)("label",{htmlFor:"input-file",value:J.image||"",style:{cursor:"pointer"},children:Object(A.jsxs)("svg",{width:"2.5rem",height:"2.5rem",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{margin:"3.6rem 0 0 3.8rem"},children:[Object(A.jsx)("path",{d:"M5 12.5558C5 11.4204 5.9204 10.5 7.05576 10.5V10.5C7.83809 10.5 8.55262 10.056 8.89902 9.35449L9.81482 7.5C9.99871 7.12761 10.0907 6.94142 10.2076 6.78792C10.5048 6.39791 10.9348 6.13064 11.4161 6.03689C11.6055 6 11.8132 6 12.2285 6H17.7715C18.1868 6 18.3945 6 18.5839 6.03689C19.0652 6.13064 19.4952 6.39791 19.7924 6.78792C19.9093 6.94142 20.0013 7.12761 20.1852 7.5L21.101 9.35449C21.4474 10.056 22.1619 10.5 22.9442 10.5V10.5C24.0796 10.5 25 11.4204 25 12.5558V18.2143C25 20.8349 25 22.1452 24.2369 22.999C24.1621 23.0827 24.0827 23.1621 23.999 23.2369C23.1452 24 21.8349 24 19.2143 24H10.7857C8.16513 24 6.85484 24 6.00096 23.2369C5.91728 23.1621 5.83786 23.0827 5.76307 22.999C5 22.1452 5 20.8349 5 18.2143V12.5558Z",stroke:"white",strokeWidth:"2"}),Object(A.jsx)("circle",{cx:"15",cy:"16",r:"4",stroke:"white",strokeWidth:"2"})]})})]})]}),Object(A.jsx)(S,{children:Object(A.jsxs)(w.b,{width:"32rem",minWidth:"32rem",heigh:"8.2rem",margin:"0 auto 2.4rem auto",children:[Object(A.jsx)(w.e,{width:"32rem",margin:"0 0 0.9rem 0",height:"2.4rem",bold2:"500",size:o.base,color:r.bg100,line_height:"150%",children:"\ub2c9\ub124\uc784"}),Object(A.jsx)(w.d,{type:"text",border:a.bg40,padding:"1.5rem 1.3rem",size:o.base,color:r.bg80,length:10,placeholder:null===h||void 0===h?void 0:h.user_nickname,value:null===J||void 0===J?void 0:J.nickname,_onChange:function(e){I(Object(b.a)(Object(b.a)({},J),{},{nickname:e.target.value})),V(!1)}})]})}),Object(A.jsx)(S,{children:Object(A.jsxs)(w.b,{width:"32rem",minWidth:"32rem",height:"8.2rem",shape:"container",align_items:"center",children:[Object(A.jsx)(w.e,{width:"32rem",margin:"0 0 0.9rem 0",height:"2.4rem",bold2:"500",size:o.base,color:r.bg100,line_height:"150%",children:"\uc18c\uac1c\uae00"}),Object(A.jsx)(R,{maxLength:"120",onChange:function(e){if(e.target.value.length>=120)return k.a.sweetOK("\uc785\ub825 \uac00\ub2a5\ud55c \uae00\uc790\uc218\ub97c \ucd08\uacfc\ud588\uc5b4\uc694","\ubaa8\uc9d1\uae00 \uc791\uc131 \uc2dc 120\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.").then((function(){V(!0)}));I(Object(b.a)(Object(b.a)({},J),{},{comment:e.target.value})),V(!1)},value:null===J||void 0===J?void 0:J.comment,placeholder:"\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?\r\n\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\r\n\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!"})]})}),Object(A.jsx)(w.e,{width:"32rem",height:"2.2rem",margin:"0.4rem auto 0",color:"#9A9896",size:o.small,line_height:"150%",children:"20\uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(A.jsxs)(w.b,{margin:"0 auto 1rem",shape:"container",align_items:"center",children:[Object(A.jsx)(w.e,{width:"32rem",margin:"2.4rem 0 0 0",height:"2.4rem",bold2:"500",size:o.base,color:r.bg100,line_height:"150%",children:"\uc131\ubcc4"}),Object(A.jsx)(w.b,{width:"32rem",minWidth:"32rem",border:i.bg40,radius:"1.2rem",height:"auto",bg:(null===h||void 0===h?void 0:h.user_gender)?"#eee":"",children:(null===h||void 0===h?void 0:h.user_gender)?Object(A.jsx)(w.e,{size:o.base,color:r.bg80,padding:"1.4rem 0 1.4rem 1.6rem",children:"male"===h.user_gender?"\ub0a8\uc131":"\uc5ec\uc131"}):Object(A.jsx)(v.c,{options:[{value:"female",label:"\uc5ec\uc131"},{value:"male",label:"\ub0a8\uc131"}],value:J.gender,setProfile:I,setDisabled:V,editProfile:J,onChange:e.onChange,gender:J.gender})})]}),Object(A.jsxs)(w.b,{margin:"0 auto 1rem",shape:"container",align_items:"center",children:[Object(A.jsx)(w.e,{width:"32rem",margin:"2.4rem 0 0 0",height:"2.4rem",bold2:"500",size:o.base,color:r.bg100,line_height:"150%",children:"\uc5f0\ub839"}),Object(A.jsx)(w.b,{width:"32rem",minWidth:"32rem",border:i.bg40,radius:"1.2rem",height:"auto",bg:(null===h||void 0===h?void 0:h.user_age)?"#eee":"",children:(null===h||void 0===h?void 0:h.user_age)?Object(A.jsx)(w.e,{size:o.base,color:r.bg80,padding:"1.4rem 0 1.4rem 1.6rem",children:P.map((function(e){return e.value===h.user_age?e.label:null}))}):Object(A.jsx)(v.a,{options:P,value:J.age,setProfile:I,setDisabled:V,editProfile:J,onChange:e.onChange,age:J.age})})]}),Object(A.jsx)(w.b,{width:"32rem",height:"auto",maxWidth:"35.5rem",margin:"0 auto 0.1rem",padding:"2.8rem 0 2.7rem",children:Object(A.jsx)(w.a,{bg:U?r.bg40:r.brand100,height:"5rem",border:"none",radius:t.button,cursor:"t",disabled:U,_onClick:function(){Object(C.a)("\uc218\uc815\ud560 \uc774\ub984",J.nickname),Object(C.a)("\uc218\uc815\ud560 \uc774\ub984",J.comment),Object(C.a)("\uc218\uc815 \ub0b4\uc6a9",J),(null===h||void 0===h?void 0:h.user_age)||(null===h||void 0===h?void 0:h.user_gender)?J.gender&&J.age?l(p.a.editUserProfileAX(Object(b.a)({},J))):k.a.sweetConfirmReload("\uc557 \ube48\uce78\uc774 \uc788\uc5b4\uc694",["\uc131\ubcc4\uacfc \uc5f0\ub839\uc744 \ubaa8\ub450 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."],""):J.gender&&J.age?k.a.sweetUserInfo(J.age,J.gender).then((function(e){e&&l(p.a.editUserProfileAX(Object(b.a)({},J)))})):k.a.sweetConfirmReload("\uc557 \ube48\uce78\uc774 \uc788\uc5b4\uc694",["\uc131\ubcc4\uacfc \uc5f0\ub839\uc744 \ubaa8\ub450 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."],"")},children:Object(A.jsx)(w.e,{color:U?r.bg60:r.bg0,bold2:"700",size:o.base,children:"\uc800\uc7a5\ud558\uae30"})})})]})]}):Object(A.jsx)(z.a,{})};P.defaultProps={};var W=h.c.div(i||(i=Object(l.a)(["\n  margin: 1rem auto;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 5rem;\n  ","\n  background-size: cover;\n  background-position: center;\n  /* padding: 10rem 0 0 0; */\n"])),(function(e){return e.user_profile?"background-image: url(".concat(null===e||void 0===e?void 0:e.user_profile,");"):"background-image: url(http://115.85.182.57:8080/image/profileDefaultImg.jpg);"})),F=h.c.div(t||(t=Object(l.a)(["\n  position: absolute;\n  top: 4.7rem;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 5rem;\n  background: rgba(54, 55, 60, 0.4);\n  background-size: cover;\n  background-position: center;\n  opacity: 0.7;\n  border: none;\n"]))),R=h.c.textarea(o||(o=Object(l.a)(["\n  width: 32rem;\n  height: 16.8rem;\n  color: ",";\n  font-size: ",";\n  font-weight: 400;\n  line-height: 150%;\n  letter-spacing: -0.01rem;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  padding: 1.6rem;\n  resize: none;\n  -ms-overflow-style: none;\n  &::placeholder {\n    color: ",";\n    font-size: ",';\n    font-weight: 400;\n    line-height: 150%;\n    letter-spacing: -0.01rem;\n  }\n  &::-webkit-input-placeholder::after {\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n  &::-moz-placeholder {\n    /* Firefox 19+ */\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n\n  &:-ms-input-placeholder {\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n\n  &:-moz-placeholder {\n    /* Firefox 18- */\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n'],["\n  width: 32rem;\n  height: 16.8rem;\n  color: ",";\n  font-size: ",";\n  font-weight: 400;\n  line-height: 150%;\n  letter-spacing: -0.01rem;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  padding: 1.6rem;\n  resize: none;\n  -ms-overflow-style: none;\n  &::placeholder {\n    color: ",";\n    font-size: ",';\n    font-weight: 400;\n    line-height: 150%;\n    letter-spacing: -0.01rem;\n  }\n  &::-webkit-input-placeholder::after {\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?\\A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\\A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n  &::-moz-placeholder {\n    /* Firefox 19+ */\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?\\A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\\A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n\n  &:-ms-input-placeholder {\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?\\A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\\A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n\n  &:-moz-placeholder {\n    /* Firefox 18- */\n    display: block;\n    content: "\uc5b4\ub290 \uc9c0\uc5ed\uc5d0\uc11c \uc8fc\ub85c \uc2dc\ucf1c\uba39\ub098\uc694?\\A\uc81c\uc77c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\\A\ub098\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \ubb38\uad6c\ub85c \uc18c\uac1c\ud574\ubcf4\uc138\uc694!";\n  }\n  &::-webkit-scrollbar {\n    display: none;\n  }\n'])),y.a.color.bg100,y.a.fontSize.base,y.a.color.bg0,y.a.btn_border.bg40,y.a.radius.button,y.a.color.bg80,y.a.fontSize.base),S=h.c.div(a||(a=Object(l.a)(["\n  &:focus-within p {\n    color: #ff9425;\n  }\n  &:focus-within input {\n    border: 1px solid #ff9425;\n    outline: none;\n  }\n  &:focus-within textarea {\n    border: 1px solid #ff9425;\n    outline: none;\n    resize: none;\n  }\n"])));n.default=P}}]);
//# sourceMappingURL=20.31f34deb.chunk.js.map