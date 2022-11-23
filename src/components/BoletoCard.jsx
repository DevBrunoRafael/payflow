import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoletoCard = () => {
   return (
      <View style={styles.cardBoleto}>
         <View>
            <Text style={styles.name}>nome</Text>
            <Text style={styles.date}>Vence em 00/00/000</Text>
         </View>
         <View>
            <Text style={styles.value}>R$ 0,00</Text>
         </View>
      </View>
   );
};

export default BoletoCard;

const styles = StyleSheet.create({
   cardBoleto: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 50,
      marginBottom: 30
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
      marginBottom: 6
   },
   date: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 16,
    color: "#706E7A"
   }
});
