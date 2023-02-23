import { useDisplay } from './hooks/useDisplay'
import { SYMBOLS } from './constantes'
import { BtnCalulator } from './components/button'

export function App () {
  const { display, handleClickSetSymbol, handleClickResultOperation, handleClickDelSymbol, handleClicClearDisplay } = useDisplay()

  return (
    <main>
      <h1>Calculadora v0</h1>
      <article>
        <header>
          <p>{display}</p>
        </header>
        <div>
          {
            SYMBOLS.map(({ id, symbol }) => {
              return (
                <BtnCalulator key={id} setSymbol={handleClickSetSymbol} delSymbol={handleClickDelSymbol}>{symbol}</BtnCalulator>
              )
            })
          }
        </div>
        <div>
          <button onClick={handleClickResultOperation}>=</button>
          <button onClick={handleClicClearDisplay}>CLEAR</button>
        </div>
      </article>
    </main>
  )
}
