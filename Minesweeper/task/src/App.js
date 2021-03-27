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

// function Cell(props) {
//     return (<span className="cell">props.cell.mark</span>);
// }

// class Row extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//                 <Cell/>
//             </div>
//         );
//     }
// }

class Cell extends React.Component {
    render() {
        const mark = this.props.mark;
        return (<div className="cell">

        </div>);
    }
}

class Field extends React.Component {
    render() {
        const cells = [];
        for (let i = 0; i < 72; i++) {
            cells.push(
                <Cell/>
            );
        }
        console.log(cells);
        return (
            <div className="field">
                {cells}
            </div>
        );
    }

    // renderField() {
    //     console.log("renderField")
    //     return this.state.cells.map(cell => {
    //         return (
    //             <Cell
    //                 cell={cell}
    //             />
    //         )
    //     })
    // }
}

class Minesweeper extends React.Component {
    render() {
        return (
            <div className="minesweeper">
                <ControlPanel/>
                <Field/>
            </div>
        );
    }
}

function App() {
        return (
            <div className="App">
                <Minesweeper/>
            </div>
        );
}

export default App;
