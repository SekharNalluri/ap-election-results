import React, { Component } from 'react';
import tdp from '../resources/images/tdp.svg';
import ycp from '../resources/images/ycp.svg';
import js from '../resources/images/js.svg';
import bjp from '../resources/images/bjp.svg';
import inc from '../resources/images/inc.svg';

import './Card.css';
import constituencies from '../resources/data/Constituencies.json';


class DisplayCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let city = this.props.selectedVal.selectedCity;
        let district = this.props.selectedVal.selectedDis;
        let constituency = {};

        constituencies[district].forEach(element => {
            if (element.name === city) {
                constituency = element;
            }
        });

        let winner = tdp;
        if (constituency.winner === "tdp")
            winner = tdp
        if (constituency.winner === "ycp")
            winner = ycp
        if (constituency.winner === "js")
            winner = js
        if (constituency.winner === "bjp")
            winner = bjp
        if (constituency.winner === "inc")
            winner = inc

        //delete this
        constituency.winner = constituency.winner ? constituency.winner : "tdp"


        return (
            <div className={"display-card".concat(" ").concat(constituency.winner)}>
                <div className="card-content">

                    <div className="winner">
                        <h1 className="city">{city}</h1>
                        <div className="winner">
                            <img src={winner} alt="tdp" ></img>
                        </div>
                    </div>

                    <div className="subtitle">Candidate List</div>

                    {constituency.tdp &&
                        <div className="cadidate">
                            <div>{constituency.tdp}</div>
                            <img src={tdp} alt="tdp"></img>
                        </div>}

                    {constituency.ycp &&
                        <div className="cadidate">
                            <div>{constituency.ycp}</div>
                            <img src={ycp} alt="tdp"></img>
                        </div>}

                    {constituency.js &&
                        <div className="cadidate">
                            <div>{constituency.js}</div>
                            <img src={js} alt="tdp"></img>
                        </div>}

                    {constituency.bjp &&
                        <div className="cadidate">
                            <div>{constituency.bjp}</div>
                            <img src={bjp} alt="tdp"></img>
                        </div>}

                    {constituency.inc &&
                        <div className="cadidate">
                            <div>{constituency.inc}</div>
                            <img src={inc} alt="tdp"></img>
                        </div>}

                </div>
            </div>

        );
    }
}

export default DisplayCard;

