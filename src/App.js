import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { cryptoApi } from "./features/apiSlice";
import ChatFunction from "./chat/ChatFunction";
import Homepage from "./Homepage";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={cryptoApi}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="chat/" element={<ChatFunction />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  );
}

export default App;
