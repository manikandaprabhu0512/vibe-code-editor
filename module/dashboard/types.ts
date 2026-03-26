import type { TemplateFile, UserRole } from "@prisma/client";

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string | null;
  template: TemplateFile;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: User;
  Starmark: { isMarked: boolean }[];
}
