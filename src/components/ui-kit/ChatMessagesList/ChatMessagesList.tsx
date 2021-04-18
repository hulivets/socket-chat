import React, { ReactElement } from 'react';
import { IChatMessage } from './ChatMessage/IChatMessage';
import ChatMessage from './ChatMessage';

import './ChatMessagesList.scss';

const ChatMessagesList = (props: any): ReactElement => {
    const { messages } = props;

    return (
        <div className="chat-messages-list">
            <div className="chat-messages-list__content">
                <div className="chat-messages-list__welcome-wrapper">
                    <div className="chat-messages-list__welcome-text">Welcome to Socket Chat 👋</div>
                </div>
                {
                    messages.map((message: IChatMessage) => (
                        <ChatMessage
                            key={message.id}
                            id={message.id}
                            userName={message.userName}
                            userMessage={message.userMessage}
                        />
                    ))
                }
            </div>
        </div>
    );
};

ChatMessagesList.defaultProps = {
    messages: [],
};

export default ChatMessagesList;
