// src/components/auth/Login.component.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { PasswordInput } from "../../components/auth/PasswordInput";
import {
  colors,
  spacing,
  borderRadius,
  globalStyles,
} from "../../styles/theme";
import { loginStyles } from "../styles/Login.styles";

export interface LoginComponentProps {
  email: string;
  password: string;
  rememberMe: boolean;
  showPassword: boolean;
  isLoading: boolean;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRememberMe: (value: boolean) => void;
  setShowPassword: (value: boolean) => void;
  handleLogin: () => Promise<void>;
  handleGoogleLogin: () => Promise<void>;
  handleFacebookLogin: () => Promise<void>;
  onNavigateToRegister: () => void;
  onNavigateToForgotPassword: () => void;
}

export const LoginComponent: React.FC<LoginComponentProps> = ({
  email,
  password,
  rememberMe,
  showPassword,
  isLoading,
  setEmail,
  setPassword,
  setRememberMe,
  setShowPassword,
  handleLogin,
  handleGoogleLogin,
  handleFacebookLogin,
  onNavigateToRegister,
  onNavigateToForgotPassword,
}) => {
  return (
    <SafeAreaView style={loginStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={loginStyles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={loginStyles.scrollContainer}>
          {/* Header Section */}
          <AuthHeader
            title="Sign in"
            logoSource={require("../../../assets/favicon.png")}
            subtitle={
              <View style={loginStyles.signupContainer}>
                <Text style={loginStyles.signupText}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={onNavigateToRegister}>
                  <Text style={loginStyles.signupLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            }
          />

          {/* Form Section */}
          <View style={loginStyles.formContainer}>
            <Text style={loginStyles.label}>Email</Text>
            <TextInput
              style={loginStyles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="email@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            <PasswordInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            <View style={loginStyles.optionsRow}>
              <TouchableOpacity
                style={loginStyles.checkboxContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View
                  style={[
                    loginStyles.checkbox,
                    rememberMe && loginStyles.checkboxChecked,
                  ]}
                >
                  {rememberMe && (
                    <Ionicons name="checkmark" size={14} color="white" />
                  )}
                </View>
                <Text style={loginStyles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onNavigateToForgotPassword}>
                <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                loginStyles.loginButton,
                isLoading && loginStyles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={loginStyles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <View style={loginStyles.divider}>
              <View style={loginStyles.dividerLine} />
              <Text style={loginStyles.dividerText}>Or login with</Text>
              <View style={loginStyles.dividerLine} />
            </View>

            <View style={loginStyles.socialButtonsContainer}>
              <TouchableOpacity
                style={loginStyles.socialButton}
                onPress={handleGoogleLogin}
              >
                <Image
                  source={require("../../../assets/favicon.png")}
                  style={loginStyles.socialIcon}
                />
                <Text style={loginStyles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={loginStyles.socialButton}
                onPress={handleFacebookLogin}
              >
                <Image
                  source={require("../../../assets/favicon.png")}
                  style={loginStyles.socialIcon}
                />
                <Text style={loginStyles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>

            <Text style={loginStyles.termsText}>
              By signing up, you agree to the{" "}
              <Text style={loginStyles.termsLink}>Terms of Service</Text> and{" "}
              <Text style={loginStyles.termsLink}>
                Data Processing Agreement
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
