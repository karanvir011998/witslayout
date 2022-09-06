import "./App.css";
import Header from "./Views/Header";
import { BG } from "./styles/HeaderStyle";
import Intro from "./Views/Intro";
import Network from "./Views/Network";
import Solutions from "./Views/Solutions";
import Clients from "./Views/Clients";
import Testimonials from "./Views/Testimonials";
import OurBlog from "./Views/OurBlog";
import OurTeam from "./Views/OurTeam";
import Footer from "./Views/Footer";
import Contactus from "./Views/Contactus";
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
