import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Route from './Route/Route';
import LoginPage from '../pages/LoginPage';
import ChatRoomPage from '../pages/ChatRoomPage';
import { PathNames } from '../../contstants/pathNames';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={PathNames.LOGIN}
                    component={LoginPage}
                />
                <Route
                    exact
                    path={PathNames.CHAT_ROOM}
                    component={ChatRoomPage}
                />
                <Redirect to={PathNames.LOGIN} />
            </Switch>
       </BrowserRouter>
    );
}

export default Routes;
