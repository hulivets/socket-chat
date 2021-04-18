import React, { ReactElement } from 'react';

import './TextInput.scss';

interface ITextInputProps {
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
}

const TextInput = (props: ITextInputProps): ReactElement=> {
    const { name, value, placeholder, onChange } = props;

    return (
        <div className="text-input">
            <input
                name={name}
                className="input"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
};

TextInput.defaultProps = {
    name: '',
    value: '',
    placeholder: '',
    onChange: null,
};

export default TextInput;
