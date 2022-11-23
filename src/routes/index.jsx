import React, { useContext } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import { AuthContext } from "../context/authContext";

import AuthRoutes from "./auth-routes";
import AppRoutes from "./app-routes";

const Routes = () => {
   const { signed, loading } = useContext(AuthContext);

   if (loading) {
      return (
        // react native splash screen 
         <View style={styles.container}>
            <ActivityIndicator color={"#777"} size={"large"} />
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
