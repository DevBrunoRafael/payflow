import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";
import { AppProvider } from "./src/context/AppContext";

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
