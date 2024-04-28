import{r as u,d as p,a as Ge,i as ee,j as D}from"./index.esm-DfKTBl1y.js";import{t as ie}from"./bundle-mjs-Bq6clSCD.js";import{o as g,b as ze,t as ue,U as T,y as x,e as se,u as H,p as Ke,C as S,T as Xe,f as we,l as O,c as be,O as he,a as Je,d as G}from"./open-closed-CdzG23jP.js";import{f as $e,q as J}from"./transition-DhRkQv_C.js";import{a as Qe,n as I,O as z,M as F,u as te,s as ne,b as R,N as Ze,t as et,y as tt}from"./hidden-E73_kiKB.js";import{I as N,a as nt,r as rt}from"./keyboard-0I8HrQyk.js";function ce(e,t){let n=u.useRef([]),r=g(e);u.useEffect(()=>{let o=[...n.current];for(let[l,i]of t.entries())if(n.current[l]!==i){let a=r(t,o);return n.current=t,a}},[r,...t])}function ot(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let P=[];ot(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&P[0]!==t.target&&(P.unshift(t.target),P=P.filter(n=>n!=null&&n.isConnected),P.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Te(e,t,n,r){let o=ze(n);u.useEffect(()=>{e=e??window;function l(i){o.current(i)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function xe(e){let t=g(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,ue(()=>{n.current&&t()})}),[t])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function at(){let e=u.useRef(0);return Qe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Se(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let lt="div";var Ce=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ce||{});function it(e,t){let n=u.useRef(null),r=x(n,t),{initialFocus:o,containers:l,features:i=30,...a}=e;se()||(i=1);let s=I(n);ct({ownerDocument:s},!!(i&16));let m=dt({ownerDocument:s,container:n,initialFocus:o},!!(i&2));ft({ownerDocument:s,container:n,containers:l,previousActiveElement:m},!!(i&8));let c=at(),d=g(y=>{let v=n.current;v&&(C=>C())(()=>{H(c.current,{[B.Forwards]:()=>{z(v,F.First,{skipElements:[y.relatedTarget]})},[B.Backwards]:()=>{z(v,F.Last,{skipElements:[y.relatedTarget]})}})})}),k=Ke(),b=u.useRef(!1),w={ref:r,onKeyDown(y){y.key=="Tab"&&(b.current=!0,k.requestAnimationFrame(()=>{b.current=!1}))},onBlur(y){let v=Se(l);n.current instanceof HTMLElement&&v.add(n.current);let C=y.relatedTarget;C instanceof HTMLElement&&C.dataset.headlessuiFocusGuard!=="true"&&(De(v,C)||(b.current?z(n.current,H(c.current,{[B.Forwards]:()=>F.Next,[B.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&R(y.target)))}};return p.createElement(p.Fragment,null,!!(i&4)&&p.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ne.Focusable}),S({ourProps:w,theirProps:a,defaultTag:lt,name:"FocusTrap"}),!!(i&4)&&p.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ne.Focusable}))}let ut=T(it),A=Object.assign(ut,{features:Ce});function st(e=!0){let t=u.useRef(P.slice());return ce(([n],[r])=>{r===!0&&n===!1&&ue(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=P.slice())},[e,P,t]),g(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function ct({ownerDocument:e},t){let n=st(t);ce(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&R(n())},[t]),xe(()=>{t&&R(n())})}function dt({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),l=$e();return ce(()=>{if(!r)return;let i=t.current;i&&ue(()=>{if(!l.current)return;let a=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===a){o.current=a;return}}else if(i.contains(a)){o.current=a;return}n!=null&&n.current?R(n.current):z(i,F.First)===Ze.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function ft({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=$e();Te(e==null?void 0:e.defaultView,"focus",i=>{if(!o||!l.current)return;let a=Se(n);t.current instanceof HTMLElement&&a.add(t.current);let s=r.current;if(!s)return;let m=i.target;m&&m instanceof HTMLElement?De(a,m)?(r.current=m,R(m)):(i.preventDefault(),i.stopPropagation(),R(s)):R(r.current)},!0)}function De(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Pe=u.createContext(!1);function pt(){return u.useContext(Pe)}function re(e){return p.createElement(Pe.Provider,{value:e.force},e.children)}function mt(e){let t=pt(),n=u.useContext(Le),r=I(e),[o,l]=u.useState(()=>{if(!t&&n!==null||we.isServer)return null;let i=r==null?void 0:r.getElementById("headlessui-portal-root");if(i)return i;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let gt=u.Fragment;function vt(e,t){let n=e,r=u.useRef(null),o=x(Xe(c=>{r.current=c}),t),l=I(r),i=mt(r),[a]=u.useState(()=>{var c;return we.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),s=u.useContext(oe),m=se();return O(()=>{!i||!a||i.contains(a)||(a.setAttribute("data-headlessui-portal",""),i.appendChild(a))},[i,a]),O(()=>{if(a&&s)return s.register(a)},[s,a]),xe(()=>{var c;!i||!a||(a instanceof Node&&i.contains(a)&&i.removeChild(a),i.childNodes.length<=0&&((c=i.parentElement)==null||c.removeChild(i)))}),m?!i||!a?null:Ge.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:gt,name:"Portal"}),a):null}let ht=u.Fragment,Le=u.createContext(null);function Et(e,t){let{target:n,...r}=e,o={ref:x(t)};return p.createElement(Le.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:ht,name:"Popover.Group"}))}let oe=u.createContext(null);function yt(){let e=u.useContext(oe),t=u.useRef([]),n=g(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=g(l=>{let i=t.current.indexOf(l);i!==-1&&t.current.splice(i,1),e&&e.unregister(l)}),o=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:l}){return p.createElement(oe.Provider,{value:o},l)},[o])]}let wt=T(vt),bt=T(Et),ae=Object.assign(wt,{Group:bt});function $t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Tt=typeof Object.is=="function"?Object.is:$t,{useState:xt,useEffect:St,useLayoutEffect:Ct,useDebugValue:Dt}=ee;function Pt(e,t,n){const r=t(),[{inst:o},l]=xt({inst:{value:r,getSnapshot:t}});return Ct(()=>{o.value=r,o.getSnapshot=t,Q(o)&&l({inst:o})},[e,r,t]),St(()=>(Q(o)&&l({inst:o}),e(()=>{Q(o)&&l({inst:o})})),[e]),Dt(r),r}function Q(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Tt(n,r)}catch{return!0}}function Lt(e,t,n){return t()}const Rt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kt=!Rt,Mt=kt?Lt:Pt,Ft="useSyncExternalStore"in ee?(e=>e.useSyncExternalStore)(ee):Mt;function Ot(e){return Ft(e.subscribe,e.getSnapshot,e.getSnapshot)}function Nt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let i=t[o].call(n,...l);i&&(n=i,r.forEach(a=>a()))}}}function At(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}function jt(){return et()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=be();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let s=a.target.closest("a");if(!s)return;let{hash:m}=new URL(s.href),c=e.querySelector(m);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let s=a.target;for(;s.parentElement&&r(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let s=a.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),t.add(()=>{var a;let s=(a=window.scrollY)!=null?a:window.pageYOffset;l!==s&&window.scrollTo(0,l),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Bt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ht(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let L=Nt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:be(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ht(n)},o=[jt(),At(),Bt()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&L.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&L.dispatch("TEARDOWN",n)}});function It(e,t,n){let r=Ot(L),o=e?r.get(e):void 0,l=o?o.count>0:!1;return O(()=>{if(!(!e||!t))return L.dispatch("PUSH",e,n),()=>L.dispatch("POP",e,n)},[t,e]),l}let Z=new Map,j=new Map;function Ee(e,t=!0){O(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var i;if(!r)return;let a=(i=j.get(r))!=null?i:1;if(a===1?j.delete(r):j.set(r,a-1),a!==1)return;let s=Z.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Z.delete(r))}let l=(n=j.get(r))!=null?n:0;return j.set(r,l+1),l!==0||(Z.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function Wt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=u.useRef((r=n==null?void 0:n.current)!=null?r:null),l=I(o),i=g(()=>{var a,s,m;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(a=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?a:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((m=(s=o.current)==null?void 0:s.getRootNode())==null?void 0:m.host)||c.some(k=>d.contains(k))||c.push(d));return c});return{resolveContainers:i,contains:g(a=>i().some(s=>s.contains(a))),mainTreeNodeRef:o,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:p.createElement(te,{features:ne.Hidden,ref:o})},[o,n])}}let de=u.createContext(()=>{});de.displayName="StackContext";var le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(le||{});function Yt(){return u.useContext(de)}function Ut({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=Yt(),i=g((...a)=>{t==null||t(...a),l(...a)});return O(()=>{let a=o===void 0||o===!0;return a&&i(0,n,r),()=>{a&&i(1,n,r)}},[i,n,r,o]),p.createElement(de.Provider,{value:i},e)}let Re=u.createContext(null);function ke(){let e=u.useContext(Re);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ke),t}return e}function _t(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=g(l=>(t(i=>[...i,l]),()=>t(i=>{let a=i.slice(),s=a.indexOf(l);return s!==-1&&a.splice(s,1),a}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Re.Provider,{value:o},n.children)},[t])]}let qt="p";function Vt(e,t){let n=N(),{id:r=`headlessui-description-${n}`,...o}=e,l=ke(),i=x(t);O(()=>l.register(r),[r,l.register]);let a={ref:i,...l.props,id:r};return S({ourProps:a,theirProps:o,slot:l.slot||{},defaultTag:qt,name:l.name||"Description"})}let Gt=T(Vt),zt=Object.assign(Gt,{});var Kt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kt||{}),Xt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Xt||{});let Jt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},K=u.createContext(null);K.displayName="DialogContext";function W(e){let t=u.useContext(K);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function Qt(e,t,n=()=>[document.body]){It(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function Zt(e,t){return H(t.type,Jt,e,t)}let en="div",tn=he.RenderStrategy|he.Static;function nn(e,t){let n=N(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:i,role:a="dialog",__demoMode:s=!1,...m}=e,[c,d]=u.useState(0),k=u.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(k.current||(k.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let b=Je();o===void 0&&b!==null&&(o=(b&G.Open)===G.Open);let w=u.useRef(null),y=x(w,t),v=I(w),C=e.hasOwnProperty("open")||b!==null,fe=e.hasOwnProperty("onClose");if(!C&&!fe)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!C)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!fe)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let h=o?0:1,[Y,Me]=u.useReducer(Zt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),M=g(()=>l(!1)),pe=g(f=>Me({type:0,id:f})),U=se()?s?!1:h===0:!1,_=c>1,me=u.useContext(K)!==null,[Fe,Oe]=yt(),Ne={get current(){var f;return(f=Y.panelRef.current)!=null?f:w.current}},{resolveContainers:X,mainTreeNodeRef:q,MainTreeNode:Ae}=Wt({portals:Fe,defaultContainers:[Ne]}),je=_?"parent":"leaf",ge=b!==null?(b&G.Closing)===G.Closing:!1,Be=me||ge?!1:U,He=u.useCallback(()=>{var f,$;return($=Array.from((f=v==null?void 0:v.querySelectorAll("body > *"))!=null?f:[]).find(E=>E.id==="headlessui-portal-root"?!1:E.contains(q.current)&&E instanceof HTMLElement))!=null?$:null},[q]);Ee(He,Be);let Ie=_?!0:U,We=u.useCallback(()=>{var f,$;return($=Array.from((f=v==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?f:[]).find(E=>E.contains(q.current)&&E instanceof HTMLElement))!=null?$:null},[q]);Ee(We,Ie),tt(X,f=>{f.preventDefault(),M()},!(!U||_));let Ye=!(_||h!==0);Te(v==null?void 0:v.defaultView,"keydown",f=>{Ye&&(f.defaultPrevented||f.key===nt.Escape&&(f.preventDefault(),f.stopPropagation(),M()))}),Qt(v,!(ge||h!==0||me),X),u.useEffect(()=>{if(h!==0||!w.current)return;let f=new ResizeObserver($=>{for(let E of $){let V=E.target.getBoundingClientRect();V.x===0&&V.y===0&&V.width===0&&V.height===0&&M()}});return f.observe(w.current),()=>f.disconnect()},[h,w,M]);let[Ue,_e]=_t(),qe=u.useMemo(()=>[{dialogState:h,close:M,setTitleId:pe},Y],[h,Y,M,pe]),ve=u.useMemo(()=>({open:h===0}),[h]),Ve={ref:y,id:r,role:a,"aria-modal":h===0?!0:void 0,"aria-labelledby":Y.titleId,"aria-describedby":Ue};return p.createElement(Ut,{type:"Dialog",enabled:h===0,element:w,onUpdate:g((f,$)=>{$==="Dialog"&&H(f,{[le.Add]:()=>d(E=>E+1),[le.Remove]:()=>d(E=>E-1)})})},p.createElement(re,{force:!0},p.createElement(ae,null,p.createElement(K.Provider,{value:qe},p.createElement(ae.Group,{target:w},p.createElement(re,{force:!1},p.createElement(_e,{slot:ve,name:"Dialog.Description"},p.createElement(A,{initialFocus:i,containers:X,features:U?H(je,{parent:A.features.RestoreFocus,leaf:A.features.All&~A.features.FocusLock}):A.features.None},p.createElement(Oe,null,S({ourProps:Ve,theirProps:m,slot:ve,defaultTag:en,features:tn,visible:h===0,name:"Dialog"}))))))))),p.createElement(Ae,null))}let rn="div";function on(e,t){let n=N(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:i}]=W("Dialog.Overlay"),a=x(t),s=g(c=>{if(c.target===c.currentTarget){if(rt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),i()}}),m=u.useMemo(()=>({open:l===0}),[l]);return S({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:m,defaultTag:rn,name:"Dialog.Overlay"})}let an="div";function ln(e,t){let n=N(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},i]=W("Dialog.Backdrop"),a=x(t);u.useEffect(()=>{if(i.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[i.panelRef]);let s=u.useMemo(()=>({open:l===0}),[l]);return p.createElement(re,{force:!0},p.createElement(ae,null,S({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:an,name:"Dialog.Backdrop"})))}let un="div";function sn(e,t){let n=N(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},i]=W("Dialog.Panel"),a=x(t,i.panelRef),s=u.useMemo(()=>({open:l===0}),[l]),m=g(c=>{c.stopPropagation()});return S({ourProps:{ref:a,id:r,onClick:m},theirProps:o,slot:s,defaultTag:un,name:"Dialog.Panel"})}let cn="h2";function dn(e,t){let n=N(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=W("Dialog.Title"),a=x(t);u.useEffect(()=>(i(r),()=>i(null)),[r,i]);let s=u.useMemo(()=>({open:l===0}),[l]);return S({ourProps:{ref:a,id:r},theirProps:o,slot:s,defaultTag:cn,name:"Dialog.Title"})}let fn=T(nn),pn=T(ln),mn=T(sn),gn=T(on),vn=T(dn),ye=Object.assign(fn,{Backdrop:pn,Panel:mn,Overlay:gn,Title:vn,Description:zt});function Sn({className:e="",disabled:t,children:n,...r}){return D.jsx("button",{...r,className:ie("inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150",t&&"opacity-25",e),disabled:t,children:n})}function Cn({type:e="button",className:t="",disabled:n,children:r,...o}){return D.jsx("button",{...o,type:e,className:ie("inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800",n&&"opacity-25",t),disabled:n,children:r})}function Dn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return D.jsx(J,{show:t,as:u.Fragment,leave:"duration-200",children:D.jsxs(ye,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[D.jsx(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:D.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),D.jsx(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:D.jsx(ye.Panel,{className:ie("mb-6 overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",i),children:e})})]})})}export{Sn as D,Dn as M,Cn as S};
