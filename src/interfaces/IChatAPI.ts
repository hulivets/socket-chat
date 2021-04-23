export interface IChatApi {
    connect: () => Promise<WebSocket>;
    login: (message: string) => void;
    sucbscribeOnMessage: (callback: (message: string) => void) => void;
    unSubscribeOnMessage: (callback: (message: string) => void) => void;
    sendMessage: (message: string) => void;
    subscribeOnClose: (callback: (e: CloseEvent) => void) => void;
    unSubscribeOnClose: (callback: (e: CloseEvent) => void) => void
    closeConnection: () => void; 
};
