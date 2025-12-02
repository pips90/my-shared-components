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
      <SharedButton
        buttonText="Click Me!"
        size="small"
        onClick={() => console.log("Small Button haS Been Clicked!")}
      />
      <h2>Shared Medium Button Below</h2>
      <SharedButton
        buttonText="Click Me!"
        size="medium"
        onClick={() => console.log("Medium Button haS Been Clicked!")}
      />
      <h1>Shared Large Button Below</h1>
      <SharedButton
        buttonText="Click Me!"
        size="large"
        onClick={() => console.log("Large Button haS Been Clicked!")}
      />
      <h3>Shared Small Input Below</h3>
      <SharedInput
        type="text"
        placeholderText="Custom Input"
        size="small"
        onChange={(e) => console.log("Input is changing: ", e.target.value)}
      />
      <h2>Shared Medium Input Below</h2>
      <SharedInput
        type="text"
        placeholderText="Custom Input"
        size="medium"
        onChange={(e) => console.log("Input is changing: ", e.target.value)}
      />
      <h1>Shared Large Input Below</h1>
      <SharedInput
        type="text"
        placeholderText="Custom Input"
        size="large"
        onChange={(e) => console.log("Input is changing: ", e.target.value)}
      />
    </div>
  );
}

export default App;
