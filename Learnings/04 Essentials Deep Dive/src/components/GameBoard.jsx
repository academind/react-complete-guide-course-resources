import { useState } from "react"


export default function GameBoard({onSelectSquare, board}) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prev) => {
    //         const updatedBoard = [...prev.map(innerArr => [...innerArr])]

    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={col}>{col}</button>
                            </li>
                        ))}
                    </ol>
            </li>
            ))}
        </ol>
    )
}