import React, { ReactElement } from 'react';
import ChatMessage from './ChatMessage';
import UserActivityInfo from './UserActivityInfo';
import { SocketHandlerNames } from '../../../contstants/socketCommands';
import { getUserNameColor } from '../../../utils/userColor';
import { ISocketMessage } from '../../../interfaces/ISocketMessages';

import './ChatMessagesList.scss';
import TypingMessage from './TypingMessage';

interface IChatMessagesListProps {
    messages: Array<ISocketMessage>;
    typingData: Array<ISocketMessage>;
};

const ChatMessagesList = (props: IChatMessagesListProps): ReactElement => {
    const { messages, typingData } = props;

    const memoizedGetUserColor = getUserNameColor();

    const renderComponentByType = (data: ISocketMessage) => {
        let userActivityText: string;

        switch (data.type) {
            case SocketHandlerNames.NEW_MESSAGE:
                return renderChatMessage(data);
            case SocketHandlerNames.USER_JOINED:
                userActivityText = 'joined 🥳'
                return renderUserActivityInfo(data, userActivityText);
            case SocketHandlerNames.USER_LEFT:
                userActivityText = 'left 🤥'
                return renderUserActivityInfo(data, userActivityText);
            case SocketHandlerNames.LOGIN:
                return renderUserActivityInfo(data);
            default:
                return null;
        }
    };

    const renderChatMessage = (data: ISocketMessage): ReactElement => (
        <ChatMessage
            key={data.id}
            id={data.id}
            userName={data.userData?.username}
            userMessage={data.userData?.message}
            userColor={memoizedGetUserColor(data.userData?.username || '')}
        />
    );

    const renderUserActivityInfo = (data: ISocketMessage, text: string = '') => (
        <UserActivityInfo
            key={data.id}
            userName={data.userData?.username}
            text={text}
            userQuantity={data.userData?.numUsers}
        />
    );

    return (
        <div className="chat-messages-list">
            <div className="chat-messages-list__content">
                <div className="chat-messages-list__welcome-wrapper">
                    <div className="chat-messages-list__welcome-text">Welcome to Socket Chat 👋</div>
                </div>
                {
                    messages.map((message: ISocketMessage) => renderComponentByType(message))
                }
                <div className="chat-messages-list__typing-message">
                {
                    typingData.map((data: ISocketMessage) => (
                        <TypingMessage
                            key={data.id}
                            text={`${data.userData?.username} typing...`}
                            userColor={memoizedGetUserColor(data.userData?.username || '')}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    );
};

ChatMessagesList.defaultProps = {
    messages: [],
};

export default ChatMessagesList;
