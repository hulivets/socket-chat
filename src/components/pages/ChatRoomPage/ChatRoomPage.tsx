import React, { ReactElement } from 'react';
import LoginForm from '../../forms/LoginForm/LoginForm';
import SubmitChatMessageForm from '../../forms/SubmitChatMessageForm/SubmitChatMessageForm';

import './ChatRoomPage.scss'

const ChatRoomPage = (): ReactElement => (
    <div className="chat-room-page">
        <SubmitChatMessageForm />
    </div>
);

export default ChatRoomPage;