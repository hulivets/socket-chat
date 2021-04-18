import React, { ReactElement } from 'react';

import './TextInput.scss';

interface ITextInputProps {
    name: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void | null;
}

const TextInput = (props: ITextInputProps): ReactElement=> {
    const { name, value, placeholder, onChange } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target?.value);
        }
    }

    return (
        <div className="text-input">
            <input
                name={name}
                className="input"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
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
