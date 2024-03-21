import { Fragment } from "react";

import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Services from "../components/service/service";
import Article from "../components/articles/article";
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer";


const HomePage = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
        <About />
        <Services />
        <Article />
        <Contact />
        <Footer />
    </Fragment>
  )
}

export default HomePage;