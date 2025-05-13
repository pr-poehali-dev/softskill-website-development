
import React from "react";
import FeatureCard from "./FeatureCard";
import { featuresData } from "@/data/features";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#333333] font-montserrat">
          Почему выбирают <span className="text-[#6E59A5]">SOFTSKILL</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
