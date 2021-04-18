import React, { ReactElement } from 'react';

import './TextArea.scss';

interface ITextAreaProps  {
    name: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void | null
}

const TextArea = (props: ITextAreaProps): ReactElement => {
    const { name, placeholder, value, onChange } = props;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e.target?.value);
        }
    }

    return (
        <div className="text-area">
            <textarea
                name={name}
                value={value}
                placeholder={placeholder} 
                onChange={handleChange}
            />
        </div>
    );
};

TextArea.defaultProps = {
    name: '',
    placeholder: '',
    value: '',
    onChange: null,
};

export default TextArea;
