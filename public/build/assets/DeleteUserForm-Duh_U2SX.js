import{r as l,W as w,j as e}from"./index.esm-DfKTBl1y.js";import{D as c,M as j,S as g}from"./Modal-AxkZVdV7.js";import{T as N,I as D}from"./TextInput-BBNg5xh3.js";import{I as k}from"./InputLabel-DbxdjfU3.js";import"./bundle-mjs-Bq6clSCD.js";import"./open-closed-rbID-roK.js";import"./transition-zm7TcBqq.js";import"./keyboard-C5ZTszdy.js";function F({className:d=""}){const[i,r]=l.useState(!1),a=l.useRef(null),{data:m,setData:u,delete:p,processing:x,reset:o,errors:y}=w({password:""}),f=()=>{r(!0)},h=t=>{t.preventDefault(),p(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>{var n;return(n=a.current)==null?void 0:n.focus()},onFinish:()=>o()})},s=()=>{r(!1),o()};return e.jsxs("section",{className:`space-y-6 ${d}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(c,{onClick:f,children:"Delete Account"}),e.jsx(j,{show:i,onClose:s,children:e.jsxs("form",{onSubmit:h,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-6",children:[e.jsx(k,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(N,{id:"password",type:"password",name:"password",ref:a,value:m.password,onChange:t=>u("password",t.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(D,{message:y.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(g,{onClick:s,children:"Cancel"}),e.jsx(c,{className:"ms-3",disabled:x,children:"Delete Account"})]})]})})]})}export{F as default};
