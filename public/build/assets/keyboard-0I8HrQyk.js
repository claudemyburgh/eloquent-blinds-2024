import{d as r}from"./index.esm-DfKTBl1y.js";import{e as u,f as o,l as i}from"./open-closed-CdzG23jP.js";var a;let d=(a=r.useId)!=null?a:function(){let e=u(),[n,t]=r.useState(e?()=>o.nextId():null);return i(()=>{n===null&&t(o.nextId())},[n]),n!=null?""+n:void 0};function m(e){return o.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function w(e){let n=e.parentElement,t=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(t=n),n=n.parentElement;let l=(n==null?void 0:n.getAttribute("disabled"))==="";return l&&c(t)?!1:l}function c(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}var s=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(s||{});export{d as I,s as a,m as o,w as r};