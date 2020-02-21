import React from 'react'

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
                            <h4><b>Department: {this.props.department}</b></h4>
                            <div className="profileCast"><p>Job: {this.props.job}</p>
                            </div>
                            <p>Name: {this.props.name}</p>
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
