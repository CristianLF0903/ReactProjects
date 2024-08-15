import { useState } from 'react'
import './css/App.css'
import WinnerModal from './components/WinnerModal.jsx'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './board'
import confetti from 'canvas-confetti'
import { Board } from './components/Board.jsx'
import { Turns } from './components/Turns.jsx'
import { saveGame, resetGame } from './saveGame.js'


function App() {
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ? turnFromLocalStorage : TURNS.X
  })
  const [board, setBoard] = useState(() => {
    const boarFromLocalStorage = window.localStorage.getItem('board')
    return boarFromLocalStorage ? JSON.parse(boarFromLocalStorage) : Array(9).fill(null)
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // si ya tiene algo o hay un ganador
    if (board[index] || winner) return

    // actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar juego
    saveGame({
      newBoard: newBoard,
      newTurn: newTurn
    })

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }

  }

  const resetGame = () => {
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setWinner(null)

    resetGame()

  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>

      <Board board={board} updateBoard={updateBoard} />

      <Turns turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main >
  )
}

export default App
