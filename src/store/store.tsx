import React, {createContext, useReducer} from 'react';

const initialState: any = { isLoggedIn: false, messages: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'LOG_IN':
                state.isLoggedIn = action.payload;
                return state;
            case 'MESSAGE':
                state.messages.push(action.payload);
                return state;
            default:
                return state;
        };
    }, initialState);

    return (<Provider value={{ state, dispatch }}>{children}</Provider>)
};

export { store, StateProvider };
