import React, { Component } from 'react';
import './Constituencies.css';
import constituencies from '../resources/data/Constituencies.json';


class Constituencies extends Component {

    constructor(props) {
        super(props);
        this.state = { seletedItem: "Pedakurapadu" }
    }


    handleClick(e) {
        this.setState({ seletedItem: e });
    }


    render() {

        let _this = this;
        console.log(this.props.district);
        let list = constituencies[this.props.district];
        const generateButtons = function (list) {
            return list.map((value) => {
                return (<span className={"constituency".concat(value.name === _this.state.seletedItem ? " selected" : "")}
                    onClick={() => { _this.props.onClick(value.name); _this.handleClick(value.name) }}
                    key={value.name} > {value.name}</span>)
            });
        }

        return (
            <div className="constituencies-card">
                <h1 className="title">{this.props.district}</h1>
                <div className="con-links">
                    {/* check list is array type */}
                    {generateButtons(list)}
                </div>
            </div>
        );
    }
}

export default Constituencies;

