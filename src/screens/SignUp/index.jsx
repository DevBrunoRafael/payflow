import React from "react";
import { styles } from "./styles";
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
               <Controller
                  control={control}
                  name="nome"
                  render={({ field: { onChange, onBlur, value } }) => (
                     <TextInput
                        style={[
                           styles.input,
                           { borderColor: errors.password && "#ff375b" },
                        ]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={"Informe seu nome..."}
                     />
                  )}
               />
               {errors.nome && (
                  <Text style={styles.errorMessage}>
                     {errors.nome?.message}
                  </Text>
               )}

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
                     {errors.email?.message}
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
                  // onPress={handleSubmit(function)}
               >
                  <Text style={styles.buttonText}>CADASTRAR</Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

export default SignUp;
