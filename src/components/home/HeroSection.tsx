
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#6E59A5]/10 to-[#F6F7FB]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333] font-montserrat">
            Освой программирование{" "}
            <span className="text-[#6E59A5]">с нуля до профи</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Практические навыки, актуальные технологии, поддержка менторов и
            гарантированное трудоустройство
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#6E59A5] hover:bg-[#9b87f5] px-8"
            >
              Выбрать курс
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#6E59A5] text-[#6E59A5]"
            >
              Бесплатная консультация
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Обучение программированию"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
