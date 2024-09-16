// src/components/ChatWindow.js
import React, { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';
import './ChatWindow.css';

const ChatWindow = ({ selected }) => {
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);

  const handleSend = (input) => {
    const userMessage = { sender: 'user', text: addEmoji(input) };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { sender: 'bot', text: addEmoji(transformText(input)) };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const addEmoji = (text) => {
    const emojis = ['😊', '😂', '👍', '🎉', '😎', '❤️', '🔥', '🙌', '✨', '🚀'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    return `${text} ${randomEmoji}`;
  };

  const transformText = (text) => {
    const transformations = [
      { name: 'Word count', func: countWords },
      { name: 'Vowel and consonant count', func: countVowelsAndConsonants },
      { name: 'Most frequent letter', func: findMostFrequentLetter },
      { name: 'Reverse text', func: reverseText },
      { name: 'Jumble words', func: jumbleWords },
    ];

    const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
    return `${randomTransformation.name}: ${randomTransformation.func(text)}`;
  };

  const countWords = (text) => `Word count: ${text.split(' ').length}`;
  const countVowelsAndConsonants = (text) => {
    const vowels = text.match(/[aeiou]/gi)?.length || 0;
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
    return `Vowels: ${vowels}, Consonants: ${consonants}`;
  };
  const findMostFrequentLetter = (text) => {
    const frequency = {};
    for (let char of text.replace(/\s/g, '')) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    const mostFrequent = Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b));
    return `Most frequent letter: ${mostFrequent}`;
  };
  const reverseText = (text) => text.split('').reverse().join('');
  const jumbleWords = (text) => text.split(' ').sort(() => Math.random() - 0.5).join(' ');

  return (
    <div className="chat-window">
      <h2>{selected ? `Chat with ${selected}` : 'Select a chat'}</h2>
      <div className="message-list" ref={messageListRef}>
        <MessageList messages={messages} />
      </div>
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
