!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(n)}function r(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=p.p+""+w+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}function o(e){var t=P[e];if(!t)return p;var n=function(n){return t.hot.active?(P[n]?P[n].parents.indexOf(e)<0&&P[n].parents.push(e):(E=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),E=[]),p(n)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r));return n.e=function(e){function t(){k--,"prepare"===L&&(D[e]||l(e),0===k&&0===M&&u())}return"ready"===L&&s("prepare"),k++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:f,status:function(e){if(!e)return L;H.push(e)},addStatusHandler:function(e){H.push(e)},removeStatusHandler:function(e){var t=H.indexOf(e);t>=0&&H.splice(t,1)},data:x[e]};return v=void 0,t}function s(e){L=e;for(var t=0;t<H.length;t++)H[t].call(null,e)}function a(e){return+e+""===e?+e:e}function c(e){if("idle"!==L)throw new Error("check() is only allowed in idle status");return _=e,s("check"),r(b).then(function(e){if(!e)return s("idle"),null;j={},D={},R=e.c,g=e.h,s("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});m={};return l(0),"prepare"===L&&0===k&&0===M&&u(),t})}function d(e,t){if(R[e]&&j[e]){j[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--M&&0===k&&u()}}function l(e){R[e]?(j[e]=!0,M++,n(e)):D[e]=!0}function u(){s("ready");var e=y;if(y=null,e)if(_)Promise.resolve().then(function(){return f(_)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(a(n));e.resolve(t)}}function f(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==L)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,c,d,l,u={},f=[],h={},v=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){l=a(y);var _;_=m[y]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),s=i.id,a=i.chain;if((d=P[s])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:s};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:s};for(var c=0;c<d.parents.length;c++){var l=d.parents[c],u=P[l];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:a.concat([l]),moduleId:s,parentId:l};t.indexOf(l)>=0||(u.hot._acceptedDependencies[s]?(n[l]||(n[l]=[]),r(n[l],[s])):(delete n[l],t.push(l),o.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:y};var b=!1,O=!1,H=!1,M="";switch(_.chain&&(M="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(b=new Error("Aborted because of self decline: "+_.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(b=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(b=new Error("Aborted because "+l+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(_),O=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),H=!0;break;default:throw new Error("Unexception type "+_.type)}if(b)return s("abort"),Promise.reject(b);if(O){h[l]=m[l],r(f,_.outdatedModules);for(l in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(u[l]||(u[l]=[]),r(u[l],_.outdatedDependencies[l]))}H&&(r(f,[_.moduleId]),h[l]=v)}var k=[];for(i=0;i<f.length;i++)l=f[i],P[l]&&P[l].hot._selfAccepted&&k.push({module:l,errorHandler:P[l].hot._selfAccepted});s("dispose"),Object.keys(R).forEach(function(e){!1===R[e]&&t(e)});for(var D,j=f.slice();j.length>0;)if(l=j.pop(),d=P[l]){var A={},I=d.hot._disposeHandlers;for(c=0;c<I.length;c++)(o=I[c])(A);for(x[l]=A,d.hot.active=!1,delete P[l],delete u[l],c=0;c<d.children.length;c++){var C=P[d.children[c]];C&&((D=C.parents.indexOf(l))>=0&&C.parents.splice(D,1))}}var U,N;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(d=P[l]))for(N=u[l],c=0;c<N.length;c++)U=N[c],(D=d.children.indexOf(U))>=0&&d.children.splice(D,1);s("apply"),w=g;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var T=null;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(d=P[l])){N=u[l];var q=[];for(i=0;i<N.length;i++)if(U=N[i],o=d.hot._acceptedDependencies[U]){if(q.indexOf(o)>=0)continue;q.push(o)}for(i=0;i<q.length;i++){o=q[i];try{o(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:N[i],error:e}),n.ignoreErrored||T||(T=e)}}}for(i=0;i<k.length;i++){var S=k[i];l=S.module,E=[l];try{p(l)}catch(e){if("function"==typeof S.errorHandler)try{S.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e,originalError:e}),n.ignoreErrored||T||(T=t),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||T||(T=e)}}return T?(s("fail"),Promise.reject(T)):(s("idle"),new Promise(function(e){e(f)}))}function p(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:i(t),parents:(O=E,E=[],O),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){d(e,t),h&&h(e,t)};var v,y,m,g,_=!0,w="9d0a74308bf1667c78df",b=1e4,x={},E=[],O=[],H=[],L="idle",M=0,k=0,D={},j={},R={},P={};p.m=e,p.c=P,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="http://localhost:8080/built/",p.h=function(){return w},o(1)(p.s=1)}([function(e,t){function n(){}function r(e){return"info"===i&&"info"===e||["info","warning"].indexOf(i)>=0&&"warning"===e||["info","warning","error"].indexOf(i)>=0&&"error"===e}function o(e){return function(t,n){r(t)&&e(n)}}var i="info";e.exports=function(e,t){r(e)&&("info"===e?console.log(t):"warning"===e?console.warn(t):"error"===e&&console.error(t))};var s=console.group||n,a=console.groupCollapsed||n,c=console.groupEnd||n;e.exports.group=o(s),e.exports.groupCollapsed=o(a),e.exports.groupEnd=o(c),e.exports.setLogLevel=function(e){i=e}},function(e,t,n){n(2),e.exports=n(6)},function(e,t,n){var r,o=function(){return r.indexOf(n.h())>=0},i=n(0),s=function t(){e.hot.check(!0).then(function(e){if(!e)return i("warning","[HMR] Cannot find update. Need to do a full reload!"),i("warning","[HMR] (Probably because of restarting the webpack-dev-server)"),void window.location.reload();o()||t(),n(3)(e,e),o()&&i("info","[HMR] App is up to date.")}).catch(function(t){["abort","fail"].indexOf(e.hot.status())>=0?(i("warning","[HMR] Cannot apply update. Need to do a full reload!"),i("warning","[HMR] "+t.stack||t.message),window.location.reload()):i("warning","[HMR] Update failed: "+t.stack||t.message)})};n(4).on("webpackHotUpdate",function(t){r=t,o()||"idle"!==e.hot.status()||(i("info","[HMR] Checking for updates on the server..."),s())}),i("info","[HMR] Waiting for update signal from WDS...")},function(e,t,n){e.exports=function(e,t){var r=e.filter(function(e){return t&&t.indexOf(e)<0}),o=n(0);if(r.length>0&&(o("warning","[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),r.forEach(function(e){o("warning","[HMR]  - "+e)})),t&&0!==t.length){o("info","[HMR] Updated modules:"),t.forEach(function(e){if("string"==typeof e&&-1!==e.indexOf("!")){var t=e.split("!");o.groupCollapsed("info","[HMR]  - "+t.pop()),o("info","[HMR]  - "+e),o.groupEnd("info")}else o("info","[HMR]  - "+e)});t.every(function(e){return"number"==typeof e})&&o("info","[HMR] Consider using the NamedModulesPlugin for module names.")}else o("info","[HMR] Nothing hot updated.")}},function(e,t,n){var r=n(5);e.exports=new r},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,a,c,d;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(n=this._events[e],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),d=n.slice(),o=d.length,c=0;c<o;c++)d[c].apply(this,a);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),o||(o=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var o=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){throw new Error("Module parse failed: Unexpected token (31:6)\nYou may need an appropriate loader to handle this file type.\n|   renderBackground (ele) {\n|     return (\n|       <div className='BackgroundColor-bg'>\n|         <div className='BackgroundColor-fg'>\n|           {ele}")}]);