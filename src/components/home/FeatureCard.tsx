
import React from "react";
import Icon from "@/components/ui/icon";
import { FeatureType } from "@/types/feature";

interface FeatureCardProps {
  feature: FeatureType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6E59A5]/10 mb-4">
        <Icon name={feature.icon} className="text-[#6E59A5] w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 font-montserrat">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
