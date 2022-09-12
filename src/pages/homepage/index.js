import "App.css";
import { BackGroundImage } from "styles/components/Header/Index";
import Header from "components/Header/Index";
import Transformation from "views/homepage/transformation";
import OurNumbers from "views/homepage/ourNumbers";
import Solutions from "views/homepage/solutions";
import Clients from "views/homepage/clients";
import Testimonials from "views/homepage/testimonials";
import OurBlog from "views/homepage/ourBlog";
import OurTeam from "views/homepage/ourTeam";
import Footer from "components/Footer/Index";
import Contactus from "views/homepage/contactUs";
const Index = () => {
  return (
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
};

export default Index;
