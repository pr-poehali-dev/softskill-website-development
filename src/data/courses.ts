
import { CourseType } from "@/types/course";

export const coursesData: CourseType[] = [
  {
    title: "Frontend-разработчик",
    description: "Научитесь создавать современные веб-интерфейсы",
    icon: "Code",
    features: [
      "HTML, CSS, JavaScript",
      "React и современные фреймворки",
      "Адаптивная верстка и UX/UI",
      "3 месяца обучения",
      "Сертификат по окончании",
    ],
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
      "Помощь в трудоустройстве",
    ],
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
      "Гарантия трудоустройства",
    ],
  },
];
