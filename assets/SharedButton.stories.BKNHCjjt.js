import{j as n}from"./jsx-runtime.u17CrQMm.js";import{S as r}from"./SharedButton.Dmt4weBQ.js";import{w as c,u,e as l}from"./index.CyVY-SHL.js";import"./styled-components.browser.esm.CKmrbC0N.js";import"./iframe.LbP3z-LV.js";import"./preload-helper.PPVm8Dsz.js";import"./index.DrFu-skq.js";const w={title:"SharedButton component",component:r,tags:["autodocs"],decorators:[t=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:600,margin:"2rem auto",border:"1px solid #eee",padding:24},children:n.jsx(t,{})})],parameters:{docs:{description:{component:"The `SharedButton` component demonstrates the usage of the `SharedButton` component with props."}}}},B="small",x="medium",g="large",i=()=>console.log("Button Clicked!"),m="Small Button",d="Medium Button",p="Large Button",a={render:()=>n.jsx(r,{size:B,onClick:i,buttonText:m}),play:async({canvasElement:t})=>{const e=c(t);await u.click(e.getByText("Small Button")),l(m).toEqual("Small Button")}},o={render:()=>n.jsx(r,{size:x,onClick:i,buttonText:d}),play:async({canvasElement:t})=>{const e=c(t);await u.click(e.getByText("Medium Button")),l(d).toEqual("Medium Button")}},s={render:()=>n.jsx(r,{size:g,onClick:i,buttonText:p}),play:async({canvasElement:t})=>{const e=c(t);await u.click(e.getByText("Large Button")),l(p).toEqual("Large Button")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SharedButton size={smallButton} onClick={onClick} buttonText={smallText} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Small Button"));
    expect(smallText).toEqual("Small Button");
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SharedButton size={mediumButton} onClick={onClick} buttonText={mediumText} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Medium Button"));
    expect(mediumText).toEqual("Medium Button");
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SharedButton size={largeButton} onClick={onClick} buttonText={largeText} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Large Button"));
    expect(largeText).toEqual("Large Button");
  }
}`,...s.parameters?.docs?.source}}};const C=["SmallButton","MediumButton","LargeButton"];export{s as LargeButton,o as MediumButton,a as SmallButton,C as __namedExportsOrder,w as default};
