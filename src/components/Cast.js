import React from 'react'
import { render } from '@testing-library/react';

let renderThis;
class Cast extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.conditionalRendering = this.conditionalRendering.bind(this);
    }

    conditionalRendering(){
        if (this.props.name !== undefined) {
            renderThis =
                <div className="personsCast">
                    <div className="cardCast">
                        <div className="containerCast">
                            <h4><b>Actor Name: {this.props.name}</b></h4>
                            <div className="profileCast"><a href={" "} >Actor Profile</a>
                            </div>
                            <p>Character Name: {this.props.character}</p>
                        </div>
                    </div>
                </div>
        }
    }

render(){
    this.conditionalRendering()
    return (
        <div>
            {renderThis}
        </div>
    )
}
}

export default Cast
