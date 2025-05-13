
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { CourseType } from "@/types/course";

interface CourseCardProps {
  course: CourseType;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
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
              <Icon
                name="Check"
                className="mr-2 h-5 w-5 text-[#6E59A5] shrink-0 mt-0.5"
              />
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
  );
};

export default CourseCard;
