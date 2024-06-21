import './App.css'
import Game from './Game'
import TicTacToe from './TicTacToe'
import DATA from './data'

function App() {

  return (
    <main>
      <div>TIC TAC TOE</div>
      <TicTacToe tilesLength={3}/>
      <Game data={DATA}/>
    </main>
  )
}

export default App
