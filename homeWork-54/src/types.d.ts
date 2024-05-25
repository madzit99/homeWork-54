export interface Item {
    hasItem: boolean;
    clicked: boolean;
}

export interface Cell {
    item:Item;
    onClick: () => void;
}

export interface Board {
    items:Item[];
    onCellClick: (index:number) => void;
}