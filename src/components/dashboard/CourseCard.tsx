
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Course } from "@/types/dashboard";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
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

export default CourseCard;
