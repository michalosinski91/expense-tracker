(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=a(2),l=a.n(s),i=a(5),u=a(3),m=a(17),p=a(4),d=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(p.a)({},e,{transactions:t.payload,loading:!1});case"DELETE_TRANSACTION":return Object(p.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(p.a)({},e,{transactions:[].concat(Object(m.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(p.a)({},e,{error:t.payload});default:return e}},f=a(6),E=a.n(f),_={transactions:[],error:null,loading:!0},v=Object(n.createContext)(_),b=function(e){var t=e.children,a=Object(n.useReducer)(d,_),c=Object(u.a)(a,2),o=c[0],s=c[1];function m(){return(m=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/v1/transactions");case 3:t=e.sent,s({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(){return(p=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("/api/v1/transactions/".concat(t));case 3:s({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function f(){return(f=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,E.a.post("/api/v1/transactions",t,a);case 4:n=e.sent,s({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(v.Provider,{value:{transactions:o.transactions,error:o.error,loading:o.loading,deleteTransaction:function(e){return p.apply(this,arguments)},addTransaction:function(e){return f.apply(this,arguments)},getTransactions:function(){return m.apply(this,arguments)}}},t)};function y(){return r.a.createElement("h2",null,"Expense Tracker")}function h(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function N(){var e=Object(n.useContext)(v).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",{className:"heading--tertiary"},"Your balance"),r.a.createElement("p",{className:"balance__amount"},"$",h(e)))}function x(){var e=Object(n.useContext)(v).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"balance__summary"},r.a.createElement("div",{className:"balance__group"},r.a.createElement("h4",{className:"heading--tertiary"},"Income"),r.a.createElement("div",{className:"balance__text balance__text--positive"},"+$",h(t))),r.a.createElement("div",{className:"balance__group"},r.a.createElement("h4",{className:"heading--tertiary"},"Expense"),r.a.createElement("div",{className:"balance__text balance__text--negative"},"-$",h(a))))}function O(e){var t=e.id,a=e.text,c=e.amount,o=Object(n.useContext)(v).deleteTransaction;return r.a.createElement("li",{className:c>0?"history__entry history__entry--positive":"history__entry history__entry--negative"},a," ",r.a.createElement("span",null,c>0?"+$".concat(h(c)):"-$".concat(h(Math.abs(c)))),r.a.createElement("button",{onClick:function(){return o(t)},className:"history__button"},"x"))}function T(){var e=Object(n.useContext)(v),t=e.transactions,a=e.getTransactions;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"history"},r.a.createElement("h3",{className:"heading--secondary"},"History"),r.a.createElement("ul",{className:"history__list"},t.map((function(e){return r.a.createElement(O,{key:e._id,id:e._id,text:e.text,amount:e.amount})}))))}function g(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),s=Object(u.a)(o,2),l=s[0],i=s[1],m=Object(n.useContext)(v).addTransaction;return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e4*Math.random()),text:a,amount:+l};m(t),c(""),i(0)}},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"text",className:"form__label"},"Text"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){var t=e.target;return c(t.value)},className:"form__input",placeholder:"Enter text..."})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"amount",className:"form__label"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:l,onChange:function(e){var t=e.target;return i(t.value)},className:"form__input",placeholder:"Enter amount..."})),r.a.createElement("button",{type:"submit",className:"btn"},"Add transaction"))}function A(){return r.a.createElement("div",{className:"transaction"},r.a.createElement("h3",{className:"heading--secondary"},"Add new transaction"),r.a.createElement(g,null))}a(41);var R=function(){return r.a.createElement(b,null,r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement(A,null)))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9f74d493.chunk.js.map