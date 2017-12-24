import * as React from 'react';

interface BoardProperties {
    Map: {
        Width: number,
        Height: number,
        Terrain: number[][]
    }
}
interface BoardState {
}

export class Board extends React.Component<BoardProperties, BoardState> {

    constructor(props: BoardProperties) {
        super(props);
    }

    render() {

        const zoom = 30;
        var walls = [];
        
        for (var r = 0; r < this.props.Map.Height; r++) {
            for (var c = 0; c < this.props.Map.Width; c++) {
                var value = this.props.Map.Terrain[r][c];
                if (value == 0) continue;

                walls.push(<rect x={c * zoom} y={r * zoom} width={zoom} height={zoom} className="wall" />);
            }   
        }

        return (
            <div className="row">
                <svg width={this.props.Map.Width * zoom} height={this.props.Map.Height * zoom}>
                    {walls}
                </svg>
            </div>
        );
    }

}