import { v4 as uuidv4 } from 'uuid';
import { ISocketMessage } from '../interfaces/ISocketMessages';

export const parseSocketMessage = (message: string): ISocketMessage=> {
    if (message === '40' || message === '3') return {} as ISocketMessage;
    const sliceMessage: string = message.slice(2, message.length);
    const parsedMessage = JSON.parse(sliceMessage);
    const messageData: ISocketMessage = {
        id: uuidv4(),
        type: parsedMessage[0],
        userData: { ...parsedMessage[1] } 
    };

    return messageData;
};

export const createUserSentMessageData = (type: string, userName: string, message: string, ): ISocketMessage => {
    const userData: ISocketMessage = {
        id: uuidv4(),
        type: type,
        userData: {
            username: userName,
            message
        }
    };

    return userData;
};
