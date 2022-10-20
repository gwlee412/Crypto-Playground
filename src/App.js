import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ChatFunction from './chat/ChatFunction';
import Homepage from './Homepage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="chat/" element ={<ChatFunction />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
