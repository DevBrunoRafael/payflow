import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";

/* screenOptions={{ headerShown: false } }*/
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

// export default () => {
//    return (
//       <AuthProvider>
//          <SafeAreaProvider>
//             <App />
//          </SafeAreaProvider>
//       </AuthProvider>
//    );
// };
