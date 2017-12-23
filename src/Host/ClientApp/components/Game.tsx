import * as React from 'react';
import * as SignalR from '@aspnet/signalr-client';

import { Board } from './Board';
import { Keyboard } from './Keyboard';
import { KeyboardEvent } from 'react';

let connection = new SignalR.HubConnection('/chat');

interface GameProperties { }
interface GameState {
    KeyArrowPressed: string
}

export class Game extends React.Component<GameProperties, GameState> {

    constructor(props: GameProperties) {
        super(props);
        this.state = { KeyArrowPressed: '' };
    }

    isArrowKey(key: string) {

        switch (key) {
            case 'ArrowUp':
            case 'ArrowLeft':
            case 'ArrowDown':
            case 'ArrowRight':
                return true;
            default:
                return false;
        }

    }

    handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {

        var key = event.key;

        if (!this.isArrowKey(key)) return;

        this.setState(prevState => ({
            KeyArrowPressed: key.replace('Arrow', '')
        }));
    }

    handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {

        var key = event.key;

        if (!this.isArrowKey(key)) return;

        this.setState(prevState => ({
            KeyArrowPressed: ''
        }));
    }    

    render() {
        return (
            <div className="container game" onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex={0}>
                <Board />
                <Keyboard KeyArrow={this.state.KeyArrowPressed} />
            </div>
        );
    }

}