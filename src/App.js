import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";
import Network from "./Components/Network";
import Solutions from "./Components/Solutions";

function App() {
  return (
    <Contain>
      <Header />
      <Middle />
      <Network />
      <Solutions />
    </Contain>
  );
}

export default App;
