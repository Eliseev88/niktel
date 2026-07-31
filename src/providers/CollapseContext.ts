import { createContext } from "react";

interface CollapseContextType {
  isCollapsed: boolean;
  toggleCollapse: (value: boolean) => void;
}

export const CollapseContext = createContext<CollapseContextType | boolean>(true);
