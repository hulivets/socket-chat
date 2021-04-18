import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { store } from '../store/store';

const useLogin = () => {
    const [isLoggedIn, setIsLoggined] = useState<boolean>(false);
    const history = useHistory();
    const state = useContext(store);

    const login = (): void => {
        setIsLoggined(true);
        history.push('/chat-room');
        state.dispatch({ type: 'LOG_IN', payload: true});
    };

    return {login, isLoggedIn};
};

export default useLogin;
