
import React from "react";
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/Header";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import CoursesTabs from "@/components/dashboard/CoursesTabs";
import { studentData } from "@/data/studentData";
import { coursesData } from "@/data/coursesData";

const Dashboard: React.FC = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen bg-[#F6F7FB]">
        {/* Боковая панель */}
        <Sidebar variant="sidebar" className="border-r border-gray-200">
          <DashboardSidebar studentData={studentData} />
        </Sidebar>
        
        {/* Основное содержимое */}
        <div className="flex-1 overflow-auto">
          <DashboardHeader />
          
          <main className="p-6">
            {/* Приветствие и информация */}
            <section className="mb-8">
              <WelcomeCard studentData={studentData} />
            </section>
            
            {/* Вкладки с курсами */}
            <CoursesTabs courses={coursesData} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
