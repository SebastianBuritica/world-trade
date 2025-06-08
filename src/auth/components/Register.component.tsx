// src/components/auth/Register.component.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PasswordInput } from "../../components/auth/PasswordInput";
import DateTimePicker from "react-native-date-picker";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { registerStyles } from "../styles/Register.styles";

export interface RegisterComponentProps {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  phoneNumber: string;
  password: string;
  showPassword: boolean;
  showDatePicker: boolean;
  isLoading: boolean;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setDateOfBirth: (value: Date) => void;
  setPhoneNumber: (value: string) => void;
  setPassword: (value: string) => void;
  setShowPassword: (value: boolean) => void;
  setShowDatePicker: (value: boolean) => void;
  handleRegister: () => Promise<void>;
  onNavigateToLogin: () => void;
}

export const RegisterComponent: React.FC<RegisterComponentProps> = ({
  firstName,
  lastName,
  email,
  dateOfBirth,
  phoneNumber,
  password,
  showPassword,
  showDatePicker,
  isLoading,
  setFirstName,
  setLastName,
  setEmail,
  setDateOfBirth,
  setPhoneNumber,
  setPassword,
  setShowPassword,
  setShowDatePicker,
  handleRegister,
  onNavigateToLogin,
}) => {
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <SafeAreaView style={registerStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={registerStyles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={registerStyles.scrollContainer}>
          {/* Header */}
          <AuthHeader
            title="Register"
            logoSource={require("../../../assets/favicon.png")}
            subtitle={
              <View style={registerStyles.signupContainer}>
                <Text style={registerStyles.signupText}>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={onNavigateToLogin}>
                  <Text style={registerStyles.signupLink}>Login here!</Text>
                </TouchableOpacity>
              </View>
            }
          />

          {/* Form */}
          <View style={registerStyles.formContainer}>
            {/* Name Fields */}
            <View style={registerStyles.nameContainer}>
              <View style={registerStyles.nameField}>
                <Text style={registerStyles.label}>First Name</Text>
                <TextInput
                  style={registerStyles.input}
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First Name"
                />
              </View>
              <View style={registerStyles.nameField}>
                <Text style={registerStyles.label}>Last Name</Text>
                <TextInput
                  style={registerStyles.input}
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last Name"
                />
              </View>
            </View>

            {/* Email */}
            <Text style={registerStyles.label}>Email</Text>
            <TextInput
              style={registerStyles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="email@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            {/* Date of Birth */}
            <Text style={registerStyles.label}>Birth of date</Text>
            <TouchableOpacity
              style={registerStyles.datePickerButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={registerStyles.dateText}>
                {formatDate(dateOfBirth)}
              </Text>
              <Ionicons name="calendar-outline" size={20} color="#999" />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                modal
                open={showDatePicker}
                date={dateOfBirth}
                onConfirm={(date) => {
                  setShowDatePicker(false);
                  setDateOfBirth(date);
                }}
                onCancel={() => setShowDatePicker(false)}
                mode="date"
                minimumDate={new Date(1900, 0, 1)}
                maximumDate={new Date()}
              />
            )}

            {/* Phone Number */}
            <Text style={registerStyles.label}>Phone Number</Text>
            <View style={registerStyles.phoneContainer}>
              <View style={registerStyles.countryCode}>
                <Image
                  source={require("../../../assets/favicon.png")}
                  style={registerStyles.flagIcon}
                />
                <Text style={registerStyles.countryCodeText}>+1</Text>
                <Ionicons name="chevron-down" size={16} color="#999" />
              </View>
              <TextInput
                style={registerStyles.phoneInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="(123) 456-7890"
                keyboardType="phone-pad"
              />
            </View>

            {/* Password */}
            <PasswordInput
              label="Set Password"
              value={password}
              onChangeText={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            {/* Register Button */}
            <TouchableOpacity
              style={[
                registerStyles.registerButton,
                isLoading && registerStyles.registerButtonDisabled,
              ]}
              onPress={handleRegister}
              disabled={isLoading}
            >
              <Text style={registerStyles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            {/* Terms */}
            <Text style={registerStyles.termsText}>
              By registering, you agree to the{" "}
              <Text style={registerStyles.termsLink}>Terms of Service</Text> and{" "}
              <Text style={registerStyles.termsLink}>Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
