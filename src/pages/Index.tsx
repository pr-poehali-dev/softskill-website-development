
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      {/* Навигация */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-[#6E59A5]">SOFTSKILL</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-[#9b87f5] transition-colors">О нас</a>
            <a href="#courses" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Курсы</a>
            <a href="#reviews" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Контакты</a>
          </div>
          <Button className="bg-[#6E59A5] hover:bg-[#9b87f5]">Начать обучение</Button>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="py-20 bg-gradient-to-br from-[#6E59A5]/10 to-[#F6F7FB]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333] font-montserrat">
              Освой программирование <span className="text-[#6E59A5]">с нуля до профи</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Практические навыки, актуальные технологии, поддержка менторов 
              и гарантированное трудоустройство
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#6E59A5] hover:bg-[#9b87f5] px-8">
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="border-[#6E59A5] text-[#6E59A5]">
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

      {/* Секция курсов */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333] font-montserrat">
            Наши <span className="text-[#6E59A5]">курсы</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6E59A5]/10 mb-4">
                    <Icon name={course.icon} className="text-[#6E59A5] w-6 h-6" />
                  </div>
                  <CardTitle className="font-montserrat">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Icon name="Check" className="mr-2 h-5 w-5 text-[#6E59A5] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#6E59A5] hover:bg-[#9b87f5]">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 bg-[#F6F7FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333] font-montserrat">
            Почему выбирают <span className="text-[#6E59A5]">SOFTSKILL</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6E59A5]/10 mb-4">
                  <Icon name={feature.icon} className="text-[#6E59A5] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция отзывов */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333] font-montserrat">
            Отзывы наших <span className="text-[#6E59A5]">выпускников</span>
          </h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6">
                    <div className="bg-[#F6F7FB] p-8 rounded-lg relative">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">{testimonial.text}</p>
                      <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#F6F7FB] transform rotate-45"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* Контактная форма */}
      <section id="contact" className="py-16 bg-[#6E59A5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white font-montserrat">
            Начните свой путь в программировании
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и наш консультант свяжется с вами, 
            чтобы подобрать оптимальную программу обучения
          </p>
          <Button size="lg" className="bg-white text-[#6E59A5] hover:bg-gray-100">
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Футер */}
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
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Frontend</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Backend</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Full-stack</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Science</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Партнеры</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                  <span className="text-gray-300">Москва, ул. Примерная, 123</span>
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
    </div>
  );
};

// Данные для карточек курсов
const courses = [
  {
    title: "Frontend-разработчик",
    description: "Научитесь создавать современные веб-интерфейсы",
    icon: "Code",
    features: [
      "HTML, CSS, JavaScript",
      "React и современные фреймворки",
      "Адаптивная верстка и UX/UI",
      "3 месяца обучения",
      "Сертификат по окончании"
    ]
  },
  {
    title: "Backend-разработчик",
    description: "Освойте серверную разработку и базы данных",
    icon: "Database",
    features: [
      "Node.js, Express, MongoDB",
      "REST API и GraphQL",
      "Архитектура приложений",
      "4 месяца обучения",
      "Помощь в трудоустройстве"
    ]
  },
  {
    title: "Full-stack разработчик",
    description: "Станьте универсальным специалистом",
    icon: "Layers",
    features: [
      "Frontend + Backend разработка",
      "DevOps основы",
      "Проектная работа в команде",
      "6 месяцев обучения",
      "Гарантия трудоустройства"
    ]
  }
];

// Данные для преимуществ
const features = [
  {
    title: "Практический подход",
    description: "80% времени — практика на реальных проектах под руководством опытных менторов",
    icon: "Hammer"
  },
  {
    title: "Актуальные технологии",
    description: "Постоянно обновляемые программы на основе требований IT-рынка",
    icon: "Zap"
  },
  {
    title: "Личный ментор",
    description: "Каждый студент получает поддержку и обратную связь от опытного разработчика",
    icon: "Users"
  },
  {
    title: "Стажировка в компаниях",
    description: "Возможность пройти стажировку у наших партнеров с перспективой трудоустройства",
    icon: "Briefcase"
  },
  {
    title: "Гибкий график",
    description: "Обучение в удобное время — вечерние занятия и записи всех лекций",
    icon: "Clock"
  },
  {
    title: "Сообщество",
    description: "Доступ к сообществу выпускников и нетворкинг с профессионалами отрасли",
    icon: "Network"
  }
];

// Данные для отзывов
const testimonials = [
  {
    name: "Алексей Петров",
    role: "Junior Frontend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    text: "После курса Frontend-разработки я смог устроиться на работу в IT-компанию. Преподаватели дали не только теоретические знания, но и научили решать реальные задачи, с которыми я теперь сталкиваюсь каждый день."
  },
  {
    name: "Мария Иванова",
    role: "Full-stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    text: "SOFTSKILL полностью изменил мою жизнь. Я была экономистом, а теперь работаю разработчиком в крупной компании. Обучение было интенсивным, но поддержка менторов и структурированная программа помогли мне успешно сменить профессию."
  },
  {
    name: "Дмитрий Смирнов",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    text: "Я пришел с небольшим опытом программирования, но благодаря курсу по Backend-разработке смог значительно улучшить свои навыки. Особенно ценными были проектные работы и обратная связь от ментора по моему коду."
  }
];

export default Index;
