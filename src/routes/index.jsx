import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { AuthContext } from "../context/authContext";

import AuthRoutes from "./auth-routes";
import AppRoutes from "./app-routes";
import { AppContext } from "../context/AppContext";

import Lottie from "lottie-react-native";
import icon from "../../assets/animated-icon.json";

const Routes = () => {
   const { signed, loading } = useContext(AuthContext);
   const { loadingData } = useContext(AppContext);

   if (loading && loadingData) {
      return (
         // react native splash screen
         <View style={styles.container}>
            <Lottie
               source={icon}
               autoPlay
               loop
               style={{ width: 250, height: 250 }}
            />
         </View>
      );
   }

   return signed ? <AppRoutes /> : <AuthRoutes />;
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});

export default Routes;
