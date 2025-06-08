import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../auth/screens/LoginScreen";
// import ForgotPasswordScreen from "../auth/screens/ForgotPasswordScreen";
import { AuthStackParamList } from "./types";
import RegisterScreen from "../auth/screens/RegisterScreen";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
