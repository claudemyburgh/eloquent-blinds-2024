import{r as l,W as w,j as e}from"./index.esm-CxB9JuV7.js";import{D as c}from"./DangerButton-B_cJtKnb.js";import{T as j}from"./TextInput-DoWuG5mI.js";import{I as g}from"./InputError-CCfmAJ6l.js";import{I as N}from"./InputLabel-C3d1gjgo.js";import{S as D}from"./SecondaryButton-CyBNnkgL.js";import{M as k}from"./Modal-9CITGWqR.js";import"./bundle-mjs-Bq6clSCD.js";import"./hidden-DkorgCMm.js";import"./keyboard-OVBMbBnO.js";function M({className:d=""}){const[i,r]=l.useState(!1),o=l.useRef(null),{data:m,setData:u,delete:p,processing:x,reset:a,errors:f}=w({password:""}),y=()=>{r(!0)},h=t=>{t.preventDefault(),p(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>{var n;return(n=o.current)==null?void 0:n.focus()},onFinish:()=>a()})},s=()=>{r(!1),a()};return e.jsxs("section",{className:`space-y-6 ${d}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(c,{onClick:y,children:"Delete Account"}),e.jsx(k,{show:i,onClose:s,children:e.jsxs("form",{onSubmit:h,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-6",children:[e.jsx(N,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(j,{id:"password",type:"password",name:"password",ref:o,value:m.password,onChange:t=>u("password",t.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(g,{message:f.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(D,{onClick:s,children:"Cancel"}),e.jsx(c,{className:"ms-3",disabled:x,children:"Delete Account"})]})]})})]})}export{M as default};
