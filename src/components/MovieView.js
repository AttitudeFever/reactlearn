import React from 'react';
import SingleMovieDetail from './SingleMovieDetail';
import loader from './images/loader2.gif';

let renderThis;
class MovieView extends React.Component {
    constructor() {
        super()
        this.state = {
            viewData : [],
            isLoading : false
        }
        this.handleCloseMovieView=this.handleCloseMovieView.bind(this);
        this.setListAllFLAG=this.setListAllFLAG.bind(this);
        this.conditionalRendering = this.conditionalRendering.bind(this);
    }

    handleCloseMovieView(){
        document.getElementById('filter').style.display = "inline-block";
        document.getElementById('sort').style.display = "inline-block";
        this.setListAllFLAG();
    }

    setListAllFLAG(){
        let searchFLAG = false;
        let listAllFLAG = true;
        let FilterFLAG = false;
        let viewFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, FilterFLAG, viewFLAG)
    }

    async componentDidMount(){
        this.setState( {isLoading : true } )
        try {
            let viewAPI = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id="+this.props.viewID;
            const response = await fetch(viewAPI);
            const jsonData = await response.json();
            this.setState( {viewData : jsonData} )
            this.setState( {isLoading : false } )
        }
        catch (error) {
            console.error(error);
        }
    }

    conditionalRendering(){
        renderThis = this.state.isLoading ? <p className="isLoading" ><img src={loader} alt="Loading" height="80" width="80"/>Loading API....</p>
        :
        <SingleMovieDetail viewData={this.state.viewData} addToFav={this.props.addToFav}/>
    }

    render() {
        this.conditionalRendering();
        return (
            <div>
                <button id="close" className="fa fa-close" onClick={this.handleCloseMovieView}></button>
                { renderThis }
            </div>
        )
    }
}

export default MovieView
