// src/components/auth/PasswordInput.tsx
import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, borderRadius } from "../../styles/theme";

interface PasswordInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder = "********",
  showPassword,
  setShowPassword,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={!showPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#8E8E93"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.m,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text.primary,
    marginBottom: spacing.s,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.m,
    padding: spacing.m,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    marginRight: spacing.s,
  },
});
