import React from 'react'

export const Image = ({clickImg, img, isVisible, index}) => {
  return (
    <div> 
    {
        isVisible 
        ? <img className="logo" src={`./public/img/${img}`} alt="" />
        : <div className="covered-logo" onClick={() => clickImg(index, img)}> ? </div>
    }    
    </div>
  )
}

export default Image