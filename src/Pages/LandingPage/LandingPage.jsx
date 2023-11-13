import Banner from "../../Components/Banner/index.jsx";
import Header from "../../Components/Header/index.jsx";

import BoxBlue from "../../Components/boxblue/index.jsx";
import Footer from "../../Components/Footer/index.jsx";
import Testimoni from "../../Components/Testimoni/index.jsx";
import WhyUs from "../../Components/WhyUs/index.jsx";

import OurService from "../../Components/Service/index.jsx";
import Faq from "../../Components/Faq/index.jsx";
import Button from "../../Components/button/index.jsx";
import NotFound from "../notFound/index.jsx";

function LandingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Button />
      <OurService />
      <WhyUs />
      <Testimoni />
      <BoxBlue />
      <Faq />
      <Footer />
    </div>
  );
}

export default LandingPage;
