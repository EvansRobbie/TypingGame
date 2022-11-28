import {useState, useEffect, useRef}from 'react'

const useWordCount = () => {
    const START_TIMING = 10
    const [text, setText] = useState('')
    const [wordCount, setWordCount] = useState(0)
    const [countDown, setCountDown] = useState(START_TIMING)
    const [isClicked, setIsClicked] = useState(false)
    const [placeholder, setPlaceHolder] = useState('Click start to play.')
    // The useRef is used for fucusing the textarea once the start buton is
    const textRef = useRef(null)

    const handleChange = (e) =>{
        setText(e.target.value)
    
        // console.log(e.target.value)
    }
    const calculateWord = (text) =>{
        const wordArr = text.trim().split(' ')
        const filterWord = wordArr.filter((word) =>word !== ' ').length
        return filterWord
    }
    const startGame = () =>{
        setIsClicked(true)
        setWordCount(0)
        setCountDown(START_TIMING)
        setText('')
        // You have to set the disabled o false do that the focus can take place
        textRef.current.disabled = false
        textRef.current.focus()
    }
    useEffect(()=>{
        if (isClicked ===true && countDown > 0){
             setTimeout(() =>{
                setCountDown(prevCount => prevCount -1)
            },1000)
        }else if (countDown === 0){
            setIsClicked(false)
            setWordCount(calculateWord(text))
            setPlaceHolder('Game Over, Play Again!!')
            
            
            // console.log(textRef)
        }

    },[countDown, isClicked]) 
  return {handleChange,placeholder,countDown,startGame,isClicked,wordCount,text,textRef} 
}

export default useWordCount