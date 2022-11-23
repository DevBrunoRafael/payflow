import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import BoletoPaid from "../screens/BoletosPaid";
import CreateBoleto from "../screens/CreateBoleto";

import { Ionicons, Entypo } from "@expo/vector-icons";
import ButtonCreate from "../components/ButtonCreate";

const AppTab = createBottomTabNavigator();


const AppRoutes = () => {
   return (
      <AppTab.Navigator
         screenOptions={{
            tabBarActiveTintColor: "#FF941A",
            tabBarShowLabel: false,
            tabBarStyle: {
               borderTopWidth: 0,
               height: 60,
               paddingLeft: 60,
               paddingRight: 60
            },
         }}
      >
         <AppTab.Screen
            name="Home"
            component={Home}
            options={{
               headerShown: false,
               tabBarIcon: ({color, size, focused}) => {
                  if (focused) {
                     return <Ionicons name="home" size={size} color={color} />;
                  }
                  return (
                     <Ionicons name="home-outline" size={size} color={color} />
                  );
               },
            }}
         />
         <AppTab.Screen
            name="CreateBoleto"
            component={CreateBoleto}
            options={{
               headerShown: false,
               tabBarIcon: () => {
                  return <ButtonCreate />
               },
               tabBarStyle: {
                  display: "none"
               }
            }}
         />
         <AppTab.Screen
            name="BoletosPaid"
            component={BoletoPaid}
            options={{
               headerShown: false,
               tabBarIcon: ({color, size, focused}) => {
                  if (focused) {
                     return <Entypo name="text-document-inverted" size={size} color={color} />;
                  }
                  return (
                     <Entypo name="text-document" size={size} color={color} />
                  );
               },
            }}
         />
      </AppTab.Navigator>
   );
};

export default AppRoutes;
