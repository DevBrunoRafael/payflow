import React, { createContext, useReducer } from "react";
import { Context } from "./dataContext";

export default ({ reducer, actions, initialState }) => {
   const context = createContext();

   const Provider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      const processFunctions = {};
      Object.keys(actions).forEach((key) => processFunctions[key]) = actions[key](dispatch);

      return (
         <Context.Provider value={{ state, ...processFunctions }}>
            {children}
         </Context.Provider>
      );
   };
   return { context, Provider };
};
