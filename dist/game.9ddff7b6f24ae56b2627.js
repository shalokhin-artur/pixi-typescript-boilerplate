!function(){"use strict";var t,e={468:function(t,e,n){var i,a=n(696),r=n(466),o=n.n(r),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.stats=new(o()),this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}return t.prototype.update=function(){this.stats.begin(),this.stats.end()},t}(),c=window.innerWidth*window.devicePixelRatio,h=window.innerHeight*window.devicePixelRatio;!function(t){t.task1="Task 1",t.task2="Task 2",t.task3="Task 3"}(i||(i={}));var l=[i.task1,i.task2,i.task3],u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.emiter=new a.P6Y.EventEmitter,this.container=new a.W20}var e=t.prototype;return e.render=function(){var t=this;l.forEach((function(e,n){var i=new a.xvT(e,{fontSize:"70px",fill:"white"});i.interactive=!0,i.on("pointerdown",(function(){t.emiter.emit("chooseTask",e)}));var r=100*(n+1);i.position.set(c/2-i.width/2,h/2+r-i.height*l.length),t.container.addChild(i)}))},e.clear=function(){this.container.removeChildren()},t}(),d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.emiter=new a.P6Y.EventEmitter,this.container=new a.W20}var e=t.prototype;return e.render=function(){var t=this,e=new a.xvT("Back to menu",{fontSize:"70px",fill:"white"});e.interactive=!0,e.on("pointerdown",(function(){t.emiter.emit("backToMenu")})),e.position.set(c-e.width-70,70),this.container.addChild(e)},e.clear=function(){this.container.removeChildren()},t}(),f=n(269);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function m(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=["assets/cards/backB.png","assets/cards/backR.png"],w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=new a.W20,this.interval=null,this.container.sortableChildren=!0}var e=t.prototype;return e.render=function(){var t=144,e=a.aNw.shared.resources,n=0,i=Object.keys(e.cards.textures).filter((function(t){return!v.includes(t)})),r=i.splice(0,16);for(i=m(i).concat(m(r));t>0;){var o=new a.jyi(e.cards.textures[i[n]]),s=o.width/o.height;o.width=.2*c,o.height=o.width/s,o.x=50,o.y=h-o.height-50-20*t,this.container.addChild(o),t-=1,n===i.length?n=0:n+=1}},e.clear=function(){this.container.removeChildren(),this.interval&&clearInterval(this.interval)},e.play=function(){var t=this,e=144,n=0;this.interval=setInterval((function(){var i=t.container.children[e-1];i.zIndex=n,new f.kX(i).to({x:c-50-i.width,y:h-i.height-50-20*(n+1)},2e3).start(),e-=1,n+=1}),1e3)},e.update=function(){f.ZA.shared.update()},t}(),y=function(t,e){return Math.floor(Math.random()*(e-t)+t)},g="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".split(" "),k=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=new a.W20,this.elemsContainer=new a.W20}var e=t.prototype;return e.render=function(){for(var t=a.aNw.shared.resources,e=Object.keys(t.cards.textures),n=y(20,41),i=0;i<3;i++){var r=i>0&&i<3?this.elemsContainer.width+20:this.elemsContainer.width;if(y(0,2)){var o=y(0,g.length+1),s=g[o],l=new a.xvT(s,{fontSize:c/n,fill:"white"});l.position.set(c/2+r,h/2-l.height/2),this.elemsContainer.addChild(l)}else{var u=e[y(0,e.length)],d=new a.jyi(t.cards.textures[u]),f=d.width/d.height;d.width=.2*c,d.height=d.width/f,d.position.set(c/2+r,h/2-d.height/2),this.elemsContainer.addChild(d)}}this.elemsContainer.x=-this.elemsContainer.width/2,this.container.addChild(this.elemsContainer)},e.play=function(){var t=this;this.interval=setInterval((function(){t.elemsContainer.removeChildren(),t.render()}),2e3)},e.clear=function(){clearInterval(this.interval),this.elemsContainer.removeChildren()},t}(),b=JSON.parse('{"lifetime":{"min":0.1,"max":0.75},"frequency":0.001,"emitterLifetime":0,"maxParticles":1000,"addAtBack":false,"pos":{"x":0,"y":0},"behaviors":[{"type":"alpha","config":{"alpha":{"list":[{"time":0,"value":0.62},{"time":1,"value":0}]}}},{"type":"moveSpeedStatic","config":{"min":500,"max":500}},{"type":"scale","config":{"scale":{"list":[{"time":0,"value":0.25},{"time":1,"value":0.75}]},"minMult":1}},{"type":"color","config":{"color":{"list":[{"time":0,"value":"fff191"},{"time":1,"value":"ff622c"}]}}},{"type":"rotation","config":{"accel":0,"minSpeed":50,"maxSpeed":50,"minStart":265,"maxStart":275}},{"type":"textureRandom","config":{"textures":["assets/particle.png","assets/Fire.png"]}},{"type":"spawnShape","config":{"type":"torus","data":{"x":0,"y":0,"radius":10,"innerRadius":0,"affectRotation":false}}}]}'),C=n(845),x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=new a.W20}var e=t.prototype;return e.play=function(){this.emitter=new C.Q5(this.container,b),this.container.scale.set(2),this.emitter.updateOwnerPos(c/2/2,h/2/2)},e.clear=function(){var t;null===(t=this.emitter)||void 0===t||t.destroy(),this.container.removeChildren()},e.update=function(t){var e;null===(e=this.emitter)||void 0===e||e.update(.008*t)},t}(),T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.loader=a.aNw.shared,this.menu=new u,this.backToMenu=new d,this.cardStack=new w,this.randomContent=new k,this.activeTask=null,this.flame=new x,this.stats=new s,this.app=new a.MxU({backgroundColor:a.P6Y.string2hex("#9a95da"),width:c,height:h}),document.body.appendChild(this.app.view),this.app.renderer.view.style.width="100%",this.app.renderer.view.style.height="auto"}var e=t.prototype;return e.loadResources=function(){a.aNw.shared.add([{name:"cards",url:"assets/cards/cards/cards.json"}]),a.aNw.shared.onComplete.once(this.startGame,this),a.aNw.shared.load()},e.startGame=function(){this.menu.render(),this.manageChooseTask(),this.manageBackToMenu(),this.app.stage.addChild(this.randomContent.container),this.app.stage.addChild(this.cardStack.container),this.app.stage.addChild(this.flame.container),this.app.stage.addChild(this.menu.container),this.app.stage.addChild(this.backToMenu.container),this.app.ticker.add(this.animate.bind(this))},e.manageBackToMenu=function(){var t=this;this.backToMenu.emiter.on("backToMenu",(function(){switch(t.activeTask){case i.task1:t.cardStack.clear();break;case i.task2:t.randomContent.clear();break;case i.task3:t.flame.clear()}t.backToMenu.clear(),t.menu.render()}))},e.manageChooseTask=function(){var t=this;this.menu.emiter.on("chooseTask",(function(e){switch(t.menu.clear(),t.backToMenu.render(),t.activeTask=e,e){case i.task1:t.cardStack.render(),t.cardStack.play();break;case i.task2:t.randomContent.render(),t.randomContent.play();break;case i.task3:t.flame.play()}}))},e.animate=function(t){this.stats.update(),this.cardStack.update(),this.flame.update(t)},t}();document.addEventListener("DOMContentLoaded",(function(){(new T).loadResources()}),!1)}},n={};function i(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=e,t=[],i.O=function(e,n,a,r){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],r=t[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(s=!1,r<o&&(o=r));if(s){t.splice(l--,1);var h=a();void 0!==h&&(e=h)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,a,r]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,o=n[0],s=n[1],c=n[2],h=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(c)var l=c(i)}for(e&&e(n);h<o.length;h++)r=o[h],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(l)},n=self.webpackChunkpixi_typescript_boilerplate=self.webpackChunkpixi_typescript_boilerplate||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var a=i.O(void 0,[574],(function(){return i(468)}));a=i.O(a)}();