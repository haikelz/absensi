import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface StudentProps {
  id: string;
  nim: string;
  email: string;
  full_name: string;
}

export interface AdminProps {
  id: string;
  full_name: string;
  username: string;
  password: string;
}
