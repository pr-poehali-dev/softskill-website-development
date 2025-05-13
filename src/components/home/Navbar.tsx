
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-[#6E59A5]">SOFTSKILL</h1>
        <div className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-gray-700 hover:text-[#9b87f5] transition-colors"
          >
            О нас
          </a>
          <a
            href="#courses"
            className="text-gray-700 hover:text-[#9b87f5] transition-colors"
          >
            Курсы
          </a>
          <a
            href="#reviews"
            className="text-gray-700 hover:text-[#9b87f5] transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#9b87f5] transition-colors"
          >
            Контакты
          </a>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-[#6E59A5] text-[#6E59A5]"
            onClick={() => navigate("/dashboard")}
          >
            Личный кабинет
          </Button>
          <Button className="bg-[#6E59A5] hover:bg-[#9b87f5]">
            Начать обучение
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
