import React, { ReactElement} from 'react';

import './TypingMessage.scss';

interface ITypingMessageProps {
    text: string;
    userColor: string;
};

const TypingMessage = (props: ITypingMessageProps): ReactElement => {
    const { text, userColor } = props;
    
    return (
        <div className="typing-message">
            <div
                className="typing-message__text"
                style={{ color: userColor }}
            >{text}
            </div>
        </div>
    );
};

TypingMessage.defaultProps = {
    text: '',
    userColor: '#CCCCCC',
};

const MemoizedTypingMessage = React.memo(TypingMessage);

export default MemoizedTypingMessage;
