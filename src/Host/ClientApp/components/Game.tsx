import * as React from 'react';
import * as SignalR from '@aspnet/signalr-client';
//import * as Update from 'immutability-helper';

import { Board } from './Board';
import { Keyboard } from './Keyboard';
import { KeyboardEvent } from 'react';

let connection = new SignalR.HubConnection('/game');

interface GameProperties { }
interface GameState {
    KeyArrowPressed: string,
    Map: {
        Width: number,
        Height: number,
        Terrain: number[][]
    }
}

export class Game extends React.Component<GameProperties, GameState> {

    constructor(props: GameProperties) {
        super(props);
        this.state = {
            KeyArrowPressed: '',
            Map: {
                Height: 0,
                Width: 0,
                Terrain: [] 
            }
        };

        connection.on('initialize', (data) => {
            console.log(data);
            this.setState(prevState => ({
                KeyArrowPressed: prevState.KeyArrowPressed,
                Map: {
                    Width: data.width,
                    Height: data.height,
                    Terrain: data.terrain
                }
            }));
        });
    }

    componentDidMount() {
        connection.start();
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
                <Board Map={this.state.Map}/>
                <Keyboard KeyArrow={this.state.KeyArrowPressed} />
            </div>
        );
    }

}