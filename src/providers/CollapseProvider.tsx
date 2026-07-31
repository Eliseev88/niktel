import { type ReactNode, useState } from "react";
import { CollapseContext } from "./CollapseContext.ts";

interface CollapseProviderProps {
	children: ReactNode;
}

export const CollapseProvider = ({ children }: CollapseProviderProps) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed((prevState => !prevState));
	}

	return (
		<CollapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
			{children}
		</CollapseContext.Provider>
	)
}