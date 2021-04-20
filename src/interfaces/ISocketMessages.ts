export interface ISocketMessage {
    id: string;
    type: string;
    userData?: {
        username: string;
        message: string;
        numUsers?: number
    };
};
