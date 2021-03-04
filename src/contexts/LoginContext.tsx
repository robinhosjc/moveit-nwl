import { createContext, ReactNode } from "react";

interface LoginContextData {
};

interface LoginProviderProps {
    children: ReactNode;
}

const LoginContext = createContext({} as LoginContextData);

function LoginProvier({ children }: LoginProviderProps) {}

export { LoginContext, LoginProvier };