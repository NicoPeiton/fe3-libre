import { createContext, useReducer } from "react";

export const initialState = {theme: "", data: []}

const globalReducer = (state, action) =>{

  switch(action.type){
    case "TOGGLE_THEME":
      return {
        ...state, theme: state.theme === "" ? "dark" : ""
      }
    case "ADD_DATA":
      return {
        ...state, data: [...state.data, action.payload]
      }
      case "REMOVE_DATA":
        return {
          ...state, data: [...state.data, action.payload]
        }
    
    default:
      return state; 
  }
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
          {children}
    </ContextGlobal.Provider>
  );
};
