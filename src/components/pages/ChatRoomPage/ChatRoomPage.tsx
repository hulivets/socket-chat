import React, { ReactElement, useEffect, useState } from 'react';
import ChatMessagesList from '../../ui-kit/ChatMessagesList';
import SubmitChatMessageForm from '../../forms/SubmitChatMessageForm';
import useWebsocket from '../../../hooks/useWebSocket';
import { parseSocketMessage } from '../../../utils/parseSocketMessage';

import './ChatRoomPage.scss';

const MOCK = [{
    id: '0',
    userName: 'Test Name',
    userMessage: 'Helooooo I am test user',
}];

const ChatRoomPage = (): ReactElement => {
    const [messagesData, setMessagesData] = useState<Array<object>>([]);
    const [typingData, setTypingData] = useState<Array<object>>([]);
    const { sucbscribe, unsucbscribe } = useWebsocket();

    const getMessages = (message: string) => {
        const data = parseSocketMessage(message);
        if (data.type === 'typing' || data.type === 'stop typing') {
            setTypingData((state) => [...state, data]);
        } else {
            setMessagesData((state) => [...state, data]);
        }
        
    };

    useEffect(() => {
        sucbscribe(getMessages);

        return () => unsucbscribe(getMessages);
    });

    return (
        <div className="chat-room-page">
            <ChatMessagesList messages={MOCK} />
            <SubmitChatMessageForm />
        </div>
    );
}

export default ChatRoomPage;