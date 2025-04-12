(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{14777:(e,t,n)=>{e.exports=n(26514)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},26514:e=>{"use strict";e.exports=function(e){if(e.length>=255)throw TypeError("Alphabet too long");for(var t=new Uint8Array(256),n=0;n<t.length;n++)t[n]=255;for(var r=0;r<e.length;r++){var i=e.charAt(r),s=i.charCodeAt(0);if(255!==t[s])throw TypeError(i+" is ambiguous");t[s]=r}var o=e.length,a=e.charAt(0),c=Math.log(o)/Math.log(256),l=Math.log(256)/Math.log(o);function h(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;for(var n=0,r=0,i=0;e[n]===a;)r++,n++;for(var s=(e.length-n)*c+1>>>0,l=new Uint8Array(s);e[n];){var h=e.charCodeAt(n);if(h>255)return;var d=t[h];if(255===d)return;for(var u=0,f=s-1;(0!==d||u<i)&&-1!==f;f--,u++)d+=o*l[f]>>>0,l[f]=d%256>>>0,d=d/256>>>0;if(0!==d)throw Error("Non-zero carry");i=u,n++}for(var p=s-i;p!==s&&0===l[p];)p++;for(var m=new Uint8Array(r+(s-p)),v=r;p!==s;)m[v++]=l[p++];return m}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var n=0,r=0,i=0,s=t.length;i!==s&&0===t[i];)i++,n++;for(var c=(s-i)*l+1>>>0,h=new Uint8Array(c);i!==s;){for(var d=t[i],u=0,f=c-1;(0!==d||u<r)&&-1!==f;f--,u++)d+=256*h[f]>>>0,h[f]=d%o>>>0,d=d/o>>>0;if(0!==d)throw Error("Non-zero carry");r=u,i++}for(var p=c-r;p!==c&&0===h[p];)p++;for(var m=a.repeat(n);p<c;++p)m+=e.charAt(h[p]);return m},decodeUnsafe:h,decode:function(e){var t=h(e);if(t)return t;throw Error("Non-base"+o+" character")}}}},45216:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(e,t,r,s,o){if("function"!=typeof r)throw TypeError("The listener must be a function");var a=new i(r,s||e,o),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),a.prototype.eventNames=function(){var e,r,i=[];if(0===this._eventsCount)return i;for(r in e=this._events)t.call(e,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},a.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,s=r.length,o=Array(s);i<s;i++)o[i]=r[i].fn;return o},a.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},a.prototype.emit=function(e,t,r,i,s,o){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,h=this._events[a],d=arguments.length;if(h.fn){switch(h.once&&this.removeListener(e,h.fn,void 0,!0),d){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,t),!0;case 3:return h.fn.call(h.context,t,r),!0;case 4:return h.fn.call(h.context,t,r,i),!0;case 5:return h.fn.call(h.context,t,r,i,s),!0;case 6:return h.fn.call(h.context,t,r,i,s,o),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];h.fn.apply(h.context,c)}else{var u,f=h.length;for(l=0;l<f;l++)switch(h[l].once&&this.removeListener(e,h[l].fn,void 0,!0),d){case 1:h[l].fn.call(h[l].context);break;case 2:h[l].fn.call(h[l].context,t);break;case 3:h[l].fn.call(h[l].context,t,r);break;case 4:h[l].fn.call(h[l].context,t,r,i);break;default:if(!c)for(u=1,c=Array(d-1);u<d;u++)c[u-1]=arguments[u];h[l].fn.apply(h[l].context,c)}}return!0},a.prototype.on=function(e,t,n){return s(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return s(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,r,i){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return o(this,s),this;var a=this._events[s];if(a.fn)a.fn!==t||i&&!a.once||r&&a.context!==r||o(this,s);else{for(var c=0,l=[],h=a.length;c<h;c++)(a[c].fn!==t||i&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[s]=1===l.length?l[0]:l:o(this,s)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&o(this,t)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},53762:(e,t,n)=>{"use strict";let r;n.r(t),n.d(t,{StandardSolflareMetaMaskWalletAccount:()=>k,default:()=>I});var i,s,o,a,c,l,h=n(23570);let d=n(45216);var u=n(14777),f=n.n(u);let p={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},m=new Uint8Array(16),v=[];for(let e=0;e<256;++e)v.push((e+256).toString(16).slice(1));let _=function(e,t,n){if(p.randomUUID&&!t&&!e)return p.randomUUID();let i=(e=e||{}).random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(m)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return function(e,t=0){return v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]}(i)};function y(e){return void 0===e.version}function g(e){return y(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize()}n(44134).Buffer;var w=function(e,t,n,r){return new(n||(n=Promise))(function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,a)}c((r=r.apply(e,t||[])).next())})};function b(e){return w(this,void 0,void 0,function*(){try{return yield e.request({method:"wallet_getSnaps"}),!0}catch(e){return!1}})}var E=n(67308),A=n(6803),x=n(85936);let M=["solana:mainnet","solana:devnet","solana:testnet","solana:localnet"];function T(e){return M.includes(e)}var S=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},C=function(e,t,n,r,i){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n};let U=[E.R,A.q,x.F];class k{get address(){return S(this,i,"f")}get publicKey(){return S(this,s,"f").slice()}get chains(){return S(this,o,"f").slice()}get features(){return S(this,a,"f").slice()}get label(){return S(this,c,"f")}get icon(){return S(this,l,"f")}constructor({address:e,publicKey:t,label:n,icon:r}){i.set(this,void 0),s.set(this,void 0),o.set(this,void 0),a.set(this,void 0),c.set(this,void 0),l.set(this,void 0),new.target===k&&Object.freeze(this),C(this,i,e,"f"),C(this,s,t,"f"),C(this,o,M,"f"),C(this,a,U,"f"),C(this,c,n,"f"),C(this,l,r,"f")}}i=new WeakMap,s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap;var K=function(e,t,n,r){return new(n||(n=Promise))(function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,a)}c((r=r.apply(e,t||[])).next())})};class j extends d{constructor(e){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var t,n;switch(e.type){case"connect":this._collapseIframe(),(null===(t=e.data)||void 0===t?void 0:t.publicKey)?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return;case"disconnect":this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return;case"accountChanged":(null===(n=e.data)||void 0===n?void 0:n.publicKey)?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return;default:return}},this._handleResize=e=>{"full"===e.resizeMode?"fullscreen"===e.params.mode?this._expandIframe():"hide"===e.params.mode&&this._collapseIframe():"coordinates"===e.resizeMode&&this._resizeIframe(e.params)},this._handleMessage=e=>{var t;if((null===(t=e.data)||void 0===t?void 0:t.channel)!=="solflareIframeToWalletAdapter")return;let n=e.data.data||{};if("event"===n.type)this._handleEvent(n.event);else if("resize"===n.type)this._handleResize(n);else if("response"===n.type&&this._messageHandlers[n.id]){let{resolve:e,reject:t}=this._messageHandlers[n.id];delete this._messageHandlers[n.id],n.error?t(n.error):e(n.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{for(let e of document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe"))e.parentElement&&e.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();let e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),t=Object.keys(e).map(t=>`${t}=${encodeURIComponent(e[t])}`).join("&"),n=`${j.IFRAME_URL}?${t}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${n}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw Error("Wallet not connected");return new Promise((t,n)=>{var r,i;let s=_();this._messageHandlers[s]={resolve:t,reject:n},null===(i=null===(r=this._iframe)||void 0===r?void 0:r.contentWindow)||void 0===i||i.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:s},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;let e=this.publicKey.toString();this._account&&this._account.address===e||(this._account=new k({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},(null==e?void 0:e.network)&&(this._network=null==e?void 0:e.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),(null==e?void 0:e.params)&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),null==e?void 0:e.params))}get publicKey(){return this._publicKey?new h.PublicKey(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return K(this,void 0,void 0,function*(){!this.connected&&(this._injectElement(),yield new Promise((e,t)=>{this._connectHandler={resolve:e,reject:t}}))})}disconnect(){return K(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(e){var t;return K(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let t=g(e),{transaction:n}=yield this._sendIframeMessage({method:"signTransactionV2",params:{transaction:f().encode(t)}});return y(e)?h.Transaction.from(f().decode(n)):h.VersionedTransaction.deserialize(f().decode(n))}catch(e){throw Error((null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))||"Failed to sign transaction")}})}signAllTransactions(e){var t;return K(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let t=e.map(e=>g(e)),{transactions:n}=yield this._sendIframeMessage({method:"signAllTransactionsV2",params:{transactions:t.map(e=>f().encode(e))}});return n.map((t,n)=>y(e[n])?h.Transaction.from(f().decode(t)):h.VersionedTransaction.deserialize(f().decode(t)))}catch(e){throw Error((null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))||"Failed to sign transactions")}})}signAndSendTransaction(e,t){var n;return K(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let n=g(e),{signature:r}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:f().encode(n),options:t}});return r}catch(e){throw Error((null===(n=null==e?void 0:e.toString)||void 0===n?void 0:n.call(e))||"Failed to sign and send transaction")}})}signMessage(e,t="utf8"){var n;return K(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let{signature:n}=yield this._sendIframeMessage({method:"signMessage",params:{data:f().encode(e),display:t}});return Uint8Array.from(f().decode(n))}catch(e){throw Error((null===(n=null==e?void 0:e.toString)||void 0===n?void 0:n.call(e))||"Failed to sign message")}})}sign(e,t="utf8"){return K(this,void 0,void 0,function*(){return yield this.signMessage(e,t)})}static isSupported(){return K(this,void 0,void 0,function*(){return!!(yield function(){return w(this,void 0,void 0,function*(){try{let e=window.ethereum;if(!e)return null;if(e.providers&&Array.isArray(e.providers)){for(let t of e.providers)if(yield b(t))return t}if(e.detected&&Array.isArray(e.detected)){for(let t of e.detected)if(yield b(t))return t}if(yield b(e))return e;return null}catch(e){return console.error(e),null}})}())})}standardSignAndSendTransaction(...e){return K(this,void 0,void 0,function*(){if(!this.connected)throw Error("not connected");let t=[];if(1===e.length){let{transaction:n,account:r,chain:i,options:s}=e[0],{minContextSlot:o,preflightCommitment:a,skipPreflight:c,maxRetries:l}=s||{};if(r!==this._account)throw Error("invalid account");if(!T(i))throw Error("invalid chain");let d=yield this.signAndSendTransaction(h.VersionedTransaction.deserialize(n),{preflightCommitment:a,minContextSlot:o,maxRetries:l,skipPreflight:c});t.push({signature:f().decode(d)})}else if(e.length>1)for(let n of e)t.push(...yield this.standardSignAndSendTransaction(n));return t})}standardSignTransaction(...e){return K(this,void 0,void 0,function*(){if(!this.connected)throw Error("not connected");let t=[];if(1===e.length){let{transaction:n,account:r,chain:i}=e[0];if(r!==this._account)throw Error("invalid account");if(i&&!T(i))throw Error("invalid chain");let s=yield this.signTransaction(h.VersionedTransaction.deserialize(n));t.push({signedTransaction:s.serialize()})}else if(e.length>1){let n;for(let t of e){if(t.account!==this._account)throw Error("invalid account");if(t.chain){if(!T(t.chain))throw Error("invalid chain");if(n){if(t.chain!==n)throw Error("conflicting chain")}else n=t.chain}}let r=e.map(({transaction:e})=>h.VersionedTransaction.deserialize(e)),i=yield this.signAllTransactions(r);t.push(...i.map(e=>({signedTransaction:e.serialize()})))}return t})}standardSignMessage(...e){return K(this,void 0,void 0,function*(){if(!this.connected)throw Error("not connected");let t=[];if(1===e.length){let{message:n,account:r}=e[0];if(r!==this._account)throw Error("invalid account");let i=yield this.signMessage(n);t.push({signedMessage:n,signature:i})}else if(e.length>1)for(let n of e)t.push(...yield this.standardSignMessage(n));return t})}}j.IFRAME_URL="https://widget.solflare.com/";let I=j}}]);