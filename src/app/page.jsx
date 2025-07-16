import Head from "next/head";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Review from "@/components/landing/Review";
import Footer from "@/components/landing/Footer";

import React from "react";
import OurServices from "@/components/landing/OurServices";

export const metadata = {
  title: "Home | CODE JAX",
  description:
    "CODE JAX provides innovative software solutions to help your business grow. Build your future with us.",
};

const HomePage = () => {
  return (
    <>
      <section>
        <Hero /> {/*ini home page*/}
      </section>
      <section>
        <Services />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
