import React, { FC, createContext, useEffect, useState } from "react";

import { Router } from "next/router";

export const AppContext = createContext({
  isNavSidebarOpen: false,
  setIsNavSidebarOpen: (isOpen: boolean) => {},
  error: "",
  setError: (error: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [isNavSidebarOpen, setIsNavSidebarOpen] = useState(false);
  const [error, setError] = useState("");

  Router.events.on("routeChangeStart", () => {
    setIsNavSidebarOpen(false);
  });

  // Clear error after 5 seconds to remove banner.
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        if (error) {
          setError("");
        }
      }, 5000);
    }
  }, [error]);

  return (
    <AppContext.Provider
      value={{
        isNavSidebarOpen,
        setIsNavSidebarOpen,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
