import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

import { Provider } from "./src/context/authContext";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default () => {
   return (
      <Provider>
         <SafeAreaProvider>
            <App />
         </SafeAreaProvider>
      </Provider>
   );
};
