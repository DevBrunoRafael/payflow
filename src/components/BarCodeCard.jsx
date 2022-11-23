import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BarCodeCard = () => {
   return (
      <View style={styles.barCodeCard}>
         <View>
            <Image
               style={styles.barCodeCardImage}
               source={require("payflow-app/assets/bar-code.png")}
            />
         </View>
         <View style={styles.barCodeCardDivider} />
         <View>
            <Text style={styles.barCodeCardText}>
               Você tem {}
               <Text style={styles.boletosQuantity}>10 boletos</Text>
               {"\n"} cadastrados para pagar
            </Text>
         </View>
      </View>
   );
};

export default BarCodeCard;

const styles = StyleSheet.create({
   barCodeCard: {
      backgroundColor: "#585666",
      width: 340,
      borderRadius: 7,
      position: "absolute",
      top: 0,
      height: 80,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
   },
   barCodeCardText: {
      color: "white",
   },
   boletosQuantity: {
      color: "white",
      fontWeight: "900",
   },
   barCodeCardImage: {
      height: 34,
      width: 54,
   },
   barCodeCardDivider: {
      height: 32,
      width: 1,
      backgroundColor: "#b4b4b4",
   },
});
