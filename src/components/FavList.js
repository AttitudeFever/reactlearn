import React from 'react'
import SingleFav from './SingleFav';

class FavList extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="favs">
                {
                    this.props.favList.map( (item, index) =>{
                        return <SingleFav key={index} id={item.id} title={item.title} poster={item.poster} 
                            deleteFavItem={this.props.deleteFavItem}/>
                    })
                }
            </div>
        )
    }
}

export default FavList
