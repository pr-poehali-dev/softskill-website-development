
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Определение типов данных
interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  lessons: number;
  completedLessons: number;
  category: string;
  status: "active" | "completed" | "upcoming";
  nextLesson?: {
    title: string;
    date: string;
  };
}

// Макет данных ученика
const studentData = {
  name: "Иван Иванов",
  email: "ivan@example.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
  level: "Начинающий",
  joinDate: "Октябрь 2023",
};

// Макет данных курсов
const coursesData: Course[] = [
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  
  // Функция для фильтрации курсов по вкладке
  const filterCourses = (tab: string) => {
    if (tab === "all") return coursesData;
    if (tab === "active") return coursesData.filter(course => course.status === "active");
    if (tab === "completed") return coursesData.filter(course => course.status === "completed");
    if (tab === "upcoming") return coursesData.filter(course => course.status === "upcoming");
    return coursesData;
  };
  
  const filteredCourses = filterCourses(activeTab);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen bg-[#F6F7FB]">
        {/* Боковая панель */}
        <Sidebar variant="sidebar" className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-[#6E59A5] flex items-center justify-center text-white font-bold">
                S
              </div>
              <h2 className="font-bold text-xl text-[#6E59A5]">SOFTSKILL</h2>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={true} tooltip="Дашборд">
                  <Icon name="LayoutDashboard" className="mr-2" />
                  Дашборд
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Мои курсы">
                  <Icon name="BookOpen" className="mr-2" />
                  Мои курсы
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Расписание">
                  <Icon name="Calendar" className="mr-2" />
                  Расписание
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Задания">
                  <Icon name="FileText" className="mr-2" />
                  Задания
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Сертификаты">
                  <Icon name="Award" className="mr-2" />
                  Сертификаты
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Настройки">
                  <Icon name="Settings" className="mr-2" />
                  Настройки
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={studentData.avatar} alt={studentData.name} />
                <AvatarFallback>{studentData.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="font-medium truncate">{studentData.name}</p>
                <p className="text-xs text-muted-foreground truncate">{studentData.email}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <Icon name="LogOut" className="h-5 w-5" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        {/* Основное содержимое */}
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-[#333333]">Личный кабинет</h1>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Bell" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="HelpCircle" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            {/* Приветствие и информация */}
            <section className="mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-2xl font-bold mb-2">Привет, {studentData.name}! 👋</h2>
                      <p className="text-gray-600">
                        Продолжайте обучение. У вас есть запланированные занятия на этой неделе.
                      </p>
                    </div>
                    
                    <div className="bg-[#6E59A5]/10 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Icon name="Award" className="text-[#6E59A5] mr-2" />
                        <span className="font-medium">Уровень: {studentData.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Calendar" className="text-[#6E59A5] mr-2" />
                        <span>С нами с {studentData.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Вкладки с курсами */}
            <section>
              <h2 className="text-xl font-bold mb-4">Мои курсы</h2>
              
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all">Все курсы</TabsTrigger>
                  <TabsTrigger value="active">Активные</TabsTrigger>
                  <TabsTrigger value="completed">Завершенные</TabsTrigger>
                  <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                  
                  {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                      <Icon name="Search" className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-600 mb-2">Нет курсов</h3>
                      <p className="text-gray-500">
                        В этой категории нет доступных курсов.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

// Компонент карточки курса
const CourseCard = ({ course }: { course: Course }) => {
  // Определяем цвет и текст статуса
  const statusConfig = {
    active: { color: "bg-green-100 text-green-800", text: "Активный" },
    completed: { color: "bg-blue-100 text-blue-800", text: "Завершен" },
    upcoming: { color: "bg-orange-100 text-orange-800", text: "Скоро" },
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${statusConfig[course.status].color}`}
        >
          {statusConfig[course.status].text}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Прогресс</span>
            <span className="font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>{course.completedLessons} из {course.lessons} уроков</span>
        </div>
        
        {course.nextLesson && (
          <div className="mt-4 bg-[#F6F7FB] p-3 rounded-md">
            <p className="text-xs text-gray-500 mb-1">Следующий урок:</p>
            <p className="text-sm font-medium mb-1">{course.nextLesson.title}</p>
            <div className="flex items-center text-xs text-gray-600">
              <Icon name="Clock" className="h-3 w-3 mr-1" />
              <span>{course.nextLesson.date}</span>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-[#6E59A5] hover:bg-[#9b87f5]">
          {course.status === "upcoming" ? "Начать курс" : "Продолжить обучение"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Dashboard;
