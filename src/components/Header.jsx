import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
   return (
      <View style={styles.header}>
         <View>
            <Text style={styles.salutation}>
               Olá, <Text style={styles.username}>Bruno</Text>
            </Text>
            <Text style={styles.message}>mantenha suas contas em dia</Text>
         </View>
         <View>
            <View style={styles.image}></View>
         </View>
      </View>
   );
};

export default Header;

const styles = StyleSheet.create({
   header: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#FF941A",
      paddingTop: 30,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 40,
   },
   username: {
      fontWeight: "900",
      color: "white",
      fontSize: 20,
      lineHeight: 25,
   },

   salutation: {
      color: "white",
      fontSize: 20,
      lineHeight: 25,
   },
   message: {
      color: "white",
      fontSize: 13,
      lineHeight: 16,
      color: "#E3E3E6",
   },
   image: {
      height: 48,
      width: 48,
      backgroundColor: "white",
      borderRadius: 7,
   },
});
