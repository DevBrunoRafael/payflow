import React, { useContext } from "react";
import { styles } from "./styles";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
   Keyboard,
   TouchableWithoutFeedback,
   View,
   Text,
   TouchableOpacity,
} from "react-native";

import CustomInput from "../../components/CustomInput";
import FormErrorsMessage from "../../components/FormErrorsMessage";
import CustomStatusBar from "../../components/CustomStatusBar";
import HeaderArrowNav from "../../components/HeaderArrowNav";

import { AuthContext } from "../../context/authContext";

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

   const { signUp } = useContext(AuthContext);

   const handleSignUp = ({ nome, email, password }) => {
      signUp(nome, email, password);
      navigation.navigate("SignIn");
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
               <CustomInput
                  control={control}
                  nameInput="nome"
                  placeholder={"Informe seu nome..."}
               >
                  <FontAwesome5 name="user-alt" size={20} color="#FF941A" />
               </CustomInput>
               <FormErrorsMessage error={errors.nome} />

               <CustomInput
                  control={control}
                  nameInput="email"
                  placeholder={"Informe seu email..."}
               >
                  <Entypo name="email" size={24} color="#FF941A" />
               </CustomInput>
               <FormErrorsMessage error={errors.email} />

               <CustomInput
                  control={control}
                  nameInput="password"
                  placeholder={"Informe sua senha..."}
                  secure={true}
               >
                  <FontAwesome5 name="lock" size={22} color="#FF941A" />
               </CustomInput>
               <FormErrorsMessage error={errors.password} />

               <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(handleSignUp)}
                  activeOpacity={0.6}
               >
                  <Text style={styles.buttonText}>CADASTRAR</Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

export default SignUp;
