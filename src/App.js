import React from 'react';
import './style.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Greeting from './components/Greeting';

// const App = () => (
//   <div>
//     <Header />
//     <MainContent />
//     <Footer />
//   </div>
// )

class App extends React.Component {
  render = () =>
    (
      <div>
        <Header username="Shane" />
        <Greeting />
        <MainContent />
        <Footer />
      </div>
    )
}

export default App;
