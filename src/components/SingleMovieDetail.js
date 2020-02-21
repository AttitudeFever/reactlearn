import React from 'react';
import './static/singlemoviedetail.css';
//import 'react-rater/lib/react-rater.css';
import Rater from 'react-rater';
import ReactModal from 'react-modal';
import bgImg from './images/bgAboutus.jpg';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '880px',
        height: '100%',
        backgroundImage: 'url(' + bgImg + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    }
};

ReactModal.setAppElement(document.getElementById('root'));

class Singlemoviedetail extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            ratings:[],
            details:[],
            production:[],
            title :"",
            id:"",
            poster:""
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.addToFav = this.addToFav.bind(this);
    }

    componentDidMount()
    {
        const ratings= {};
        Object.assign(ratings,this.props.viewData.ratings);
        this.setState({ratings:ratings})

        const details = {};
        Object.assign(details,this.props.viewData.details);
        this.setState({details:details})

        const production = {};
        Object.assign(production, this.props.viewData.production);
        this.setState({ production: production })

        this.setState( {title: this.props.viewData.title})
        this.setState( {id: this.props.viewData.id})
        this.setState( {poster: this.props.viewData.poster})

        this.props.getProduction(production)
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    addToFav(){
      this.props.addToFav(this.state.title, this.state.poster, this.state.id);
    }

    render() {
        let imgUrl;
        let genres;
        let keywords;
        let countries;
        let companies;
        const title = this.props.viewData.title+"("+ this.props.viewData.release_date +")";
        const imdb = "https://www.imdb.com/title/"+this.props.viewData.imdb_id;
        const tmdb ="https://www.themoviedb.org/movie/"+this.props.viewData.tmdb_id;
        const runRav = "| Runtime: " + this.props.viewData.runtime + "mins | | Revenue: " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.viewData.revenue ) + " |";
        

        if (this.props.viewData.poster !== undefined) {
            imgUrl = "https://image.tmdb.org/t/p/w780/" + this.props.viewData.poster;
        }

        if (this.state.details.genres !== undefined) {
            genres = this.state.details.genres.map((item, index) => {
                let genresWithoutSpace = item.name.replace(/\s/g, '').replace(/[|&;$%@"<>()+,-]/g, "");
                if (index > 1 && index %3 === 0){
                    return <span className="BMtag" key={index}>{genresWithoutSpace}<br/></span>
                } else {
                    return <span className="BMtag" key={index}>{genresWithoutSpace}</span>
                }
            })
        }

        if (this.state.details.keywords !== undefined) {
            keywords = this.state.details.keywords.map((item, index) => {
                let keywordsWithoutSpace = item.name.replace(/\s/g, '').replace(/[|&;$%@"<>()+,-]/g, "");
                if (index > 1 && index %3 === 0){
                    return <span className="BMkeyword" key={index}>{keywordsWithoutSpace}<br/></span>
                } else {
                    return <span className="BMkeyword" key={index}>{keywordsWithoutSpace}</span>
                }
            })
        }

        if (this.state.production.countries !== undefined) {
            countries = this.state.production.countries.map((item, index) => {
                return <span key={index}><i className="far fa-flag">&nbsp;{item.name}</i><br/></span>
            })
        }

        if (this.state.production.companies !== undefined && this.state.production.companies !== null ) {
            companies = this.state.production.companies.map((item, index) => {
                return <span key={index}>{item.name}><br/></span>
            })
        } else{
            companies = <span>N/A</span>
        }

        return (
            <div>
              
                <div className="Bmovie-card">
                
                    <div className="BMcontainer">
                    <div className="heartM" onClick={this.addToFav}><i className="fa fa-heart" ></i></div>
                        <div className="BMhero" style={{ backgroundImage: 'url(' + imgUrl + ')' }} onClick={this.handleOpenModal}></div>
                        <ReactModal
                            isOpen={this.state.showModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Minimal Modal Example"
                            closeTimeoutMS={2000}>
                                <img src={imgUrl} alt=""/>
                            <button id="close" className="fa fa-close" onClick={this.handleCloseModal}></button>
                        </ReactModal>

                        <div className="BMdetails">
                                <div className="BMtitle1">{title}<span><a href={imdb} target="_blank" rel="noopener noreferrer">IMDB</a> <a href={tmdb} target="_blank" rel="noopener noreferrer">TMDB</a></span></div>
                                <div className="BMtitle2">{this.props.viewData.tagline}</div>
                                <div className="BMrating">
                                    <span>
                                    < Rater rating={this.state.ratings.average} total={10} interactive={false} />
                                        /10
                                        <br/>
                                <span className="popularity">Count: {this.state.ratings.count} | Popularity: {this.state.ratings.popularity}</span>
                                    </span>
                                </div>
                              <span className="BMextra">{runRav}</span>
                            </div>
                        <div className="BMdescription">
                            <div className="BMcolumn1">
                            {genres}
                            <p className="flag">Country of Release:
                            <br/>
                            {countries}
                            </p>
                            <p className="companies">Production Companies: <br/>
                                {companies}
                            </p>
                            </div>
                            <div className="BMcolumn2">
                                <span>Overview:
                                    <p>{this.state.details.overview}</p>
                                </span>
                                <p>Keywords:&nbsp;
                                    {keywords}
                                </p>
                                {/* <div className="BMavatars">
                                    <a href="#" data-tooltip="Person 1" data-placement="top">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                                    </a>
                                    <a href="#" data-tooltip="Person 2" data-placement="top">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                                    </a>
                                    <a href="#" data-tooltip="Person 3" data-placement="top">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singlemoviedetail