import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/authContext";
import { AppProvider } from "./src/context/AppContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";

const App = () => {
   return (
      <NavigationContainer>
         <SafeAreaProvider>
               <AppProvider>
                  <AuthProvider>
                     <Routes />
                  </AuthProvider>
               </AppProvider>
         </SafeAreaProvider>
      </NavigationContainer>
   );
};

export default App;
