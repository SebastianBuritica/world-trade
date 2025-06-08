// src/auth/containers/LoginContainer.container.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoginComponent } from "../components/Login.component";

export interface LoginContainerProps {
  onNavigateToRegister: () => void;
  onNavigateToForgotPassword: () => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({
  onNavigateToRegister,
  onNavigateToForgotPassword,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signIn } = useAuth();

  const handleLogin = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await signIn(email, password);
    } catch (error: any) {
      console.error("Error de inicio de sesión", error);
      alert(
        error.message ||
          "No se pudo iniciar sesión. Verifica tus credenciales.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (): Promise<void> => {
    alert("Funcionalidad de inicio de sesión con Google pendiente");
  };

  const handleFacebookLogin = async (): Promise<void> => {
    alert("Funcionalidad de inicio de sesión con Facebook pendiente");
  };

  return (
    <LoginComponent
      email={email}
      password={password}
      rememberMe={rememberMe}
      showPassword={showPassword}
      isLoading={isLoading}
      setEmail={setEmail}
      setPassword={setPassword}
      setRememberMe={setRememberMe}
      setShowPassword={setShowPassword}
      handleLogin={handleLogin}
      handleGoogleLogin={handleGoogleLogin}
      handleFacebookLogin={handleFacebookLogin}
      onNavigateToRegister={onNavigateToRegister}
      onNavigateToForgotPassword={onNavigateToForgotPassword}
    />
  );
};

export default LoginContainer;
