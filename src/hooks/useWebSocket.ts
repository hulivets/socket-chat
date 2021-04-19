import { chatAPI } from "../api/webSocketAPI";

const useWebsocket = () => {
    const login = async (userName: string, callback: Function) => {
        try {
            const socket = await chatAPI.connect();
            if (socket.readyState === WebSocket.OPEN) {
                chatAPI.login(userName);
                callback();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const sucbscribe = (callback: (message: string) => void) => {
        chatAPI.sucbscribe(callback);
    };

    const unsucbscribe = (callback: (message: string) => void) => {
        chatAPI.unSubscribe(callback);
    };

    return { login, sucbscribe, unsucbscribe };
};

export default useWebsocket;
