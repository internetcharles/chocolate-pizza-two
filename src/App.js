import React from 'react';
import './App.css';
import DeliciousHeader from './DeliciousHeader';
import Article from './Article.js'
import Footer from './Footer.js'


function App() {
  return (
    <div className="App">
      <DeliciousHeader siteName="Delicious" />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
