import React from 'react';
import '../styles/mainPage.css';
import SearchBar from './searchBar';



export default function MainPage() {
  return (
    <div className='App'>
      <section id='section1'>
        <h1 className='main-header'>One stop destination for all things music.</h1>
        <div className='flex-searchbar'>
          <SearchBar/>
        </div>
        <a href="#section2">
          <div className='scroll-button'></div>
        </a>
      </section>
      <section id='section2'>
        <h1>This is section 2.</h1>
      </section>
    </div>
  )
}
