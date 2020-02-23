import React from 'react'
//import CSSTransitionGroup from 'react-addons-css-transition-group'
import { CSSTransitionGroup } from 'react-transition-group'

class SingleFav extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.deleteFavItem = this.deleteFavItem.bind(this);
    }

    deleteFavItem(){
        this.props.deleteFavItem(this.props.id)
    }
    render() {
        const poster = "https://image.tmdb.org/t/p/w154" + this.props.poster;
        return (
            <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={true}
                transitionEnterTimeout={1000}
                transitionLeave={true}
                transitionLeaveTimeout={300}>

                <div className="singleFav">
                    <img src={poster} alt={this.props.title} />
                    <button id="btnDelete" className="fa fa-close" onClick={this.deleteFavItem} ></button>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default SingleFav
