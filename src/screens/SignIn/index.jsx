import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
   Keyboard,
   StyleSheet,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
   Text,
   TextInput,
} from "react-native";

import CustomStatusBar from "../../components/CustomStatusBar";
import { AuthContext } from "../../context/authContext";

const SignIn = ({ navigation }) => {
   const validateSchema = yup.object({
      email: yup
         .string()
         .email("Email inválido")
         .required("Informe seu email!"),
      password: yup
         .string()
         .min(6, "Sua senha deve ter no minimo 6 characteres")
         .required("Informe sua senha..."),
   });

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({ resolver: yupResolver(validateSchema) });


   const { signIn } = useContext(AuthContext);

   const handleSignin = ({ email, password }) => {
      signIn(email, password);
   };


   return (
      <TouchableWithoutFeedback
         onPress={() => Keyboard.dismiss()}
         touchSoundDisabled
      >
         <SafeAreaView style={styles.container}>
            <CustomStatusBar color={"#FF941A"} />

            <Text style={styles.textHeader}>Login</Text>

            <View style={styles.containerInputs}>
               <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                     <TextInput
                        style={[
                           styles.input,
                           { borderColor: errors.password && "#ff375b" },
                        ]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={"Informe seu email..."}
                     />
                  )}
               />
               {errors.email && (
                  <Text style={styles.errorMessage}>
                     {errors.email?.message}{" "}
                  </Text>
               )}

               <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                     <TextInput
                        style={[
                           styles.input,
                           { borderColor: errors.password && "#ff375b" },
                        ]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={"Informe sua senha..."}
                     />
                  )}
               />
               {errors.password && (
                  <Text style={styles.errorMessage}>
                     {errors.password?.message}
                  </Text>
               )}

               <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(handleSignin)}
               >
                  <Text style={styles.buttonText}>ENTRAR</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => navigation.navigate("SignUp")}
               >
                  <Text>
                     Não tem uma conta?{" "}
                     <Text style={styles.redirectText}>Crie uma</Text>
                  </Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "100%",
   },
   textHeader: {
      fontSize: 40,
      fontWeight: "700",
      marginTop: 100,
      marginBottom: 30,
      marginLeft: 25,
   },
   containerInputs: {
      width: "100%",
      paddingHorizontal: 25,
   },
   input: {
      borderWidth: 1,
      borderRadius: 0,
      borderColor: "#FF941A",
      marginBottom: 15,
      padding: 10,
      fontSize: 20,
   },
   button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FF941A",
      paddingVertical: 15,
      borderRadius: 10,
      marginBottom: 15,
      marginTop: 10,
   },
   buttonText: {
      fontWeight: "700",
      fontSize: 16,
      color: "#fff",
   },
   redirectText: {
      color: "#FF941A",
      fontWeight: "bold",
   },
   errorMessage: {
      alignSelf: "flex-start",
      color: "#ff375b",
      marginBottom: 8,
   },
});

export default SignIn;
