(this["webpackJsonpreact-learning"]=this["webpackJsonpreact-learning"]||[]).push([[0],{32:function(e,n,t){},33:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(2),i=t.n(r),s=t(13),u=t.n(s),o=(t(32),t(33),t(11));function a(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}function j(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})}function l(e){var n=Object(r.useState)(0),t=Object(o.a)(n,2),i=t[0],s=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(a,{increment:function(e){s((function(n){return n+e}))},decrement:function(e){s((function(n){return n-e}))},incrementAsync:function(e){setTimeout((function(){return s((function(n){return n+e}))}),1500)},decrementAsync:function(e){setTimeout((function(){return s((function(n){return n-e}))}),1500)}}),Object(c.jsx)(j,{state:i})]})]})}var d={},b=1500;function m(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}function f(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})}function O(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Object(r.useState)(e),t=Object(o.a)(n,2),c=t[0],i=t[1];return d.increment=function(e){i((function(n){return n+e}))},d.decrement=function(e){i((function(n){return n-e}))},d.incrementAsync=function(e){setTimeout(d.increment,b,e)},d.decrementAsync=function(e){setTimeout(d.decrement,b,e)},c}(0);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(m,{increment:d.increment,decrement:d.decrement,incrementAsync:d.incrementAsync,decrementAsync:d.decrementAsync}),Object(c.jsx)(f,{state:n})]})]})}var x=t(8),h=t(7),y=t(22);var v={increment:function(e){return{type:"INCREMENT",payload:e}},decrement:function(e){return{type:"DECREMENT",payload:e}},incrementAsync:function(e){return function(n){setTimeout((function(){n({type:"INCREMENT",payload:e})}),1500)}},decrementAsync:function(e){return function(n){setTimeout((function(){n({type:"DECREMENT",payload:e})}),1500)}}},E=Object(h.b)(void 0,v)((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}));var p=Object(h.b)((function(e){return{state:e}}))((function(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})})),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,C=Object(x.d)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===t.type?n+(null!==(e=null===t||void 0===t?void 0:t.payload)&&void 0!==e?e:1):"DECREMENT"===t.type?n-1:n}),N(Object(x.a)(y.a)));function A(e){return Object(c.jsx)(h.a,{store:C,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(E,{}),Object(c.jsx)(p,{})]})]})})}var k=t(26),T=t(9),M=t.n(T),D=t(12),R=M.a.mark(X),I=M.a.mark(J),S=M.a.mark(P),w=M.a.mark(Y),g=M.a.mark(L),_=function(e){return new Promise((function(n){return setTimeout(n,e)}))};function X(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.next=3,_(1500);case 3:return t.next=5,Object(D.b)({type:"INCREMENT",payload:n});case 5:case"end":return t.stop()}}),R)}function J(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.next=3,_(1500);case 3:return t.next=5,Object(D.b)({type:"DECREMENT",payload:n});case 5:case"end":return t.stop()}}),I)}function P(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("INCREMENT_ASYNC",X);case 2:case"end":return e.stop()}}),S)}function Y(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("DECREMENT_ASYNC",J);case 2:case"end":return e.stop()}}),w)}function L(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([P(),Y()]);case 2:case"end":return e.stop()}}),g)}var U=Object(h.b)(void 0,{increment:function(e){return{type:"INCREMENT",payload:e}},decrement:function(e){return{type:"DECREMENT",payload:e}},incrementAsync:function(e){return{type:"INCREMENT_ASYNC",payload:e}},decrementAsync:function(e){return{type:"DECREMENT_ASYNC",payload:e}}})((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}));var V=Object(h.b)((function(e){return{state:e}}))((function(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})})),B=Object(k.a)(),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,q=Object(x.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===n.type?e+n.payload:"DECREMENT"===n.type?e-n.payload:e}),H(Object(x.a)(B)));function z(e){return Object(c.jsx)(h.a,{store:q,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(U,{}),Object(c.jsx)(V,{})]})]})})}B.run(L);var F=t(25),G=t(23),K=t(24),Q=t(5),W=new(function(){function e(){var n=this;Object(G.a)(this,e),this.state=0,this.increment=function(){n.state+=1},this.decrement=function(){n.state-=1},Object(Q.k)(this)}return Object(K.a)(e,[{key:"incrementAsync",value:function(){setTimeout(this.increment,1500)}},{key:"decrementAsync",value:function(){setTimeout(this.decrement,1500)}}]),e}());function Z(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}function $(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})}var ee=Object(F.a)((function(e){var n=e.countManager;return Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(Z,{increment:n.increment,decrement:n.decrement,incrementAsync:n.incrementAsync,decrementAsync:n.decrementAsync}),Object(c.jsx)($,{state:n.state})]})}));function ne(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsx)(ee,{countManager:W})]})}var te=t(42),ce=0,re=new te.a(ce);re.subscribe((function(e){ce=e}));var ie=function(e){re.next(ce+e)},se=function(e){re.next(ce-e)};function ue(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return ie(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return se(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){setTimeout(ie,1500,1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){setTimeout(se,1500,1)},children:"Decrement Async"})]})}function oe(e){var n=Object(r.useState)(0),t=Object(o.a)(n,2),i=t[0],s=t[1];return Object(r.useEffect)((function(){var e=re.subscribe((function(e){s(e)}));return function(){e.unsubscribe()}})),Object(c.jsx)("div",{className:"count-value",children:i})}function ae(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(ue,{}),Object(c.jsx)(oe,{})]})]})}var je=function(e){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("h2",{children:"Different ways of managing state in React JS"}),Object(c.jsx)(l,{title:"Pure React State Management"}),Object(c.jsx)(O,{title:"React Hooks State Management"}),Object(c.jsx)(A,{title:"Redux Thunk State Management"}),Object(c.jsx)(z,{title:"Redux Saga State Management"}),Object(c.jsx)(ae,{title:"RxJS State Management"}),Object(c.jsx)(ne,{title:"MobX State Management"})]})};u.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(je,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e312b653.chunk.js.map