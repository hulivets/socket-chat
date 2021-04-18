import React, { ReactElement } from 'react';
import { IChatMessage } from './IChatMessage';

import './ChatMessage.scss';

const ChatMessage = (props: IChatMessage): ReactElement => {
    const { userName, userMessage } = props;

    const cropUserName = (): string => {
        const name: string = userName.charAt(0).toUpperCase();
        return name;
    };

    const generateColor = (): string => {
        const hex = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + hex.slice(0, 6);
    };

    const userColor = generateColor();

    return (
        <div className="chat-message">
            <div className="chat-message__content">
                <div className="chat-message__avatar" style={{backgroundColor: userColor}}>{cropUserName()}</div>
                <div className="chat-message__user-content">
                    <div className="chat-message__user-name" style={{color: userColor}}>{userName}</div>
                    <div className="chat-message__user-message">{userMessage}</div>
                </div>
            </div>
        </div>
    );
};

ChatMessage.defaultProps = {
    userName: '',
    userMessage: ''
};

export default ChatMessage;
