"use client"

import { useState } from "react";
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export default function Input() {

    const [chat, setChat] = useState("");
    
    async function handleSubmit(e: { preventDefault: () => void; }) {
        //e.preventDefault();
        alert(`Submitting chat ${chat}`);
        await client.collection("chats").create({
            sender: "me",
            reciever: "you",
            content: chat
        });
        setChat("");
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={chat} onChange={e => setChat(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }