// src/styles/theme.ts
import { StyleSheet } from "react-native";

export const colors = {
  primary: "#4C7BF4",
  secondary: "#1E2241",
  background: "#FFFFFF",
  inputBackground: "#F5F5F5",
  text: {
    primary: "#333333",
    secondary: "#666666",
    light: "#FFFFFF",
    hyperlink: "#4C7BF4",
  },
  border: "#E0E0E0",
  error: "#FF3B30",
  success: "#34C759",
};

export const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
  round: 9999,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.secondary,
    padding: spacing.l,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text.light,
    marginBottom: spacing.s,
  },
  headerSubtitle: {
    color: colors.text.light,
    opacity: 0.8,
  },
  formContainer: {
    padding: spacing.l,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    marginBottom: spacing.m,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text.primary,
    marginBottom: spacing.s,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    alignItems: "center",
    marginVertical: spacing.l,
  },
  buttonText: {
    color: colors.text.light,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  // Additional shared styles...
});
