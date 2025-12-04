import{j as r}from"./jsx-runtime.u17CrQMm.js";import{d as a}from"./styled-components.browser.esm.Dfd2szU4.js";const s=a.input`
  width: 50%;
`,m=a.input`
  width: 75%;
`,u=a.input`
  width: 100%;
`,l=({type:e,placeholderText:t,size:i,onChange:n})=>i==="small"?r.jsx(s,{type:e,placeholder:t,onChange:n}):i==="medium"?r.jsx(m,{type:e,placeholder:t,onChange:n}):r.jsx(u,{type:e,placeholder:t,onChange:n});l.__docgenInfo={description:"",methods:[],displayName:"SharedInput",props:{type:{required:!0,tsType:{name:"string"},description:""},placeholderText:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{l as S};
