import "App.css";
import { BackGroundImage } from "styles/components/Header";
import Header from "components/Header";
import Transformation from "views/homepage/transformation";
import OurNumbers from "views/homepage/ourNumbers";
import Solutions from "views/homepage/solutions";
import Clients from "views/homepage/clients";
import Testimonials from "views/homepage/testimonials";
import OurBlog from "views/homepage/ourBlog";
import OurTeam from "views/homepage/ourTeam";
import Footer from "components/Footer";
import Contactus from "views/homepage/contactUs";
const Index = () => (
  <>
    <BackGroundImage>
      <Header />
      <Transformation />
      <OurNumbers />
      <Solutions />
      <Clients />
      <Testimonials />
      <OurBlog />
      <OurTeam />
      <Contactus />
      <Footer />
    </BackGroundImage>
  </>
);

export default Index;
