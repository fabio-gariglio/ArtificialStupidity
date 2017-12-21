import * as React from 'react';
import * as SignalR from '@aspnet/signalr-client';

let connection = new SignalR.HubConnection('/chat');

interface Properties { };
interface State { Message: string };

export class HelloWorld extends React.Component<Properties, State> {

    constructor(props: any) {
        super(props);
        this.state = { Message: "" };
    }

    componentDidMount() {

        connection.on('send', data => {
            this.setState(prevState => ({ Message: data }));
        });

        connection.start();
    }

    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <small>Server says: {this.state.Message}</small>
            </div>
        );
    }

}