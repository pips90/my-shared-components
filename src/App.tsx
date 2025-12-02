import "./App.css";
import { SharedButton } from "./components/SharedButton/SharedButton";
import { SharedInput } from "./components/SharedInput/SharedInput";

function App() {
  return (
    <>
      <h1>Shared Button Below</h1>
      <SharedButton buttonText="Click Me!" />
      <h1>Shared Input Below</h1>
      <SharedInput type="text" placeholderText="Custom Input" />
    </>
  );
}

export default App;
