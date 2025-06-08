import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";
import { Ionicons } from "@expo/vector-icons";
import DashboardScreen from "../dashboard/DashboardScreen";
import InventoryScreen from "../inventory/InventoryScreen";
import ShipmentsScreen from "../shipments/ShipmentsScreen";
import ClientsScreen from "../clients/ClientsScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0A3D62",
        tabBarInactiveTintColor: "#B2B2B2",
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#F2F2F7",
          backgroundColor: "#FFFFFF",
        },
        headerStyle: {
          backgroundColor: "#FFFFFF",
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
          borderBottomWidth: 1,
          borderBottomColor: "#F2F2F7",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        headerTintColor: "#0A3D62",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shipments"
        component={ShipmentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Clients"
        component={ClientsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
