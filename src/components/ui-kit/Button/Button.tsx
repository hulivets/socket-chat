import React, { ReactElement } from 'react';

import './Button.scss';

interface IButtonProps {
    type: 'submit' | 'button'
    text?: string
    onClick: () => void | null
}

const Button = (props: IButtonProps): ReactElement => {
    const { type, text, onClick } = props;

    return (
        <button
            className="button"
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: '',
    type: 'button',
    onClick: null,
};

export default Button;
