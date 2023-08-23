import { makeAutoObservable } from "mobx";

class ProductStore {
  title = "";
  price = 0;
  quantity = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setName = (value) => {
    this.name = value;
  };
}

export default ProductStore;
