"use strict";(self.webpackChunklegal=self.webpackChunklegal||[]).push([[461],{4834:function(e,n,i){i.d(n,{LA:function(){return a},yo:function(){return o}});var t,s,r=i(4942);!function(e){e.year="year",e.extra="extra"}(s||(s={}));var l,o=(t={},(0,r.Z)(t,s.year,"\u0433\u043e\u0434\u043e\u0432\u043e\u0435"),(0,r.Z)(t,s.extra,"\u0432\u043d\u0435\u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0435"),t);!function(e){e.ochno="ochno"}(l||(l={}));var a=(0,r.Z)({},l.ochno,"\u043e\u0447\u043d\u043e\u0435")},3583:function(e,n,i){i.d(n,{Ho:function(){return d},Ih:function(){return a},OM:function(){return c},eQ:function(){return o},nC:function(){return r}});var t,s,r,l=i(4942);!function(e){e.legal="legal",e.man="man"}(r||(r={}));var o,a=(t={},(0,l.Z)(t,r.legal,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043b\u0438\u0446\u043e"),(0,l.Z)(t,r.man,"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043b\u0438\u0446\u043e"),t);!function(e){e.owner="owner",e.director="director",e.employee="employee"}(o||(o={}));var c=[{en:o.director,ru:"\u0435\u0434\u0438\u043d\u043e\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0440\u0433\u0430\u043d"},{en:o.owner,ru:"\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a"}],d=(s={},(0,l.Z)(s,o.director,"\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440"),(0,l.Z)(s,o.owner,"\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a"),(0,l.Z)(s,o.employee,"\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a"),s)},3461:function(e,n,i){i.r(n),i.d(n,{default:function(){return R}});var t,s,r=i(141),l=i(1966),o=i(2791),a=i(1413),c=i(7309),d=i(2730),u=i(8111),m=i(9439),f=i(8678),h=i(8042),x=i(3430),j=i(7947),p=i(3335),Z=i(6750),v=i(184),g=f.Z.TextArea,y=(h.Z.Dragger,x.Z.Option),_=u.ZP.create((function(e){var n=e.question;console.log("\ud83d\ude80 ~ file: question.tsx ~ line 11 ~ NiceModal.create ~ tip",n);var i=(0,o.useState)(null),t=(0,m.Z)(i,2),s=t[0],r=t[1];console.log("\ud83d\ude80 ~ file: question.tsx ~ line 13 ~ NiceModal.create ~ tip",s);var l=(0,u.dd)(),c=j.Z.useForm(),d=(0,m.Z)(c,1)[0],f=(0,Z.o)((function(e){return e.catalogs})).question_type,h=(0,o.useCallback)((function(){d.validateFields().then((function(){var e=(0,a.Z)({},d.getFieldsValue());l.resolve(e),l.hide()}))}),[l,d]);return(0,v.jsxs)(p.Z,(0,a.Z)((0,a.Z)({},(0,u.Tr)(l)),{},{title:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438",onOk:h,okText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",children:[(0,v.jsxs)(j.Z,{form:d,layout:"vertical",initialValues:n,children:[(0,v.jsx)(j.Z.Item,{name:"question_type_id",label:"\u0422\u0438\u043f \u0432\u043e\u043f\u0440\u043e\u0441\u0430",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(x.Z,{allowClear:!0,style:{width:"100%"},onChange:function(e){var n=f.find((function(n){return n.id===e}));console.log("\ud83d\ude80 ~ file: question.tsx ~ line 36 ~ onTypeQuestionChange ~ nameOfQuestionType",n),r(n),d.setFieldsValue({name:n.name})},showSearch:!0,filterOption:function(e,n){return n.children.toLowerCase().includes(e.toLowerCase())},children:f.map((function(e){return(0,v.jsx)(y,{value:e.id,children:e.name},e.id)}))})}),(0,v.jsx)(j.Z.Item,{name:"name",label:"\u0412\u043e\u043f\u0440\u043e\u0441",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(g,{})}),(0,v.jsx)(j.Z.Item,{name:"solution",label:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(g,{})}),(0,v.jsx)(j.Z.Item,{name:"description",label:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f",rules:[{message:"Please input the title of collection!"}],children:(0,v.jsx)(g,{rows:8})})]}),(0,v.jsx)("div",{children:null===s||void 0===s?void 0:s.description})]}))})),b="styles_question_block__kL+9e",w="styles_question_block_heading__US8BW",q=function(e){var n=e.questions,i=e.meeting_id,t=(0,u.dd)(_),s=(0,Z.o)((function(e){return e})),r=s.addQuestion,l=s.changeQuestion,m=(0,o.useCallback)((function(){t.show().then((function(e){r((0,a.Z)((0,a.Z)({},e),{},{meeting_id:i}))}))}),[t,n]),f=(0,o.useCallback)((function(e){t.show({question:e}).then((function(n){l((0,a.Z)((0,a.Z)({},n),{},{id:e.id}))}))}),[t,n]);return(0,v.jsxs)("div",{children:[(0,v.jsx)(c.Z,{type:"primary",onClick:m,children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),(0,v.jsx)("div",{className:"cards",children:n.map((function(e){return(0,v.jsxs)(d.Z,{hoverable:!0,title:e.name,onClick:function(){return f(e)},children:[(0,v.jsxs)("div",{className:b,children:[(0,v.jsx)("div",{className:w,children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),(0,v.jsx)("div",{children:e.solution})]}),(0,v.jsxs)("div",{className:b,children:[(0,v.jsx)("div",{className:w,children:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f"}),(0,v.jsx)("div",{children:e.description})]}),(0,v.jsxs)("div",{className:b,children:[(0,v.jsx)("div",{className:w,children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432"}),(0,v.jsx)("div",{children:e.decision})]})]},e.id)}))})]})},k=i(7123),C=i(2426),I=i.n(C),N=i(4834),O=i(9202),P=x.Z.Option,F=function(e){var n=e.requisites,i=(0,o.useState)(!0),t=(0,m.Z)(i,2),s=t[0],r=t[1],l=j.Z.useForm(),d=(0,m.Z)(l,1)[0],u=(0,Z.o)((function(e){return e})),h=u.changeMeetingInfo,p=u.company.requisites.address;return n.id?(0,v.jsxs)("div",{children:[(0,v.jsxs)(j.Z,{form:d,layout:"vertical",onFinish:function(e){h((0,a.Z)((0,a.Z)({},e),{},{meeting_id:n.id})),r(!s)},initialValues:n,disabled:s,children:[(0,v.jsx)(j.Z.Item,{name:"name",label:"\u0423\u0441\u043b\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(f.Z,{})}),(0,v.jsx)(j.Z.Item,{name:"type_of_cause",label:"\u0422\u0438\u043f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(x.Z,{allowClear:!0,style:{width:"100%"},children:Object.keys(N.yo).map((function(e){return(0,v.jsx)(P,{children:N.yo[e]},e)}))})}),(0,v.jsx)(j.Z.Item,{name:"type",label:"\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(x.Z,{allowClear:!0,style:{width:"100%"},children:Object.keys(N.LA).map((function(e){return(0,v.jsx)(P,{value:e,children:N.LA[e]},e)}))})}),(0,v.jsx)(j.Z.Item,{name:"date_of_meeting",label:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(k.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:O.d,onChange:function(e){var n=(0,O.g)(e);e.subtract(1,"hours"),d.setFieldsValue({date_of_registration:e,date_of_meeting:I()(n,O.d)})}})}),(0,v.jsx)(j.Z.Item,{name:"date_of_registration",label:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(k.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:O.d})}),(0,v.jsx)(j.Z.Item,{name:"address_of_meeting",label:"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(f.Z,{})}),!s&&(0,v.jsx)(j.Z.Item,{children:(0,v.jsx)(c.Z,{type:"primary",htmlType:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),s?(0,v.jsx)(c.Z,{type:"primary",onClick:function(){n.address_of_meeting||d.setFieldsValue({address_of_meeting:p}),r(!s)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}):null]}):null},T=i(6871),S=i(3504),H=i(4942);!function(e){e.bulletin="bulletin",e.notification="notification",e.protocol="protocol"}(s||(s={}));var L,V,A=(t={},(0,H.Z)(t,s.bulletin,"\u0411\u044e\u043b\u043b\u0435\u0442\u0435\u043d\u044c"),(0,H.Z)(t,s.notification,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e \u0441\u043e\u0437\u044b\u0432\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"),(0,H.Z)(t,s.protocol,"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"),t),M=function(e){var n=e.type,i=e.link,t=(0,o.useState)(!1),s=(0,m.Z)(t,2),r=s[0],l=s[1];return(0,v.jsx)(d.Z,{title:A[n],children:(0,v.jsxs)("div",{children:[(0,v.jsx)(c.Z,{href:i,download:!0,type:"link",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"}),(0,v.jsx)(c.Z,{type:"link",onClick:function(){l(!r)},children:(0,v.jsx)(S.OL,{to:"/templates/"+n,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})})},Q=i(8098),E=i(3441),U=function(e){var n=e.meeting,i=(e.company,n.info),t=i.date_of_meeting,r=i.date_of_registration,l=i.type,o=i.type_of_cause,a=i.address_of_meeting;return t&&r&&l&&o&&a?0===n.questions.length?(0,v.jsx)(E.Z,{message:"\u041d\u0435\u0442 \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435, \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0432 \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0443.",type:"warning"}):(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:"cards",children:[(0,v.jsx)(M,{type:s.notification,link:"".concat(Q.v,"/documents/").concat(n.id,"/").concat(s.notification)}),(0,v.jsx)(M,{type:s.bulletin,link:"".concat(Q.v,"/documents/").concat(n.id,"/").concat(s.bulletin)})]})}):(0,v.jsx)(E.Z,{message:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435. \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0443\u043d\u043a\u0442\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.",type:"warning"})};!function(e){e[e.yes=2]="yes",e[e.no=1]="no",e[e.refrain=0]="refrain"}(V||(V={}));var B=(L={},(0,H.Z)(L,V.yes,"\u0417\u0430"),(0,H.Z)(L,V.no,"\u041f\u0440\u043e\u0442\u0438\u0432"),(0,H.Z)(L,V.refrain,"\u0412\u043e\u0437\u0434\u0435\u0440\u0436\u0430\u043b\u0441\u044f"),L),D=i(3583),G=x.Z.Option,K=u.ZP.create((function(e){e.company;var n=e.questions,i=e.members,t=e.answer,s=e.answers,r=(0,u.dd)(),l=j.Z.useForm(),c=(0,m.Z)(l,1)[0],d=t&&t.member_id?i.filter((function(e){return e.id===+t.member_id})):function(e,n){console.log("\ud83d\ude80 ~ file: utils.ts ~ line 14 ~ getCurrentMembers ~ members",e,n);var i=n.map((function(e){return e.member_id}));return e.filter((function(e){return e.type&&e.type.includes(D.eQ.owner)&&!i.includes(e.id)}))}(i,s),f=(0,o.useCallback)((function(){c.validateFields().then((function(){var e=(0,a.Z)({},c.getFieldsValue());console.log("\ud83d\ude80 ~ file: form.tsx ~ line 30 ~ form.validateFields ~ values",e);var n=function(e){return Object.keys(e).filter((function(e){return"member_id"!==e})).map((function(n){return{question_id:+n,member_id:e.member_id,result:e[n]}}))}(e);console.log("\ud83d\ude80 ~ file: form.tsx ~ line 32 ~ form.validateFields ~ answers",n),r.resolve(n),r.hide()}))}),[r,c]);return(0,v.jsx)(p.Z,(0,a.Z)((0,a.Z)({},(0,u.Tr)(r)),{},{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442",okText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onOk:f,children:(0,v.jsxs)(j.Z,{form:c,layout:"vertical",initialValues:t,children:[(0,v.jsx)(j.Z.Item,{name:"member_id",label:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(x.Z,{allowClear:!0,style:{width:"100%"},children:d.map((function(e){return(0,v.jsx)(G,{value:e.id,children:"".concat(e.sirname," ").concat(e.firstname," ").concat(e.lastname)},e.id)}))})}),n.map((function(e){return(0,v.jsx)(j.Z.Item,{name:e.id,label:"\u0412\u043e\u043f\u0440\u043e\u0441 \u2116".concat(e.index,". ").concat(e.solution),rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(x.Z,{allowClear:!0,style:{width:"100%"},children:Object.keys(B).map((function(e,n){return(0,v.jsx)(G,{value:e,children:B[e]},n)}))})},e.index)}))]})}))})),W=function(e){var n,i,t=e.meeting,s=(e.meetingId,e.members),r=e.questions,l=(0,u.dd)(K),m=(0,Z.o)((function(e){return e})),f=m.addAnswer,h=m.changeAnswer,x=(0,o.useCallback)((function(){l.show({questions:r,members:s,answers:t.answers}).then((function(e){f(e)}))}),[l,t.questions]),j=(0,o.useCallback)((function(e){var n,i,o=(n=t.answers,i=e.member_id,n.filter((function(e){return e.member_id===i})).reduce((function(e,n){return e[n.question_id]=""+n.result,e}),{})),c=(0,a.Z)((0,a.Z)({},e),o);l.show({answer:c,members:s,questions:r,answers:t.answers}).then((function(e){h(e)}))}),[l,r]),p=(n=t.answers,i="member_id",n.reduce((function(e,n){var t=n[i];return e[t]||(e[t]=[]),e[t].push(n),e}),{}));return 0===t.questions.length?(0,v.jsx)(E.Z,{message:"\u041d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438 \u0434\u043d\u044f. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0432\u0435\u0441\u0442\u043a\u0438 \u0434\u043d\u044f.",type:"warning"}):(0,v.jsxs)("div",{children:[(0,v.jsx)(c.Z,{type:"primary",onClick:x,children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442"}),(0,v.jsx)("div",{className:"cards",children:Object.keys(p).map((function(e){var n=s.find((function(n){return n.id===+e}));return(0,v.jsx)(d.Z,{hoverable:!0,title:"".concat(null===n||void 0===n?void 0:n.sirname," ").concat(null===n||void 0===n?void 0:n.firstname," ").concat(null===n||void 0===n?void 0:n.lastname,", ").concat(null===n||void 0===n?void 0:n.part,"%"),onClick:function(){return j({member_id:+e})},children:p[e].map((function(e){var n=t.questions.find((function(n){return n.id===e.question_id}));return(0,v.jsxs)("div",{children:[null===n||void 0===n?void 0:n.solution," -"," ",(0,v.jsx)("span",{className:"result-"+e.result,children:B[e.result]})]},e.id)}))},null===n||void 0===n?void 0:n.id)}))})]})},z=function(e){var n=e.meeting;e.company;console.log("\ud83d\ude80 ~ file: index.tsx ~ line 18 ~ meeting",n);var i=(0,o.useState)(!0),t=(0,m.Z)(i,2),r=t[0],l=t[1],d=j.Z.useForm(),u=(0,m.Z)(d,1)[0],f=(0,Z.o)((function(e){return e})).changeMeetingFactInfo,h=n.info,x=h.date_of_meeting,p=h.date_of_registration,g=h.type,y=h.type_of_cause,_=h.address_of_meeting;return x&&p&&g&&y&&_?0===n.answers.length?(0,v.jsx)(E.Z,{message:"\u0415\u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0432 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435.",type:"warning"}):(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)(j.Z,{form:u,layout:"vertical",onFinish:function(e){f((0,a.Z)((0,a.Z)({},e),{},{meeting_id:n.id})),l(!r)},initialValues:n.info,disabled:r,children:[(0,v.jsx)(j.Z.Item,{name:"date_of_start",label:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(k.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:O.d})}),(0,v.jsx)(j.Z.Item,{name:"date_of_finish",label:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u044f",rules:[{required:!0,message:"Please input the title of collection!"}],children:(0,v.jsx)(k.Z,{placeholder:"",showTime:{format:"HH:mm",minuteStep:10},showNow:!1,showSecond:!1,format:O.d})}),!r&&(0,v.jsx)(j.Z.Item,{children:(0,v.jsx)(c.Z,{type:"primary",htmlType:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),r?(0,v.jsx)(c.Z,{type:"primary",onClick:function(){l(!r)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}):null]}),(0,v.jsx)("div",{className:"cards",children:(0,v.jsx)(M,{type:s.protocol,link:"".concat(Q.v,"/documents/").concat(n.id,"/").concat(s.protocol)})})]}):(0,v.jsx)(E.Z,{message:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0435. \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0443\u043d\u043a\u0442\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.",type:"warning"})};var J=r.Z.TabPane,R=function(){var e=(0,T.UO)().id,n=(0,Z.o)((function(e){return e})),i=n.company,t=n.meeting,s=n.getMeeting,a=n.getGatalog,c=n.getCompany;return(0,o.useEffect)((function(){e&&(s(e),a("question_type"))}),[e]),(0,o.useEffect)((function(){!i.id&&t.info.company_id&&c(t.info.company_id)}),[t]),t?(0,v.jsxs)("div",{children:[(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(l.Z.Item,{children:(0,v.jsx)(S.OL,{to:"/companies",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),(0,v.jsx)(l.Z.Item,{children:(0,v.jsx)(S.OL,{to:"/companies",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,v.jsx)(l.Z.Item,{children:(0,v.jsx)("a",{href:"/companies/"+(null===i||void 0===i?void 0:i.id),children:null===i||void 0===i?void 0:i.requisites.name})})]}),(0,v.jsx)("div",{className:"header",children:(0,v.jsxs)("h1",{children:["\u0421\u043e\u0431\u0440\u0430\u043d\u0438\u0435: ",t.info.name]})}),(0,v.jsxs)(r.Z,{defaultActiveKey:"1",children:[(0,v.jsx)(J,{tab:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",children:(0,v.jsx)(F,{requisites:t.info})},"1"),(0,v.jsx)(J,{tab:"\u041f\u043e\u0432\u0435\u0441\u0442\u043a\u0430",children:(0,v.jsx)(q,{questions:t.questions,meeting_id:t.id})},"2"),(0,v.jsx)(J,{tab:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",children:(0,v.jsx)(U,{meeting:t,company:i})},"3"),(0,v.jsx)(J,{tab:"\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435",children:(0,v.jsx)(W,{questions:t.questions,meetingId:t.id,members:i.members,meeting:t})},"4"),(0,v.jsx)(J,{tab:"\u0421\u043e\u0431\u0440\u0430\u043d\u0438\u0435",children:(0,v.jsx)(z,{meeting:t,company:i})},"5")]})]}):null}}}]);
//# sourceMappingURL=461.11de0a62.chunk.js.map