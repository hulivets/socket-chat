import { IChatApi } from '../interfaces/IChatAPI';

const URL: string = 'wss://socketio-chat-h9jt.herokuapp.com/socket.io/?EIO=3&transport=websocket';
const UPDATE_COMMAND: string = '2';
const TIME = 20000;

let socket: WebSocket;
let subscribers = [] as Array<(message: string) => void>;

const closeHandler = (): void => {
    console.log('WEB SOCKET CHANNEL CLOSED');
};

const messageHandler = (e: MessageEvent): void => {
    const message = (e?.data || '');
    subscribers.forEach((cb: Function) => cb(message));
};

export const chatAPI: IChatApi = {
    connect(): Promise<WebSocket> {
        this.closeConnection();
        return new Promise((resolve, reject) => {
            socket = new WebSocket(URL);
            socket.onopen = () => {
                resolve(socket);
                setInterval(() => socket.send(UPDATE_COMMAND), TIME)
                console.log('WEB SOCKET CHANNEL CONNECTED');
            }

            socket.onerror = () => {
                reject(socket);
            }
            
        });
    },
    login(message: string): void {
        socket?.send(message);
        socket.addEventListener('message', messageHandler);
        socket.addEventListener('close', closeHandler);
    },
    sucbscribe(callback: (message: string) => void): void {
        subscribers.push(callback);
    },
    unSubscribe(callback: (message: string) => void): void {
        subscribers = subscribers.filter(cb => cb !== callback);
    },
    sendMessage(message: string) {
        socket?.send(message);
    },
    closeConnection():void {
        socket?.removeEventListener('close', closeHandler);
        socket?.removeEventListener('message', messageHandler);
        socket?.close();
    },
};
