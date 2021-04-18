import React, { ReactElement } from 'react';

import './MainLayout.scss';

const MainLayout = (props: any): ReactElement => {
    const { children } = props;
    
    return (
        <div className="main-layout">
            {children}
        </div>
    )
};

export default MainLayout;