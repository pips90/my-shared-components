import{j as i}from"./jsx-runtime.u17CrQMm.js";import{S as u}from"./SharedButton.CZQ69XO-.js";import{w as o,u as r,e as c}from"./index.7hC8YqaP.js";import"./styled-components.browser.esm.Dfd2szU4.js";import"./iframe.Cjf3KbyD.js";import"./preload-helper.PPVm8Dsz.js";import"./index.DrFu-skq.js";const y={title:"SharedButton component",component:u,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["small","medium","large"]},buttonText:{control:"text"},onClick:{action:"clicked"}},decorators:[e=>i.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:600,margin:"2rem auto",border:"1px solid #eee",padding:24},children:i.jsx(e,{})})],parameters:{docs:{description:{component:"The `SharedButton` component demonstrates usage with adjustable props."}}}},n={args:{size:"small",buttonText:"Small Button"},play:async({canvasElement:e})=>{const t=o(e);await r.click(t.getByText("Small Button")),c(t.getByText("Small Button")).toBeVisible()}},a={args:{size:"medium",buttonText:"Medium Button"},play:async({canvasElement:e})=>{const t=o(e);await r.click(t.getByText("Medium Button")),c(t.getByText("Medium Button")).toBeVisible()}},s={args:{size:"large",buttonText:"Large Button"},play:async({canvasElement:e})=>{const t=o(e);await r.click(t.getByText("Large Button")),c(t.getByText("Large Button")).toBeVisible()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    buttonText: "Small Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Small Button"));
    expect(canvas.getByText("Small Button")).toBeVisible();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    buttonText: "Medium Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Medium Button"));
    expect(canvas.getByText("Medium Button")).toBeVisible();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    buttonText: "Large Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Large Button"));
    expect(canvas.getByText("Large Button")).toBeVisible();
  }
}`,...s.parameters?.docs?.source}}};const v=["SmallButton","MediumButton","LargeButton"];export{s as LargeButton,a as MediumButton,n as SmallButton,v as __namedExportsOrder,y as default};
