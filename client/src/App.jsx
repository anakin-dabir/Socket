import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:8080');

const App = () => {

  useEffect(() => {
    socket.on('reply', (msg) => {
      alert(msg);
    })


  }, [socket]);

  const [msg, setMsg] = useState('');
  //const [reply, setReply] = useState([]);
  const sendingMessage = () => {
    socket.emit('send-msg', msg, "ttFxQVUiQERZQJFTAAAX");
  }
  const joinRoom = () => {
    socket.emit('join-room', 24);
  }
  console.log(socket);

  return (
    <>
      <h1>user</h1>
      <div style={{ overflow: 'auto', border: "1px solid black", width: "900px", height: "300px" }}>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </div>
      <input type="text" name="" placeholder='Enter message' onChange={(e) => setMsg(e.target.value)} />
      <button onClick={sendingMessage}>Send</button>
      <button onClick={joinRoom}>Room 24</button>
    </>
  )
}

export default App