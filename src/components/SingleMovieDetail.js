import React from 'react'
/*ISSUES WITH OBJECTS*/
class SingleMovieDetail extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       companies:[],
       countries:[],
       keywords:[],
       ratings:{},
       genres:[],
       crew:[],
       cast:[],
       castView:true,
       crewView:false
     };
     this.addToFav = this.addToFav.bind(this);
 }

  componentDidMount()
  {
      const map1 = this.props.viewData.production;
      const map2 = this.props.viewData.details;
      const map3 = this.props.viewData.ratings;
      const holder= {};
      const holder2 ={};
      const holder3 ={};
      const production = Object.assign(holder,map1);
      const details  = Object.assign(holder2,map2);
      const ratings = Object.assign(holder2,map3);
      this.setState({companies:production.companies});
      this.setState({crew:production.crew});
      this.setState({cast:production.cast});
      this.setState({countries:production.countries});
      this.setState({keywords:details.keywords});
      this.setState({genres:details.genres});
      this.setState({ratings:ratings})
 }

  addToFav()
  {
      this.props.addToFav(this.props.viewData.title, this.props.viewData.poster, this.props.viewData.id);
  }

  regularRender()
  {
    const imgUrl ="https://image.tmdb.org/t/p/w500"+this.props.viewData.poster;
    const imdb = "https://www.imdb.com/"+this.props.viewData.title+"/"+this.props.viewData.imdb_id;
    const tmdb ="https://www.themoviedb.org/movie/"+this.props.viewData.tmdb_id;
    return(
    <div className="movieDisplay" style={{backgroundColor: "white"}}>
         <div className="basicMovieInfo">
                     <div>
                         <h3>{this.props.viewData.title} <button onClick={this.addToFav}>Add to Favourites</button> </h3>
                         <img className="largeImg" src={imgUrl}/>
                    </div>

             {/*-------------------------------------------------------------------------------------------*/}
                      <div className="baseInfo">
                           Release Date: {this.props.viewData.release_date} <br/>
                           Runtime: {this.props.viewData.runtime} min<br/>
                           Revenue: ${this.props.viewData.revenue}<br/>
                           MDB Link: <a href={imdb}> Click Here</a> <br/>
                           TMDB Link: <a href={tmdb}> Click Here</a><br/>
                     </div>
             {/*-------------------------------------------------------------------------------------------*/}
                     <div className = "ratings">
                            <h3>Ratings</h3>
                            Popularity: {this.state.ratings.popularity}<br/>
                            Average: {this.state.ratings.average}<br/>
                            Count: {this.state.ratings.count}<br/>
                     </div>
           {/*-------------------------------------------------------------------------------------------*/}
                      <div className = "companies">
                            <h3>Companies</h3>
                             {this.state.companies.map((cur) => (<p>{cur.name}</p>))}
                      </div>
           {/*-------------------------------------------------------------------------------------------*/}
                      <div className = "countries">
                           <h3>Countries</h3>
                           {this.state.countries.map((cur) => (<p>{cur.name}</p>))}
                     </div>
           {/*-------------------------------------------------------------------------------------------*/}
                     <div  className = "keywords">
                           <h3>Keywords</h3>
                           {this.state.keywords.map((cur) => (<p>{cur.name}</p>))}
                    </div>
             {/*-------------------------------------------------------------------------------------------*/}
                    <div  className = "genres">
                             <h3>Genres</h3>
                            {this.state.genres.map((cur) => (<p>{cur.name}</p>))}
                   </div>
        </div>
     {/*---------------------------------------------------------------------------------------*/}
         <div className = 'castCrew'>
                <button>Cast</button> <button>Crew</button>
                 <h3>Cast</h3>
                 <table>
                   <tr><td>Actor</td> <td>Character Played</td></tr>
                   {this.state.cast.map((cur) => (<tr><td>{cur.name}</td> <td>{cur.character}</td> <td><button>View</button></td></tr>))}
                 </table>
         </div>
  </div>
  );
  }

render()
{
  return this.regularRender();
}

}

export default SingleMovieDetail
