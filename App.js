import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";

const App = () => {
   return (
      <NavigationContainer>
         <SafeAreaProvider>
            <AuthProvider>
               <Routes />
            </AuthProvider>
         </SafeAreaProvider>
      </NavigationContainer>
   );
};

export default App;