import{r as s,d as N,i as j}from"./index.esm-DfKTBl1y.js";var k=Object.defineProperty,x=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>(x(e,typeof t!="symbol"?t+"":t,n),n);let A=class{constructor(){b(this,"current",this.detect()),b(this,"handoffState","pending"),b(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},g=new A,R=(e,t)=>{g.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function P(e){let t=s.useRef(e);return R(()=>{t.current=e},[e]),t}let q=function(e){let t=P(e);return N.useCallback((...n)=>t.current(...n),[t])};function H(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function C(){let e=[],t={addEventListener(n,r,o,a){return n.addEventListener(r,o,a),t.add(()=>n.removeEventListener(r,o,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return H(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=C();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function Y(){let[e]=s.useState(C);return s.useEffect(()=>()=>e.dispose(),[e]),e}function I(){let e=typeof document>"u";return"useSyncExternalStore"in j?(t=>t.useSyncExternalStore)(j)(()=>()=>{},()=>!1,()=>!e):!1}function z(){let e=I(),[t,n]=s.useState(g.isHandoffComplete);return t&&g.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>g.handoff(),[]),e?!1:t}function $(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}let F=Symbol();function D(e,t=!0){return Object.assign(e,{[F]:t})}function G(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=q(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[F]))?void 0:n}function S(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var L=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(L||{}),M=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(M||{});function J({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:f,mergeRefs:l}){l=l??U;let i=T(t,e);if(a)return y(i,n,r,f,l);let m=o??0;if(m&2){let{static:u=!1,...p}=i;if(u)return y(p,n,r,f,l)}if(m&1){let{unmount:u=!0,...p}=i;return $(u?0:1,{0(){return null},1(){return y({...p,hidden:!0,style:{display:"none"}},n,r,f,l)}})}return y(i,n,r,f,l)}function y(e,t={},n,r,o){let{as:a=n,children:f,refName:l="ref",...i}=O(e,["unmount","static"]),m=e.ref!==void 0?{[l]:e.ref}:{},u=typeof f=="function"?f(t):f;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let p={};if(t){let c=!1,h=[];for(let[v,d]of Object.entries(t))typeof d=="boolean"&&(c=!0),d===!0&&h.push(v);c&&(p["data-headlessui-state"]=h.join(" "))}if(a===s.Fragment&&Object.keys(w(i)).length>0){if(!s.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let c=u.props,h=typeof(c==null?void 0:c.className)=="function"?(...d)=>S(c==null?void 0:c.className(...d),i.className):S(c==null?void 0:c.className,i.className),v=h?{className:h}:{};return s.cloneElement(u,Object.assign({},T(u.props,w(O(i,["ref"]))),p,m,{ref:o(u.ref,m.ref)},v))}return s.createElement(a,Object.assign({},O(i,["ref"]),a!==s.Fragment&&m,a!==s.Fragment&&p),u)}function K(){let e=s.useRef([]),t=s.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function U(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function T(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...a){let f=n[r];for(let l of f){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;l(o,...a)}}});return t}function Q(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function w(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function O(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let E=s.createContext(null);E.displayName="OpenClosedContext";var V=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(V||{});function X(){return s.useContext(E)}function Z({value:e,children:t}){return N.createElement(E.Provider,{value:e},t)}export{J as C,K as I,L as O,D as T,Q as U,X as a,P as b,C as c,V as d,z as e,g as f,S as g,R as l,q as o,Y as p,Z as s,H as t,$ as u,M as v,w as x,G as y};