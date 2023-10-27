import React from 'react'



const Light = ({color, activeLight, lightOnClick}) => {



  return (
    <div className={'light'+' '+color+' '+ (activeLight == true ? ' ' : ' inactive') } onClick={lightOnClick}>
        <div className="glass"></div>
    </div>
  )
}

export default Light
