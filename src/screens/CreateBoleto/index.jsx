import {
   Keyboard,
   StyleSheet,
   Text,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/CustomStatusBar";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateBoleto = () => {
   const navigation = useNavigation();

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
               <View style={styles.boxArrowleft}>
                  <TouchableOpacity
                     style={styles.arrowleft}
                     onPress={() => navigation.navigate("Home")}
                  >
                     <AntDesign name="arrowleft" size={26} color="#B1B0B8" />
                  </TouchableOpacity>
               </View>
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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "space-between",
   },
   boxArrowleft: {
      width: "100%",
      paddingTop: 15,
      paddingBottom: 20,
      paddingLeft: 15,
   },
   arrowleft: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   boxText: {
      alignItems: "center",
      marginTop: 10,
   },
   text: {
      fontSize: 25,
      fontWeight: "700",
      lineHeight: 25,
      color: "#585666",
      textAlign: "center",
   },
   cardInput: {
      marginHorizontal: 25,
      marginTop: 30,
   },
   boxInput: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "#E3E3E5",
      marginBottom: 16,
   },
   inputArea: {
      paddingLeft: 16,
      paddingHorizontal: 16,
      fontSize: 16,
   },
   boxIconInput: {
      height: 59,
      width: 59,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#",
      borderRightWidth: 1,
      borderColor: "#E3E3E5",
   },
   buttonGroup: {
      width: "100%",
      flexDirection: "row",
      marginTop: 20,
      borderColor: "#E3E3E6",
      borderTopWidth: 1,
   },
   button: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: "#E3E3E6",
      paddingHorizontal: 10,
      paddingVertical: 15,
   },
   textButton: {
      fontSize: 16,
      fontWeight: "normal",
   },
   register: {
      color: "#FF941A",
   },
   cancel: {
      color: "#706E7A",
   },
   errorMessage: {
      fontSize: 13,
      color: "#ff375b",
   },
});
