import { Cell } from "../../types";

const Cell:React.FC<Cell> = ({item, onClick}) => {
    const handleClick = () => {
        if (!item.clicked) {
            onClick()
        }
    }

  return (
    <div className={`cell ${item.clicked ? (item.hasItem ? 'item' : 'noItem') : ''}`} onClick={handleClick} />
  );
};

export default Cell;