import axios from "axios";
import {makeAutoObservable} from "mobx";

type items = {
  name: string;
  title: string;
  bid: string;
  image: string;
};

export class Item {
  Item: items[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems() {
    axios.get("https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b").then((res) => {
        this.setItems(res.data.data)
    }).catch((err) => {
        //?=== DEBUG ===?
        console.log(err);
    })
  }

  // Setters
  setItems = (data: items[]) => {
    this.Item = data
  }
}
