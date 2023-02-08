import { useState } from 'react'
import './App.css'
import LoginBranding from './components/LoginBranding'
import LoginForm from './components/LoginForm'
import LoginHelp from './components/LoginHelp'
import LoginFooter from './components/LoginFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginBranding></LoginBranding>
      <LoginForm></LoginForm>
      <LoginHelp></LoginHelp>
      <LoginFooter></LoginFooter>
    </div>
  )
}

export default App
