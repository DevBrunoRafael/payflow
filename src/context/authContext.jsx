import React, { createContext, useContext, useEffect, useState } from "react";
import UserService from "../services/UserService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../api";
import { AppContext } from "./AppContext";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
   const { loadData, resetData } = useContext(AppContext);
   const [nameUserAuthenticated, setNameUserAuthenticated] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const loadStorageData = async () => {
         const storageItems = await AsyncStorage.multiGet([
            "@PayflowAuth::token",
            "@PayflowAuth::nameUser",
         ]);

         const storageToken = storageItems[0][1];
         const storageNameUser = storageItems[1][1];

         if (storageNameUser && storageToken) {
            api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;

            setNameUserAuthenticated(storageNameUser);
            await loadData();
            setLoading(false);
         } else {
            setLoading(false);
         }
      };

      loadStorageData();
   }, []);

   const signIn = async (email, password) => {
      const data = await UserService.userSignin(email, password);

      if (data) {
         const { token, nameUser } = data;

         
         api.defaults.headers["Authorization"] = `Bearer ${token}`;
         
         await loadData();

         setNameUserAuthenticated(nameUser);

         await AsyncStorage.setItem("@PayflowAuth::token", token);
         await AsyncStorage.setItem("@PayflowAuth::nameUser", nameUser);
      }
   };

   const signUp = async (nome, email, password) => {
      await UserService.userSignup(nome, email, password);
   };

   const signOut = async () => {
      await AsyncStorage.clear();
      resetData();
      setNameUserAuthenticated("");
   };

   return (
      <AuthContext.Provider
         value={{
            signed: nameUserAuthenticated.length === 0 ? false : true,
            signIn,
            signUp,
            signOut,
            nameUserAuthenticated,
            loading,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export { AuthContext, AuthProvider };
