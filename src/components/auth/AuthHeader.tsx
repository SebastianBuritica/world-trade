// src/components/auth/AuthHeader.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, spacing, borderRadius } from "../../styles/theme";

interface AuthHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  logoSource?: any;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  subtitle,
  logoSource,
}) => {
  return (
    <View style={styles.header}>
      {logoSource && <Image source={logoSource} style={styles.logo} />}
      <Text style={styles.title}>{title}</Text>
      {subtitle}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secondary,
    padding: spacing.l,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
    marginBottom: spacing.m,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text.light,
    marginBottom: spacing.s,
  },
});
