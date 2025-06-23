import WorkSection from "@/components/WorkSection";
import React from "react";

export const metadata = {
  title: "Home | CODE JAX",
  description:
    "CODE JAX provides innovative software solutions to help your business grow. Build your future with us.",
};

const HomePage = () => {
  return (
    <div className="p-8 overflow-hidden">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <WorkSection />
    </div>
  );
};

export default HomePage;
