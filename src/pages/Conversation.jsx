import { useEffect, useRef, Fragment } from "react";
import dayjs from "dayjs";
import starters from "../components/starter";
import useConversation from "../stores/zustand";

const Conversation = () => {
  const boxRef = useRef(null);
  const chatRef = useRef(null);
  const {
    loader,
    modal,
    conversation,
    messages,
    toggleModal,
    toggleLoader,
    setConversation,
    setMessages,
  } = useConversation();

  useEffect(() => {
    getRandomText();
  }, []);

  const getRandomText = () => {
    let conversation =
      starters[Math.floor(Math.random() * starters.length - 1)];
    setConversation(conversation);
    boxRef.current.scroll({
      top: boxRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleConversation = (value) => {
    setMessages(value);
    toggleModal(!modal);
    boxRef.current.scroll({
      top: boxRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleChatBox = () => {
    const value = chatRef.current.value;
    setMessages(value);
    chatRef.current.value = "";
    boxRef.current.scroll({
      top: boxRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <>
        {modal && (
          <div className="modal">
            <div className="inner">
              <span className="close" onClick={() => toggleModal(!modal)}>
                &#9746;
              </span>
              <h1>Conversation starters</h1>
              <div
                className="content"
                onClick={() => handleConversation(conversation)}
              >
                {conversation}
              </div>
              <div className="center">
                <button className="refresh" onClick={getRandomText}>
                  &#8635; Refresh
                </button>
              </div>
            </div>
          </div>
        )}
      </>

      <div className="container">
        <div className="conversations">
          {messages.map((item, key) => (
            <div key={key}>
              <p>{item}</p>
              <span>{dayjs().format("MMM D, YYYY @ h:mm A")}</span>
            </div>
          ))}
          <div ref={boxRef} className="bottom">
            &nbsp;
          </div>
        </div>

        <div className="chat-input">
          <button className="starter" onClick={() => toggleModal(!modal)}>
            &copy;
          </button>
          <input ref={chatRef} type="text" placeholder="Type something...." />
          <button onClick={handleChatBox}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
