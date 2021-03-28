import React from 'react';
// import logo from './bomb.svg';
import './App.css';

class FlagsCounter extends React.Component {
    render() {
        return (
            <span>10</span>
        );
    }
}

class Reset extends React.Component {
    render() {
        return (
            <span>R</span>
        );
    }
}

class Timer extends React.Component {
    render() {
        return (
            <span>0:00</span>
        );
    }
}

class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control-panel">
                <FlagsCounter/>
                <Reset/>
                <Timer/>
            </div>
        );
    }
}

class Cell extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    state = {
        clicked: false
    }

    onClick() {
        this.setState( { clicked: !this.state.clicked } );
        console.log("clicked set to: " + this.state.clicked);
    }

    render() {
        return (
            <div className={`cell ${this.state.clicked ? " marked" : ""}`} onClick={this.onClick.bind(this)}>
            </div>
        );
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const cells = [];
        for (let i = 0; i < 8; i++) {
            cells.push(
                <Cell key={this.props.id + "_cell_" + i}/>
            );
        }
        return <div className="row">
            {cells}
        </div>;
    }
}

class Field extends React.Component {
    render() {
        const rows = [];
        for (let i = 0; i < 9; i++) {
            rows.push(
                <Row key={"row_"+i} />
            );
        }
        // console.log(rows);
        return (
            <div className="field">
                {rows}
            </div>
        );
    }
}

class Minesweeper extends React.Component {
    render() {
        return (
            <div className="minesweeper">
                <ControlPanel />
                <Field />
            </div>
        );
    }
}

function App() {
        return (
            <div className="App">
                <Minesweeper />
            </div>
        );
}

export default App;
