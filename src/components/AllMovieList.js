import React from 'react'
import SingleMovieBrief from './SingleMovieBrief';

let renderThis;
class AllMovieList extends React.Component {
    constructor(){
        super()
        this.state={}
        this.conditionalRendering = this.conditionalRendering.bind(this);
    }

    conditionalRendering(){
        if (this.props.searchFLAG) 
        {
            const found= this.props.movieData.filter( item => {
                return item.title.toUpperCase() === this.props.searchValue.toUpperCase() 
            })
            
            if (found.length === 0){
            renderThis = <tr><td>Search Result For "{this.props.searchValue}" Not Found! Try Search Again.</td></tr>
            }
            else {
                renderThis = found.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} />
                })
            }
        }
        else if (this.props.listAllFLAG) {
            renderThis = this.props.movieData.map((item, index) => {
                return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} />
            })
        }
        else if (this.props.filterFLAG) {

            if (this.props.filterResult.length === 0) {
                renderThis = <tr><td>No Matches Found! Try Again With Better Filtering.</td></tr>
            }
            else {
                renderThis = this.props.filterResult.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} />
                })
            }
        }
    }

    // shouldComponentUpdate(){
    //     if (this.props.filterFLAG || this.props.listAllFLAG || this.props.searchFLAG) {
    //         console.log(this.props.filterFLAG, this.props.listAllFLAG, this.props.searchFLAG)
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    render(){
        this.conditionalRendering();
        return (
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th><button onClick={this.props.sortByTitle}>Title</button></th>
                            <th><button onClick={this.props.sortByYear}>Year</button></th> 
                            <th><button onClick={this.props.sortByRatings}>Ratings</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderThis
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllMovieList
