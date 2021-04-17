import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route/Route';

import ChatRoomPage from '../pages/ChatRoomPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={ChatRoomPage}
                />
            </Switch>
       </BrowserRouter>
    )
}

export default Routes;
