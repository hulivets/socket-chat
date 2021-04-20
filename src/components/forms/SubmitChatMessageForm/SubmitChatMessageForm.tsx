import React, { useState } from 'react';
import TextInput from '../../ui-kit/TextInput';
import Button from '../../ui-kit/Button';

import './SubmitChatMessageForm.scss';

interface ISubmitChatMessageFormProps {
    onSubmit?: (message: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SubmitChatMessageForm = (props: ISubmitChatMessageFormProps): React.ReactElement => {
    const { onSubmit, onKeyDown, onKeyUp} = props;
    const [userData, setUserData] = useState<{ [userMessage: string]: string }>({ userMessage: '' });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        if (!onSubmit) return;

        const message = userData.userMessage.trim();
        if (message) {
            onSubmit(message);
            setUserData({ userMessage: '' });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (onKeyDown) {
            onKeyDown(e);
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (onKeyUp) {
            onKeyUp(e);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="chat-message-form">
            <form action="" className="chat-message-form__form">
                <div className="chat-message-form__field-wrapper">
                    <TextInput
                        name="userMessage"
                        placeholder="Message"
                        value={userData.userMessage}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                    />
                </div>
                <div className="chat-message-form__button-wrapper">
                    <Button text="Send" type="submit" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    );
};

export default SubmitChatMessageForm;
