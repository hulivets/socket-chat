import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../ui-kit/Header';
import ChatMessagesList from '../../ui-kit/ChatMessagesList';
import SubmitChatMessageForm from '../../forms/SubmitChatMessageForm';

import { ISocketMessage } from '../../../interfaces/ISocketMessages';
import useWebsocket from '../../../hooks/useWebSocket';
import { parseSocketMessage, createUserSentMessageData } from '../../../utils/socketUtils';
import { SocketHandlerNames } from '../../../contstants/socketCommands';
import { store } from '../../../store/store';
import { PathNames } from '../../../contstants/pathNames';

import './ChatRoomPage.scss';

const ChatRoomPage = (): ReactElement => {
    const [messagesData, setMessagesData] = useState<Array<ISocketMessage>>([]);
    const [typingData, setTypingData] = useState<Array<ISocketMessage>>([]);
    const { state: contextState } = useContext(store);
    const history = useHistory();
 
    const {
        sucbscribe,
        unsucbscribe,
        sendMessage,
        sendTypingMessage,
        sendStopTypingMessage,
        logout,
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

    const handleLogOut = () => {
        history.push(PathNames.LOGIN);
        logout();
    }

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
        if (!contextState.isLogged) {
            history.push(PathNames.LOGIN);
            return;
        }

        sucbscribe(messagesHandler);
        return () => unsucbscribe(messagesHandler);
    });

    return (
        <div className="chat-room-page">
            <Header onActionClick={handleLogOut} />
            <div className="chat-room-page__content">
                <ChatMessagesList messages={messagesData} typingData={typingData}/>
                <SubmitChatMessageForm
                    onSubmit={handleSubmit}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                />
            </div>
        </div>
    );
}

export default ChatRoomPage;