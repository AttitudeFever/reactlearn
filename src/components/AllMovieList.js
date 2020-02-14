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
            const found = this.props.movieData.filter(item => {
                return item.title.toUpperCase().includes(this.props.searchValue.toUpperCase())
            })
            
            if (found.length === 0){
            renderThis = <p>Search Result For "{this.props.searchValue}" Not Found! Try Search Again.</p>
            }
            else {
                renderThis = found.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline}/>
                })
            }
        }
        else if (this.props.listAllFLAG) {
            renderThis = this.props.movieData.map((item, index) => {
                return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline}/>
            })
        }
        else if (this.props.filterFLAG) {

            if (this.props.filterResult.length === 0) {
                renderThis = <p>No Matches Found! Try Again With Better Filtering.</p>
            }
            else {
                renderThis = this.props.filterResult.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline}/>
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



    render() {
        this.conditionalRendering();
        return (
            <div className="listContainer" id="listContainer">
                <div className="buttonPack">
                
                    <button onClick={this.props.sortByTitle}>Title</button>
                    <button onClick={this.props.sortByYear}>Year</button>
                    <button onClick={this.props.sortByRatings}>Ratings</button>
                    
                </div>
                <div className="list" id="list">
                    {
                        renderThis
                    }
                </div>
            </div>
        )
    }
}

export default AllMovieList
