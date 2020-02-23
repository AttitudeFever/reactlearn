import React from 'react'
import SingleMovieBrief from './SingleMovieBrief';
import loader from '../../../images/loader2.gif';
import MovieView from './MovieView';
import ActorProfileContainer from '../tabs-cast-crew/actor/ActorProfileContainer';

let renderThis;
class AllMovieList extends React.Component {
    constructor(){
        super()
        this.childKey = 0;
        this.state={
            viewID : 0
        }
        this.conditionalRendering = this.conditionalRendering.bind(this);
        this.getViewID = this.getViewID.bind(this);
        this.setViewFLAG = this.setViewFLAG.bind(this);
        this.getProduction = this.getProduction.bind(this);
    }

    conditionalRendering() {
        if (this.props.isLoading) {
            renderThis = <p className="isLoading" ><img src={loader} alt="Loading" height="80" width="80"/>Loading API....</p>
        } else {
            if (this.props.searchFLAG) {
                const found = this.props.movieData.filter(item => {
                    return item.title.toUpperCase().includes(this.props.searchValue.toUpperCase())
                })

                if (found.length === 0) {
                    renderThis = <p className="noResult" id="noResult" >Search Result For "{this.props.searchValue}" Not Found! Try Search Again.
                <br />Or Try Filter option
            </p>
                }
                else {
                    renderThis = found.map((item, index) => {
                        return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline} getViewID={this.getViewID}/>
                    })
                }
            }
            else if (this.props.listAllFLAG) {
                renderThis = this.props.movieData.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline} getViewID={this.getViewID}/>
                })
            }
            else if (this.props.filterFLAG) {

                if (this.props.filterResult.length === 0) {
                    renderThis = <p className="noResult">No Matches Found! Try Again With Better Filtering.</p>
                }
                else {
                    renderThis = this.props.filterResult.map((item, index) => {
                        return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline} getViewID={this.getViewID}/>
                    })
                }
            }
            else if (this.props.viewFLAG){
                renderThis = <MovieView viewID={this.state.viewID} getFLAGS={this.props.getFLAGS} addToFav={this.props.addToFav} getProduction={this.getProduction}/>
            }
            else if (this.props.ActorProfileFLAG){
                renderThis = <ActorProfileContainer  key={this.childKey} getFLAGS={this.props.getFLAGS} ActorID={this.props.ActorID}/>
            }
        }
    }

    getViewID(id){
        this.setState( {viewID : id})
        document.getElementById('filter').style.display = "none";
        document.getElementById('sort').style.display = "none";
        document.getElementById('castcrewcontainer').style.display = "inline-block";
        this.setViewFLAG()
    }

    setViewFLAG(){
        let searchFLAG = false;
        let listAllFLAG = false;
        let FilterFLAG = false;
        let viewFLAG = true;
        let ActorProfileFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, FilterFLAG, viewFLAG, ActorProfileFLAG)
    }

    getProduction(production){
        this.props.getProduction(production);
    }

    render() {
        ++this.childKey;
        this.conditionalRendering();
        return (
            <div className="listContainer" id="listContainer">
                
                <div className="fa fa-sort-amount-asc" id="sort">
                    <select onChange={this.props.doSort}>
                        <option className="option" value="sortByTitle">Title</option>
                        <option className="option" value="sortByYear">Year</option>
                        <option className="option" value="sortByRating">Rating</option>
                    </select>
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
