import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import BoletoCard from "../../components/BoletoCard";

const BoletoPaid = () => {
   return (
      <SafeAreaView style={styles.container}>
         <Header />
         <View style={styles.box}>
            <Text style={styles.boxText}>Meus Extratos</Text>
            <Text style={styles.boletosQuantity}>3 Pagos</Text>
         </View>
         <ScrollView style={styles.scrollView}>
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
         </ScrollView>
      </SafeAreaView>
   );
};

export default BoletoPaid;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   box: {
      borderBottomWidth: 1,
      borderColor: "#E3E3E6",
      lineHeight: 25,
      paddingBottom: 24,
      paddingTop: 32,
      marginHorizontal: 25,
      marginBottom: 32,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   boxText: {
      fontSize: 20,
      fontWeight: "700",
      color: "#585666",
   },
   boletosQuantity: {
    fontSize: 13,
    color: "#706E7A"
   },
   scrollView: {
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 25,
 },
});
