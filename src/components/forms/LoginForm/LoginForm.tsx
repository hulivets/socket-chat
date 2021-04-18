import React, { ReactElement, useState } from 'react';
import TextInput from '../../ui-kit/TextInput';
import Button from '../../ui-kit/Button';

import './LoginForm.scss';

const LoginForm = (): ReactElement => {
    const [userData, setUserData] = useState<{ [userName: string]: string }>({ userName: '' });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (userData.userMessage.trim()) {
            setUserData({ userName: '' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="login-form">
            <form action="" className="login-form__form">
                <div className="login-form__field-wrapper">
                    <TextInput name="userName" placeholder="Name" value={userData.userName} onChange={handleChange}/>
                </div>
                <div className="login-form__field-wrapper">
                    <Button text="Login" type="submit" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
