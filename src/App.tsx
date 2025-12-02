import "./App.css";
import { SharedButton } from "./components/SharedButton/SharedButton";
import { SharedInput } from "./components/SharedInput/SharedInput";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <h3>Shared Small Button Below</h3>
      <SharedButton buttonText="Click Me!" size="small" />
      <h2>Shared Medium Button Below</h2>
      <SharedButton buttonText="Click Me!" size="medium" />
      <h1>Shared Large Button Below</h1>
      <SharedButton buttonText="Click Me!" size="large" />
      <h3>Shared Small Input Below</h3>
      <SharedInput type="text" placeholderText="Custom Input" size="small" />
      <h2>Shared Medium Input Below</h2>
      <SharedInput type="text" placeholderText="Custom Input" size="medium" />
      <h1>Shared Large Input Below</h1>
      <SharedInput type="text" placeholderText="Custom Input" size="large" />
    </div>
  );
}

export default App;
