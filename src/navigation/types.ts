import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// Auth Stack
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// Main Stack
export type MainTabParamList = {
  Dashboard: undefined;
  Shipments: undefined;
  Inventory: undefined;
  Clients: undefined;
  More: undefined;
  Settings: undefined;
};

// Types for navigation in the Auth Stack
export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, T>;

export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;

// Types for navigation in the Main Stack

export type MainTabNavigationProp<T extends keyof MainTabParamList> =
  BottomTabNavigationProp<MainTabParamList, T>;

export type MainTabRouteProp<T extends keyof MainTabParamList> = RouteProp<
  MainTabParamList,
  T
>;

// Props for auth stack screens
export interface AuthScreenProps<T extends keyof AuthStackParamList> {
  navigation: AuthStackNavigationProp<T>;
  route: AuthStackRouteProp<T>;
}

// Props for main stack screens
export interface MainScreenProps<T extends keyof MainTabParamList> {
  navigation: MainTabNavigationProp<T>;
  route: MainTabRouteProp<T>;
}

// Types for root navigation
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};
