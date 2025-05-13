
import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SOFTSKILL</h3>
            <p className="text-gray-300">
              Школа программирования для тех, кто хочет изменить свою карьеру
              и освоить востребованные навыки.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Курсы</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Frontend
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Backend
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Full-stack
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Data Science
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Преподаватели
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Партнеры
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Блог
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="MapPin" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                <span className="text-gray-300">
                  Москва, ул. Примерная, 123
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                <span className="text-gray-300">info@softskill.ru</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SOFTSKILL. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
