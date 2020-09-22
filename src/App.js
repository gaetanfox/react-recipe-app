import React, { useState } from 'react'
// import Counter from './Counter'
import CounterHooks from './CounterHooks'

// Context || Has a provider that provides the context, and a consumer which is the thing that'll receive whatever we provide to it (really cool for themes).
export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    // A provider always need to have "value" which takes an object, which refers to a state
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <CounterHooks initialCount={5} />
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === 'red' ? 'blue' : 'red'))
        }
      >
        Switch the Theme
      </button>
    </ThemeContext.Provider>
  )
}

export default App
