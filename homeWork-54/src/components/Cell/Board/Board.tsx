import React from "react";
import { Board } from "../../../types";
import Cell from "../Cell";

const Board:React.FC<Board> = ({items, onCellClick}) => {
    return(
        <div className="board">
            {items.map((item, index) => (
                <Cell key={index} item={item} onClick={() => onCellClick(index)} />
            ))}
        </div>
    )
};

export default Board;