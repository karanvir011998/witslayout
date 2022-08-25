import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";
import Network from "./Components/Network";

function App() {
  return (
    <Contain>
      <Header />
      <Middle />
      <Network />
    </Contain>
  );
}

export default App;
