import React, { useEffect, useState } from 'react';
import TextInput from '../../ui-kit/TextInput';
import Button from '../../ui-kit/Button';

import './SubmitChatMessageForm.scss';

interface ISubmitChatMessageFormProps {
    onSubmit: (message: string) => void;
    sendTyping: (send: boolean) => void;
};

const SubmitChatMessageForm = (props: ISubmitChatMessageFormProps): React.ReactElement => {
    const { onSubmit, sendTyping } = props;
    const [value, setValue] = useState<string>('');
    const [startTyping, setStartTyping] = useState<boolean>(false);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        if (!onSubmit) return;

        const message = value.trim();
        if (message) {
            onSubmit(message);
            setValue('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!startTyping) sendTyping(true);

        setStartTyping(true);
        setValue(e.target.value);
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (startTyping) {
            timeout = setTimeout(() => {
                sendTyping(false);
                setStartTyping(false);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <div className="chat-message-form">
            <form action="" className="chat-message-form__form">
                <div className="chat-message-form__field-wrapper">
                    <TextInput
                        name="userMessage"
                        placeholder="Message"
                        value={value}
                        onChange={handleChange}
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
