import React from 'react'
import TabCastCrew from './TabCastCrew';

let castArray = [];
let renderThis;
class CastCrewContainer extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.conditionalRendering = this.conditionalRendering.bind(this);
    }

    conditionalRendering(){
        const cast = {};
        if (this.props.production.cast !== null && this.props.production.cast !== undefined) {
            Object.assign(cast, this.props.production.cast);
            castArray = this.props.production.cast;

            castArray.sort( (a, b) => {
                if (a.order > b.order) {
                    return 1;
                }
                if (b.order > a.order) {
                    return -1;
                }
                return 0;
            });
            renderThis = <TabCastCrew cast={castArray} />
        }
        else{
            castArray = [{id:0 , name: "Not Found", character:"Not Found"}]
            renderThis = <TabCastCrew cast={castArray}/>
        }
    }


render(){
    
    //console.log(this.props.production)
    this.conditionalRendering();
    return (
        <div className="castcrewcontainer" id="castcrewcontainer">
            {renderThis}
        </div>
    )
}
}

export default CastCrewContainer
