import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ActionModal from "../components/ActionModal";
import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import DeleteModal from "./DeleteModal";

const BoletoCard = ({ _id, nome, vencimento, valor, modalOn }) => {
   const { markBoletoAsPaid, deleteBoleto } = useContext(AppContext);
   const [modalVisibility, setModalVisibility] = useState(false);

   if (vencimento) {
      var dateConvert = vencimento.slice(0, 10).split("-").reverse().join("/");
   }

   return (
      <View>
         <TouchableOpacity
            style={styles.cardBoleto}
            onPress={() => setModalVisibility(true)}
            activeOpacity={0.9}
         >
            <View style={styles.leftContent}>
               <Text style={styles.name}>{nome}</Text>
               <Text style={styles.date}>Vence em {dateConvert}</Text>
            </View>
            <View>
               <Text style={styles.value}>R$ {valor}</Text>
            </View>
         </TouchableOpacity>
         <Modal
            visible={modalVisibility}
            transparent={true}
            onRequestClose={() => setModalVisibility(false)}
            animationType={"fade"}
         >
            {modalOn ? (
               <ActionModal
                  handleClose={() => setModalVisibility(false)}
                  handleConfirm={() => {
                     markBoletoAsPaid(_id);
                     setModalVisibility(false);
                  }}
                  handleDelete={() => deleteBoleto(_id)}
                  nome={nome}
                  valor={valor}
               />
            ) : (
               <DeleteModal
                  handleClose={() => setModalVisibility(false)}
                  handleDelete={() => deleteBoleto(_id)}
                  nome={nome}
               />
            )}
         </Modal>
      </View>
   );
};

export default BoletoCard;

const styles = StyleSheet.create({
   cardBoleto: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 50,
      marginBottom: 42,
   },
   value: {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 19,
      color: "#706E7A",
   },
   name: {
      fontWeight: "700",
      fontSize: 18,
      lineHeight: 21,
      color: "#706E7A",
      marginBottom: 12,
   },
   date: {
      fontWeight: "400",
      fontSize: 13,
      lineHeight: 16,
      color: "#706E7A",
   },
});
