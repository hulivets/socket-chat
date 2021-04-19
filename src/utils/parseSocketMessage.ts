export const parseSocketMessage = (message: string): any => {
    if (message === '40') return {};
    const sliceMessage: string = message.slice(2, message.length);
    const parsedMessage = JSON.parse(sliceMessage);
    const messageData = {
        type: parsedMessage[0],
        data: { ...parsedMessage[1] } 
    };

    return messageData;
};
