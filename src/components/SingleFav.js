import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={true}
                transitionEnterTimeout={1000}
                transitionLeave={true}
                transitionLeaveTimeout={1000}>
                <div className="singleFav">
                    <img src={poster} alt={this.props.title} />
                    <button id="btnDelete" className="fa fa-close" onClick={this.deleteFavItem}></button>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default SingleFav
