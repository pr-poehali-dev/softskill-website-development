
import React from "react";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-[#6E59A5]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white font-montserrat">
          Начните свой путь в программировании
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и наш консультант свяжется с вами, чтобы подобрать
          оптимальную программу обучения
        </p>
        <Button
          size="lg"
          className="bg-white text-[#6E59A5] hover:bg-gray-100"
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
