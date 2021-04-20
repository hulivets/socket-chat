import React from 'react';

import './Header.scss';

interface IHeaderProps {
    onActionClick: () => void;
};

const Header = (props: IHeaderProps): React.ReactElement => {
    const { onActionClick } = props;

    const handleClick = (e: React.MouseEvent) => {
        onActionClick();
    };

    return (
        <div className="header">
            <div className="header__content">
                <div className="header__chat-name">Socket Chat</div>
                <div
                    className="header__action-icon"
                    title="Log out"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

Header.defautProps = {
    onActionClick: () => null,
};

export default Header;
