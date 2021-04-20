import React, { ReactElement, useEffect, useRef } from 'react';

import './ChatMessage.scss';

interface IChatMessage {
    id: string;
    userName: string;
    userMessage: string;
    userColor?: string;
};
const ChatMessage = (props: IChatMessage): ReactElement => {
    const { userName, userMessage, userColor } = props;
    const ref = useRef<HTMLDivElement>(null);

    const cropUserName = (): string => {
        const name: string = userName.charAt(0).toUpperCase();
        return name;
    };

    useEffect(() => {
        ref.current?.scrollIntoView();
    });

    return (
        <div className="chat-message" ref={ref}>
            <div className="chat-message__content">
                <div className="chat-message__avatar-wrapper">
                    <div className="chat-message__avatar" style={{backgroundColor: userColor}}>{cropUserName()}</div>
                </div>
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
    userMessage: '',
    userColor: '#CCCCCC',
};

export default ChatMessage;
