import React from "react";
import { styles } from "./styles";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
   Keyboard,
   TouchableWithoutFeedback,
   View,
   Text,
   TouchableOpacity,
   TextInput,
} from "react-native";

import Input from "../../components/Input";

import CustomStatusBar from "../../components/CustomStatusBar";
import HeaderArrowNav from "../../components/HeaderArrowNav";

const SignUp = ({ navigation }) => {
   const validateSchema = yup.object({
      nome: yup.string().required("Informe seu nome..."),
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

   const handleSignUp = ({ nome, email, password }) => {
      console.log({ nome, email, password });
   };

   return (
      <TouchableWithoutFeedback
         onPress={() => Keyboard.dismiss()}
         touchSoundDisabled
      >
         <SafeAreaView style={styles.container}>
            <CustomStatusBar color={"#fff"} />

            <HeaderArrowNav routeNavigate={"SignIn"} />
            <Text style={styles.textHeader}>Cadastro</Text>

            <View style={styles.containerInputs}>
               <Input
                  control={control}
                  nameInput="nome"
                  placeholder={"Informe seu nome..."}
               >
                  <FontAwesome5 name="user-alt" size={20} color="#FF941A" />
               </Input>
               {errors.nome && (
                  <Text style={styles.errorMessage}>
                     {errors.nome?.message}
                  </Text>
               )}

               <Input
                  control={control}
                  nameInput="email"
                  placeholder={"Informe seu email..."}
               >
                  <Entypo name="email" size={24} color="#FF941A" />
               </Input>
               {errors.email && (
                  <Text style={styles.errorMessage}>
                     {errors.email?.message}
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
                  onPress={handleSubmit(handleSignUp)}
               >
                  <Text style={styles.buttonText}>CADASTRAR</Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

export default SignUp;
