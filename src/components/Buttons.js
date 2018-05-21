import React from 'react';


const Buttons = props => {
  return (
    <div className="headerList__buttons">
      <button className="headerList__buttons--bStyle">all rockets</button>
      <button onClick={props.onLaunchClick} className="headerList__buttons--bStyle">falcon 9</button>
      <button className="headerList__buttons--bStyle">falcon heavy</button>
      <button className="headerList__buttons--bStyle">dragon</button>
    </div>
  )
}

export default Buttons
