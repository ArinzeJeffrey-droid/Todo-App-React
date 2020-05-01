import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
    <TodoContextProvider>
      <Navbar/>
      <Layout/>
    </TodoContextProvider>
    </div>
  );
}

export default App;
