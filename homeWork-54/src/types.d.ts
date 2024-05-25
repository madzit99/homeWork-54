export interface Item {
    hasItem: boolean;
    clicked: boolean;
}

export interface Cell {
    item:Item;
    onClick: () => void;
}