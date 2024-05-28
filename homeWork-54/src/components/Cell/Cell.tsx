import { Cell } from "../../types";

const Cell:React.FC<Cell> = ({item, onClick, gameOver}) => {
    const handleClick = () => {
        if (!item.clicked && !gameOver) {
            onClick()
        }
    }

  return (
    <div className={`cell ${item.clicked ? (item.hasItem ? 'item' : 'noItem') : ''}`} onClick={handleClick} />
  );
};

export default Cell;