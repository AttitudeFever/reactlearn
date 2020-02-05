import React from 'react'

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
            this.setState( {movieData: storedItemList } );
        }
        else {
            try {
                    const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                    const response = await fetch(url);
                    const jsonData = await response.json();
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData));
                    storedItemList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
                    this.setState( {movieData: storedItemList } );
            }
                catch (error) {
                    console.error(error);
                }
            }
    }

    render() {
        console.log(this.state.movieData)
        return (
            <div>
                
            </div>
        )
    }
}

export default Main
