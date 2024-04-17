import e from"@babel/runtime/helpers/asyncToGenerator";import"core-js/modules/es.promise.js";function r(e){window.AlipayJSBridge?e&&e():document.addEventListener("AlipayJSBridgeReady",e,!1)}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return console.log("finishWebTask",e),new Promise((n=>{r((()=>{AlipayJSBridge.call("zimIdentity",{action:"finishWebTask",status:e,nextIndex:t},(()=>n()))}))}))}function n(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return new Promise((i=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"showAlert",title:e,message:t,positive:n,negative:o},(e=>i(e)))}))}))}function o(e){return new Promise((t=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"query",key:e},(e=>t(e)))}))}))}function i(e,t,n){return new Promise((o=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"add",key:e,value:t,pipeType:n},(e=>o(e)))}))}))}function a(e,t){r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"logging",logSeedID:e,logMessage:t})}))}class l{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._langPack=e}getInputParams(){return e((function*(){var t=function(){var r=e((function*(e){var r={};for(var t in e)if("url"!=t){var o=yield n(e[t]);r[t]=o}return r}));return function(e){return r.apply(this,arguments)}}(),n=function(){var r=e((function*(e){var r="";switch(e.pipeType){case"constant":r=e.value;break;case"argument":case"context":case"both":var{value:t}=yield o(e.value);r=t}return r}));return function(e){return r.apply(this,arguments)}}();console.log("-getInputParams called-");var i=(yield new Promise((e=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"getInputParams"},(r=>e(r)))}))})))||{},a=yield t(i);return console.log("-inputParamsResult-",a),a}))()}end(l){var u=arguments,s=this;return e((function*(){var c=u.length>1&&void 0!==u[1]?u[1]:{},d={system_error_title:"System Error",system_error_msg:"Please try again later",system_error_got_it:"Got it",network_error_title:"No Internet Connection",network_error_msg:"Please check your internet connection and try again",network_error_got_it:"Got it",fe_retry_max_title:"",fe_retry_max_msg:"Sorry, you have too many failed identification attempts. Please try again later.",fe_retry_max_got_it:"Got it"},y=e=>void 0!==s._langPack[e]?s._langPack[e]:d[e],p=function(){var r=e((function*(){a("alertAppear",{reason:"systemError"});var e=yield n(y("system_error_title"),y("system_error_msg"),y("system_error_got_it"));return a("alertChoose",{choose:e.positive}),e}));return function(){return r.apply(this,arguments)}}(),m=function(){var r=e((function*(){a("alertAppear",{reason:"networkError"});var e=yield n(y("network_error_title"),y("network_error_msg"),y("network_error_got_it"));return a("alertChoose",{choose:e.positive}),e}));return function(){return r.apply(this,arguments)}}(),_=function(){var r=e((function*(){a("alertAppear",{reason:"retryLimit"});var e=yield n(y("fe_retry_max_title"),y("fe_retry_max_msg"),y("fe_retry_max_got_it"));return a("alertChoose",{choose:e.positive}),e}));return function(){return r.apply(this,arguments)}}(),f=function(){var r=e((function*(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var t in e){var n=void 0;if("metaInfo"===t)n=(yield o("metaInfo")).value;else n=r[t];if(!(yield g(e[t],n)))return yield p(),!1}return!0}));return function(e){return r.apply(this,arguments)}}(),g=function(){var r=e((function*(e,r){if(void 0===r){if(e.mandatory)return!1}else switch(e.pipeType){case"argument":case"context":case"both":yield i(e.value,r,e.pipeType)}return!0}));return function(e,t){return r.apply(this,arguments)}}(),v=function(){var n=e((function*(e){r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"showLoadingDialog"})}));var n=yield function(e){return new Promise((t=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"sendRpc",type:e},(e=>t(e)))}))}))}(e);if(r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"hideLoadingDialog"})})),!n.success)return yield m(),{retCode:0};var{nextIndex:o,response:i}=n.nextResponse;switch(i[0].retCode){case"SYSTEM_SUCCESS":yield t(e,o);break;case"SYSTEM_ERROR":case"ILLEGAL_ARGUMENT":a("ztech_system_error",{subCode:i[0].retCodeSub}),yield p(),yield t("error",o);break;case"DOC_MAX_RETRY_EXCEEDED":case"FACE_MAX_RETRY_EXCEEDED":yield _(),yield t("error",o);break;default:return{retCode:1,response:i[0]}}return{retCode:0}}));return function(e){return n.apply(this,arguments)}}();console.log("-end called-",l,c);var h=(yield function(e){return new Promise((t=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"getOutputParams",type:e},(e=>t(e)))}))}))}(l))||{};if(yield f(h,c)){var S="";S="back"==l?"Z7002":"next"==l?"Z7099":"error"==l?"Z7023":"fail"==l?"Z7038":"skip"==l?"Z7039":"cancel"==l?"Z7040":"Z7098",yield i("retCodeSub",S,"zStack");var k=yield function(e){return new Promise((t=>{r((()=>{AlipayJSBridge.call("hummerFoundation",{action:"needRpc",type:e},(e=>t(e)))}))}))}(l);if(k.needRpc){var w=yield v(l);return console.log("-end ret-",w),w}return yield t(l),console.log("-end ret-",{retCode:0}),{retCode:0}}return yield i("retCodeSub","Z7023","zStack"),yield t("error"),console.log("-end ret-",{retCode:0}),{retCode:0}}))()}}export{l as default,a as ekycLog};