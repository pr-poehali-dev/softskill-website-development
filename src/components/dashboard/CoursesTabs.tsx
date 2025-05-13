
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import CourseCard from "./CourseCard";
import { Course } from "@/types/dashboard";

interface CoursesTabsProps {
  courses: Course[];
}

const CoursesTabs: React.FC<CoursesTabsProps> = ({ courses }) => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Функция для фильтрации курсов по вкладке
  const filterCourses = (tab: string) => {
    if (tab === "all") return courses;
    if (tab === "active") return courses.filter(course => course.status === "active");
    if (tab === "completed") return courses.filter(course => course.status === "completed");
    if (tab === "upcoming") return courses.filter(course => course.status === "upcoming");
    return courses;
  };
  
  const filteredCourses = filterCourses(activeTab);

  return (
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
  );
};

export default CoursesTabs;
