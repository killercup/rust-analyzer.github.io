(self.webpackJsonp=self.webpackJsonp||[]).push([[2],{169:function(n,t,r){"use strict";r.r(t),r.d(t,"start",function(){return o}),r.d(t,"WorldState",function(){return y}),r.d(t,"__wbindgen_object_drop_ref",function(){return m}),r.d(t,"__wbindgen_string_new",function(){return j}),r.d(t,"__wbindgen_object_clone_ref",function(){return k}),r.d(t,"__wbg_new_68adb0d58759a4ed",function(){return A}),r.d(t,"__wbindgen_number_new",function(){return $}),r.d(t,"__wbg_set_2e79e744454afade",function(){return O}),r.d(t,"__widl_f_debug_1_",function(){return S}),r.d(t,"__widl_f_error_1_",function(){return v}),r.d(t,"__widl_f_info_1_",function(){return x}),r.d(t,"__widl_f_log_1_",function(){return E}),r.d(t,"__widl_f_warn_1_",function(){return I}),r.d(t,"__wbg_new_f802c5ff9d449d95",function(){return J}),r.d(t,"__wbg_push_4ba6b2636acd5f79",function(){return C}),r.d(t,"__wbg_new_59cb74e423758ede",function(){return F}),r.d(t,"__wbg_stack_558ba5917b466edd",function(){return T}),r.d(t,"__wbg_error_4bb6c2a97407129a",function(){return D}),r.d(t,"__wbindgen_debug_string",function(){return N}),r.d(t,"__wbindgen_throw",function(){return U});var e=r(170);function o(){e.g()}let u,c=0,i=new TextEncoder("utf-8"),f=null;function _(){return null!==f&&f.buffer===e.f.buffer||(f=new Uint8Array(e.f.buffer)),f}u="function"==typeof i.encodeInto?function(n){let t=n.length,r=e.c(t),o=0;{const t=_();for(;o<n.length;o++){const e=n.charCodeAt(o);if(e>127)break;t[r+o]=e}}if(o!==n.length){n=n.slice(o),r=e.d(r,t,t=o+3*n.length);const u=_().subarray(r+o,r+t);o+=i.encodeInto(n,u).written}return c=o,r}:function(n){let t=n.length,r=e.c(t),o=0;{const t=_();for(;o<n.length;o++){const e=n.charCodeAt(o);if(e>127)break;t[r+o]=e}}if(o!==n.length){const u=i.encode(n.slice(o));r=e.d(r,t,t=o+u.length),_().set(u,r+o),o+=u.length}return c=o,r};const s=new Array(32);function l(n){return s[n]}s.fill(void 0),s.push(void 0,null,!0,!1);let d=s.length;function a(n){const t=l(n);return function(n){n<36||(s[n]=d,d=n)}(n),t}let b=new TextDecoder("utf-8");function g(n,t){return b.decode(_().subarray(n,n+t))}function w(n){d===s.length&&s.push(s.length+1);const t=d;return d=s[t],s[t]=n,t}let h=null;function p(){return null!==h&&h.buffer===e.f.buffer||(h=new Int32Array(e.f.buffer)),h}class y{static __wrap(n){const t=Object.create(y.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,e.a(n)}constructor(){const n=e.j();return y.__wrap(n)}update(n){return a(e.o(this.ptr,u(n),c))}on_dot_typed(n,t){e.k(this.ptr,n,t)}hover(n,t){return a(e.i(this.ptr,n,t))}code_lenses(){return a(e.h(this.ptr))}references(n,t){return a(e.m(this.ptr,n,t))}prepare_rename(n,t){return a(e.l(this.ptr,n,t))}rename(n,t,r){return a(e.n(this.ptr,n,t,u(r),c))}}const m=function(n){a(n)},j=function(n,t){return w(g(n,t))},k=function(n){return w(l(n))},A=function(){return w(new Object)},$=function(n){return w(n)},O=function(n,t,r){l(n)[a(t)]=a(r)},S=function(n){console.debug(l(n))},v=function(n){console.error(l(n))},x=function(n){console.info(l(n))},E=function(n){console.log(l(n))},I=function(n){console.warn(l(n))},J=function(){return w(new Array)},C=function(n,t){return l(n).push(l(t))},F=function(){return w(new Error)},T=function(n,t){const r=l(t).stack,e=u(r),o=c;p()[n/4+0]=e,p()[n/4+1]=o},D=function(n,t){const r=g(n,t).slice();e.b(n,1*t),console.error(r)},N=function(n,t){const r=function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return`${t}`;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=n(t[0]));for(let o=1;o<r;o++)e+=", "+n(t[o]);return e+="]"}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let o;if(!(e.length>1))return toString.call(t);if("Object"==(o=e[1]))try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:o}(l(t)),e=u(r),o=c;p()[n/4+0]=e,p()[n/4+1]=o},U=function(n,t){throw new Error(g(n,t))};e.e()},170:function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(169);e.p()}}]);