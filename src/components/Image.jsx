import React from 'react'

export const Image = ({clickImg, img, isVisible, key}) => {
  return (
    <div onClick={() => clickImg(img, isVisible)} > 
    {
        isVisible 
        ? <img className="logo" src={`./public/img/${img}`} alt="" img={isVisible}/>
        : <div className="covered-logo"> ? </div>
    }
        
    </div>
  )
}

export default Image