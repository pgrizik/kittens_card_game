(this.webpackJsonprobo_friends=this.webpackJsonprobo_friends||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(15),n(8)),s=n(1),l=n.n(s),u=n(4),d=n(5),m=n(6),b=n(9),h=n(7),p=(n(17),function(t){var e=t.id,n=t.id2,a=(t.name,t.onButtonFlip);return r.a.createElement("div",{className:"flip-container dib br3 ma2 grow bw2 shadow-5 tc",onClick:function(){return a(e,n)},id:e,id2:n},r.a.createElement("div",{className:"flipper"},r.a.createElement("div",{className:"front"},r.a.createElement("div",null,r.a.createElement("div",{className:"shirt ba bw4 br3 b--white-80 tc"}))),r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"ph0 pv3 tc"},r.a.createElement("img",{alt:"Cat",src:"https://robohash.org/".concat(n,"?set=set4&size=150x150")})))))}),f=function(t){var e=t.robots,n=t.onButtonFlip;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(p,{key:a,id:e[a].id,id2:e[a].id2,name:e[a].username,onButtonFlip:n})})))},w=function(t){var e=t.InputChange,n=t.onButtonRestart;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba bw1 shadow-5 br3 b--blue bg-lightest-blue",type:"filter",placeholder:"quantity of cats",onChange:e}),r.a.createElement("div",{className:"pa1"}),r.a.createElement("button",{className:"pa1 grow ba bw1 shadow-5 br3 b--blue bg-lightest-blue",onClick:n},"Restart"))},v=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).onInputChange=function(e){t.setState({inputbox:e.target.value}),t.catsleft=Number(e.target.value)},t.onButtonRestart=function(){window.location.reload()},t.onButtonFlip=function(e,n){if(2!==t.i){if(document.getElementById(e).getAttribute("class").includes("hover")||(document.getElementById(e).setAttribute("class","flip-container hover dib br3 ma2 grow bw2 shadow-5 tc"),t.i++),2===t.i)(function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,2e3)}));case 2:if(a.getAttribute("id2")!=n){t.next=8;break}return document.getElementById(n).setAttribute("class","flip-container hide hover dib br3 ma2 grow bw2 shadow-5 tc"),document.getElementById(n+"_clone").setAttribute("class","flip-container hide hover dib br3 ma2 grow bw2 shadow-5 tc"),t.abrupt("return",[0,-1]);case 8:return a.setAttribute("class","flip-container dib br3 ma2 grow bw2 shadow-5 tc"),document.getElementById(e).setAttribute("class","flip-container dib br3 ma2 grow bw2 shadow-5 tc"),t.abrupt("return",[0,0]);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(t.prevCard).then((function(e){t.i=e[0],t.catsleft+=e[1],0==t.catsleft&&(window.alert("you won!!!"),window.location.reload())}));t.prevCard=document.getElementById(e)}},t.state={robots:[],inputbox:10},t.i=0,t.prevCard=null,t.catsleft=10,t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({robots:e})}))}},{key:"render",value:function(){var t=this;function e(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=[t[n],t[e]];t[e]=a[0],t[n]=a[1]}return t}var n=e(e(this.state.robots).reduce((function(e,n){if(e.length<2*t.state.inputbox){n.id2=n.id,e.push(n);var a=Object(c.a)({},n);a.id=a.id+"_clone",e.push(a)}return e}),[]));return this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Kittens Game"),r.a.createElement(w,{InputChange:this.onInputChange,onButtonRestart:this.onButtonRestart}),r.a.createElement(f,{robots:n,onButtonFlip:this.onButtonFlip})):r.a.createElement("h1",{className:"f1 tc"},"Loading...")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b0c828ae.chunk.js.map