import React, { useContext } from "react";
import { styles } from "./styles";

import {
   Keyboard,
   Text,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/CustomStatusBar";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderArrowNav from "../../components/HeaderArrowNav";
import { AppContext } from "../../context/AppContext";
import FormErrorsMessage from "../../components/FormErrorsMessage";

const CreateBoleto = ({ navigation }) => {
   const { createBoleto } = useContext(AppContext);

   const validateSchema = yup.object({
      nomeBoleto: yup.string().required("Informe o nome do boleto..."),
      vencimento: yup
         .string()
         .required("Informe a data de vencimento do Boleto..."),
      valor: yup
         .number()
         .typeError("Digite apenas números...")
         .min(0, "Informe um valor válido...")
         .required("Informe o valor do boleto..."),
      codigo: yup
         .string()
         .min(44, "Código de barras inválido.")
         .required("Informe o codigo do boleto..."),
   });

   const {
      control,
      handleSubmit,
      formState: { errors },
      clearErrors,
      reset,
   } = useForm({ resolver: yupResolver(validateSchema) });

   const register = async ({ nomeBoleto, vencimento, valor, codigo }) => {
      createBoleto({ nomeBoleto, vencimento, valor, codigo });
      reset();
   };

   return (
      <TouchableWithoutFeedback
         onPress={() => Keyboard.dismiss()}
         touchSoundDisabled
      >
         <SafeAreaView style={styles.container}>
            <CustomStatusBar color={"#fff"} />
            {/* envolve o conteúdo do formulário para contribuir com o posicionamento dos botões na parte inferior */}
            <View>
               <HeaderArrowNav routeNavigate={"Home"} />
               <View style={styles.boxText}>
                  <Text style={styles.text}>
                     Preencha os dados{"\n"}do boleto
                  </Text>
               </View>
               <View style={styles.cardInput}>
                  <CustomInput
                     control={control}
                     nameInput={"nomeBoleto"}
                     placeholder={"Nome do boleto"}
                  >
                     <MaterialCommunityIcons
                        name="file-document-outline"
                        size={24}
                        color="#FF941A"
                     />
                  </CustomInput>
                  <FormErrorsMessage error={errors.nomeBoleto} />

                  <CustomInput
                     control={control}
                     nameInput={"vencimento"}
                     placeholder={"Vencimento"}
                  >
                     <Feather name="x-circle" size={24} color="#FF941A" />
                  </CustomInput>
                  <FormErrorsMessage error={errors.vencimento} />


                  <CustomInput
                     control={control}
                     nameInput={"valor"}
                     placeholder={"Valor"}
                     type={"numeric"}
                  >
                     <Ionicons
                        name="ios-wallet-outline"
                        size={24}
                        color="#FF941A"
                     />
                  </CustomInput>
                  <FormErrorsMessage error={errors.valor} />

                  <CustomInput
                     control={control}
                     nameInput={"codigo"}
                     placeholder={"Código"}
                  >
                     <MaterialCommunityIcons
                        name="barcode"
                        size={24}
                        color="#FF941A"
                     />
                  </CustomInput>
                  <FormErrorsMessage error={errors.codigo} />

               </View>
            </View>
            <View style={styles.buttonGroup}>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     clearErrors();
                     navigation.navigate("Home");
                  }}
               >
                  <Text style={[styles.textButton, styles.cancel]}>
                     Cancelar
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(register)}
               >
                  <Text style={[styles.textButton, styles.register]}>
                     Cadastrar
                  </Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
   );
};

export default CreateBoleto;
