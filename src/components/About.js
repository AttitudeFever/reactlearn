import React from 'react'
import ReactModal from 'react-modal';
import Person from './Person';
import imgHamid from './images/hamid.png';
import imgMark from './images/mark.jpg';
import bgImg from './images/bgAboutus.jpg';

const customStyles = {
    content: {
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)'
        // background: 'rgba(255, 255, 255, 0.75)',
        backgroundImage: 'url(' + bgImg + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    }
};

ReactModal.setAppElement(document.getElementById('root'));

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            people: [
                {
                    name: "Hamid Hemani",
                    img: imgHamid,
                    githubRepo: "https://github.com/AttitudeFever",
                    linkedIn: "https://www.linkedin.com/in/hamid-hemani-a5a4781a/",
                    desc: "Loves to drink tea !"
                },
                {
                    name: "Mark Carvalho",
                    img: imgMark,
                    githubRepo: "https://github.com/mcarv838",
                    linkedIn: "https://www.linkedin.com/in/mark-carvalho-95721815a/",
                    desc: "Loves to play games !"
                }
            ]
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="aboutUs">
                <button className="aboutusHome" onClick={this.handleOpenModal}>About Us <i className="fa fa-group"></i></button>
                <ReactModal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Minimal Modal Example"
                    closeTimeoutMS={2000}
                >
                    <div className="aboutBody">
                        <h1 className="heading3">HM's Team Members</h1>
                        {
                            this.state.people.map((item, index) => {
                                return <Person key={index} item={item} />
                            })
                        }

                        <div className="projectInfo">
                            <h1 className="pih">Project Info</h1>
                            <p>This Front-End Development Project is implmented using HTML5, CSS3 and React.js Frame Work version 16.12.0 and npm version 6.12.1</p>
                            <p>Back-End Movie Data API provided by MRU Prof: <a href="https://github.com/rconnolly" target="_blank">Randy Connolly</a></p>
                            <ul>npm dependencies include:
                            <li><a href={"https://www.npmjs.com/package/react-modal#installation"} target="_blank">react router 5.1.2</a></li>
                                <li><a href="https://www.npmjs.com/package/lodash" target="_blank">lodash 4.17.15</a></li>
                                <li><a href="https://github.com/reactjs/react-transition-group/tree/v1-stable" target="_blank">react-transition-group v1-stable</a></li>
                                <li><a href="https://www.npmjs.com/package/react-modal#installation" target="_blank">react-modal 3.11.1</a></li>
                            </ul>
                            <p>Project's Open Source: <a href="https://github.com/AttitudeFever/ReactAppA1" target="_blank">Repository</a></p>
                            <p>Project Depolyment via Heraku Server</p>
                            <h1 className="pih">Credits</h1>
                            <ul>We would like to give credits to these awesome people:
                            <li><a href="https://unsplash.com" target="_blank">Awesome Backgroud Image</a></li>
                                <li><a href="https://bootsnipp.com/snippets/GaeQR" target="_blank">Search Box on Home Page Design</a></li>
                                <li><a href="https://www.freelogodesign.org/" target="_blank">Free Logo Design</a></li>
                                <li><a href="https://loading.io/" target="_blank">Free Loading gif</a></li>
                                <li><a href="https://freefrontend.com/css-cards/" target="_blank">Contact Card Ideas</a></li>
                                <li><a href="https://www.youtube.com/watch?v=BZRyIOrWfHU&t=773s" target="_blank">React CSS Transition Tutorial</a></li>
                            </ul>
                        </div>
                        <button id="close" className="fa fa-close" onClick={this.handleCloseModal}></button>
                    </div>
                </ReactModal>
            </div>
        )
    }
}
export default About
