(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},204:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),s=(n(199),n(23)),i=n(31),l=n(24),u=n(25),d=n(357),h=n(361),f=n(362),v=n(184),p=n(185),m=n(189),b=(n(200),n(201),n(4)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleClick=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"Event",children:[Object(b.jsx)("h2",{className:"EventSummary",children:t.summary}),Object(b.jsx)("p",{className:"EventLocation",children:t.location}),Object(b.jsx)("p",{className:"EventDate",children:t.dateTime})]}),!0===this.state.show&&Object(b.jsx)("p",{className:"EventDetails",children:t.description}),!1===this.state.show&&Object(b.jsx)("button",{className:"showMore",onClick:function(){return e.handleClick()},children:"Show details"}),!0===this.state.show&&Object(b.jsx)("button",{className:"showLess",onClick:function(){return e.handleClick()},children:"hide details"})]})}}]),n}(a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(j,{event:e})},e.id)}))})}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(w),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(w),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(x,{text:this.state.infoText}),Object(b.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),k=n(26),S=n.n(k),T=n(51),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventCount:32,infoText:""},e.handleInputChanged=function(){var t=Object(T.a)(S.a.mark((function t(n){var a,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.props.updateEvents,!((r=n.target.value)<1||r>34)){t.next=6;break}return t.abrupt("return",e.setState({infoText:"Must Enter a valid number of events, 1 - 34",numberOfEvents:""}));case 6:e.setState({eventCount:r,infoText:""}),e.props.updateEvents("all",e.state.eventCount);case 8:return t.next=10,a(null,r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"numberOfEvents",children:[Object(b.jsx)(O,{text:this.state.infoText}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:" Number of Events:"}),Object(b.jsx)("input",{type:"number",id:"eventsNumber",className:"eventsNumber",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})]})}}]),n}(a.Component);n(204);var N=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",children:[Object(b.jsx)("h1",{children:"Welcome to the Meet app"}),Object(b.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{class:"google-btn",children:[Object(b.jsx)("div",{class:"google-icon-wrapper",children:Object(b.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})}),"Page 1"]})}),Object(b.jsx)("a",{href:"https://tomstaton.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},E=n(18),W=n(364),Z=n(179),L=n(93),A=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(E.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){c((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]),Object(b.jsx)(d.a,{height:400,children:Object(b.jsx)(W.a,{width:400,height:400,children:Object(b.jsx)(Z.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(b.jsx)(L.a,{},"cell-".concat(t))}))})})})},I=n(188),M=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],J=n(119),q=n.n(J),D=n(77),R=n.n(D),U=function(e){var t=e.map((function(e){return e.location}));return Object(I.a)(new Set(t))},B=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://dgw77dav94.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},_=function(){var e=Object(T.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a,r,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return R.a.done(),e.abrupt("return",M);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),R.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,z();case 10:if(!(n=e.sent)){e.next=20;break}return F(),a="https://dgw77dav94.execute-api.us-east-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,q.a.get(a);case 16:return(r=e.sent).data&&(o=U(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),R.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a,r,o,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,_(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://dgw77dav94.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventNumber:32,currentLocation:"all",showWelcomeScreen:void 0,offlineText:""},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.eventNumber;t?P().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):P().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,eventNumber:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0;var t=localStorage.getItem("access_token"),n=!_(t).error,a=new URLSearchParams(window.location.search).get("code");this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&P().then((function(t){var n=e.state.eventNumber;if(e.mounted){var a=t.slice(0,n);e.setState({events:a,locations:U(t)})}navigator.onLine?e.setState({offlineText:""}):e.setState({offlineText:"You are offline and viewing a stored list of events"})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[" ",""===this.state.offlineText?Object(b.jsx)("p",{}):Object(b.jsx)("p",{children:this.state.offlineText}),Object(b.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(b.jsx)(C,{eventNumber:this.state.eventNumber,updateEvents:this.updateEvents}),Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)(A,{events:this.state.events}),Object(b.jsx)(d.a,{height:400,children:Object(b.jsxs)(h.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(b.jsx)(f.a,{}),Object(b.jsx)(v.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(p.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(b.jsx)(m.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(b.jsx)(g,{events:this.state.events}),Object(b.jsx)(N,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){z()}})]})}}]),n}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(186).config("92815495dffa4d1fb7bb7840b2ffdc70").install(),c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Y(t,e)}))}}(),K()}},[[356,1,2]]]);
//# sourceMappingURL=main.fe42ee91.chunk.js.map