import{d as h,r as m}from"./index.esm-DfKTBl1y.js";import{e as N,f as E,l as L,u as x,s as b,U as y,C as F}from"./open-closed-rbID-roK.js";var g;let X=(g=h.useId)!=null?g:function(){let e=N(),[t,r]=h.useState(e?()=>E.nextId():null);return L(()=>{t===null&&r(E.nextId())},[t]),t!=null?""+t:void 0};function P(e){return E.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let p=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),M=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(M||{}),I=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(I||{});function T(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var A=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(A||{});function D(e,t=0){var r;return e===((r=P(e))==null?void 0:r.body)?!1:x(t,{0(){return e.matches(p)},1(){let o=e;for(;o!==null;){if(o.matches(p))return!0;o=o.parentElement}return!1}})}var O=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(O||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function z(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function $(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?r:!1}function U(e,t=r=>r){return e.slice().sort((r,o)=>{let u=t(r),i=t(o);if(u===null||i===null)return 0;let n=u.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function J(e,t,{sorted:r=!0,relativeTo:o=null,skipElements:u=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?r?U(e):e:T(e);u.length>0&&n.length>1&&(n=n.filter(d=>!u.includes(d))),o=o??i.activeElement;let c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(o))-1;if(t&4)return Math.max(0,n.indexOf(o))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),w=t&32?{preventScroll:!0}:{},s=0,a=n.length,f;do{if(s>=a||s+a<=0)return 0;let d=l+s;if(t&16)d=(d+a)%a;else{if(d<0)return 3;if(d>=a)return 1}f=n[d],f==null||f.focus(w),s+=c}while(f!==i.activeElement);return t&6&&$(f)&&f.select(),2}function R(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function _(){return/Android/gi.test(window.navigator.userAgent)}function k(){return R()||_()}function v(e,t,r){let o=b(t);m.useEffect(()=>{function u(i){o.current(i)}return document.addEventListener(e,u,r),()=>document.removeEventListener(e,u,r)},[e,r])}function C(e,t,r){let o=b(t);m.useEffect(()=>{function u(i){o.current(i)}return window.addEventListener(e,u,r),()=>window.removeEventListener(e,u,r)},[e,r])}function Q(e,t,r=!0){let o=m.useRef(!1);m.useEffect(()=>{requestAnimationFrame(()=>{o.current=r})},[r]);function u(n,c){if(!o.current||n.defaultPrevented)return;let l=c(n);if(l===null||!l.getRootNode().contains(l)||!l.isConnected)return;let w=function s(a){return typeof a=="function"?s(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let s of w){if(s===null)continue;let a=s instanceof HTMLElement?s:s.current;if(a!=null&&a.contains(l)||n.composed&&n.composedPath().includes(a))return}return!D(l,A.Loose)&&l.tabIndex!==-1&&n.preventDefault(),t(n,l)}let i=m.useRef(null);v("pointerdown",n=>{var c,l;o.current&&(i.current=((l=(c=n.composedPath)==null?void 0:c.call(n))==null?void 0:l[0])||n.target)},!0),v("mousedown",n=>{var c,l;o.current&&(i.current=((l=(c=n.composedPath)==null?void 0:c.call(n))==null?void 0:l[0])||n.target)},!0),v("click",n=>{k()||i.current&&(u(n,()=>i.current),i.current=null)},!0),v("touchend",n=>u(n,()=>n.target instanceof HTMLElement?n.target:null),!0),C("blur",n=>u(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let K="div";var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});function W(e,t){var r;let{features:o=1,...u}=e,i={ref:t,"aria-hidden":(o&2)===2?!0:(r=u["aria-hidden"])!=null?r:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return F({ourProps:i,theirProps:u,slot:{},defaultTag:K,name:"Hidden"})}let Y=y(W);function Z(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&V(r)?!1:o}function V(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var j=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(j||{});export{X as I,S as M,M as N,J as O,A as T,j as a,U as b,C as c,z as d,D as h,P as o,Z as r,G as s,R as t,Y as u,Q as y};
