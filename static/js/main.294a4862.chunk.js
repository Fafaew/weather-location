(this["webpackJsonpweather-location"]=this["webpackJsonpweather-location"]||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(18),s=n.n(c),i=(n(23),n(3)),o=n.n(i),u=n(4),p=n(8),h=n(7),j=n.n(h),d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"eb6070552ce7c9247727f4725e40f98e"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=(n(43),n(0));var b=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(p.a)(c,2),i=s[0],h=s[1],b=Object(a.useState)(""),f=Object(p.a)(b,2),m=f[0],O=f[1],g=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=6;break}return e.next=3,d(m);case 3:n=e.sent,h(n),O("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://api.openweathermap.org/data/2.5/weather",{params:{lat:t,lon:n,appid:"eb6070552ce7c9247727f4725e40f98e",lang:"pt",units:"metric"}});case 2:a=e.sent,h(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){x(e.coords.latitude,e.coords.longitude),r(!0)}))}),[]),!1===n?Object(l.jsx)(a.Fragment,{children:" You need turn on the location in your browser"}):!1===i?Object(l.jsx)(a.Fragment,{children:"Loading Weather..."}):Object(l.jsx)(a.Fragment,{children:Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)("input",{type:"text",className:"search",placeholder:"Search Another City...",value:m,onChange:function(e){return O(e.target.value)},onKeyPress:g}),i.main&&Object(l.jsxs)("div",{className:"city",children:[Object(l.jsxs)("h2",{className:"city-name",children:[Object(l.jsxs)("span",{children:["Weather in ",i.name]}),Object(l.jsx)("sup",{children:i.sys.country})]}),Object(l.jsxs)("div",{className:"city-temp",children:[Math.round(i.main.temp),Object(l.jsx)("sup",{children:"\xb0C"}),"+"]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(i.weather[0].icon,"@2x.png"),alt:i.weather[0].description}),Object(l.jsx)("p",{children:i.weather[0].description})]})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.294a4862.chunk.js.map