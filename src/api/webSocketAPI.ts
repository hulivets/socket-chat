import { IChatApi } from '../interfaces/IChatAPI';

const URL: string = 'wss://socketio-chat-h9jt.herokuapp.com/socket.io/?EIO=3&transport=websocket';
const UPDATE_COMMAND: string = '2';
const TIME = 20000;

let socket: WebSocket;
let subscribersOnMessage = [] as Array<(message: string) => void>;
let subscribersOnClose = [] as Array<(e: CloseEvent) => void>;
let updateInterval: NodeJS.Timeout;

const messageHandler = (e: MessageEvent): void => {
    const message = (e?.data || '');
    subscribersOnMessage.forEach((cb: Function) => cb(message));
};

const closeHandler = (e: CloseEvent): void => {
    subscribersOnClose.forEach((cb: Function) => cb(e));
};

export const chatAPI: IChatApi = {
    connect(): Promise<WebSocket> {
        if (socket) this.closeConnection();
        return new Promise((resolve, reject) => {
            socket = new WebSocket(URL);
            socket.onopen = () => {
                resolve(socket);
                updateInterval = setInterval(() => socket.send(UPDATE_COMMAND), TIME)
                console.log('WEB SOCKET CHANNEL CONNECTED');
            }
            socket.addEventListener('close', closeHandler);
            socket.onerror = () => {
                reject(socket);
            }
        });
    },
    login(message: string): void {
        socket?.send(message);
        socket.addEventListener('message', messageHandler);
    },
    sucbscribeOnMessage(callback: (message: string) => void): void {
        subscribersOnMessage.push(callback);
    },
    unSubscribeOnMessage(callback: (message: string) => void): void {
        subscribersOnMessage = subscribersOnMessage.filter(cb => cb !== callback);
    },
    sendMessage(message: string) {
        socket?.send(message);
    },
    subscribeOnClose(callback: (e: CloseEvent) => void): void {
        subscribersOnClose.push(callback);
    },
    unSubscribeOnClose(callback: (e: CloseEvent) => void): void {
        subscribersOnClose = subscribersOnClose.filter(cb => cb !== callback);
    },
    closeConnection():void {
        if (updateInterval) clearInterval(updateInterval);
        socket?.removeEventListener('message', messageHandler);
        socket?.removeEventListener('close', closeHandler);
        socket?.close();
        console.log('WEB SOCKET CHANNEL CLOSED');
    },
};
