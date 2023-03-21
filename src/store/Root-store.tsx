import { createContext } from 'react';
import { Item } from "./Item-store";

interface StoreContextInterface {
    itemStore: Item;
}

const itemStore = new Item();

export const store = createContext<StoreContextInterface>({
    itemStore
})