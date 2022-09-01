import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";
import Network from "./Components/Network";
import Solutions from "./Components/Solutions";
import Clients from "./Components/Clients";
import Testimonials from "./Components/Testimonials";
import OurBlog from "./Components/OurBlog";
import OurTeam from "./Components/OurTeam";
import Contact from "./Components/Contact";
function App() {
  return (
    <Contain>
      <Header />
      <Middle />
      <Network />
      <Solutions />
      <Clients></Clients>
      <Testimonials></Testimonials>
      <OurBlog></OurBlog>
      <OurTeam></OurTeam>
      <Contact></Contact>
    </Contain>
  );
}

export default App;
