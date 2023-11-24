import { createContext, useState } from 'react'

const ClassContext = createContext()

const ClassProvider = ({ children }) => {
  const [classAlter, setClassName] = useState('state0') // Vous pouvez utiliser le nom de classe initial de votre choix

  const toggleClass = () => {
    setClassName((prevclassAlter) =>
      prevclassAlter === 'state0' ? 'state1' : 'state0'
    )
  }

  return (
    <ClassContext.Provider value={{ classAlter, toggleClass }}>
      {children}
    </ClassContext.Provider>
  )
}

export { ClassProvider, ClassContext }
