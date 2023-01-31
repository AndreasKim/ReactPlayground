import React from 'react';
import Header from './header/header';
import Body from './body/body';
import './App.css';

function App() {
  return (
    <>
      <link rel="stylesheet" href="bootstrap.min.css" />
      <link href="bootstrap\dist\js\bootstrap.min.js" />
      <link rel="stylesheet" href="@fortawesome\fontawesome-free\css\all.min.css" />
      <link rel="stylesheet" href="animate.min.css" />
      <Header />
      <Body/>
    </>
  );
}

export default App;
