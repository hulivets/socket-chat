import React, { ReactElement } from 'react';
import { StateProvider } from '../../store/store';
import Routes from '../routes/Routes';

import './App.scss';
import '../../assets/styles/reset.scss';


const App = (): ReactElement => (
    <StateProvider>
        <Routes />
    </StateProvider>
)

export default App;
