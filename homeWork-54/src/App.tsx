import { useState } from 'react';
import { Item } from './types'
import Board from './components/Cell/Board/Board';

function App() {
  const createCells =  () => {
    const items: Item[] = [];
    for (let i = 0; i < 36; i++) {
      items.push({
        hasItem: false,
        clicked:false,
      });
    }

    const indexRandom = Math.floor(Math.random() * items.length);
    items[indexRandom].hasItem = true;
    return items;
  }

  const [cells, setCells] = useState<Item[]>(createCells());
  const [attempts, setAttempts] = useState<number>(0);

  const handleCellClick = (index: number) => {
  if (!cells[index].clicked) {
    const newCells = [...cells];
    const newCell = { ...newCells[index] };
    newCell.clicked = true;
    newCells[index] = newCell;
    setAttempts(attempts + 1);
    setCells(newCells);
    if (newCell.hasItem) {
      alert("Игра окончена");
    }
  }
};

const handleReset = (): void => {
    setCells(createCells());
    setAttempts(0);
  };


  return (
    <>
    <div className='game'>
      <h1>Игра</h1>
      <Board items={cells} onCellClick={handleCellClick} />
      <p>Попыток: {attempts}</p>
      <button className="reset-button" onClick={handleReset}>
        Сбросить игру
      </button>
    </div>
    </>
  );
}

export default App
