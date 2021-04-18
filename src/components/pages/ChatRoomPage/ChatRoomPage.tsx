import React, { ReactElement } from 'react';
import LoginForm from '../../forms/LoginForm/LoginForm';

import './ChatRoomPage.scss'

const ChatRoomPage = (): ReactElement => (
    <div className="chat-room-page">
        <LoginForm />
    </div>
);

export default ChatRoomPage;