import React, { ReactElement } from 'react';
import ChatMessagesList from '../../ui-kit/ChatMessagesList';
import SubmitChatMessageForm from '../../forms/SubmitChatMessageForm';

import './ChatRoomPage.scss';

const MOCK = [{
    id: '0',
    userName: 'Test Name',
    userMessage: 'Helooooo I am test user',
}];

const ChatRoomPage = (): ReactElement => (
    <div className="chat-room-page">
        <ChatMessagesList messages={MOCK} />
        <SubmitChatMessageForm />
    </div>
);

export default ChatRoomPage;