import React from 'react';

import './MainLayout.scss';

const MainLayout = (props: any) => {
    const { children } = props;
    
    return (
        <div className="main-layout">
            {children}
        </div>
    )
};

export default MainLayout;