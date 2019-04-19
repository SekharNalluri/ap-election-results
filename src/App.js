import React, { Component } from 'react';
import './App.css';
import constituencies from './resources/data/Constituencies.json';
import Constituencies from './constituencies/Constituencies.js';
import DisplayCard from './card/Card.js';
import Map from './map/Map.js';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = { selectedDis: "Guntur", selectedCity: "Pedakurapadu" }
    }

    handleClick(name, e) {
        if (name === "map"){
            console.log(e);
            this.setState({selectedCity: constituencies[e][0].name, selectedDis: e });
        }
        if (name === "constituency")
            this.setState({...this.state, selectedCity: e});
    }


    render() {
        return (
            <div>
                <h1 className="main-title" >Andhra Pradesh Election Results 2019</h1>
                <div className="container">
                    <div className="map-view">
                        <Map onClick={(e) => this.handleClick("map", e)} />
                    </div>
                    <div className="aside-view">
                        <div className="con-cards">
                            <Constituencies district={this.state.selectedDis} onClick={(e) => this.handleClick("constituency", e)} />
                        </div>
                        <div className="cards">
                            <DisplayCard selectedVal={this.state}/>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default App;

