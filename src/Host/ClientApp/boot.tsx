import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('react-app')
);