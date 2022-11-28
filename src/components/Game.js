import React from 'react'
import useWordCount from '../useWordCount'
const Game = () => {
   const {handleChange,placeholder,countDown,startGame,isClicked,wordCount,text,textRef} = useWordCount()
  return (
    <div className='container'>
        <h1>Can you type fast enough..? Beat the time if you can.</h1>
        <textarea value={text} onChange = {handleChange} ref ={textRef} disabled ={!isClicked} placeholder ={placeholder}/>
        <h3>Time remaining: {countDown}</h3>
        <button onClick ={startGame} disabled ={isClicked}>Start</button>
        <h3>Your word count is: {wordCount}</h3>

    </div>
  )
}

export default Game