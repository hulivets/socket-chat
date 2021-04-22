import { useContext } from 'react';
import { chatAPI } from '../api/webSocketAPI';
import { SocketHandlerNames, SocketCommands } from '../contstants/socketCommands';
import { store } from '../store/store';

const useWebsocket = () => {
    const userData = useContext(store);
    const { dispatch } = userData;

    const login = async (userName: string, callback: Function) => {
        try {
            const socket: WebSocket = await chatAPI.connect();
            if (socket.readyState === WebSocket.OPEN) {
                const message: string = SocketCommands.SEND + JSON.stringify([SocketHandlerNames.ADD_USER, userName]);
                chatAPI.login(message);
                dispatch({ type: 'LOGIN', payload: { userName }})
                callback();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const sucbscribe = (callback: (message: string) => void): void => {
        chatAPI.sucbscribe(callback);
    };

    const unsucbscribe = (callback: (message: string) => void): void => {
        chatAPI.unSubscribe(callback);
    };

    const sendMessage = (message: string): void => {
        const newMessage: string = SocketCommands.SEND + JSON.stringify([SocketHandlerNames.NEW_MESSAGE, message]);
        chatAPI.sendMessage(newMessage);
    };

    const sendTypingMessage = (userName: string, send: boolean): void => {
        const messageName: string = send ? SocketHandlerNames.TYPYNG : SocketHandlerNames.STOP_TYPING;
        const newMessage: string = SocketCommands.SEND + JSON.stringify([messageName, {username: userName}]);
        chatAPI.sendMessage(newMessage);
    };

    const logout = (): void => {
        dispatch({ type: 'LOG_OUT' });
        chatAPI.closeConnection();
    };

    return {
        login,
        sucbscribe,
        unsucbscribe,
        sendMessage,
        sendTypingMessage,
        logout,
    };
};

export default useWebsocket;
