import { action, observable, makeAutoObservable } from "mobx";

class AccountStore {
  @observable name = "James";
  @observable email = "";
  phone = "";

  constructor() {
    makeAutoObservable(this);
  }

  @action setName = (value) => {
    this.name = value;
  };
}

export default AccountStore;
