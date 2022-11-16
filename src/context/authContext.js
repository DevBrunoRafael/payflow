import createContext from "./createContext";
import { api } from "../api";

const initialState = {};

const reducer = (state, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

const teste = dispatch => {
   return args => {
      console.log(args);
   };
};

const registerUser = dispatch => {
   return async (nome, email, password) => {
      await api.post("/auth/register", {
         nome, email, password
      })
   };
};

export const { Context, Provider } = createContext(
   reducer,
   { teste, registerUser },
   initialState
);
