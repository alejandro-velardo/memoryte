import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Board from './components/Board'


function App() {

  const logoArray = [
    {
      img: "cocacola.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "_nada.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "evian.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "kitkat.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "lipton.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "maggi.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "milka.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "mms.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "oldelpaso.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "pepsi.jpg",
      isVisible: false, 
      indice: 0
    },
    {
      img: "pringles.jpg",
      isVisible: false, 
      indice: 0
    }
  ]
  const [logos, setLogos] = useState([])
  const [firstClicked, setFirstClicked] = useState("")
  const [secondClicked, setSecondClicked] = useState("")
  const [count, setCount] = useState(0)
  
  
  const  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }


  const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }

  const randomizeBoard = (logos) => {
    const randomLogos = []
    for (let i = 0; i<10; i++) {
      const logoIndex = getRandomInt(11)
      let logoSrc = logos[logoIndex].img
      let isVisible = logos[logoIndex].isVisible


      while (randomLogos.some(logo => logo.src === logoSrc)) {
          logoSrc = logos[getRandomInt(11)].img
      }

      randomLogos.push(
        {
          src: logoSrc,
          isVisible : isVisible
        }, 
        {
          src: logoSrc,
          isVisible : isVisible
        }, 
      )
    }

    shuffleArray(randomLogos)
    setLogos([...randomLogos])
  }

  useEffect( () => {
      randomizeBoard(logoArray)
    },[])


  const clickImg = (logoIndex, img) => {

    const newLogos = [...logos]
    newLogos[logoIndex].isVisible = true; 
    setLogos(newLogos)

     if (firstClicked=="") {
      setFirstClicked(img)
    } else if (secondClicked=="") {
      setSecondClicked(img)
    } else if (firstClicked !="" && secondClicked != "") {
      setFirstClicked(img)
      setSecondClicked("")
    }

  }

  useEffect( ()=>{
    if (secondClicked=="") {
      return
    } else if(firstClicked==secondClicked){
      setCount(count + 1)
      return
    } else {
      setTimeout(()=> {
        const updatedLogos = [...logos]
        for (let logo of updatedLogos) {
          if (logo.src == firstClicked || logo.src == secondClicked) {
            logo.isVisible = false
          }
        }
        setLogos(updatedLogos)
        setCount(count + 1)
        return         
      }, 800)   
    }
  }, [secondClicked])

  const shuffle = () => {
    randomizeBoard(logoArray)    
  }

  return (
    <div className="pp">
      <Board logos={logos}  clickImg={clickImg}/>
      <br />
      <div className='count-container'>
        <p>{count}</p>
      </div>
      <div className='shuffle-button'>
        <Button variant="dark" className="shuffle-button" onClick={() => shuffle()}>Shuffle</Button>
      </div>

    </div>
  )
}

export default App
