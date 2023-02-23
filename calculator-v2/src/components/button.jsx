export const BtnCalulator = ({ children, setSymbol, delSymbol }) => {
  const handleClic = (event) => children === 'DEL' ? delSymbol() : setSymbol(event)
  return (<button onClick={handleClic}>{children}</button>)
}
