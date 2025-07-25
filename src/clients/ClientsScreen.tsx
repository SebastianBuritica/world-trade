import { View, Text, StyleSheet } from "react-native";
import { MainScreenProps } from "../navigation/types";

const ClientsScreen: React.FC<MainScreenProps<"Clients">> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenName Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default ClientsScreen;
