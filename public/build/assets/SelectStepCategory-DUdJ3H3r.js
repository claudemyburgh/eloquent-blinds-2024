import{j as t,r as p}from"./index.esm-DfKTBl1y.js";import{S as s}from"./TextInput-BBNg5xh3.js";const x=({categories:l,...o})=>t.jsxs(s,{...o,className:"mt-1 block w-full text-gray-600",children:[t.jsx("option",{value:"",children:"Select Category"}),l&&l.map((e,i)=>t.jsx(p.Fragment,{children:e.children.length?t.jsx("optgroup",{label:e.title,children:e.children.map((r,n)=>t.jsx("option",{value:r.id,children:r.title},n))},e.uuid+"-top"):t.jsx("option",{value:e.id,children:e.title},e.uuid+"-opt")},i))]});export{x as S};