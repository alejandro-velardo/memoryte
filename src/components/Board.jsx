import React from 'react'
import Image from './Image'


export const Board = ({logos, clickImg}) => {


    

    const createLogos = (logo, index) => {
        return (
            <Image img={logo.src} clickImg={clickImg} key={index} index={index} isVisible={logo.isVisible} />
        )
    }
    const board = logos.map((logo, index) => createLogos(logo, index))
  
  
    return (
    <div className='board'>
        <h1>Memory</h1>
        {
            <div className="board-row">
                {board[0]}
                {board[1]}
                {board[2]}
                {board[3]}
                {board[4]}
            </div>
        }
        {
            <div className="board-row">
                {board[5]}
                {board[6]}
                {board[7]}
                {board[8]}
                {board[9]}
            </div>
        }
        {
            <div className="board-row">
                {board[10]}
                {board[11]}
                {board[12]}
                {board[13]}
                {board[14]}
            </div>
        }
        {
            <div className="board-row">
                {board[15]}
                {board[16]}
                {board[17]}
                {board[18]}
                {board[19]}
            </div>
        }
    </div>
  )
}

export default Board