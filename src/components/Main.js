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
    }

    async componentDidMount(){
        let storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 

        if (storedItemList) {
            this.sortBytitle(storedItemList);
        }
        else {
            try {
                    const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                    const response = await fetch(url);
                    const jsonData = await response.json();
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData));
                    storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

                    this.sortBytitle(storedItemList);
            }
                catch (error) {
                    console.error(error);
                }
            }
    }

    sortBytitle = (storedItemList) =>{
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

    render() {
        console.log(this.state.movieData)
        return (
            <div>
                <div className="grid-container">
                <Header/>
                <div className="favs">2</div>
                <div className="filter">3</div>  
                <AllMovieList movieData={this.state.movieData}/>
                </div>`
            </div>
        )
    }
}

export default Main
