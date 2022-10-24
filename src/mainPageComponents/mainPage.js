import React from 'react';
import '../styles/mainPage.css';
import SearchBar from './searchBar';



export default function MainPage() {
  return (
    <div className='App'>
      <section id='sec-1'>
        <h1 className='main-header'>One stop destination for all things music.</h1>
        <div className='flex-searchbar'>
          <SearchBar/>
        </div>
        <a href="#sec-2">
          <div className='scroll-button'></div>
        </a>
      </section>
      <section id='sec-2'>
        <div className='flex-info'>
          <h1 className='info-header'>Get to know more about your favorite artists</h1>
        </div>
        <div id='pic-1'></div>
        <div id='pic-2'></div>
        <div className='flex-info'>
          <h1 className='info-header'>Discover new artists</h1>
        </div>
      </section>

      <section id='sec-3'>
        <div className='tbd-body'>
          <h1>That's about it for now</h1>
        </div>
      </section>
    </div>
  )
}
