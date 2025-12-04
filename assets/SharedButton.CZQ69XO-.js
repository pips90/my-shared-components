import{j as r}from"./jsx-runtime.u17CrQMm.js";import{d as n}from"./styled-components.browser.esm.Dfd2szU4.js";const a=n.button`
  width: 50%;
`,s=n.button`
  width: 75%;
`,u=n.button`
  width: 100%;
`,o=({buttonText:e,size:i,onClick:t})=>i==="small"?r.jsx(a,{onClick:t,children:e}):i==="medium"?r.jsx(s,{onClick:t,children:e}):r.jsx(u,{onClick:t,children:e});o.__docgenInfo={description:"",methods:[],displayName:"SharedButton",props:{buttonText:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{o as S};
