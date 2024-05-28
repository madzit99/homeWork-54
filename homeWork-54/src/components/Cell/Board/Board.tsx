import React from "react";
import { Board } from "../../../types";
import Cell from "../Cell";

const Board:React.FC<Board> = ({items, onCellClick, isGameOver}) => {
    return(
        <div className="board">
            {items.map((item, index) => (
                <Cell key={index} item={item} onClick={() => onCellClick(index)} gameOver={isGameOver} />
            ))}
        </div>
    );
};

export default Board;