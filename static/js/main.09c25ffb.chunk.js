(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{190:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},195:function(e,t,n){},349:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(63),i=n.n(r),s=(n(190),n(25)),c=n.n(s),l=n(50),u=n(22),d=n(28),h=n(23),f=n(24),m=n(351),p=n(352),v=n(356),g=n(176),b=n(177),w=n(181),j=(n(192),n(193),n(3)),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!1},e.handleClick=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Event",children:[Object(j.jsx)("h2",{className:"EventSummary",children:t.summary}),Object(j.jsx)("p",{className:"EventLocation",children:t.location}),Object(j.jsx)("p",{className:"EventDate",children:t.dateTime})]}),!0===this.state.show&&Object(j.jsx)("p",{className:"EventDetails",children:t.description}),!1===this.state.show&&Object(j.jsx)("button",{className:"showMore",onClick:function(){return e.handleClick()},children:"Show details"}),!0===this.state.show&&Object(j.jsx)("button",{className:"showLess",onClick:function(){return e.handleClick()},children:"hide details"})]})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(y,{event:e})},e.id)}))})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Alert",children:Object(j.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(x),S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(x),T=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CitySearch",children:[Object(j.jsx)(k,{text:this.state.infoText}),Object(j.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(j.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(j.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={numberOfEvents:24,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;if(n<1||n>34)return e.setState({infoText:"Must Enter a valid number of events, 1 - 34",numberOfEvents:""});e.setState({numberOfEvents:n,infoText:""}),e.props.updateEvents(null,t.target.value)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"numberOfEvents",children:[Object(j.jsx)(S,{text:this.state.infoText}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{children:" # of Events:"}),Object(j.jsx)("input",{type:"number",className:"EventsNumber",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})]})}}]),n}(a.Component);n(195);var E=function(e){return e.showWelcomeScreen?Object(j.jsxs)("div",{className:"WelcomeScreen",children:[Object(j.jsx)("h1",{children:"Welcome to the Meet app"}),Object(j.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(j.jsx)("div",{className:"button_cont",align:"center",children:Object(j.jsxs)("div",{class:"google-btn",children:[Object(j.jsx)("div",{class:"google-icon-wrapper",children:Object(j.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(j.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(j.jsx)("b",{children:"Sign in with google"})})]})}),Object(j.jsx)("a",{href:"https://tomstaton.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]}):null},W=n(180),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],M=n(113),N=n.n(M),A=n(72),L=n.n(A),q=function(e){var t=e.map((function(e){return e.location}));return Object(W.a)(new Set(t))},I=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://dgw77dav94.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),L.a.done(),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,R();case 11:if(!(n=e.sent)){e.next=21;break}return J(),a="https://dgw77dav94.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=17,N.a.get(a);case 17:return(o=e.sent).data&&(r=q(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),L.a.done(),e.abrupt("return",o.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,N.a.get("https://dgw77dav94.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&I(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0,offlineText:""},e.updateEvents=function(t,n){var a=e.state,o=a.currentLocation,r=a.numberOfEvents;t?B().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,r);e.setState({events:a,currentLocation:t})})):B().then((function(t){var a=("all"===o?t:t.filter((function(e){return e.location===o}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,D(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&B().then((function(e){r.mounted&&r.setState({events:e,locations:q(e)}),navigator.onLine?r.setState({offlineText:""}):r.setState({offlineText:"You are offline and viewing a stored list of events"})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(j.jsx)("div",{className:"App"}):Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(T,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(j.jsx)(Z,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(j.jsx)(m.a,{height:400,children:Object(j.jsxs)(p.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(j.jsx)(v.a,{}),Object(j.jsx)(g.a,{type:"category",dataKey:"city",name:"city"}),Object(j.jsx)(b.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(j.jsx)(w.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(j.jsx)(O,{events:this.state.events}),Object(j.jsx)(E,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){R()}})]})}}]),n}(a.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,358)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(178).config("92815495dffa4d1fb7bb7840b2ffdc70").install(),i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),z()}},[[349,1,2]]]);
//# sourceMappingURL=main.09c25ffb.chunk.js.map