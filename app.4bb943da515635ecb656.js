(()=>{var e={584:function(e,t,o){var i,n;void 0===(n="function"==typeof(i=function(){var e=!1;function t(e){this.opts=function(){for(var e=1;e<arguments.length;e++)for(var t in arguments[e])arguments[e].hasOwnProperty(t)&&(arguments[0][t]=arguments[e][t]);return arguments[0]}({},{onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]},e),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}return t.prototype.init=function(){if(!this.modal)return function(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach((function(e){"string"==typeof e&&this.modal.classList.add(e)}),this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>',this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}.call(this),function(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:function(e){var t=this.modal.offsetWidth-this.modal.clientWidth,o=e.clientX>=this.modal.offsetWidth-15,i=this.modal.scrollHeight!==this.modal.offsetHeight;"MacIntel"===navigator.platform&&0==t&&o&&i||-1!==this.opts.closeMethods.indexOf("overlay")&&!function(e,t){for(;(e=e.parentElement)&&!e.classList.contains("tingle-modal"););return e}(e.target)&&e.clientX<this.modal.clientWidth&&this.close()}.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:function(e){-1!==this.opts.closeMethods.indexOf("escape")&&27===e.which&&this.isOpen()&&this.close()}.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}.call(this),document.body.appendChild(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){e=t},t.prototype._isBusy=function(){return e},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),function(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var e=this;return"function"==typeof e.opts.beforeOpen&&e.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),document.getSelection().removeAllRanges(),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof e.opts.onOpen&&e.opts.onOpen.call(e),e._busy(!1),this.checkOverflow(),this}},t.prototype.close=function(e){if(!this._isBusy()){if(this._busy(!0),"function"==typeof this.opts.beforeClose&&!this.opts.beforeClose.call(this))return void this._busy(!1);document.body.classList.remove("tingle-enabled"),document.body.style.top=null,window.scrollTo({top:this._scrollPosition,behavior:"instant"}),this.modal.classList.remove("tingle-modal--visible");var t=this;t.modal.style.display="none","function"==typeof t.opts.onClose&&t.opts.onClose.call(this),t._busy(!1)}},t.prototype.setContent=function(e){return"string"==typeof e?this.modalBoxContent.innerHTML=e:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(e)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return function(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}.call(this),this},t.prototype.setFooterContent=function(e){return this.modalBoxFooter.innerHTML=e,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(e){return this.isOverflow()||(e=!1),e?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),o.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(e,t,o){var i=document.createElement("button");return i.innerHTML=e,i.addEventListener("click",o),"string"==typeof t&&t.length&&t.split(" ").forEach((function(e){i.classList.add(e)})),this.modalBoxFooter.appendChild(i),i},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){return window.innerHeight<=this.modalBox.clientHeight},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}})?i.call(t,o,t,e):i)||(e.exports=n)}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,o),s.exports}(()=>{"use strict";const e=["Zaid Chapman","Leo Phelps","Tia Morgan","Tyson Hobbs","Belen Elliott","Cooper Moon","Amir Barnett","Mercedes Pierce","Meredith James","Laci Gonzales","Marlie Blanchard","Roberto Tran","Izabella Harrington","Justice Smith","Alyson Tapia","Helen Contreras","Adison Crosby","Keely Petersen","Jaylan Landry","Urijah Fischer","Jaiden Garner","Taylor Meyers","Trevon Wu","Kaiya Coleman","Kelly Chaney","Alonso Maxwell","Zion Trevino","Brynlee House","Ivy Reynolds","Sloane Andrews","Georgia Contreras","Mckenzie Butler","Alexander Manning","Efrain Villanueva","Yareli Nolan","Jordon Walton","Sonny Galloway","Saul Bradshaw","Amaris Howard","Aimee Martin","Quentin Mcclain","Dakota Hurley","Erik Bush","Lee Barker","Imani Mata","Nia Cisneros","Yazmin Logan","Emmalee Hensley","Alia Proctor","Gemma Shepherd","Antonio Cisneros","Ireland Nichols","Andres Reyes","Brynlee Mathis","Anderson Oneill","Logan Yoder","Alexis Hill","Sierra Nelson","Ivan Hughes","Jazmine Wiley","Andres Kaufman","Desirae Montgomery","Justus Macias","Cora Fowler","Charles Fitzgerald","Rory Craig","Lucille Mercado","Jaylyn Thomas","Mark Houston","Briley Hayden","Samuel Vasquez","Carlee Benjamin","Devyn Black","Jaylen Logan","Heidi Lee","Ingrid Harris","Christina Le","Hayden Pennington","Tatiana Hayden","Kasen Greene","Camryn Byrd","Desiree Jackson","Kaylynn Cortez","Seamus Singleton","Gaven Frost","Ayanna Savage","Emery Chan","Bronson Rojas","Amiah Randall","Janae Potter","Nola Stevenson","Kayden Stevens","Damarion Reilly","Nathen Delacruz","Jamison Carrillo","Landen Carpenter","Darnell Dominguez","Louis Barry","Kinley Hale","Tommy Allison"].map((e=>({sort:Math.random(),value:e}))).sort(((e,t)=>e.sort-t.sort)).map((e=>e.value)),t={buildingKey:"TestBuilding",buildingName:"TestBuilding"},i={floorUuid:"TestFloor",floorName:"TestFloor"},n={tableUuid:"TestTable",tableName:"TestTable",numberOfSeats:999},s={roomUuid:"TestRoom",roomName:"TestRoom"};var l,a=o(584);!function(o){!function(l){var r;l.App=class{constructor(){this.clients=[]}start(e){this.state=e,window.addEventListener("message",(e=>{this.receiveIncomingMessage(e.data,e.source)})),document.getElementById("add-client").onclick=e=>{this.state["integration-url"]?this.addNewClient(this.state["integration-url"]):alert("No integration url found. Run setup first.")},document.getElementById("setup").onclick=e=>{return t=this,o=void 0,n=function*(){let e=yield(t=this.state,new Promise(((e,o)=>{let i=document.querySelector("#setupRoot").content.firstElementChild.cloneNode(!0),n=i.querySelector("#integration-url");n.value=t["integration-url"]||"";let s=new a.modal({footer:!0,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"Close",cssClass:["rounded-buttons"],onClose:()=>{let t=n.value;t?e({"integration-url":t}):o()}});s.setContent(i),s.addFooterBtn("Save","tingle-btn tingle-btn--primary tingle-btn--pull-right",(function(){s.close()})),s.addFooterBtn("Close","tingle-btn tingle-btn--danger tingle-btn--pull-right",(function(){n.value="",s.close()})),s.open()})));var t;this.state=e,localStorage.setItem("state",JSON.stringify(e));let o=new URLSearchParams(window.location.search);o.set("state",JSON.stringify(e));let i=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+o.toString();window.history.pushState?window.history.pushState({path:i},"",i):window.location.href=i},new((i=void 0)||(i=Promise))((function(e,s){function l(e){try{r(n.next(e))}catch(e){s(e)}}function a(e){try{r(n.throw(e))}catch(e){s(e)}}function r(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(l,a)}r((n=n.apply(t,o||[])).next())}));var t,o,i,n}}receiveIncomingMessage(e,t){switch(e.type){case"ready-and-listening":this.log("Ready and listening.");let o=this.clients.filter((e=>e.iframe.contentWindow===t));if(1!==o.length)throw"Could not find the message's source, this should not occur?";{let e={type:"client-has-joined",payload:o[0].info};this.clients.forEach((t=>{this.sendKosyMessageToIntegrationClient(e,t)})),this.sendKosyMessageToIntegrationClient({type:"request-integration-state",payload:{}},this.clients[0])}break;case"receive-integration-state":this.log("Kosy received the integration's current state"),this.clients.filter((e=>!e.initialized)).forEach((t=>{this.sendInitialInfoMessage(t,e.payload),t.initialized=!0}));break;case"relay-message":this.log("Relay message: ",e.payload);let i={type:"receive-message",payload:e.payload};this.clients.forEach((e=>this.sendKosyMessageToIntegrationClient(i,e)));break;case"end-integration":this.log("End integration"),[...this.clients].forEach((e=>this.removeClient(e.info.clientUuid)))}}addNewClient(o){let l=function(o){let l=Date.now().toString(),a=((e,t)=>{let o=t.reduce(((e,t)=>{switch(t.clientLocation.type){case"seated-at-table":e[t.clientLocation.seatNumber]=!0}return e}),new Array(++e.numberOfSeats));for(let t=1;t<=e.numberOfSeats;t++)if(!o[t])return t;throw"No more available unclaimed seats..."})(n,o);return{clientUuid:l,clientName:e[a-1],clientLocation:{type:"seated-at-table",building:t,floor:i,room:s,table:n,seatNumber:a}}}(this.clients.map((e=>e.info))),a={info:l,iframe:function(e,t,o){let i=document.getElementById("clientRoot").content.firstElementChild.cloneNode(!0),n=i.querySelector("iframe");return n.src=t,n.id=e.clientUuid,i.querySelector("button").onclick=t=>{o(e.clientUuid)},document.getElementById("clients").appendChild(i),n}(l,o,(e=>this.removeClient(e))),initialized:!1};this.clients.push(a)}removeClient(e){let t=this.clients.find((t=>t.info.clientUuid==e));this.clients=this.clients.filter((e=>e!=t));let o={type:"client-has-left",payload:t.info};this.clients.forEach((e=>this.sendKosyMessageToIntegrationClient(o,e))),t.iframe.parentElement.remove()}sendInitialInfoMessage(e,t){let o={type:"receive-initial-info",payload:{clients:this.clients.reduce(((e,t)=>(e[t.info.clientUuid]=t.info,e)),{}),currentClientUuid:e.info.clientUuid,initializerClientUuid:this.clients[0].info.clientUuid,currentIntegrationState:t}};this.sendKosyMessageToIntegrationClient(o,e)}sendKosyMessageToIntegrationClient(e,t){t.iframe.contentWindow.postMessage(e,t.iframe.src)}log(...e){console.log("Kosy received: ",...e)}};let d=null!==(r=new URLSearchParams(window.location.search).get("state"))&&void 0!==r?r:localStorage.getItem("state"),c=d?JSON.parse(d):{};(new o.Debugger.App).start(c)}(o.Debugger||(o.Debugger={}))}(l||(l={}))})()})();