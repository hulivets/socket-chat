export interface IChatApi {
    connect: () => Promise<WebSocket>;
    login: (message: string) => void;
    sucbscribe: (callback: (message: string) => void) => void;
    unSubscribe: (callback: (message: string) => void) => void;
    sendMessage: (message: string) => void;
    closeConnection: () => void; 
};
