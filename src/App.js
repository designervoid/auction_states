import React from 'react';
import './App.css';
import PriceNegotiation from './components/PriceNegotiation'

export default function App() {
  return (
    <div className="App">
      <PriceNegotiation state={0}/>
      <PriceNegotiation state={1}/>
      <PriceNegotiation state={2}/>
      <PriceNegotiation state={3}/>
    </div>
  );
}
