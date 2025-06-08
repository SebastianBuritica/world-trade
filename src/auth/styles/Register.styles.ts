import { colors, spacing, borderRadius } from "../../styles/theme";
import { Platform, StyleSheet } from "react-native";

export const registerStyles = StyleSheet.create({
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
  header: {
    backgroundColor: colors.secondary,
    padding: spacing.l,
    paddingTop: Platform.OS === "ios" ? spacing.l : spacing.xl,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  backButton: {
    marginBottom: spacing.s,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text.light,
    marginBottom: spacing.s,
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
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameField: {
    width: "48%",
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
  datePickerButton: {
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    marginBottom: spacing.m,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  phoneContainer: {
    flexDirection: "row",
    marginBottom: spacing.m,
  },
  countryCode: {
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    marginRight: spacing.xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 90,
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginRight: spacing.xs,
  },
  countryCodeText: {
    fontSize: 16,
    marginRight: spacing.xs,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.m,
    padding: spacing.m,
    alignItems: "center",
    marginTop: spacing.m,
    marginBottom: spacing.l,
  },
  registerButtonDisabled: {
    opacity: 0.7,
  },
  registerButtonText: {
    color: colors.text.light,
    fontSize: 16,
    fontWeight: "bold",
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
