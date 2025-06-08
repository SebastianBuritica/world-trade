// src/auth/screens/LoginScreen.tsx
import React from "react";
import { AuthScreenProps } from "../../navigation/types";
import RegisterContainer from "../containers/Register.container";

const LoginScreen: React.FC<AuthScreenProps<"Register">> = ({ navigation }) => {
  return (
    <RegisterContainer onNavigateToLogin={() => navigation.navigate("Login")} />
  );
};

export default LoginScreen;
