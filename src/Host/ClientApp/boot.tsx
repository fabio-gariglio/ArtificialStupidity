import './css/site.css';
import 'bootstrap';
import { HubConnection } from '@aspnet/signalr-client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Game } from './components/Game';

ReactDOM.render(
    <Game />,
    document.getElementById('react-app')
);