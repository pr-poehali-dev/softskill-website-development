
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { StudentData } from "@/types/dashboard";

interface WelcomeCardProps {
  studentData: StudentData;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ studentData }) => {
  return (
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
  );
};

export default WelcomeCard;
