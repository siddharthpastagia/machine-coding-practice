import '../App.css'
import useTicTacToe from '../hooks/useTicTacToe'


function TicTacToe() {
  const{board, handleClick, resetGame, getStatusMessage } = useTicTacToe()
  return (
    <>
    <div className='game'>
      <div>{getStatusMessage()}</div>
      <button className='reset-button' onClick={resetGame}>Reset</button>
    </div>
    <div className='board'>
      {
        board.map((b,index)=> <div key={index} className='cell' onClick={()=> handleClick(index)} disabled={b!==null}>{b}</div>)
      }
    </div>
    </>
  )
}

export default TicTacToe
