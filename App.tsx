import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/auth/context/AuthContext";
import { usePersistedAuth } from "./src/hooks/usePersistedAuth";

// Wrapper component to handle auth restoration
const AppContent = () => {
  const { isRestoring } = usePersistedAuth();

  if (isRestoring) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0A3D62" />
      </View>
    );
  }

  return <RootNavigator />;
};

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AuthProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default App;
