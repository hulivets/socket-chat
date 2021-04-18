import React from 'react';
import LoginForm from '../../forms/LoginForm';

import './LoginPage.scss';

const LoginPage = (): React.ReactElement => {
    return (
        <div className="login-page">
            <div className="login-page__login-form-wrapper">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
