import { useState } from 'react';
import { Item } from './types'

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


  return (
    <>
    <div>
      
    </div>
    </>
  );
}

export default App
