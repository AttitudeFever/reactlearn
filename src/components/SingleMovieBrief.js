import React from 'react'

class SingleMovieBrief extends React.Component {

constructor(){
    super()
    this.state={}
    this.addToFav = this.addToFav.bind(this);
}

    addToFav() {
        this.props.addToFav(this.props.title, this.props.poster, this.props.id);
    }

    render() {
        const poster = "https://image.tmdb.org/t/p/w92/" + this.props.poster;
        return (
            <tr>
                <td>
                    <img src={poster} alt={this.props.title} /> {this.props.title}
                </td>
                <td>
                    {this.props.release_date}
                </td>
                <td>
                    {this.props.ratings}
                </td>
                <td>
                    <button className="btn btn-5" onClick={this.addToFav}><i className="fa fa-heart"></i></button>
                </td>
                <td>
                    <button className="btn btn-5"><i className="fa fa-eye"></i></button>
                </td>
            </tr>
        )
    }
}

export default SingleMovieBrief
