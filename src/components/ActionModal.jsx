import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const ActionModal = ({
   handleClose,
   handleConfirm,
   handleDelete,
   nome,
   valor,
}) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity
            style={{ flex: 1, zIndex: 10, backgroundColor: "rgba(0,0,0,0.6)" }}
            onPress={handleClose}
         ></TouchableOpacity>

         <View style={styles.modal}>
            <View style={styles.boxText}>
               <Text style={styles.text}>
                  O boleto <Text style={{ fontWeight: "700" }}>{nome}</Text> no
                  valor de R$ <Text style={{ fontWeight: "700" }}>{valor}</Text>{" "}
                  já foi pago?
               </Text>
            </View>

            <View style={styles.buttonGroup}>
               <TouchableOpacity
                  style={[styles.cancel, styles.button]}
                  onPress={handleClose}
               >
                  <Text style={styles.cancelText}>Ainda não</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={[styles.confirm, styles.button]}
                  onPress={handleConfirm}
               >
                  <Text style={styles.confirmText}>Sim</Text>
               </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.delete} onPress={handleDelete}>
               <FontAwesome5 name="trash-alt" size={18} color="#E83F5B" />
               <Text style={styles.deleteText}>Deletar boleto</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default ActionModal;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   modal: {
      backgroundColor: "#fff",
      paddingTop: 20,
   },
   boxText: {
      paddingVertical: 24,
      paddingHorizontal: 70,
   },
   text: {
      textAlign: "center",
      color: "#585666",
      fontSize: 20,
   },
   buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingHorizontal: 26,
   },
   button: {
      paddingVertical: 18,
      width: 155,
      borderRadius: 5,
      alignItems: "center",
   },
   cancel: {
      borderWidth: 1,
      borderColor: "#E3E3E6",
   },
   cancelText: {
      color: "#777777",
      fontWeight: "500",
   },
   confirm: {
      backgroundColor: "#FF941A",
   },
   confirmText: {
      color: "#fff",
      fontWeight: "500",
   },
   delete: {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 16,
      paddingBottom: 25,
      flexDirection: "row",
      borderTopWidth: 1,
      borderColor: "#E3E3E5",
      marginTop: 25,
   },
   deleteText: {
      color: "#E83F5B",
      fontWeight: "500",
      marginLeft: 10,
   },
});
