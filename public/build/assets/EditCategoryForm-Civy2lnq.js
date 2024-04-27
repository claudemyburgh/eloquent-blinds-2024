import{q as E,r as k,W as T,j as e}from"./index.esm-DfKTBl1y.js";import{C as p}from"./CharCounter-CDfEc41F.js";import{T as j,I as i,S as c,a as f}from"./TextInput-BBNg5xh3.js";import{I as o}from"./InputLabel-DbxdjfU3.js";import{S as L}from"./SaveSubmitButton-vLC3uGb3.js";import{s as P}from"./helpers-DDrnbA3y.js";import{_ as y}from"./index-B-0vEMHn.js";import{T as N}from"./ToastItem-Di5V-yUc.js";import"./bundle-mjs-Bq6clSCD.js";import"./PrimaryButton-CxXZdd90.js";import"./transition-DhRkQv_C.js";import"./open-closed-CdzG23jP.js";function b(s,u){return s.filter(n=>n.id===u?!1:(n.children&&n.children.length>0&&(n.children=b(n.children,u)),!0))}const B=()=>{var x,g,h,v;const{category:s,categories_list:u,galleries:n}=E().props,[m,S]=k.useState({body:(x=s.body)==null?void 0:x.length,slug:(g=s.slug)==null?void 0:g.length,excerpt:(h=s.excerpt)==null?void 0:h.length}),{data:l,setData:C,put:w,errors:a,processing:F,recentlySuccessful:I}=T({title:s.title||"",slug:s.slug||"",parent_id:s.parent_id||"",body:s.body||"",excerpt:s.excerpt||"",live:s.live,popular:s.popular,galleries:((v=s.galleries[0])==null?void 0:v.id)||""}),_=t=>{t.preventDefault(),w(route("dashboard.categories.update",s),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{y.custom(d=>e.jsx(N,{t:d,type:"success",title:"Success",message:"Category successfully updated",icon:"check"}))},onError:()=>{y.custom(d=>e.jsx(N,{t:d,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function r(t){t.preventDefault(),C({...l,[t.target.id]:t.target.value}),S({...m,[t.target.id]:t.target.value.length})}return e.jsxs("form",{className:"mt-6 space-y-6",onSubmit:_,children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"title",value:"Title"}),e.jsx(j,{id:"title",name:"title",value:l.title,onChange:r,type:"text",className:"mt-1 block w-full"}),e.jsx(i,{message:a.title,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"slug",value:"Slug"}),e.jsx(j,{id:"slug",name:"slug",value:P(l.slug),onChange:r,type:"text",className:"mt-1 block w-full"}),e.jsx(p,{count:m.slug,max:100}),e.jsx(i,{message:a.slug,className:"mt-4"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"parent_id",value:"Parent Id"}),e.jsxs(c,{id:"parent_id",name:"parent_id",defaultValue:l.parent_id,onChange:r,className:"mt-1 block w-full",children:[e.jsx("option",{value:"",children:"None"}),u&&b(u,s.id).map(t=>e.jsx("option",{value:t.id,children:t.title},t.uuid))]}),e.jsx(i,{message:a.parent_id,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"excerpt",value:"Excerpt"}),e.jsx(f,{id:"excerpt",name:"excerpt",value:l.excerpt,onChange:r,className:"mt-1 block min-h-[100px] w-full"}),e.jsx(p,{count:m.excerpt||0,max:500}),e.jsx(i,{message:a.excerpt,className:"mt-4"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"body",value:"Body"}),e.jsx(f,{id:"body",name:"body",value:l.body,onChange:r,className:"mt-1 block min-h-[200px] w-full"}),e.jsx(p,{count:m.body||0,max:2500}),e.jsx(i,{message:a.body,className:"mt-4"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"galleries",value:"Gallery"}),e.jsxs(c,{showValue:!0,id:"galleries",name:"galleries",className:"mt-1 w-full",value:l.galleries,onChange:r,children:[e.jsx("option",{value:"",children:"Select a gallery"}),n.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),e.jsx(i,{message:a.galleries,className:"mt-2"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"live",value:"Live"}),e.jsxs(c,{id:"live",name:"live",className:"mt-1 w-full",value:l.live,onChange:r,children:[e.jsx("option",{value:"1",children:"Live"}),e.jsx("option",{value:"0",children:"Not Live"})]}),e.jsx(i,{message:a.live,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"popular",value:"Popular"}),e.jsxs(c,{id:"popular",name:"popular",className:"mt-1 w-full",value:l.popular,onChange:r,children:[e.jsx("option",{value:"1",children:"Popular"}),e.jsx("option",{value:"0",children:"Not Popular"})]}),e.jsx(i,{message:a.popular,className:"mt-2"})]})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(L,{processing:F,recentlySuccessful:I})})]})},K=B;export{K as default};
