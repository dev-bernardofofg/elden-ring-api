/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import { createContext, useState, useContext, useEffect } from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  // Recupera o estado inicial do localStorage (true ou false, ou padrão para true)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const storedState = localStorage.getItem("isSidebarOpen");
    return storedState !== null ? JSON.parse(storedState) : true;
  });

  // Atualiza o estado e salva no localStorage sempre que o estado mudar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("isSidebarOpen", JSON.stringify(newState));
      return newState;
    });
  };

  // Efeito para garantir que o estado seja persistido no localStorage ao carregar
  useEffect(() => {
    localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};
