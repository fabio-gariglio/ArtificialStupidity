import './css/site.css';
import 'bootstrap';
import { HubConnection } from '@aspnet/signalr-client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('react-app')
);