import React, { useContext } from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Entypo, FontAwesome5  } from "@expo/vector-icons";

import {
   Keyboard,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
   Text,
} from "react-native";

import CustomStatusBar from "../../components/CustomStatusBar";
import Input from "../../components/Input";
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
               <Input
                  control={control}
                  nameInput="email"
                  placeholder={"Informe seu email..."}
               >
                  <Entypo name="email" size={24} color="#FF941A" />
               </Input>
               {errors.email && (
                  <Text style={styles.errorMessage}>
                     {errors.email?.message}{" "}
                  </Text>
               )}

               <Input
                  control={control}
                  nameInput="password"
                  placeholder={"Informe sua senha..."}
                  secure={true}
               >
                  <FontAwesome5 name="lock" size={22} color="#FF941A" />

               </Input>
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

               <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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

export default SignIn;
