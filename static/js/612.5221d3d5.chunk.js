"use strict";(self.webpackChunklegal=self.webpackChunklegal||[]).push([[612],{4834:function(e,n,i){i.d(n,{LA:function(){return a},yo:function(){return l}});var t,s,r=i(4942);!function(e){e.year="year",e.extra="extra"}(s||(s={}));var o,l=(t={},(0,r.Z)(t,s.year,"\u0433\u043e\u0434\u043e\u0432\u043e\u0435"),(0,r.Z)(t,s.extra,"\u0432\u043d\u0435\u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0435"),t);!function(e){e.ochno="ochno"}(o||(o={}));var a=(0,r.Z)({},o.ochno,"\u043e\u0447\u043d\u043e\u0435")},3583:function(e,n,i){i.d(n,{Ho:function(){return c},Ih:function(){return a},eQ:function(){return l},nC:function(){return r}});var t,s,r,o=i(4942);!function(e){e.legal="legal",e.man="man"}(r||(r={}));var l,a=(t={},(0,o.Z)(t,r.legal,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043b\u0438\u0446\u043e"),(0,o.Z)(t,r.man,"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043b\u0438\u0446\u043e"),t);!function(e){e.owner="owner",e.director="director",e.employee="employee"}(l||(l={}));l.director,l.owner;var c=(s={},(0,o.Z)(s,l.director,"\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440"),(0,o.Z)(s,l.owner,"\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a"),(0,o.Z)(s,l.employee,"\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a"),s)},3612:function(e,n,i){i.r(n),i.d(n,{default:function(){return X}});var t,s,r=i(141),o=i(1966),l=i(2791),a=i(6871),c=i(3504),d=i(6750),u=i(1413),m=i(7309),f=i(2730),h=i(8111),x=i(9439),j=i(8678),Z=i(8042),p=i(3430),g=i(7947),v=i(3335),y=i(184),_=j.Z.TextArea,b=(Z.Z.Dragger,p.Z.Option),w=h.ZP.create((function(e){var n=e.question;console.log("\ud83d\ude80 ~ file: question.tsx ~ line 11 ~ NiceModal.create ~ tip",n);var i=(0,l.useState)(null),t=(0,x.Z)(i,2),s=t[0],r=t[1];console.log("\ud83d\ude80 ~ file: question.tsx ~ line 13 ~ NiceModal.create ~ tip",s);var o=(0,h.dd)(),a=g.Z.useForm(),c=(0,x.Z)(a,1)[0],m=(0,d.o)((function(e){return e.catalogs})).question_type,f=(0,l.useCallback)((function(){c.validateFields().then((function(){var e=(0,u.Z)({},c.getFieldsValue());o.resolve(e),o.hide()}))}),[o,c]);return(0,y.jsxs)(v.Z,(0,u.Z)((0,u.Z)({},(0,h.Tr)(o)),{},{title:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438",onOk:f,okText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",children:[(0,y.jsxs)(g.Z,{form:c,layout:"vertical",initialValues:n,children:[(0,y.jsx)(g.Z.Item,{name:"question_type_id",label:"\u0422\u0438\u043f \u0432\u043e\u043f\u0440\u043e\u0441\u0430",rules:[{required:!0,message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}],children:(0,y.jsx)(p.Z,{allowClear:!0,style:{width:"100%"},onChange:function(e){var n=m.find((function(n){return n.id===e}));console.log("\ud83d\ude80 ~ file: question.tsx ~ line 36 ~ onTypeQuestionChange ~ nameOfQuestionType",n),r(n),c.setFieldsValue({name:n.name})},showSearch:!0,filterOption:function(e,n){return n.children.toLowerCase().includes(e.toLowerCase())},children:m.map((function(e){return(0,y.jsx)(b,{value:e.id,children:e.name},e.id)}))})}),(0,y.jsx)(g.Z.Item,{name:"name",label:"\u0412\u043e\u043f\u0440\u043e\u0441",rules:[{required:!0,message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}],children:(0,y.jsx)(_,{})}),(0,y.jsx)(g.Z.Item,{name:"solution",label:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435",rules:[{required:!0,message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}],children:(0,y.jsx)(_,{})}),(0,y.jsx)(g.Z.Item,{name:"description",label:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f",rules:[{message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}],children:(0,y.jsx)(_,{rows:8})})]}),(0,y.jsx)("div",{children:null===s||void 0===s?void 0:s.description})]}))})),q="styles_question_block__kL+9e",k="styles_question_block_heading__US8BW",C=function(e){var n=e.questions,i=e.meeting_id,t=(0,h.dd)(w),s=(0,d.o)((function(e){return e})),r=s.addQuestion,o=s.changeQuestion,a=(0,l.useCallback)((function(){t.show().then((function(e){r((0,u.Z)((0,u.Z)({},e),{},{meeting_id:i}))}))}),[t,n]),c=(0,l.useCallback)((function(e){t.show({question:e}).then((function(n){o((0,u.Z)((0,u.Z)({},n),{},{id:e.id}))}))}),[t,n]);return(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{type:"primary",onClick:a,children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),(0,y.jsx)("div",{className:"cards",children:n.map((function(e){return(0,y.jsxs)(f.Z,{hoverable:!0,title:e.name,onClick:function(){return c(e)},children:[(0,y.jsxs)("div",{className:q,children:[(0,y.jsx)("div",{className:k,children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),(0,y.jsx)("div",{children:e.solution})]}),(0,y.jsxs)("div",{className:q,children:[(0,y.jsx)("div",{className:k,children:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f"}),(0,y.jsx)("div",{children:e.description})]}),(0,y.jsxs)("div",{className:q,children:[(0,y.jsx)("div",{className:k,children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432"}),(0,y.jsx)("div",{children:e.decision})]})]},e.id)}))})]})},I=i(7123),N=i(2426),O=i.n(N),F=i(4834),T=i(9202),S=p.Z.Option,P=function(e){var n=e.requisites,i=(0,l.useState)(!0),t=(0,x.Z)(i,2),s=t[0],r=t[1],o=g.Z.useForm(),a=(0,x.Z)(o,1)[0],c=(0,d.o)((function(e){return e})),f=c.changeMeetingInfo,h=c.company.requisites.address;return n.id?(0,y.jsxs)("div",{children:[(0,y.jsxs)(g.Z,{form:a,layout:"vertical",onFinish:function(e){f((0,u.Z)((0,u.Z)({},e),{},{meeting_id:n.id})),r(!s)},initialValues:n,disabled:s,children:[(0,y.jsx)(g.Z.Item,{name:"name",label:"\u0423\u0441\u043b\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(j.Z,{})}),(0,y.jsx)(g.Z.Item,{name:"type_of_cause",label:"\u0422\u0438\u043f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(p.Z,{allowClear:!0,style:{width:"100%"},children:Object.keys(F.yo).map((function(e){return(0,y.jsx)(S,{children:F.yo[e]},e)}))})}),(0,y.jsx)(g.Z.Item,{name:"type",label:"\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(p.Z,{allowClear:!0,style:{width:"100%"},children:Object.keys(F.LA).map((function(e){return(0,y.jsx)(S,{value:e,children:F.LA[e]},e)}))})}),(0,y.jsx)(g.Z.Item,{name:"date_of_meeting",label:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(I.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:T.d,onChange:function(e){var n=(0,T.g)(e);e.subtract(1,"hours"),a.setFieldsValue({date_of_registration:e,date_of_meeting:O()(n,T.d)})}})}),(0,y.jsx)(g.Z.Item,{name:"date_of_registration",label:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(I.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:T.d})}),(0,y.jsx)(g.Z.Item,{name:"address_of_meeting",label:"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(j.Z,{})}),!s&&(0,y.jsx)(g.Z.Item,{children:(0,y.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),s?(0,y.jsx)(m.Z,{type:"primary",onClick:function(){n.address_of_meeting||a.setFieldsValue({address_of_meeting:h}),r(!s)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}):null]}):null},L=i(4942);!function(e){e.bulletin="bulletin",e.notification="notification",e.protocol="protocol"}(s||(s={}));var H,V,A=(t={},(0,L.Z)(t,s.bulletin,"\u0411\u044e\u043b\u043b\u0435\u0442\u0435\u043d\u044c"),(0,L.Z)(t,s.notification,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e \u0441\u043e\u0437\u044b\u0432\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"),(0,L.Z)(t,s.protocol,"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"),t),M=function(e){var n=e.type,i=e.link,t=(0,l.useState)(!1),s=(0,x.Z)(t,2),r=s[0],o=s[1];return(0,y.jsx)(f.Z,{title:A[n],children:(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{href:i,download:!0,type:"link",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"}),(0,y.jsx)(m.Z,{type:"link",onClick:function(){o(!r)},children:(0,y.jsx)(c.OL,{to:"/templates/"+n,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})})},Q=i(8098),E=i(3441),U=function(e){var n=e.meeting;e.company;console.log("meeting",n);var i=n.info,t=i.date_of_meeting,r=i.date_of_registration,o=i.type,l=i.type_of_cause,a=i.address_of_meeting;return t&&r&&o&&l&&a?0===n.questions.length?(0,y.jsx)(E.Z,{message:"\u041d\u0435\u0442 \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435, \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0432 \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0443.",type:"warning"}):(0,y.jsx)("div",{children:(0,y.jsxs)("div",{className:"cards",children:[(0,y.jsx)(M,{type:s.notification,link:"".concat(Q.v,"/documents/").concat(n.id,"/").concat(s.notification)}),(0,y.jsx)(M,{type:s.bulletin,link:"".concat(Q.v,"/documents/").concat(n.id,"/").concat(s.bulletin)})]})}):(0,y.jsx)(E.Z,{message:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435. \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0443\u043d\u043a\u0442\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.",type:"warning"})},B=i(3583),D=function(e){return e.form===B.nC.man?"".concat(e.sirname," ").concat(e.firstname," ").concat(e.lastname):"\u041e\u041e\u041e ".concat(e.company_name)};!function(e){e[e.yes=2]="yes",e[e.no=1]="no",e[e.refrain=0]="refrain"}(V||(V={}));var G=(H={},(0,L.Z)(H,V.yes,"\u0417\u0430"),(0,L.Z)(H,V.no,"\u041f\u0440\u043e\u0442\u0438\u0432"),(0,L.Z)(H,V.refrain,"\u0412\u043e\u0437\u0434\u0435\u0440\u0436\u0430\u043b\u0441\u044f"),H),K=p.Z.Option,W=h.ZP.create((function(e){e.company;var n=e.questions,i=e.members,t=e.answer,s=e.answers,r=(0,h.dd)(),o=g.Z.useForm(),a=(0,x.Z)(o,1)[0],c=t&&t.member_id?i.filter((function(e){return e.id===+t.member_id})):function(e,n){console.log("\ud83d\ude80 ~ file: utils.ts ~ line 14 ~ getCurrentMembers ~ members",e,n);var i=n.map((function(e){return e.member_id}));return e.filter((function(e){return e.type&&e.type.includes(B.eQ.owner)&&!i.includes(e.id)}))}(i,s),d=(0,l.useCallback)((function(){a.validateFields().then((function(){var e=(0,u.Z)({},a.getFieldsValue());console.log("\ud83d\ude80 ~ file: form.tsx ~ line 30 ~ form.validateFields ~ values",e);var n=function(e){return Object.keys(e).filter((function(e){return"member_id"!==e})).map((function(n){return{question_id:+n,member_id:e.member_id,result:e[n]}}))}(e);console.log("\ud83d\ude80 ~ file: form.tsx ~ line 32 ~ form.validateFields ~ answers",n),r.resolve(n),r.hide()}))}),[r,a]);return(0,y.jsx)(v.Z,(0,u.Z)((0,u.Z)({},(0,h.Tr)(r)),{},{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442",okText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onOk:d,children:(0,y.jsxs)(g.Z,{form:a,layout:"vertical",initialValues:t,children:[(0,y.jsx)(g.Z.Item,{name:"member_id",label:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a",rules:[{required:!0,message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}],children:(0,y.jsx)(p.Z,{allowClear:!0,style:{width:"100%"},children:c.map((function(e){return(0,y.jsx)(K,{value:e.id,children:D(e)},e.id)}))})}),n.map((function(e){return(0,y.jsx)(g.Z.Item,{name:e.id,label:"\u0412\u043e\u043f\u0440\u043e\u0441 \u2116".concat(e.index,". ").concat(e.solution),rules:[{required:!0,message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"}],children:(0,y.jsx)(p.Z,{allowClear:!0,style:{width:"100%"},children:Object.keys(G).map((function(e,n){return(0,y.jsx)(K,{value:e,children:G[e]},n)}))})},e.index)}))]})}))})),z=function(e){var n,i,t=e.meeting,s=(e.meetingId,e.members),r=e.questions,o=(0,h.dd)(W),a=(0,d.o)((function(e){return e})),c=a.addAnswer,x=a.changeAnswer,j=(0,l.useCallback)((function(){o.show({questions:r,members:s,answers:t.answers}).then((function(e){c(e)}))}),[o,t.questions]),Z=(0,l.useCallback)((function(e){var n,i,l=(n=t.answers,i=e.member_id,n.filter((function(e){return e.member_id===i})).reduce((function(e,n){return e[n.question_id]=""+n.result,e}),{})),a=(0,u.Z)((0,u.Z)({},e),l);o.show({answer:a,members:s,questions:r,answers:t.answers}).then((function(e){x(e)}))}),[o,r]),p=(n=t.answers,i="member_id",n.reduce((function(e,n){var t=n[i];return e[t]||(e[t]=[]),e[t].push(n),e}),{}));return 0===t.questions.length?(0,y.jsx)(E.Z,{message:"\u041d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438 \u0434\u043d\u044f. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438 \u0434\u043d\u044f.",type:"warning"}):(0,y.jsxs)("div",{children:[(0,y.jsx)(m.Z,{type:"primary",onClick:j,children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442"}),(0,y.jsx)("div",{className:"cards",children:Object.keys(p).map((function(e){var n=s.find((function(n){return n.id===+e}));return(0,y.jsx)(f.Z,{hoverable:!0,title:"".concat(n&&D(n),", ").concat(null===n||void 0===n?void 0:n.part,"%"),onClick:function(){return Z({member_id:+e})},children:p[e].map((function(e){var n=t.questions.find((function(n){return n.id===e.question_id}));return(0,y.jsxs)("div",{children:[null===n||void 0===n?void 0:n.solution," -"," ",(0,y.jsx)("span",{className:"result-"+e.result,children:G[e.result]})]},e.id)}))},null===n||void 0===n?void 0:n.id)}))})]})},J=function(e){var n=e.meeting,i=(e.company,(0,l.useState)(!0)),t=(0,x.Z)(i,2),r=t[0],o=t[1],a=g.Z.useForm(),c=(0,x.Z)(a,1)[0],f=(0,d.o)((function(e){return e})).changeMeetingFactInfo,h=n.info,j=h.date_of_meeting,Z=h.date_of_registration,p=h.type,v=h.type_of_cause,_=h.address_of_meeting;return j&&Z&&p&&v&&_?0===n.answers.length?(0,y.jsx)(E.Z,{message:"\u0415\u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0432 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435.",type:"warning"}):(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)(g.Z,{form:c,layout:"vertical",onFinish:function(e){f((0,u.Z)((0,u.Z)({},e),{},{meeting_id:n.id})),o(!r)},initialValues:n.info,disabled:r,children:[(0,y.jsx)(g.Z.Item,{name:"date_of_start",label:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(I.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:T.d})}),(0,y.jsx)(g.Z.Item,{name:"date_of_finish",label:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,y.jsx)(I.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:T.d})}),!r&&(0,y.jsx)(g.Z.Item,{children:(0,y.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),r?(0,y.jsx)(m.Z,{type:"primary",onClick:function(){o(!r)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}):null]}),(0,y.jsx)("div",{className:"cards",children:(0,y.jsx)(M,{type:s.protocol,link:"".concat(Q.v,"/documents/").concat(n.id,"/").concat(s.protocol)})})]}):(0,y.jsx)(E.Z,{message:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435. \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0443\u043d\u043a\u0442\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.",type:"warning"})};var R=r.Z.TabPane,X=function(){var e=(0,a.UO)().id,n=(0,d.o)((function(e){return e})),i=n.company,t=n.meeting,s=n.getMeeting,u=n.getGatalog,m=n.getCompany;return(0,l.useEffect)((function(){e&&(s(e),u("question_type"))}),[e]),(0,l.useEffect)((function(){!i.id&&t.info.company_id&&m(t.info.company_id)}),[t]),t?(0,y.jsxs)("div",{children:[(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(o.Z.Item,{children:(0,y.jsx)(c.OL,{to:"/companies",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),(0,y.jsx)(o.Z.Item,{children:(0,y.jsx)(c.OL,{to:"/companies",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,y.jsx)(o.Z.Item,{children:(0,y.jsx)(c.OL,{to:"/companies/"+(null===i||void 0===i?void 0:i.id),children:null===i||void 0===i?void 0:i.requisites.name})})]}),(0,y.jsx)("div",{className:"header",children:(0,y.jsxs)("h1",{children:["\u0421\u043e\u0431\u0440\u0430\u043d\u0438\u0435: ",t.info.name]})}),(0,y.jsxs)(r.Z,{defaultActiveKey:"1",children:[(0,y.jsx)(R,{tab:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",children:(0,y.jsx)(P,{requisites:t.info})},"1"),(0,y.jsx)(R,{tab:"\u041f\u043e\u0432\u0435\u0441\u0442\u043a\u0430",children:(0,y.jsx)(C,{questions:t.questions,meeting_id:t.id})},"2"),(0,y.jsx)(R,{tab:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",children:(0,y.jsx)(U,{meeting:t,company:i})},"3"),(0,y.jsx)(R,{tab:"\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435",children:(0,y.jsx)(z,{questions:t.questions,meetingId:t.id,members:i.members,meeting:t})},"4"),(0,y.jsx)(R,{tab:"\u0421\u043e\u0431\u0440\u0430\u043d\u0438\u0435",children:(0,y.jsx)(J,{meeting:t,company:i})},"5")]})]}):null}}}]);
//# sourceMappingURL=612.5221d3d5.chunk.js.map