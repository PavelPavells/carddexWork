import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <header className="wrapper-header">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
