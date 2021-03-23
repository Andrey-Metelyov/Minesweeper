import React from 'react';
import logo from './bomb.svg';
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
            <div>
                <FlagsCounter/>
                <Reset/>
                <Timer/>
            </div>
        );
    }
}

class Cell extends React.Component {
    render() {
        return (<span>O</span>);
    }
}

class Row extends React.Component {
    render() {
        return (
            <div>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
        );
    }
}

class Field extends React.Component {
    render() {
        return (
            <div>
                <Row/>
                <Row/>
                <Row/>
                <Row/>

                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <ControlPanel/>
            <Field/>
        </div>
    );
}

export default App;
