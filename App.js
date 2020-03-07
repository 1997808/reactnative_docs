import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HelloWorldApp from "./src/components/HelloWorldApp.js"
import Bananas from "./src/components/Bananas.js"
import LotsOfGreeting from "./src/components/LotsOfGreetings.js"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HelloWorldApp />
        <LotsOfGreeting />
        <Bananas />
      </React.Fragment>
    )
  }
}

export default App
