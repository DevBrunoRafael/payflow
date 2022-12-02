import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ logout }) => {
   const { nameUserAuthenticated } = useContext(AuthContext);

   return (
      <View style={styles.header}>
         <View>
            <Text style={styles.salutation}>
               Olá, <Text style={styles.username}>{nameUserAuthenticated}</Text>
            </Text>
            <Text style={styles.message}>mantenha suas contas em dia</Text>
         </View>
         <View>
            <TouchableOpacity
               style={styles.image}
               onPress={logout}
            >
               <MaterialIcons name="exit-to-app" size={40} color="white" />
            </TouchableOpacity>
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
      backgroundColor: "#FF941A",
      borderRadius: 7,
   },
});
