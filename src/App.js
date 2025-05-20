import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    await addDoc(collection(db, 'messages'), {
      text: input,
      sender: 'user',
      timestamp: new Date(),
    });

    setInput('');
  };

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>💬 AI Chat Assistant</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: 16,
          borderRadius: 8,
          minHeight: 400,
          maxHeight: 500,
          overflowY: 'auto',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: msg.sender === 'user' ? '#daf1ff' : '#eaeaea',
                padding: '8px 12px',
                borderRadius: 12,
                maxWidth: '70%',
              }}
            >
              {msg.sender === 'bot' && msg.response
                ? JSON.stringify(JSON.parse(msg.response), null, 2)
                : msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Bir mesaj yaz..."
          style={{ width: '80%', padding: 10, fontSize: 16 }}
        />
        <button onClick={sendMessage} style={{ padding: 10, marginLeft: 8 }}>
          Gönder
        </button>
      </div>
    </div>
  );
}

export default App;
