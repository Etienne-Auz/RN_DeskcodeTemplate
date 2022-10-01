import React, { useEffect, useReducer } from 'react';

export default ( reducer, action, defaultValue ) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [ user, dispatch ] = useReducer(reducer, defaultValue);

        const boundActions = {};

        for (let key in action){
            boundActions[key] = action[key](dispatch);
        }

        return(
            <Context.Provider value={{ user, ...boundActions }}>
                { children }
            </Context.Provider>
        )
    };


    return { Context: Context, Provider: Provider };
};


