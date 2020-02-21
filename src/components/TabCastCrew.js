import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';
import Cast from './Cast';

let renderThis;
class TabCastCrew extends React.Component {
    constructor() {
        super()
        this.state = {
        }
        this.conditionRendering = this.conditionRendering.bind(this);
    }

    conditionRendering(){
        if (this.props.cast !== undefined && this.props.cast[0].name !== "Not Found"){
            renderThis = this.props.cast.map( (item, index)=>{
                return <Cast key={index} id={item.id} character={item.character} name={item.name} />
            })
        }else{
            renderThis = <p>No Cast Found</p>
        }
    }

    render() {
        this.conditionRendering();
        return (
            <Tabs className="tabcastcrew">
                <TabList>
                    <Tab>Movie Cast</Tab>
                    <Tab>Movie Crew</Tab>
                </TabList>

                <TabPanel>
                    {
                        renderThis
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        )
    }
}

export default TabCastCrew
