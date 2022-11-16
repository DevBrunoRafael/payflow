import React, { useContext, useState } from "react";
import { Context } from "../../context/authContext";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, Button, TextInput } from "react-native-paper";
import {
   Keyboard,
   StatusBar,
   StyleSheet,
   TouchableWithoutFeedback,
   View,
} from "react-native";


const Register = ({ navigation }) => {
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   return (
      <TouchableWithoutFeedback
         onPress={() => Keyboard.dismiss()}
         touchSoundDisabled
      >
         <SafeAreaView style={styles.container}>
            <StatusBar
               barStyle="dark-content"
               hidden={false}
               backgroundColor="#FFF"
               translucent={false}
               networkActivityIndicatorVisible={true}
            />
            <View style={styles.textContainer}>
               <Text style={styles.register}>Cadastro</Text>
            </View>
            <View style={styles.cardInputs}>
               <TextInput
                  style={styles.textInput}
                  label="Nome"
                  value={nome}
                  mode={"outlined"}
                  activeOutlineColor={"#FF941A"}
                  onChangeText={text => setNome(text)}
                  outlineColor={"#FFF"}
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
                  label="E-mail"
                  value={email}
                  mode={"outlined"}
                  activeOutlineColor={"#FF941A"}
                  onChangeText={text => setEmail(text)}
                  outlineColor={"#FFF"}
                  left={
                     <TextInput.Icon icon="at" size={25} iconColor="#FF941A" />
                  }
               />
               <TextInput
                  style={styles.textInput}
                  label="Senha"
                  value={password}
                  mode={"outlined"}
                  activeOutlineColor={"#FF941A"}
                  onChangeText={text => setPassword(text)}
                  outlineColor={"#FFF"}
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
                  Cadastrar
               </Button>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "100%",
   },
   register: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 0,
   },
   textContainer: {
      marginBottom: 65,
      marginTop: 175,
      marginHorizontal: 30,
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

export default Register;
