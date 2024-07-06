import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio/Portfolio'
import Toolbar from './Toolbar/Toolbar'
import { v4 as uuid } from "uuid";

class App extends Component{
  constructor(props){
    super(props)
    }
    
  render(){
    return (
      <>
      <Toolbar />
      </>
      
    )
  }


}

export default App
