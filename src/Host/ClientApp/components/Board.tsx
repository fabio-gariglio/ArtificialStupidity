import * as React from 'react';

interface BoardProperties { }
interface BoardState { }

export class Board extends React.Component<BoardProperties, BoardState> {

    constructor(props: BoardProperties) {
        super(props);
    }

    render() {
        return (
            <svg width="500" height="500">
            </svg>
        );
    }

}