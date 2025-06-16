
import { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const  handleSelectsquare = (rowIndex, colIndex) => {
    //     setGameBoard((preGameBoard) => {
    //         console.log("inside handleSelectsquare")
    //         const updateBoard = [...preGameBoard.map(innerArray => { return [...innerArray] })]
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updateBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
    <ol id="game-board">
        {
            board.map((row, rowIndex) => 
                (<li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li>))
        }
    </ol>);
}