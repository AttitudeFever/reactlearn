import React from 'react'

class SingleMovieDetail extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       array:[],
       crew: []

     };
 }

  componentDidMount()
  {
      const map1 = this.props.viewData.production;
      this.setState(  {array:map1} );

 }
  render()
  {
    // console.log(this.state.crew);

    const imgUrl ="https://image.tmdb.org/t/p/w500"+this.props.viewData.poster;
    const imdb = "https://www.imdb.com/"+this.props.viewData.title+"/"+this.props.viewData.imdb_id;
    const tmdb ="https://www.themoviedb.org/movie/"+this.props.viewData.tmdb_id;
    return (

      <div className="SingleMovieDisplay">
              <div>
                 <h3>{this.props.viewData.title}</h3>
                 <img className="largeImg" src={imgUrl}/>
               </div>

               <div>
                   <p>Release Date: {this.props.viewData.release_date} <br/>
                      Runtime: {this.props.viewData.runtime}<br/>
                      Revenue: {this.props.viewData.revenue}<br/>
                      IMDB Link: <a href={imdb}> Click Here</a> <br/>
                      TMDB Link: <a href={tmdb}> Click Here</a>
                   </p>
               </div>
                  <p>{this.state.array}</p>
               <div>

               </div>
      </div>);

}
}

export default SingleMovieDetail
