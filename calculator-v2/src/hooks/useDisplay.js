import { useState } from 'react'
import { evaluate } from 'mathjs'

export const useDisplay = () => {
  const [display, setDisplay] = useState('')

  const handleClickSetSymbol = (event) => {
    const oldDisplay = display
    const caracter = event.target.textContent
    const newDisplay = oldDisplay + '' + caracter
    setDisplay(newDisplay)
  }

  const handleClickDelSymbol = () => {
    const oldDisplay = display
    if (!oldDisplay.length > 0) {
      handleClicClearDisplay()
      return false
    }
    setDisplay(oldDisplay.slice(0, -1))
  }

  const handleClickResultOperation = () => {
    if (!display.length > 0) return false
    const result = evaluate(display)
    setDisplay(result)
  }

  const handleClicClearDisplay = () => setDisplay('')

  return { display, handleClickSetSymbol, handleClickResultOperation, handleClickDelSymbol, handleClicClearDisplay }
}
