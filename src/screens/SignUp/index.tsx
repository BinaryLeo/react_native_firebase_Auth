import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../../config/firebase";


export function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = useCallback(() => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Signed up"))
        .catch((error) => Alert.alert(error.message));
    }, [email, password]);
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
            autoCapitalize="none"
            autoFocus={true}
            onChangeText={(text)=>setEmail(text)}
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
            placeholder="Password"
            autoCapitalize="none"
            autoFocus={true}
            onChangeText={(text)=>setPassword(text)}
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
            onPress={handleSignUp}
            >
            <Text style={{ color: "white" }}>Sign Up</Text>
        </TouchableOpacity>
        </View>
    );
}