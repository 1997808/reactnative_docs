import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HelloWorldApp from "./src/components/HelloWorldApp.js"
import Bananas from "./src/components/Bananas.js"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HelloWorldApp />
        <Bananas />
      </React.Fragment>
    )
  }
}

export default App
