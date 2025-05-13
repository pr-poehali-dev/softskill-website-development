
export interface Course {
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

export interface StudentData {
  name: string;
  email: string;
  avatar: string;
  level: string;
  joinDate: string;
}
