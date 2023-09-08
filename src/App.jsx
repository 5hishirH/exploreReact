import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={Linkon()}>Greetings to React</h1>
      <Student name="Linkon" age="14"></Student>
    </>
  )
}

function Linkon() {
  const devStyle = {
    padding: "20px",
    border: "2px solid BlueViolet",
    borderRadius: "8px",
  }

  return devStyle;
}

function Student(props) {
  return (
    <div style={{
      padding: "20px",
      border: "2px solid tomato",
      borderRadius: "8px"
    }}>
      <p>My name is {props.name}</p>
      <p>My age is {props.age}</p>
    </div>
  )
}

export default App
