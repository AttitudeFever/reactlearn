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
        const poster = "https://image.tmdb.org/t/p/w92" + this.props.poster;
        return (
            <div>
                <img src={poster} alt={this.props.title} />
                <button onClick={this.deleteFavItem}>Delete</button>
            </div>
        )
    }
}

export default SingleFav
