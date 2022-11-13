import createContext from "./createContext";

let initialState = {
   value: 0,
};

const reducer = (state, action) => {
  switch(action.type){
    case "": {
      return {  };
    }
    default: {
      return state;
    } 
  }
};

export default { context, Provider } = createContext(
   reducer,
   actions,
   initialState
);
