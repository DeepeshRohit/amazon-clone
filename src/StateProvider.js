// setup Data layer
// to track basket
import React , {createContext, useContext,  useReducer} from 'react';
//data layer
export const StateContext= createContext();

//Build Provider
export const StateProvider = ({reducer ,initialState,children}) =>(
    <StateContext.Provider value = {useReducer(reducer ,initialState)}>
        {children}
    </StateContext.Provider>
);
// inside  component
export const useStateValue = () => useContext(StateContext);