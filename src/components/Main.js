import React from 'react'
import Header from './Header';
import AllMovieList from './AllMovieList';
import FavList from './FavList';
import FilterContainter from './FilterContainer';
import * as cloneDeep from 'lodash/cloneDeep';

const LOCAL_STORAGE_KEY = 'movieData';
const LOCAL_STORAGE_KEY_2 = 'favList';
class Main extends React.Component {
    constructor(){
        super()
        this.state={
            isLoading:false,
            movieData : [],
            favList:[],
            filterResult:[]
        }
        this.storeMainAPILocally = this.storeMainAPILocally.bind(this);
        this.storeFavListLocally = this.storeFavListLocally.bind(this);
        this.intialSortBytitle = this.intialSortBytitle.bind(this);
        this.sortByYear = this.sortByYear.bind(this);
        this.sortByTitle = this.sortByTitle.bind(this);
        this.sortByRatings = this.sortByRatings.bind(this);
        this.addToFav= this.addToFav.bind(this);
        this.deleteFavItem=this.deleteFavItem.bind(this)
        this.getFilterResult = this.getFilterResult.bind(this);
        this.setFilterFLAG = this.setFilterFLAG.bind(this);
        this.setListAllFLAG = this.setListAllFLAG.bind(this);
        this.doSort = this.doSort.bind(this);
    }

    componentDidMount(){
        this.setState( {isLoading : true } )
        this.storeMainAPILocally();
        this.storeFavListLocally();
    }

    componentDidUpdate(){
        localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(this.state.favList));
    }

    async storeMainAPILocally() {
        let storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storedItemList) {
            this.intialSortBytitle(storedItemList);
            this.setState( {isLoading : false } )
        }
        else {
            try {
                const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                const response = await fetch(url);
                const jsonData = await response.json();
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData));
                storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

                this.intialSortBytitle(storedItemList);
                this.setState( {isLoading : false } )
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    storeFavListLocally() {
        let storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_2));

        if (storedItemList) {

            this.setState({ favList: storedItemList })

        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(this.state.favList));
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

        this.state.filterResult.sort(function (a, b) {
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

        this.state.filterResult.sort(function (a, b) {
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

        this.state.filterResult.sort(function (a, b) {
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

    addToFav(title, poster, id) {
        const copyFavs = cloneDeep(this.state.favList);

        if (this.state.favList.length === 0) {
            copyFavs.push({ id: id, title: title, poster: poster })
        }
        else {
            const found = copyFavs.some(item => {
                return item.title === title
            })

            if (!found) {
                copyFavs.push({ id: id, title: title, poster: poster })
            }
        }

        this.setState({ favList: copyFavs })
    }

    deleteFavItem(id){
        const copyFavs = cloneDeep(this.state.favList);
        const remainigItems = copyFavs.filter(item => {
            return item.id !== id
        })

        this.setState({ favList: remainigItems })
    }

    getFilterResult(result){
        this.setState( {filterResult : result} ) 
        this.setFilterFLAG();       
    }

    setFilterFLAG(){
        let searchFLAG = false;
        let listAllFLAG = false;
        let filterFLAG = true;
        let viewFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, filterFLAG, viewFLAG) 
    }

    setListAllFLAG(){
        let searchFLAG = false;
        let listAllFLAG = true;
        let FilterFLAG = false;
        let viewFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, FilterFLAG, viewFLAG) 
    }

    doSort(e){
        const value = e.target.value;
        if (value === "sortByTitle") {this.sortByTitle()}
        else if(value === "sortByYear") {this.sortByYear()}
        else if (value === "sortByRating") {this.sortByRatings()}
    }

    render() {
        return (
            <div className="grid-container">
                <Header />

                <FavList favList={this.state.favList} deleteFavItem={this.deleteFavItem} />

                <FilterContainter movieData={this.state.movieData} getFilterResult={this.getFilterResult}
                    setListAllFLAG={this.setListAllFLAG} />

                <AllMovieList isLoading={this.state.isLoading} movieData={this.state.movieData} searchValue={this.props.searchValue}
                    searchFLAG={this.props.searchFLAG} listAllFLAG={this.props.listAllFLAG}
                    sortByYear={this.sortByYear} sortByTitle={this.sortByTitle} sortByRatings={this.sortByRatings}
                    doSort={this.doSort} addToFav={this.addToFav}
                    filterResult={this.state.filterResult} filterFLAG={this.props.filterFLAG} 
                    viewFLAG={this.props.viewFLAG} getFLAGS={this.props.getFLAGS}/>
            </div>
        )
    }
}

export default Main
