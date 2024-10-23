// import React, { useState } from 'react'
// import io from 'socket.io-client'
// import ChatApp from './ChatApp';
// import "./Chat.css";

// const socket = io.connect("http://localhost:3001");

// const Chat = () => {
//     const [username, setUsername] = useState("");
//     const [room, setRoom] = useState("");

//     const joinRoom = () => {
//         if (username !== "" && room !== "") {
//             socket.emit("join_room", room);
//         }
//     }
//   return (
//     <div className="chat">
//         <div className="joinChatContainer"></div>
//         <h3>Join A chat</h3>
//         <input type="text" placeholder="John..." onChange={(event) => {setUsername(event.target.value)}} />
//         <input type="text" placeholder="Room ID..." onChange={(event) => {setRoom(event.target.value)}} />
//         <button onClick={joinRoom}>Join A room</button>

//         <ChatApp socket={socket} username={username} room={room} />
      
//     </div>
//   )
// }

// export default Chat


import io from "socket.io-client";
import React, { useState } from "react";
import ChatApp from './ChatApp';
import "./Chat.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <ChatApp socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;