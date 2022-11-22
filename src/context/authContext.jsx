import React, { createContext, useEffect, useState } from "react";
import UserManagenment from "../services/UserManagenment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../api";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
   const [userId, setUserId] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const loadStorageData = async () => {
         const storageItems = await AsyncStorage.multiGet([
            "@PayflowAuth::token",
            "@PayflowAuth::userId",
         ]);

         const storageToken = storageItems[0][1];
         const storageUserId = storageItems[1][1];

         if (storageUserId && storageToken) {
            api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;

            setUserId(storageUserId);
            setLoading(false);
         } else {
            setLoading(false);
         }
      };

      loadStorageData();
   }, []);

   const signIn = async (email, password) => {
      const response = await UserManagenment.userSignin(email, password);

      const { token, userId } = response;

      setUserId(userId);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      await AsyncStorage.setItem("@PayflowAuth::token", token);
      await AsyncStorage.setItem("@PayflowAuth::userId", userId);
   };

   const signOut = async () => {
      await AsyncStorage.clear();
      setUserId("");
   };

   return (
      <AuthContext.Provider
         value={{
            signed: userId.length === 0 ? false : true,
            signIn,
            signOut,
            userId,
            loading,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export { AuthContext, AuthProvider };
