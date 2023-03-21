import React from 'react'
import Image from './Image'


export const Board = ({clickImg, logos}) => {

    

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

    const randomizeSources = (logos) => {
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
                }, )
        }
        
        shuffleArray(randomLogos)
        console.log(randomLogos)
        return randomLogos
    }

    const logifier = (logo, index) => {
        return (
            <Image img={logo.src} clickImg={clickImg} key={index} isVisible={logo.isVisible} />
        )
    }

    const board = randomizeSources(logos).map((source, index) => logifier(source, index))
  
  
    return (
    <div className='board'>
        {board}
    </div>
  )
}

export default Board