import { makeAutoObservable } from "mobx";

class ConversationStore {
  loader = true;
  modal = false;
  conversation = "";
  messages = [];

  constructor() {
    makeAutoObservable(this);
  }

  toggleLoader = (data) => {
    this.loader = data;
  };

  toggleModal = (data) => {
    this.modal = data;
  };

  setConversation = (data) => {
    this.conversation = data;
  };

  setMessages = (data) => {
    this.messages = [...this.messages, ...[data]];
  };
}

export default ConversationStore;
