import React from 'react';
import { useState } from 'react';

const initialGameBoard = [
    [null, "X", null],
    [null, null, null],
    [null, null, "X"]
];
const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare({ rowIndex, colIndex, playerSymbol }) {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard];
            newGameBoard[{ rowIndex }][{ colIndex }] = { playerSymbol };
            return newGameBoard;
        });

    return (
        <div>
            <ol id="game-board">
                {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (<li key={colIndex}><button>{playerSymbol}</button></li>))}
                    </ol>
                </li>)}
            </ol>
        </div>
    );
};

}

export default GameBoard;