import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentCard from './components/Contents/index'
import content from './data/contentTitle.json'

function App() {
  let contentList = content.map((value, key) => <ContentCard title={value.title} subtitle={value.subtitle} createdAt={value.createdAt}/>)
  return (
    
    <div className="App">
      <div className='container mx-auto'>
        <div className='grid gap-0 grid-cols-3'>
          {contentList}
        </div>
      </div>
    </div>
  );
}

export default App;
