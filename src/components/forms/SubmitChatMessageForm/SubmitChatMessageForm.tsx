import React, { useState } from 'react';
import TextInput from '../../ui-kit/TextInput';
import Button from '../../ui-kit/Button';

import './SubmitChatMessageForm.scss';

const SubmitChatMessageForm = (): React.ReactElement => {
    const [userData, setUserData] = useState<{ [userMessage: string]: string }>({ userMessage: '' });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        if (userData.userMessage.trim()) {
            setUserData({ userMessage: '' });
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="chat-message-form">
            <form action="" className="chat-message-form__form">
                <div className="chat-message-form__field-wrapper">
                    <TextInput name="userMessage" placeholder="Message" value={userData.userMessage} onChange={handleChange}/>
                </div>
                <div className="chat-message-form__button-wrapper">
                    <Button text="Send" type="submit" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    );
};

export default SubmitChatMessageForm;
