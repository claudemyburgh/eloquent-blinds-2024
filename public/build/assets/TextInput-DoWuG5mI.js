import{r as a,d as x,i as ce,j as y,f as Oe}from"./index.esm-CxB9JuV7.js";import{t as V}from"./bundle-mjs-Bq6clSCD.js";var Ne=Object.defineProperty,Re=(e,t,r)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t,r)=>(Re(e,typeof t!="symbol"?t+"":t,r),r);let $e=class{constructor(){J(this,"current",this.detect()),J(this,"handoffState","pending"),J(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},U=new $e,L=(e,t)=>{U.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function $(e){let t=a.useRef(e);return L(()=>{t.current=e},[e]),t}let T=function(e){let t=$(e);return x.useCallback((...r)=>t.current(...r),[t])};function Pe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function H(){let e=[],t={addEventListener(r,n,s,f){return r.addEventListener(n,s,f),t.add(()=>r.removeEventListener(n,s,f))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Pe(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,s){let f=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:s}),this.add(()=>{Object.assign(r.style,{[n]:f})})},group(r){let n=H();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let s of e.splice(n,1))s()}},dispose(){for(let r of e.splice(0))r()}};return t}function me(){let[e]=a.useState(H);return a.useEffect(()=>()=>e.dispose(),[e]),e}function Le(){let e=typeof document>"u";return"useSyncExternalStore"in ce?(t=>t.useSyncExternalStore)(ce)(()=>()=>{},()=>!1,()=>!e):!1}function pe(){let e=Le(),[t,r]=a.useState(U.isHandoffComplete);return t&&U.isHandoffComplete===!1&&r(!1),a.useEffect(()=>{t!==!0&&r(!0)},[t]),a.useEffect(()=>U.handoff(),[]),e?!1:t}function E(e,t,...r){if(e in t){let s=t[e];return typeof s=="function"?s(...r):s}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}let ge=Symbol();function it(e,t=!0){return Object.assign(e,{[ge]:t})}function he(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let r=T(n=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(n):s.current=n)});return e.every(n=>n==null||(n==null?void 0:n[ge]))?void 0:r}function B(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var ve=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ve||{}),F=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(F||{});function ye({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:s,visible:f=!0,name:c,mergeRefs:o}){o=o??He;let i=be(t,e);if(f)return M(i,r,n,c,o);let l=s??0;if(l&2){let{static:u=!1,...v}=i;if(u)return M(v,r,n,c,o)}if(l&1){let{unmount:u=!0,...v}=i;return E(u?0:1,{0(){return null},1(){return M({...v,hidden:!0,style:{display:"none"}},r,n,c,o)}})}return M(i,r,n,c,o)}function M(e,t={},r,n,s){let{as:f=r,children:c,refName:o="ref",...i}=X(e,["unmount","static"]),l=e.ref!==void 0?{[o]:e.ref}:{},u=typeof c=="function"?c(t):c;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let v={};if(t){let h=!1,g=[];for(let[m,p]of Object.entries(t))typeof p=="boolean"&&(h=!0),p===!0&&g.push(m);h&&(v["data-headlessui-state"]=g.join(" "))}if(f===a.Fragment&&Object.keys(fe(i)).length>0){if(!a.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let h=u.props,g=typeof(h==null?void 0:h.className)=="function"?(...p)=>B(h==null?void 0:h.className(...p),i.className):B(h==null?void 0:h.className,i.className),m=g?{className:g}:{};return a.cloneElement(u,Object.assign({},be(u.props,fe(X(i,["ref"]))),v,l,{ref:s(u.ref,l.ref)},m))}return a.createElement(f,Object.assign({},X(i,["ref"]),f!==a.Fragment&&l,f!==a.Fragment&&v),u)}function ot(){let e=a.useRef([]),t=a.useCallback(r=>{for(let n of e.current)n!=null&&(typeof n=="function"?n(r):n.current=r)},[]);return(...r)=>{if(!r.every(n=>n==null))return e.current=r,t}}function He(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function be(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let s in n)s.startsWith("on")&&typeof n[s]=="function"?(r[s]!=null||(r[s]=[]),r[s].push(n[s])):t[s]=n[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](s,...f){let c=r[n];for(let o of c){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;o(s,...f)}}});return t}function re(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function fe(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function X(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let ne=a.createContext(null);ne.displayName="OpenClosedContext";var w=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(w||{});function xe(){return a.useContext(ne)}function Ie({value:e,children:t}){return x.createElement(ne.Provider,{value:e},t)}function ae(){let e=a.useRef(!1);return L(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function De(e=0){let[t,r]=a.useState(e),n=ae(),s=a.useCallback(i=>{n.current&&r(l=>l|i)},[t,n]),f=a.useCallback(i=>!!(t&i),[t]),c=a.useCallback(i=>{n.current&&r(l=>l&~i)},[r,n]),o=a.useCallback(i=>{n.current&&r(l=>l^i)},[r]);return{flags:t,addFlag:s,hasFlag:f,removeFlag:c,toggleFlag:o}}function Ae(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Z(e,...t){e&&t.length>0&&e.classList.add(...t)}function ee(e,...t){e&&t.length>0&&e.classList.remove(...t)}function qe(e,t){let r=H();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:s}=getComputedStyle(e),[f,c]=[n,s].map(i=>{let[l=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,v)=>v-u);return l}),o=f+c;if(o!==0){r.group(l=>{l.setTimeout(()=>{t(),l.dispose()},o),l.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&l.dispose()})});let i=r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t(),i())})}else t();return r.add(()=>t()),r.dispose}function Me(e,t,r,n){let s=r?"enter":"leave",f=H(),c=n!==void 0?Ae(n):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let o=E(s,{enter:()=>t.enter,leave:()=>t.leave}),i=E(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=E(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return ee(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Z(e,...t.base,...o,...l),f.nextFrame(()=>{ee(e,...t.base,...o,...l),Z(e,...t.base,...o,...i),qe(e,()=>(ee(e,...t.base,...o),Z(e,...t.base,...t.entered),c()))}),f.dispose}function Ue({immediate:e,container:t,direction:r,classes:n,onStart:s,onStop:f}){let c=ae(),o=me(),i=$(r);L(()=>{e&&(i.current="enter")},[e]),L(()=>{let l=H();o.add(l.dispose);let u=t.current;if(u&&i.current!=="idle"&&c.current)return l.dispose(),s.current(i.current),l.add(Me(u,n.current,i.current==="enter",()=>{l.dispose(),f.current(i.current)})),l.dispose},[r])}function k(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let z=a.createContext(null);z.displayName="TransitionContext";var Be=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Be||{});function Ve(){let e=a.useContext(z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ze(){let e=a.useContext(Y);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let Y=a.createContext(null);Y.displayName="NestingContext";function G(e){return"children"in e?G(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ee(e,t){let r=$(e),n=a.useRef([]),s=ae(),f=me(),c=T((g,m=F.Hidden)=>{let p=n.current.findIndex(({el:d})=>d===g);p!==-1&&(E(m,{[F.Unmount](){n.current.splice(p,1)},[F.Hidden](){n.current[p].state="hidden"}}),f.microTask(()=>{var d;!G(n)&&s.current&&((d=r.current)==null||d.call(r))}))}),o=T(g=>{let m=n.current.find(({el:p})=>p===g);return m?m.state!=="visible"&&(m.state="visible"):n.current.push({el:g,state:"visible"}),()=>c(g,F.Unmount)}),i=a.useRef([]),l=a.useRef(Promise.resolve()),u=a.useRef({enter:[],leave:[],idle:[]}),v=T((g,m,p)=>{i.current.splice(0),t&&(t.chains.current[m]=t.chains.current[m].filter(([d])=>d!==g)),t==null||t.chains.current[m].push([g,new Promise(d=>{i.current.push(d)})]),t==null||t.chains.current[m].push([g,new Promise(d=>{Promise.all(u.current[m].map(([O,N])=>N)).then(()=>d())})]),m==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>p(m)):p(m)}),h=T((g,m,p)=>{Promise.all(u.current[m].splice(0).map(([d,O])=>O)).then(()=>{var d;(d=i.current.shift())==null||d()}).then(()=>p(m))});return a.useMemo(()=>({children:n,register:o,unregister:c,onStart:v,onStop:h,wait:l,chains:u}),[o,c,n,v,h,u,l])}function Ye(){}let Ge=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function de(e){var t;let r={};for(let n of Ge)r[n]=(t=e[n])!=null?t:Ye;return r}function Ke(e){let t=a.useRef(de(e));return a.useEffect(()=>{t.current=de(e)},[e]),t}let Qe="div",we=ve.RenderStrategy;function We(e,t){var r,n;let{beforeEnter:s,afterEnter:f,beforeLeave:c,afterLeave:o,enter:i,enterFrom:l,enterTo:u,entered:v,leave:h,leaveFrom:g,leaveTo:m,...p}=e,d=a.useRef(null),O=he(d,t),N=(r=p.unmount)==null||r?F.Unmount:F.Hidden,{show:b,appear:j,initial:oe}=Ve(),[S,K]=a.useState(b?"visible":"hidden"),le=ze(),{register:I,unregister:D}=le;a.useEffect(()=>I(d),[I,d]),a.useEffect(()=>{if(N===F.Hidden&&d.current){if(b&&S!=="visible"){K("visible");return}return E(S,{hidden:()=>D(d),visible:()=>I(d)})}},[S,d,I,D,b,N]);let Q=$({base:k(p.className),enter:k(i),enterFrom:k(l),enterTo:k(u),entered:k(v),leave:k(h),leaveFrom:k(g),leaveTo:k(m)}),A=Ke({beforeEnter:s,afterEnter:f,beforeLeave:c,afterLeave:o}),W=pe();a.useEffect(()=>{if(W&&S==="visible"&&d.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[d,S,W]);let Ce=oe&&!j,ue=j&&b&&oe,ke=!W||Ce?"idle":b?"enter":"leave",P=De(0),Fe=T(C=>E(C,{enter:()=>{P.addFlag(w.Opening),A.current.beforeEnter()},leave:()=>{P.addFlag(w.Closing),A.current.beforeLeave()},idle:()=>{}})),je=T(C=>E(C,{enter:()=>{P.removeFlag(w.Opening),A.current.afterEnter()},leave:()=>{P.removeFlag(w.Closing),A.current.afterLeave()},idle:()=>{}})),q=Ee(()=>{K("hidden"),D(d)},le),_=a.useRef(!1);Ue({immediate:ue,container:d,classes:Q,direction:ke,onStart:$(C=>{_.current=!0,q.onStart(d,C,Fe)}),onStop:$(C=>{_.current=!1,q.onStop(d,C,je),C==="leave"&&!G(q)&&(K("hidden"),D(d))})});let R=p,Se={ref:O};return ue?R={...R,className:B(p.className,...Q.current.enter,...Q.current.enterFrom)}:_.current&&(R.className=B(p.className,(n=d.current)==null?void 0:n.className),R.className===""&&delete R.className),x.createElement(Y.Provider,{value:q},x.createElement(Ie,{value:E(S,{visible:w.Open,hidden:w.Closed})|P.flags},ye({ourProps:Se,theirProps:R,defaultTag:Qe,features:we,visible:S==="visible",name:"Transition.Child"})))}function _e(e,t){let{show:r,appear:n=!1,unmount:s=!0,...f}=e,c=a.useRef(null),o=he(c,t);pe();let i=xe();if(r===void 0&&i!==null&&(r=(i&w.Open)===w.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,u]=a.useState(r?"visible":"hidden"),v=Ee(()=>{u("hidden")}),[h,g]=a.useState(!0),m=a.useRef([r]);L(()=>{h!==!1&&m.current[m.current.length-1]!==r&&(m.current.push(r),g(!1))},[m,r]);let p=a.useMemo(()=>({show:r,appear:n,initial:h}),[r,n,h]);a.useEffect(()=>{if(r)u("visible");else if(!G(v))u("hidden");else{let b=c.current;if(!b)return;let j=b.getBoundingClientRect();j.x===0&&j.y===0&&j.width===0&&j.height===0&&u("hidden")}},[r,v]);let d={unmount:s},O=T(()=>{var b;h&&g(!1),(b=e.beforeEnter)==null||b.call(e)}),N=T(()=>{var b;h&&g(!1),(b=e.beforeLeave)==null||b.call(e)});return x.createElement(Y.Provider,{value:v},x.createElement(z.Provider,{value:p},ye({ourProps:{...d,as:a.Fragment,children:x.createElement(Te,{ref:o,...d,...f,beforeEnter:O,beforeLeave:N})},theirProps:{},defaultTag:a.Fragment,features:we,visible:l==="visible",name:"Transition"})))}function Je(e,t){let r=a.useContext(z)!==null,n=xe()!==null;return x.createElement(x.Fragment,null,!r&&n?x.createElement(te,{ref:t,...e}):x.createElement(Te,{ref:t,...e}))}let te=re(_e),Te=re(We),Xe=re(Je),Ze=Object.assign(te,{Child:Xe,Root:te});const se=a.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),ie=({children:e})=>{const[t,r]=a.useState(!1),n=()=>{r(s=>!s)};return y.jsx(se.Provider,{value:{open:t,setOpen:r,toggleOpen:n},children:y.jsx("div",{className:"relative",children:e})})},et=({children:e})=>{const{open:t,setOpen:r,toggleOpen:n}=a.useContext(se);return y.jsxs(y.Fragment,{children:[y.jsx("div",{onClick:n,children:e}),t&&y.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},tt=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white dark:bg-gray-700",children:n})=>{const{open:s,setOpen:f}=a.useContext(se);let c="origin-top";e==="left"?c="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(c="ltr:origin-top-right rtl:origin-top-left end-0");let o="";return t==="48"&&(o="w-48"),y.jsx(y.Fragment,{children:y.jsx(Ze,{as:a.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:y.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${c} ${o}`,onClick:()=>f(!1),children:y.jsx("div",{className:V("rounded-md ring-1 ring-black ring-opacity-5 accent-primary-500 focus:accent-primary-500",r),children:n})})})})},rt=({className:e="",children:t,...r})=>y.jsx(Oe,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+e,children:t});ie.Trigger=et;ie.Content=tt;ie.Link=rt;const lt=a.forwardRef(function({className:t="",isFocused:r=!1,children:n,showValue:s=!1,options:f=[],...c},o){const i=a.useRef(null);return a.useImperativeHandle(o,()=>({focus:()=>{var l;return(l=i.current)==null?void 0:l.focus()}})),a.useEffect(()=>{var l;r&&((l=i.current)==null||l.focus())},[]),y.jsx("select",{...c,className:V("rounded-md border-gray-300 text-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-600",t),ref:i,children:n})}),ut=a.forwardRef(function({type:t="text",className:r="",isFocused:n=!1,maxChar:s=1e3,...f},c){var l;const o=a.useRef(null),i=()=>{var u;o.current&&(o.current.style.height="auto",o.current.style.height=((u=o.current)==null?void 0:u.scrollHeight)+15+"px")};return a.useImperativeHandle(c,()=>({focus:()=>{var u;return(u=o.current)==null?void 0:u.focus()}})),a.useEffect(()=>{var u;n&&((u=o.current)==null||u.focus())},[]),a.useEffect(()=>{i()},[(l=o.current)==null?void 0:l.scrollHeight]),y.jsx(y.Fragment,{children:y.jsx("textarea",{...f,className:V("border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-600 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm ",r),ref:o})})}),ct=a.forwardRef(function({type:t="text",className:r="",isFocused:n=!1,...s},f){const c=a.useRef(null);return a.useImperativeHandle(f,()=>({focus:()=>{var o;return(o=c.current)==null?void 0:o.focus()}})),a.useEffect(()=>{var o;n&&((o=c.current)==null||o.focus())},[]),y.jsx("input",{...s,type:t,className:V("border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm accent-primary-500 focus:accent-primary-500",r),ref:c})});export{ye as C,ie as D,ot as I,ve as O,lt as S,ct as T,re as U,ut as a,it as b,xe as c,w as d,$ as e,H as f,pe as g,ae as h,U as i,L as l,T as o,me as p,Ze as q,Ie as s,Pe as t,E as u,fe as x,he as y};
