import React from 'react'

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
            <div className="singleFav">
                <img src={poster} alt={this.props.title} />
                <button id="btnDelete" className="fa fa-close" onClick={this.deleteFavItem}></button>
            </div>
        )
    }
}

export default SingleFav
