
import {Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export function HomeScreen() {
  
  const navigation = useNavigation();
  function handleScreen(screen: any) {
    navigation.navigate(screen);
  }

  return (
    <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
     <Text>Home</Text>
    </View>
  );
}
