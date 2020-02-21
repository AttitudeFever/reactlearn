import React from 'react'

class ActorProfile extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.setViewFLAG= this.setViewFLAG.bind(this);
    }

    setViewFLAG(){
        let searchFLAG = false;
        let listAllFLAG = false;
        let FilterFLAG = false;
        let viewFLAG = true;
        let ActorProfileFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, FilterFLAG, viewFLAG, ActorProfileFLAG)
    }
    
    render() {
        return (
            <div>
                <p>Im here</p>
                <button id="closeM" className="fa fa-close" onClick={this.setViewFLAG}></button>
            </div>
        )
    }
}

export default ActorProfile
