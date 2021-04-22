import React, { ReactElement, useEffect, useRef } from 'react';

import './TextInput.scss';

interface ITextInputProps {
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
}

const TextInput = (props: ITextInputProps): ReactElement=> {
    const {
        name,
        value,
        placeholder,
        onChange,
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });
    

    return (
        <div className="text-input">
            <input
                ref={inputRef}
                name={name}
                className="input"
                value={value}
                autoComplete="off"
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
