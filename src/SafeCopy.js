import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            currentMove: 0,
            status: 'Level 1',
            // noOfClicks: 0,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        // Sets the square to an X if the player makes the current guess else it restarts the board.
        // this.state.noOfClicks++;
        let guess = correctGuess(this.state.currentMove);


        if (guess === i) {
            squares[i] = 'X';
            this.state.currentMove++;
            this.state.status = 'Level 1'
        } // if
        else{
            for (let i = 0; i < 9; i++){
                squares[i] = null;
            } // for
            this.state.status = 'Wrong Move!!'
            this.state.currentMove = 0;
        } // else

        this.setState({squares: squares});
    } // handleClick

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        // let status = 'Memory game';

        // Generates the correct sized grid according to the level.
        if (this.state.currentMove === 9){
            return <Board2 clicks={this.state.noOfClicks}/> // Passed the render to the child
        }
        return (
            <div>
                {/*<div>{"Total Clicks: " + this.state.noOfClicks}</div>*/}
                <div className="status">{this.state.status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    } // if
}

// The 4x4 board
class Board2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(16).fill(null),
            currentMove: 0,
            status: 'Level 2',
            noOfClicks: this.props.noOfClicks, // Get the no of clicks from the parent?
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        // Sets the square to an X if the player makes the current guess else it restarts the board.
        // this.state.noOfClicks++;
        let guess = correctGuess2(this.state.currentMove);


        if (guess === i) {
            squares[i] = 'X';
            this.state.currentMove++;
            this.state.status = 'Level 2'
        } // if
        else{
            for (let i = 0; i < 16; i++){
                squares[i] = null;
            } // for
            this.state.status = 'Wrong Move!!'
            this.state.currentMove = 0;
            // this.props.reset()
        } // else

        this.setState({squares: squares});
    } // handleClick

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        if (this.state.currentMove === 16){
            return <Board3 />
        }
        return (
            <div>
                {/*<div>{"Total Clicks: " + this.state.noOfClicks}</div>*/}
                <div className="status">{this.state.status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
            </div>
        );
    }

}

class Board3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            currentMove: 0,
            status: 'Level 3',
            // noOfClicks: this.props.state.noOfClicks,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        // Sets the square to an X if the player makes the current guess else it restarts the board.
        // this.state.noOfClicks++;
        let guess = correctGuess3(this.state.currentMove);


        if (guess === i) {
            squares[i] = 'X';
            this.state.currentMove++;
            this.state.status = 'Level 3'
        } // if
        else {
            for (let i = 0; i < 25; i++) {
                squares[i] = null;
            } // for
            this.state.status = 'Wrong Move!!'
            this.state.currentMove = 0;
            // return <Board />
        } // else

        this.setState({squares: squares});
    } // handleClick

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        if (this.state.currentMove === 25){
            this.state.status = 'You Win!!';
        }
        return (
            <div>
                {/*<div>{"Total Clicks: " + this.state.noOfClicks}</div>*/}
                <div className="status">{this.state.status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                </div>
                <div className="board-row">
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                </div>
            </div>
        );
    }

}


class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function correctGuess(currentMove) {
    const guess = [3, 7, 0, 8, 1, 4, 2, 6, 5];
    return guess[currentMove];
}

function correctGuess2(currentMove) {
    const guess = [12, 5, 14, 3, 15, 11, 1, 7, 2, 8, 4, 10, 6, 9, 13, 0];
    return guess[currentMove];
}

function correctGuess3(currentMove) {
    const guess = [0, 13, 4, 11, 20, 1, 2, 15, 16, 5, 18, 9, 24, 6, 17, 10, 3, 23, 22, 7, 19, 8, 12, 21, 14];
    return guess[currentMove];
}