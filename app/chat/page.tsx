import PocketBase from 'pocketbase';
import { useState } from 'react';
import Input from './components';

const client = new PocketBase('http://127.0.0.1:8090');

async function getChats() {
  const res = await fetch("http://127.0.0.1:8090/api/collections/chats/records");
  const data = await res.json();
  return data?.items as any[];
}

export default async function ChatsPage() {
  const chats = await getChats();

  return (
    <div>
      <h1>chat</h1>
      <div>
        {chats?.map((chat) => {
          return <Chat key={chat.id} chat={chat} />
        })}
      </div>
      <div>
        <Input />
      </div>
    </div>
  )
}

function Chat({ chat }: any) {
  const {id, sender, reciever, content, created} = chat || {};
  
  return (
    <div>
      <p>{content}</p>
      <div>
        from : {sender} to: {reciever} {created}
        <input type="button" value="delete" /> 
      </div>
    </div>
  )
}