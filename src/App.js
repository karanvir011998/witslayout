import "./App.css";
import Header from "./Components/Header";
import { BG } from "./styles/HeaderStyle";
import Intro from "./Components/Intro";
import Network from "./Components/Network";
import Solutions from "./Components/Solutions";
import Clients from "./Components/Clients";
import Testimonials from "./Components/Testimonials";
import OurBlog from "./Components/OurBlog";
import OurTeam from "./Components/OurTeam";
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
function App() {
  return (
    <BG>
      <Header />
      <Intro />
      <Network />
      <Solutions />
      <Clients />
      <Testimonials></Testimonials>
      <OurBlog />
      <OurTeam />
      <Contactus />
      <Footer />
    </BG>
  );
}

export default App;
