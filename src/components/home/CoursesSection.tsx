
import React from "react";
import CourseCard from "./CourseCard";
import { coursesData } from "@/data/courses";

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#333333] font-montserrat">
          Наши <span className="text-[#6E59A5]">курсы</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
