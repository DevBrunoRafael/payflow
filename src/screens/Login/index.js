import React, { useContext, useState } from "react";
import { Context } from "../../context/authContext";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, Button, TextInput } from "react-native-paper";
import {
   Image,
   Keyboard,
   StatusBar,
   StyleSheet,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from "react-native";

const Login = ({ navigation }) => {
   const { state, teste } = useContext(Context);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [showPassword, setShowPassword] = useState(true);

   return (
      <TouchableWithoutFeedback
         onPress={() => Keyboard.dismiss()}
         touchSoundDisabled
      >
         <SafeAreaView style={styles.container}>
            <StatusBar
               barStyle="dark-content"
               hidden={false}
               backgroundColor="#FF941A"
               translucent={false}
               networkActivityIndicatorVisible={true}
            />
            {/* <Text style={styles.login}>Login</Text> */}
            <View style={styles.cardImg}>
               <Image
                  style={styles.img}
                  source={require("payflow-app/assets/image-cnt.png")}
               />
            </View>
            <View style={styles.cardInputs}>
               <TextInput
                  style={styles.textInput}
                  label="E-mail"
                  value={email}
                  mode={"outlined"}
                  activeOutlineColor={"#FF941A"}
                  onChangeText={text => setEmail(text)}
                  outlineColor={"#FF941A"}
                  left={
                     <TextInput.Icon
                        icon="account"
                        size={25}
                        iconColor="#FF941A"
                     />
                  }
               />
               <TextInput
                  style={styles.textInput}
                  label="Senha"
                  value={password}
                  mode={"outlined"}
                  activeOutlineColor={"#FF941A"}
                  onChangeText={text => setPassword(text)}
                  outlineColor={"#FF941A"}
                  left={
                     <TextInput.Icon
                        icon="lock"
                        size={25}
                        iconColor="#FF941A"
                     />
                  }
                  secureTextEntry={showPassword}
                  right={
                     showPassword ? (
                        <TextInput.Icon
                           icon="eye"
                           size={25}
                           iconColor="#FF941A"
                           onPress={() => setShowPassword(!showPassword)}
                        />
                     ) : (
                        <TextInput.Icon
                           icon="eye-off"
                           size={25}
                           iconColor="#FF941A"
                           onPress={() => setShowPassword(!showPassword)}
                        />
                     )
                  }
               />
               <Button mode="contained" style={styles.loginButton}>
                  Login
               </Button>
               <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
               >
                  <Text>
                     Não tem uma conta?{" "}
                     <Text style={styles.createAccountText}>Crie uma</Text>
                  </Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   container: {
      alignSelf: "center",
      width: "100%",
   },
   login: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 10,
   },
   textInput: {
      marginBottom: 5,
      borderRadius: 5,
   },
   loginButton: {
      paddingVertical: 4,
      margin: 20,
      width: "100%",
      alignSelf: "center",
      borderRadius: 5,
      backgroundColor: "#FF941A",
   },
   createAccountText: {
      fontWeight: "bold",
      color: "#FF941A",
   },
   cardImg: {
      width: "100%",
      height: "60%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 25,
   },
   img: {
      width: "100%",
   },
   cardInputs: {
      marginTop: -50,
      paddingHorizontal: 30,
   },
});

export default Login;
