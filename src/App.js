import React from 'react';
import './style.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Greeting from './components/Greeting';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLoggedIn: false,
      character : {}
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {

    this.setState({ isLoading: true })
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        console.log(data)

        this.setState({
          isLoading: false,
          character: data
        })
      })
  }


  handleClick() {
    console.log("I'm working")

    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    return (
      <div>
        <Header username={this.state.character.name} />
        <Greeting />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App;
