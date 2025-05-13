
import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const DashboardHeader: React.FC = () => {
  return (
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
  );
};

export default DashboardHeader;
