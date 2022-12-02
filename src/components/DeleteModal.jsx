import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const DeleteModal = ({ handleClose, handleDelete, nome }) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity
            style={{ flex: 1, zIndex: 10, backgroundColor: "rgba(0,0,0,0.6)" }}
            onPress={handleClose}
         ></TouchableOpacity>

         <View style={styles.modal}>
            <View style={styles.boxText}>
               <Text style={styles.text}>
                  O boleto{" "}
                  <Text style={{ fontWeight: "700" }}>{nome}</Text>
                  {" "}já foi pago.
               </Text>
            </View>
            <TouchableOpacity style={styles.delete} onPress={handleDelete}>
               <FontAwesome5 name="trash-alt" size={18} color="#E83F5B" />
               <Text style={styles.deleteText}>Deletar boleto</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default DeleteModal;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   modal: {
      backgroundColor: "#fff",
      paddingTop: 20,
   },
   boxText: {
      paddingVertical: 15,
      paddingHorizontal: 70,
   },
   text: {
      textAlign: "center",
      color: "#585666",
      fontSize: 20,
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
