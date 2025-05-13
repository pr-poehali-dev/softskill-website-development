
import { Course } from "@/types/dashboard";

export const coursesData: Course[] = [
  {
    id: "frontend-1",
    title: "Frontend-разработчик",
    description: "Основы HTML, CSS, JavaScript и React",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    progress: 45,
    lessons: 24,
    completedLessons: 10,
    category: "frontend",
    status: "active",
    nextLesson: {
      title: "Основы React: компоненты и пропсы",
      date: "20 мая, 19:00",
    },
  },
  {
    id: "git-basics",
    title: "Основы Git",
    description: "Система контроля версий Git и GitHub",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    progress: 100,
    lessons: 8,
    completedLessons: 8,
    category: "tools",
    status: "completed",
  },
  {
    id: "backend-nodejs",
    title: "Backend: Node.js",
    description: "Серверная разработка на Node.js и Express",
    image: "https://images.unsplash.com/photo-1527689368864-4dbcf45a1f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    progress: 0,
    lessons: 16,
    completedLessons: 0,
    category: "backend",
    status: "upcoming",
    nextLesson: {
      title: "Введение в Node.js",
      date: "1 июня, 19:00",
    },
  },
  {
    id: "database-sql",
    title: "Базы данных: SQL",
    description: "Основы реляционных баз данных и SQL",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    progress: 65,
    lessons: 12,
    completedLessons: 7,
    category: "database",
    status: "active",
    nextLesson: {
      title: "Сложные запросы JOIN",
      date: "22 мая, 19:00",
    },
  },
];
