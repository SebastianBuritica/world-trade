// src/auth/screens/LoginScreen.tsx
import React from "react";
import { AuthScreenProps } from "../../navigation/types";
import LoginContainer from "../containers/Login.container";

const LoginScreen: React.FC<AuthScreenProps<"Login">> = ({ navigation }) => {
  return (
    <LoginContainer
      onNavigateToRegister={() => navigation.navigate("Register")}
      onNavigateToForgotPassword={() => navigation.navigate("ForgotPassword")}
    />
  );
};

export default LoginScreen;
