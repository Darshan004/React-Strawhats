(this["webpackJsonpztm-app"]=this["webpackJsonpztm-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(2),r=n.n(o),s=(n(12),n(3)),c=n(4),p=n(6),m=n(5),l=(n(13),n(14),n(15),function(e){return a.a.createElement("div",{className:"card"},a.a.createElement("img",{alt:"monster",src:e.strawhat.img}),a.a.createElement("h2",null," ",e.strawhat.name," "),a.a.createElement("p",null," ",e.strawhat.post," "))}),g=function(e){return a.a.createElement("div",{className:"card-list"},e.strawhats.map((function(e){return a.a.createElement(l,{key:e.id,strawhat:e})})))},h=(n(16),function(e){var t=e.placeholder,n=e.changehandler;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),u=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={searchField:"",strawhats:[{id:1,name:"Monkey D. Luffy",post:"Captain",img:"https://vignette.wikia.nocookie.net/onepiece/images/5/58/Monkey_D._Luffy_Post_Timeskip_Portrait.png/"},{id:2,name:"Roronoa Zoro",post:"Swordsman",img:"https://vignette.wikia.nocookie.net/onepiece/images/b/bc/Roronoa_Zoro_Post_Timeskip_Portrait.png"},{id:3,name:"Vinsmoke Sanji",post:"Cook",img:"https://vignette.wikia.nocookie.net/onepiece/images/e/e5/Sanji_Post_Timeskip_Portrait.png"},{id:4,name:"Ussop",post:"Sniper",img:"https://vignette.wikia.nocookie.net/onepiece/images/3/37/Usopp_Post_Timeskip_Portrait.png/"},{id:5,name:"Nami",post:"Navigator",img:"https://vignette.wikia.nocookie.net/onepiece/images/2/2f/Nami_Post_Timeskip_Portrait.png/"},{id:6,name:"Tony Tony Chopper",post:"Doctor",img:"https://vignette.wikia.nocookie.net/onepiece/images/e/e2/Tony_Tony_Chopper_Post_Timeskip_Portrait.png"},{id:7,name:"Nico Robin",post:"Archaeologist",img:"https://vignette.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png"},{id:8,name:"Franky",post:"Shipwright",img:"https://vignette.wikia.nocookie.net/onepiece/images/8/83/Franky_Post_Timeskip_Portrait.png/"},{id:9,name:"Brook",post:"Musician",img:"https://vignette.wikia.nocookie.net/onepiece/images/0/03/Brook_Post_Timeskip_Portrait.png"},{id:10,name:"Jimbei",post:"Helmsman",img:"https://vignette.wikia.nocookie.net/onepiece/images/f/f7/Jinbe_Portrait.png/"}]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.strawhats,i=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"StrawHat Pirates"),a.a.createElement(h,{placeholder:"Search",changehandler:function(t){e.setState({searchField:t.target.value},(function(){return console.log(e.setState)}))}}),a.a.createElement(g,{strawhats:o}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9b3fc6a9.chunk.js.map