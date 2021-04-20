import { Context } from 'node:vm';
import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';

interface IStateProviderProps {
    children: ReactNode;
};

interface IState {
    userName: string;
};

const initialState: IState = { userName: '' };
const store = createContext<Context>(initialState);
const { Provider } = store;

const StateProvider = (props: IStateProviderProps): ReactElement => {
    const { children } = props;
    const [state, dispatch] = useReducer((state: IState, action: any) => {
        switch (action.type) {
            case 'LOGIN':
                state = { ...action.payload };
                return state;
            default:
                return state;
        };
    }, initialState);

    return (<Provider value={{ state, dispatch }}>{children}</Provider>)
};

export { store, StateProvider };
