import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Route from './Route/Route';
import LoginPage from '../pages/LoginPage';
import ChatRoomPage from '../pages/ChatRoomPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={LoginPage}
                />
                <Route
                    exact
                    path="/chat-room"
                    component={ChatRoomPage}
                />
                <Redirect to="/" />
            </Switch>
       </BrowserRouter>
    );
}

export default Routes;
