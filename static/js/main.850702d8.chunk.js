(this["webpackJsonpweather-location"]=this["webpackJsonpweather-location"]||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(18),s=n.n(r),i=(n(23),n(3)),o=n.n(i),u=n(4),p=n(8),h=n(7),j=n.n(h),l=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"eb6070552ce7c9247727f4725e40f98e"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(43),n.p+"static/media/logo.d30c8f36.png"),b=n(0);var m=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(p.a)(r,2),i=s[0],h=s[1],m=Object(a.useState)(""),f=Object(p.a)(m,2),O=f[0],g=f[1],x=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=6;break}return e.next=3,l(O);case 3:n=e.sent,h(n),g("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{lat:t,lon:n,appid:"eb6070552ce7c9247727f4725e40f98e",lang:"pt",units:"metric"}});case 2:a=e.sent,h(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){v(e.coords.latitude,e.coords.longitude),c(!0)}))}),[]),!1===n?Object(b.jsx)(a.Fragment,{children:Object(b.jsx)("div",{className:"styleDenyCity",children:Object(b.jsx)("h2",{className:"denyCity",children:Object(b.jsx)("span",{children:" You need turn on the location in your browser"})})})}):!1===i?Object(b.jsx)(a.Fragment,{children:"Loading Weather..."}):Object(b.jsx)(a.Fragment,{children:Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)("img",{className:"logo",src:d,alt:""}),Object(b.jsx)("input",{type:"text",className:"search",placeholder:"Search Another City...",value:O,onChange:function(e){return g(e.target.value)},onKeyPress:x}),i.main&&Object(b.jsxs)("div",{className:"city",children:[Object(b.jsxs)("h2",{className:"city-name",children:[Object(b.jsxs)("span",{children:["Weather in ",i.name]}),Object(b.jsx)("sup",{children:i.sys.country})]}),Object(b.jsxs)("div",{className:"city-temp",children:[Math.round(i.main.temp),Object(b.jsx)("sup",{children:"\xb0C"}),"+"]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(i.weather[0].icon,"@2x.png"),alt:i.weather[0].description}),Object(b.jsx)("p",{children:i.weather[0].description})]})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.850702d8.chunk.js.map