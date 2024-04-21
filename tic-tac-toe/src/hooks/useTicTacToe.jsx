import { useState } from "react"

const useTicTacToe = () =>{

    const initialBoard = ()=>Array(9).fill(null)
    
    const [board, setBoard] = useState(initialBoard())
    const [isXnext,setIsXnext] = useState(true)

    const winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    // calculate winner
    const calculateWinner = (currentBoard) => {
        for(let i=0;i<winningPatterns.length;i++){
            const [a,b,c] = winningPatterns[i]
            if(currentBoard[a] && currentBoard[a]=== currentBoard[b] && currentBoard[a]=== currentBoard[c]){
                return currentBoard[a]
            }
        }
        return null;
    }

    // handleClick
    const handleClick = (index) => {
        const winner = calculateWinner(board)
        console.log(winner)
        if(winner || board[index])return
        const newBoard = [...board]
        newBoard[index] = isXnext?"X":"O"
        setBoard(newBoard)
        setIsXnext(!isXnext)
    }


    // reset logic
    const resetGame = () => {
        setBoard(initialBoard)
        setIsXnext(true)
    }


    // get current status

    const getStatusMessage = () => {
        const winner = calculateWinner(board)
        if(winner) return `Player ${winner} wins`
        if(!board.includes(null)) return `Game is Draw!`
        return `Player ${isXnext? "X": "O"} turn` 
    }

    return {board, resetGame, handleClick, calculateWinner, getStatusMessage}

}

export default useTicTacToe