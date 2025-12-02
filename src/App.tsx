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
      <h1>Shared Small Button Below</h1>
      <SharedButton buttonText="Click Me!" size="small" />
      <h1>Shared Medium Button Below</h1>
      <SharedButton buttonText="Click Me!" size="medium" />
      <h1>Shared Large Button Below</h1>
      <SharedButton buttonText="Click Me!" size="large" />
      <h1>Shared Input Below</h1>
      <SharedInput type="text" placeholderText="Custom Input" />
    </div>
  );
}

export default App;
