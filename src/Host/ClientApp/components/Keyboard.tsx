import * as React from 'react';

interface KeyboardProperties {
    KeyArrow: string
}

interface KeyboardState { }

export class Keyboard extends React.Component<KeyboardProperties, KeyboardState> {

    constructor(props: KeyboardProperties) {
        super(props);
    }

    getButtonClasses(pressed: boolean) {
        var buttonStyle = [
            "btn",
            pressed ? "btn-danger" : "btn-default"
        ].join(" ");

        return buttonStyle;
    }

    render() {
        return (
            <div className="container keyboard">

                <div className="row">

                    <div className="col-md-4" />

                    <div className="col-md-4">
                        <button type="button" className={this.getButtonClasses(this.props.KeyArrow == 'Up')}>
                            <i className="glyphicon glyphicon-arrow-up"></i>
                        </button>
                    </div>

                    <div className="col-md-4" />

                </div>

                <div className="row">

                    <div className="col-md-4">
                        <button type="button" className={this.getButtonClasses(this.props.KeyArrow == 'Left')}>
                            <i className="glyphicon glyphicon-arrow-left"></i>
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button type="button" className={this.getButtonClasses(this.props.KeyArrow == 'Down')}>
                            <i className="glyphicon glyphicon-arrow-down"></i>
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button type="button" className={this.getButtonClasses(this.props.KeyArrow == 'Right')}>
                            <i className="glyphicon glyphicon-arrow-right"></i>
                        </button>
                    </div>                                        

                </div>

            </div>
        );
    }

}