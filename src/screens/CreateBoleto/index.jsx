import React from "react";
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
import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderArrowNav from "../../components/HeaderArrowNav";

const CreateBoleto = () => {

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
      codigo: yup.string().required("Informe o codigo do boleto..."),
   });

   const {
      control,
      handleSubmit,
      formState: { errors },
      clearErrors
   } = useForm({ resolver: yupResolver(validateSchema) });

   const createBoleto = ({ nomeBoleto, vencimento, valor, codigo }) => {
      console.log({ nomeBoleto, vencimento, valor, codigo });
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
                  <Input
                     control={control}
                     nameInput={"nomeBoleto"}
                     placeholder={"Nome do boleto"}
                  >
                     <MaterialCommunityIcons
                        name="file-document-outline"
                        size={24}
                        color="#FF941A"
                     />
                  </Input>
                  {errors.nomeBoleto && (
                     <Text style={styles.errorMessage}>
                        {errors.nomeBoleto?.message}
                     </Text>
                  )}

                  <Input
                     control={control}
                     nameInput={"vencimento"}
                     placeholder={"Vencimento"}
                  >
                     <Feather name="x-circle" size={24} color="#FF941A" />
                  </Input>
                  {errors.vencimento && (
                     <Text style={styles.errorMessage}>
                        {errors.vencimento?.message}
                     </Text>
                  )}

                  <Input
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
                  </Input>
                  {errors.valor && (
                     <Text style={styles.errorMessage}>
                        {errors.valor?.message}
                     </Text>
                  )}

                  <Input
                     control={control}
                     nameInput={"codigo"}
                     placeholder={"Código"}
                  >
                     <MaterialCommunityIcons
                        name="barcode"
                        size={24}
                        color="#FF941A"
                     />
                  </Input>
                  {errors.codigo && (
                     <Text style={styles.errorMessage}>
                        {errors.codigo?.message}
                     </Text>
                  )}
               </View>
            </View>
            <View style={styles.buttonGroup}>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     clearErrors()
                     navigation.navigate("Home")
                  }}
               >
                  <Text style={[styles.textButton, styles.cancel]}>
                     Cancelar
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(createBoleto)}
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