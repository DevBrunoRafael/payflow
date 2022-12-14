import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
   return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
         <AuthStack.Screen name="SignIn" component={SignIn} />
         <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Navigator>
   );
};

export default AuthRoutes;
