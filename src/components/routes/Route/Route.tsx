import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const RouteWrapper = (props: any) => {
    const {
        component: Component,
        ...rest
    } = props;

    const Layout: FC = MainLayout;

    return (
        <Route
            {...rest}
            render = {props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />    
    );
}

export default RouteWrapper;
