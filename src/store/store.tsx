import { Context } from 'node:vm';
import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';
import { IState } from '../interfaces/IStoreState';

interface IStateProviderProps {
    children: ReactNode;
};

const initialState: IState = { userName: '', isLogged: false };
const store = createContext<Context>(initialState);
const { Provider } = store;

const StateProvider = (props: IStateProviderProps): ReactElement => {
    const { children } = props;
    const [state, dispatch] = useReducer((state: IState, action: any) => {
        switch (action.type) {
            case 'LOGIN':
                state = { ...action.payload, isLogged: true };
                return state;
            case 'LOG_OUT':
                state = { ...initialState }
                return state;
            default:
                return state;
        };
    }, initialState);

    return (<Provider value={{ state, dispatch }}>{children}</Provider>)
};

export { store, StateProvider };
