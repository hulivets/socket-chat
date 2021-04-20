import React, { ReactElement, useContext, useEffect, useState } from 'react';

import ChatMessagesList from '../../ui-kit/ChatMessagesList';
import SubmitChatMessageForm from '../../forms/SubmitChatMessageForm';

import { ISocketMessage } from '../../../interfaces/ISocketMessages';
import useWebsocket from '../../../hooks/useWebSocket';
import { parseSocketMessage, createUserSentMessageData } from '../../../utils/socketUtils';
import { SocketHandlerNames } from '../../../contstants/socketCommands';
import { store } from '../../../store/store';

import './ChatRoomPage.scss';

const ChatRoomPage = (): ReactElement => {
    const [messagesData, setMessagesData] = useState<Array<ISocketMessage>>([]);
    const [typingData, setTypingData] = useState<Array<ISocketMessage>>([]);
    const { state: contextState } = useContext(store);
 
    const {
        sucbscribe,
        unsucbscribe,
        sendMessage,
        sendTypingMessage,
        sendStopTypingMessage
    } = useWebsocket();

    const handleSubmit = (message: string): void => {
        if (message) {
            const user: ISocketMessage = createUserSentMessageData(SocketHandlerNames.NEW_MESSAGE, contextState.userName, message);

            sendMessage(message);
            setMessagesData((state: Array<ISocketMessage>) => [...state, user]);
        };
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        sendTypingMessage(contextState.userName);
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        sendStopTypingMessage(contextState.userName);
    };

    const messagesHandler = (message: string): void => {
        const data: ISocketMessage = parseSocketMessage(message);

        switch (data?.type) {
            case SocketHandlerNames.TYPYNG:
                return setTypingData((prev: Array<ISocketMessage>) => [...prev, data]);

            case SocketHandlerNames.STOP_TYPING:
                const filtered: Array<ISocketMessage> = typingData.filter((obj: ISocketMessage) => obj.userData?.username !== data.userData?.username );
                return setTypingData(filtered);

            default:
                return setMessagesData((prev: Array<ISocketMessage>) => [...prev, data]);
        }
    };

    useEffect(() => {
        sucbscribe(messagesHandler);
        return () => unsucbscribe(messagesHandler);
    });

    return (
        <div className="chat-room-page">
            <ChatMessagesList messages={messagesData} typingData={typingData}/>
            <SubmitChatMessageForm
                onSubmit={handleSubmit}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}

export default ChatRoomPage;