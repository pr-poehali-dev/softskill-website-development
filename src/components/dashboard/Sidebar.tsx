
import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { StudentData } from "@/types/dashboard";

interface SidebarContentProps {
  studentData: StudentData;
}

const DashboardSidebar: React.FC<SidebarContentProps> = ({ studentData }) => {
  const navigate = useNavigate();
  
  return (
    <>
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
    </>
  );
};

export default DashboardSidebar;
