(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),c=a(2),n=a.n(c),r=(a(14),a(3)),i=a(4),s=a(7),m=a(5),g=a(8),u=(a(16),function(e){return l.a.createElement("div",{className:"wrapper"},e.children)}),h=function(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("span",{className:"navbar-item"},"Clicky Game"),l.a.createElement("span",{className:"navbar-item"},e.message),l.a.createElement("span",{className:"navbar-item"},"Score: ",e.score," | Topscore: ",e.topscore)))},p=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{id:e.id,name:e.alt,alt:e.alt,src:e.image,onClick:e.onClick})))},b=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Clicky Game!"))},d=a(6),k=function(){return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h3",null,"Clicky Game!"),l.a.createElement("h6",null,"Click on an image to earn points, but don't click on any more than once!"))},f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={goats:d,message:"Click an image to begin!",score:0,topscore:0},a.clickedElements=[],a.handleClick=function(e){var t=e.target.id;a.clickedElements.includes(t)?(a.setState({message:"Oh no, you had that one before!"}),a.resetGame()):(a.clickedElements.push(t),a.setState({score:a.state.score+1}),a.state.topscore<=a.state.score&&a.setState({topscore:a.state.topscore+1}),a.shuffleGoats())},a.resetGame=function(){a.setState({message:"Click an image to begin!"}),a.setState({score:0}),a.shuffleGoats(),a.clickedElements=[]},a.shuffleGoats=function(){var e=a.state.goats,t=e.length;if(0===t)return!1;for(;--t;){var o=Math.floor(Math.random()*(t+1)),l=e[t],c=e[o];e[t]=c,e[o]=l}var n=e;a.setState({goats:n})},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(h,{message:this.state.message,score:this.state.score,topscore:this.state.topscore}),l.a.createElement(k,null),l.a.createElement(u,null,this.state.goats.map(function(t){return l.a.createElement(p,{id:t.id,name:t.alt,image:t.image,alt:t.alt,onClick:e.handleClick,key:t.id})})),l.a.createElement(b,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat1.jpg?raw=true",alt:"goat1"},{id:2,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat2.jpg?raw=true",alt:"goat2"},{id:3,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat3.jpg?raw=true",alt:"goat3"},{id:5,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat5.jpg?raw=true",alt:"goat5"},{id:6,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat6.jpg?raw=true",alt:"goat6"},{id:7,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat7.jpg?raw=true",alt:"goat7"},{id:8,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat8.jpg?raw=true",alt:"goat8"},{id:9,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat9.jpg?raw=true",alt:"goat9"},{id:11,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat11.jpg?raw=true",alt:"goat11"},{id:12,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat12.jpg?raw=true",alt:"goat12"},{id:14,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat14.jpg?raw=true",alt:"goat14"},{id:15,image:"https://github.com/SHollatz/clicky-game/blob/master/images/goat15.jpg?raw=true",alt:"goat15"}]},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.aef2512c.chunk.js.map