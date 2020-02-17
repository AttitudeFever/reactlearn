import React from 'react'
import Header from './Header';
import Person from './Person';
import imgHamid from './images/hamid.png';
import imgMark from './images/mark.jpg';

class About extends React.Component {
    constructor() {
        super()
        this.state = {
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
                    desc: "Loves to drink tea !"
                }
            ]

        }
    }

    render(){
        return (
            <div className="aboutUs">
                <Header/>
                <h1>HM's Team Members</h1>
                <a href="https://github.com/AttitudeFever/ReactAppA1"> Project Repository</a>
                {
                    this.state.people.map( (item, index) =>{
                        return <Person key={index} item={item}/>
                    })
                }
            </div>
        )
    }
}
export default About
