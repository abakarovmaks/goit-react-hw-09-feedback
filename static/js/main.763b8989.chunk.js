(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(e,t,n){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},,function(e,t,n){e.exports={container:"Container_container__3RIox"}},,function(e,t,n){e.exports={btn:"Button_btn__3xaJM"}},function(e,t,n){e.exports={notification:"Notification_notification__1C7Ma"}},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),o=(n(15),n(3)),r=(n(16),n(7)),l=n.n(r),u=n(0);function b(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})}var d=n(5),j=n.n(d);function f(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:j.a.section,children:[Object(u.jsx)("p",{className:j.a.title,children:t}),n]})}var h=n(8),x=n.n(h),O=n(9),v=n.n(O),m=function(e){var t=e.feedbackType,n=e.onLeaveFeedback;return Object(u.jsx)("button",{className:v.a.btn,"data-action":t,onClick:n,children:t},t)};function p(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return m({feedbackType:e,onLeaveFeedback:n})}))}p.propTypes={options:x.a.array.isRequired};var _=n(2),k=n.n(_);function N(e){var t=e.good,n=e.neutral,c=e.bad,i=e.total,s=e.positivePercentage;return Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("ul",{className:k.a.list,children:[Object(u.jsxs)("li",{className:k.a.item,children:["Good: ",t]}),Object(u.jsxs)("li",{className:k.a.item,children:["Neutral: ",n]}),Object(u.jsxs)("li",{className:k.a.item,children:["Bad: ",c]}),Object(u.jsxs)("li",{className:k.a.item,children:["Total: ",i]}),Object(u.jsxs)("li",{className:k.a.item,children:["Positive feedback: ",s," %"]})]})})}var g=n(10),S=n.n(g);function w(e){var t=e.message;return Object(u.jsx)("div",{className:S.a.notification,children:t})}function y(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(0),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)(0),j=Object(o.a)(d,2),h=j[0],x=j[1],O=function(){return n+r+h},v=O(),m=function(){var e=Math.round(100*n/O());return e>0?e:0}();return Object(u.jsxs)(b,{children:[Object(u.jsx)(f,{title:"Please leave feedback",children:Object(u.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:console.warn("Wow! What is this??")}}})}),Object(u.jsx)(f,{title:"Statistics",children:0!==v?Object(u.jsx)(N,{good:n,neutral:r,bad:h,total:v,positivePercentage:m}):Object(u.jsx)(w,{message:"No feedback given!"})})]})}s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.763b8989.chunk.js.map