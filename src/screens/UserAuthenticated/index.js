import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


import { api } from "../../api";
import { useNavigation } from "@react-navigation/native";

const UserAuthenticated = () => {
   const navigation = useNavigation();

   useEffect(() => {
      const signInToken = async () => {
         const token = await AsyncStorage.getItem("token");

         if (token) {
            // criar rota de teste backend (buscar informações do usuário)
            try {
               await api.get("/auth/teste", {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               });
               navigation.navigate("Home");
            } catch (error) {
               console.log("erro na chamada do login loader");
               navigation.navigate("Login");
            }
         } else {
            navigation.navigate("Login");
         }
      };

      signInToken();
   }, []);

   return (
      <View style={styles.container}>
         <ActivityIndicator color={"black"} size={40}/>
      </View>
   );
};

export default UserAuthenticated;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});
