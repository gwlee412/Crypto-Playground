import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/main-page.css';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function MainPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className='Homepage'>
        <header className='main-header'>
          Music
        </header>
        <form onsubmit="event.preventDefault();" role="search">
          <label for="search">Search</label>
          <input id="search" type="search" placeholder="Search..." autofocus required />
          <button type="submit">Go</button>    
        </form>
      </div>
    </ThemeProvider>
  )
}