import{r as m}from"./index.esm-CxB9JuV7.js";import{u as N,f as x,e as h,U as y,C as L}from"./TextInput-DoWuG5mI.js";import{o as w}from"./keyboard-OVBMbBnO.js";let p=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(P||{}),A=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(A||{}),M=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(M||{});function b(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((n,r)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var g=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(g||{});function F(e,n=0){var r;return e===((r=w(e))==null?void 0:r.body)?!1:N(n,{0(){return e.matches(p)},1(){let o=e;for(;o!==null;){if(o.matches(p))return!0;o=o.parentElement}return!1}})}function j(e){let n=w(e);x().nextFrame(()=>{n&&!F(n.activeElement,0)&&T(e)})}var S=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(S||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function T(e){e==null||e.focus({preventScroll:!0})}let I=["textarea","input"].join(",");function O(e){var n,r;return(r=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,I))!=null?r:!1}function _(e,n=r=>r){return e.slice().sort((r,o)=>{let i=n(r),u=n(o);if(i===null||u===null)return 0;let t=i.compareDocumentPosition(u);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,n){return D(b(),n,{relativeTo:e})}function D(e,n,{sorted:r=!0,relativeTo:o=null,skipElements:i=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,t=Array.isArray(e)?r?_(e):e:b(e);i.length>0&&t.length>1&&(t=t.filter(d=>!i.includes(d))),o=o??u.activeElement;let c=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,t.indexOf(o))-1;if(n&4)return Math.max(0,t.indexOf(o))+1;if(n&8)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),E=n&32?{preventScroll:!0}:{},s=0,a=t.length,f;do{if(s>=a||s+a<=0)return 0;let d=l+s;if(n&16)d=(d+a)%a;else{if(d<0)return 3;if(d>=a)return 1}f=t[d],f==null||f.focus(E),s+=c}while(f!==u.activeElement);return n&6&&O(f)&&f.select(),2}function H(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function $(){return/Android/gi.test(window.navigator.userAgent)}function R(){return H()||$()}function v(e,n,r){let o=h(n);m.useEffect(()=>{function i(u){o.current(u)}return document.addEventListener(e,i,r),()=>document.removeEventListener(e,i,r)},[e,r])}function C(e,n,r){let o=h(n);m.useEffect(()=>{function i(u){o.current(u)}return window.addEventListener(e,i,r),()=>window.removeEventListener(e,i,r)},[e,r])}function X(e,n,r=!0){let o=m.useRef(!1);m.useEffect(()=>{requestAnimationFrame(()=>{o.current=r})},[r]);function i(t,c){if(!o.current||t.defaultPrevented)return;let l=c(t);if(l===null||!l.getRootNode().contains(l)||!l.isConnected)return;let E=function s(a){return typeof a=="function"?s(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let s of E){if(s===null)continue;let a=s instanceof HTMLElement?s:s.current;if(a!=null&&a.contains(l)||t.composed&&t.composedPath().includes(a))return}return!F(l,g.Loose)&&l.tabIndex!==-1&&t.preventDefault(),n(t,l)}let u=m.useRef(null);v("pointerdown",t=>{var c,l;o.current&&(u.current=((l=(c=t.composedPath)==null?void 0:c.call(t))==null?void 0:l[0])||t.target)},!0),v("mousedown",t=>{var c,l;o.current&&(u.current=((l=(c=t.composedPath)==null?void 0:c.call(t))==null?void 0:l[0])||t.target)},!0),v("click",t=>{R()||u.current&&(i(t,()=>u.current),u.current=null)},!0),v("touchend",t=>i(t,()=>t.target instanceof HTMLElement?t.target:null),!0),C("blur",t=>i(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function z(...e){return m.useMemo(()=>w(...e),[...e])}let K="div";var U=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(U||{});function k(e,n){var r;let{features:o=1,...i}=e,u={ref:n,"aria-hidden":(o&2)===2?!0:(r=i["aria-hidden"])!=null?r:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return L({ourProps:u,theirProps:i,slot:{},defaultTag:K,name:"Hidden"})}let B=y(k);export{j as D,_ as I,P as M,A as N,D as O,g as T,q as _,C as a,T as b,F as h,z as n,U as s,H as t,B as u,X as y};
