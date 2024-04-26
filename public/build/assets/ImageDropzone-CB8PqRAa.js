import{r as l,j as r,f as w,g as N,y as k}from"./index.esm-DfKTBl1y.js";import{t as F}from"./toString-6yS-aJAO.js";function S({title:a,titleId:t,...o},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},o),a?l.createElement("title",{id:t},a):null,l.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",clipRule:"evenodd"}))}const C=l.forwardRef(S),E=C,I=({file:a,...t})=>r.jsx("div",{...t,className:"rounded-xl border border-gray-300 bg-gray-100 p-2 text-gray-800 dark:border-gray-800  dark:bg-gray-900 dark:text-gray-100",children:r.jsxs("div",{className:"flex space-x-2.5",children:[r.jsx("div",{className:"h-14 w-14 flex-shrink-0 rounded bg-black ",children:r.jsx("img",{className:"aspect-square rounded",src:a.original_url,alt:a.name})}),r.jsxs("div",{className:"flex flex-shrink flex-col items-start justify-center text-xs",children:[r.jsx("div",{children:a.name}),r.jsxs("div",{children:["Size: ",a.size.formatBytes()]}),r.jsx(w,{as:"button",method:"delete",className:"text-primary-500 underline hover:text-primary-700",href:route("dashboard.media.delete",a.uuid),children:"Delete"})]})]})});var O=F,R=0;function T(a){var t=++R;return O(a)+t}var z=T;const A=N(z);function _({model:a,namedRoute:t}){const[o,s]=l.useState(!1),[B,d]=l.useState(null),[c,u]=l.useState({loaded:0,total:0,progress:0,bytes:0,rate:0,estimate:0,event:{isTrusted:!0},upload:!1,percentage:0}),g=[];function p(e){e.preventDefault(),s(!0)}function m(e){e.preventDefault(),s(!0)}function x(e){e.preventDefault(),s(!0)}function h(e){e.preventDefault(),s(!1)}function v(e){let n=g.push({id:A(),file:e,progress:0,failed:!1,loadedBytes:0,totalBytes:0,timeStarted:new Date().getTime(),secondsRemaining:0,finished:!1,cancelled:!1,xhr:null})-1;return g[n]}function j(e){e.preventDefault(),s(!1),d(e.dataTransfer.files),f(e.dataTransfer.files)}function y(e){d(e.target.files),f(e.target.files)}function f(e){for(let n=0;n<e.length;n++){const i=e[n];b(i)}}function b(e){const n=v(e),i=new FormData;i.append("id",a.id),i.append("image",n.file),k.post(route(t,a),i,{forceFormData:!1,preserveState:!0,headers:{"content-type":"multipart/form-data"},onProgress:D=>{u({...c,...D})},onSuccess:()=>{setTimeout(()=>{u({loaded:0,total:0,progress:0,bytes:0,rate:0,estimate:0,event:{isTrusted:!0},upload:!1,percentage:0})},1e3)}})}return r.jsx(r.Fragment,{children:r.jsxs("div",{children:[r.jsxs("div",{className:`relative my-6 min-h-[160px] rounded-lg border border-dashed border-gray-500 transition dark:border-gray-200
                  ${o?"cursor-grabbing opacity-100 shadow-lg shadow-gray-500/10":"border-gray-500 opacity-70 dark:border-gray-200"}
                  `,onDrag:p,onDrop:j,onDragOver:x,onDragLeave:h,onDragEnter:m,children:[r.jsxs("label",{htmlFor:"image",className:`absolute inset-0 flex flex-col items-center justify-center space-y-2 rounded-lg tracking-wide
                        ${o?" cursor-grabbing":"cursor-pointer"}
                    `,children:[r.jsx("span",{children:r.jsx(E,{className:"size-12"})}),r.jsxs("span",{children:[r.jsx("strong",{children:"Drop file to upload"})," or ",r.jsx("u",{children:"click to select"})]})]}),r.jsx("input",{onChange:y,className:"sr-only",type:"file",multiple:!0,name:"image[]",id:"image"})]}),c.percentage>0&&r.jsx("div",{className:"flex items-center justify-center pb-4",children:r.jsx("div",{className:"loader"})}),(a==null?void 0:a.media)&&r.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 ",children:a.media.map(e=>r.jsx(I,{file:e},e.uuid))})]})})}export{_ as I};
