import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import NavMenu from './components/NavMenu'
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
  const [logos, setLogos] = useState(logoArray)
  const [firstClicked, setFirstClicked] = useState({})
  const [secondClicked, setSecondClicked] = useState({})
  
  const clickImg = (img, isVisible) => {
    setLogos(
      logos.map((logo) => 
       logo.img === img ? {...logo, isVisible: true}  : logo
      )
    )
  }


  
  return (
    <div className="app">
      <NavMenu /> 
      <Board clickImg={clickImg} logos={logos}/>
    </div>
  )
}

export default App
