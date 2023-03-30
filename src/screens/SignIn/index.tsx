import { Alert, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../../config/firebase";
import { useCallback, useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const navigation = useNavigation();
  const handleScreen = useCallback(
    (screen: any) => {
      navigation.navigate(screen);
    },
    [navigation]
  );

  const handleSignIn = useCallback(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => setIsLogged(true))
      .catch((error) => {
        let errorMessage = "Something went wrong";
        if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "User not found";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Wrong password";
        }
        Alert.alert(errorMessage);
      });
  }, [email, password]);

  useEffect(() => {
    setIsLogged(false);
    isLogged && navigation.navigate("Home");
  }, [isLogged, navigation]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          marginBottom: 10,
          padding: 10,
        }}
        value={email}
        placeholder="Email"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          marginBottom: 10,
          padding: 10,
        }}
        value={password}
        secureTextEntry={true}
        autoCorrect={false}
        placeholder="Password"
        textContentType="password"
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: "black",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          marginBottom: 10,
        }}
        onPress={handleSignIn}
      >
        <Text style={{ color: "white" }}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => handleScreen("SignUp")}>
          <Text style={{ color: "blue", marginLeft: 5 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
