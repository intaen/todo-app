
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const comp = <h1>Hello World!</h1> // React.createElement("h1", null, "Hello World!")

const styleContent = { // kalo dibikin const, manggilnya: style={styleContent}, kalo engga, kayak line 17
  justifyContent: 'center',
}

function App() {
  return (
    <>
      <div style={{ justifyContent: 'center' }}>
        {comp}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Final Countdown</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
