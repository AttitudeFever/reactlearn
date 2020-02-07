import React from 'react'
import Header from './Header';
import AllMovieList from './AllMovieList';

const LOCAL_STORAGE_KEY = 'movieData';
class Main extends React.Component {
    constructor(){
        super()
        this.state={
            movieData : []
        }
        this.intialSortBytitle = this.intialSortBytitle.bind(this);
        this.sortByYear = this.sortByYear.bind(this);
        this.sortByTitle = this.sortByTitle.bind(this);
        this.sortByRatings = this.sortByRatings.bind(this);
    }

    async componentDidMount(){
        let storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 

        if (storedItemList) {
            this.intialSortBytitle(storedItemList);
        }
        else {
            try {
                    const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                    const response = await fetch(url);
                    const jsonData = await response.json();
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData));
                    storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

                    this.intialSortBytitle(storedItemList);
            }
                catch (error) {
                    console.error(error);
                }
            }
    }

    intialSortBytitle(storedItemList) {
        storedItemList.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (b.title > a.title) {
                return -1;
            }
            return 0;
        });

        this.setState( {movieData: storedItemList } );
    }

    sortByYear() {
        this.state.movieData.sort(function (a, b) {
            if (a.release_date > b.release_date) {
                return 1;
            }
            if (b.release_date > a.release_date) {
                return -1;
            }
            return 0;
        });

        this.forceUpdate()
    }

    sortByTitle() {
        this.state.movieData.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (b.title > a.title) {
                return -1;
            }
            return 0;
        });

        this.forceUpdate()
    }

    sortByRatings() {
        this.state.movieData.sort(function (a, b) {
            if (a.ratings.average > b.ratings.average) {
                return 1;
            }
            if (b.ratings.average > a.ratings.average) {
                return -1;
            }
            return 0;
        });

        this.forceUpdate()
    }

    render() {
        console.log(this.state.movieData)
        return (
            <div>
                <div className="grid-container">
                <Header/>
                <div className="favs">2</div>
                <div className="filter">3</div>  
                <AllMovieList movieData={this.state.movieData} searchValue={this.props.searchValue} searchFLAG={this.props.searchFLAG} 
                    listAllFLAG={this.props.listAllFLAG} sortByYear={this.sortByYear} sortByTitle={this.sortByTitle} 
                    sortByRatings= {this.sortByRatings}/>
                </div>`
            </div>
        )
    }
}

export default Main
