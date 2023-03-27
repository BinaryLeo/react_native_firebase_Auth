import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./screens/SignIn";
import { SignUp } from "./screens/SignUp";
import { HomeScreen } from "./screens/Home";
const { Navigator, Screen } = createStackNavigator(); //atribuição aonde acesso  as props
export function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: "#eaeaea" },
        }}
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
