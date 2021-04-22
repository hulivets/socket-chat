import React from 'react';

import './UserActivityInfo.scss';

interface IUserActivityInfoProps {
    text: string;
    userName: string;
    userQuantity: number;
};

const UserActivityInfo = (props: IUserActivityInfoProps): React.ReactElement => {
    const { text, userName, userQuantity } = props;

    return (
        <div className="user-activity-info">
            <div className="user-activity-info__content">
                <div className="user-activity-info__user">
                    { (userName && text) && <span>{userName} {text}</span>}
                </div>
                <div className="user-activity-info__user-quantity">
                    <span>participants online: {userQuantity}</span>
                </div>
            </div>
        </div>
    )
};

UserActivityInfo.defaultProps = {
    text: '',
    userName: '',
    userQuantity: 0,
};

const MemoizedUserActivityInfo = React.memo(UserActivityInfo);

export default MemoizedUserActivityInfo;
