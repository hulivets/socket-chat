import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../../ui-kit/TextInput';
import Button from '../../ui-kit/Button';
import useWebsocket from '../../../hooks/useWebSocket';
import { PathNames } from  '../../../contstants/pathNames';

import './LoginForm.scss';

const LoginForm = (): ReactElement => {
    const [userData, setUserData] = useState<{ [userName: string]: string }>({ userName: '' });
    const history = useHistory();
    const { login } = useWebsocket();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        if (userData.userName.trim()) {
            login(userData.userName.trim(), () => history.push(PathNames.CHAT_ROOM));
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
                    <Button text="Join" type="submit" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
