import{j as m}from"./jsx-runtime.u17CrQMm.js";import{S as i}from"./SharedInput.BuGi-3wo.js";import{w as p,e as a,u}from"./index.CyVY-SHL.js";import"./styled-components.browser.esm.CKmrbC0N.js";import"./iframe.LbP3z-LV.js";import"./preload-helper.PPVm8Dsz.js";import"./index.DrFu-skq.js";const P={title:"SharedInput component",component:i,tags:["autodocs"],decorators:[e=>m.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:600,margin:"2rem auto",border:"1px solid #eee",padding:24},children:m.jsx(e,{})})],parameters:{docs:{description:{component:"The `SharedInput` component demonstrates the usage of the `SharedInput` components with props."}}}},d="small",g="medium",x="large",l="Small Input",n="Medium Input",o="Large Input",s={args:{size:d,placeholderText:l,type:"text",onChange:e=>console.log("Small input changed: ",e.target.value)},play:async({canvasElement:e})=>{const t=p(e);a(t.getByPlaceholderText("Small Input")).toBeVisible(),a(l).toEqual("Small Input"),await u.type(t.getByPlaceholderText(l),"I'm a small input"),a(t.getByPlaceholderText(l)).toHaveValue("I'm a small input")}},r={args:{size:g,placeholderText:n,type:"text",onChange:e=>console.log("Medium input changed: ",e.target.value)},play:async({canvasElement:e})=>{const t=p(e);a(t.getByPlaceholderText("Medium Input")).toBeVisible(),a(n).toEqual("Medium Input"),await u.type(t.getByPlaceholderText(n),"I'm a medium input"),a(t.getByPlaceholderText(n)).toHaveValue("I'm a medium input")}},c={args:{size:x,placeholderText:o,type:"text",onChange:e=>console.log("Large input changed: ",e.target.value)},play:async({canvasElement:e})=>{const t=p(e);a(t.getByPlaceholderText("Large Input")).toBeVisible(),a(o).toEqual("Large Input"),await u.type(t.getByPlaceholderText(o),"I'm a large input"),a(t.getByPlaceholderText(o)).toHaveValue("I'm a large input")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: smallInput,
    placeholderText: smallText,
    type: "text",
    onChange: e => console.log("Small input changed: ", e.target.value)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText("Small Input")).toBeVisible();
    expect(smallText).toEqual("Small Input");
    await userEvent.type(canvas.getByPlaceholderText(smallText), "I'm a small input");
    expect(canvas.getByPlaceholderText(smallText)).toHaveValue("I'm a small input");
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: mediumInput,
    placeholderText: mediumText,
    type: "text",
    onChange: e => console.log("Medium input changed: ", e.target.value)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText("Medium Input")).toBeVisible();
    expect(mediumText).toEqual("Medium Input");
    await userEvent.type(canvas.getByPlaceholderText(mediumText), "I'm a medium input");
    expect(canvas.getByPlaceholderText(mediumText)).toHaveValue("I'm a medium input");
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: largeInput,
    placeholderText: largeText,
    type: "text",
    onChange: e => console.log("Large input changed: ", e.target.value)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText("Large Input")).toBeVisible();
    expect(largeText).toEqual("Large Input");
    await userEvent.type(canvas.getByPlaceholderText(largeText), "I'm a large input");
    expect(canvas.getByPlaceholderText(largeText)).toHaveValue("I'm a large input");
  }
}`,...c.parameters?.docs?.source}}};const S=["SmallInput","MediumInput","LargeInput"];export{c as LargeInput,r as MediumInput,s as SmallInput,S as __namedExportsOrder,P as default};
