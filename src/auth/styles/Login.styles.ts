// src/components/auth/styles/Login.styles.ts
import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius } from "../../styles/theme";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupText: {
    color: colors.text.light,
    opacity: 0.8,
  },
  signupLink: {
    color: colors.primary,
    fontWeight: "bold",
    marginLeft: spacing.xs,
  },
  formContainer: {
    padding: spacing.l,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text.primary,
    marginBottom: spacing.s,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    marginBottom: spacing.m,
    fontSize: 16,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.l,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.s,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: spacing.s,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  rememberText: {
    color: colors.text.primary,
  },
  forgotPassword: {
    color: colors.primary,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    alignItems: "center",
    marginBottom: spacing.l,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: colors.text.light,
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.l,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing.m,
    color: colors.text.secondary,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.l,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.m,
    padding: spacing.s,
    flex: 0.48,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: spacing.s,
  },
  socialButtonText: {
    color: colors.text.primary,
    fontWeight: "500",
  },
  termsText: {
    textAlign: "center",
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 18,
  },
  termsLink: {
    color: colors.primary,
    fontWeight: "500",
  },
});
