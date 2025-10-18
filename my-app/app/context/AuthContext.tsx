"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  loggedIn: boolean;
  email: string;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const login = (email: string) => {
    setLoggedIn(true);
    setEmail(email);
  };

  const logout = () => {
    setLoggedIn(false);
    setEmail("");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
