import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ChatFunction from './chat/ChatFunction';
import Homepage from './Homepage';
import Data from './data/Data';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path ="data/" element={<Data />} />
      <Route path="chat/" element ={<ChatFunction />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
