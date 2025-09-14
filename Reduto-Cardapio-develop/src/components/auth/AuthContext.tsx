import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função simulada de login
  const login = async (username: string, password: string): Promise<boolean> => {
    // Aqui você faria a chamada para a sua API
    // Por enquanto, vamos simular uma verificação simples
    if (username === "admin" && password === "12345%") {
      setIsAuthenticated(true);
      return true;
    }
    setIsAuthenticated(false);
    return false;
  };

  const value = { isAuthenticated, login };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};