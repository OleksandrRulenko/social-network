(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{298:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3MG1d",dialogsItems:"Dialogs_dialogsItems__22pk5",dialog:"Dialogs_dialog__26uoK",active:"Dialogs_active__wZLrY",messages:"Dialogs_messages__EBG5l"}},444:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(129),o=t(298),r=t.n(o),l=t(11),c=function(e){return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(l.b,{to:"/dialogs/"+e.id},e.name))},m=function(e){return s.a.createElement("div",{className:r.a.message},e.message)},u=t(27),d=t(91),g=t(130),b=t(32),p=t(66),f=Object(p.a)(50),E=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,validate:[p.b,f],name:"newMessageBody",placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))})),v=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return s.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(m,{message:e.message,key:e.id})}));a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,n),s.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))):s.a.createElement(u.a,{to:"/login"})},_=t(13),h=t(34),j=t(35),y=t(36),O=t(37),M=(t(302),function(e){return{isAuth:e.auth.isAuth}}),k=t(7);a.default=Object(k.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){Object(O.a)(n,a);var t=Object(y.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),n}(s.a.Component);return Object(_.b)(M)(a)}))(v)}}]);
//# sourceMappingURL=5.4e6cf6ad.chunk.js.map