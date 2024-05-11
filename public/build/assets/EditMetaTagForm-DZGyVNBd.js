import{q as N,r as y,W as C,j as t}from"./index.esm-CxB9JuV7.js";import{C as d}from"./CharCounter-DMvxk5nY.js";import{T as g,a as T}from"./TextInput-DoWuG5mI.js";import{I as m}from"./InputError-CCfmAJ6l.js";import{I as n}from"./InputLabel-C3d1gjgo.js";import{S as w}from"./SaveSubmitButton-U6020PzT.js";import{s as E}from"./helpers-BO3HO2Ip.js";import{_ as x}from"./index-CCKphjp8.js";import{T as j}from"./ToastItem-BXgzk1yG.js";import F from"./MetaCard-CI8ysYz5.js";import"./toString-BWNz2xsr.js";import{I as k}from"./ImageDropzone-B863Vr0K.js";import"./bundle-mjs-Bq6clSCD.js";import"./PrimaryButton-B99M2kKG.js";import"./SecondaryButton-CyBNnkgL.js";const P=()=>{var u,c,p;const{tag:e}=N().props,[a,h]=y.useState({title:(u=e.title)==null?void 0:u.length,description:(c=e.description)==null?void 0:c.length,slug:(p=e.slug)==null?void 0:p.length}),{data:r,setData:f,put:v,errors:o,processing:S,recentlySuccessful:b}=C({title:e.title||"",slug:e.slug||"",description:e.description||"",media:e.media||"/img/meta/eloquent.jpg"}),I=s=>{s.preventDefault(),v(route("dashboard.meta-tag.update",e),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{x.custom(i=>t.jsx(j,{t:i,type:"success",title:"Success",message:"Tag successfully updated",icon:"check"}))},onError:()=>{x.custom(i=>t.jsx(j,{t:i,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function l(s){s.preventDefault(),f({...r,[s.target.id]:s.target.value}),h({...a,[s.target.id]:s.target.value.length})}return t.jsxs(t.Fragment,{children:[t.jsx(F,{data:r,showButtons:!0}),t.jsxs("div",{className:"panel",children:[t.jsx(k,{model:e,namedRoute:"dashboard.meta-tag.upload"}),t.jsxs("form",{className:"mt-6 space-y-6",onSubmit:I,children:[t.jsxs("div",{children:[t.jsx(n,{htmlFor:"title",value:"Title"}),t.jsx(g,{id:"title",name:"title",value:r.title,onChange:l,type:"text",className:"mt-1 block w-full"}),t.jsx(m,{message:o.title,className:"mt-2"})]}),t.jsxs("div",{children:[t.jsx(n,{htmlFor:"slug",value:"Slug"}),t.jsx(g,{id:"slug",name:"slug",value:E(r.slug),onChange:l,type:"text",className:"mt-1 block w-full"}),t.jsx(d,{count:a.slug,max:100}),t.jsx(m,{message:o.slug,className:"mt-4"})]}),t.jsxs("div",{children:[t.jsx(n,{htmlFor:"description",value:"Excerpt"}),t.jsx(T,{id:"description",name:"description",value:r.description,onChange:l,className:"mt-1 block min-h-[100px] w-full"}),t.jsx(d,{count:a.description||0,max:500}),t.jsx(m,{message:o.description,className:"mt-4"})]}),t.jsx("div",{className:"flex items-center justify-between",children:t.jsx(w,{processing:S,recentlySuccessful:b})})]})]})]})};export{P as default};