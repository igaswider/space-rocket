import React from 'react';


const Buttons = props => {
  const { options } = props;
  console.log(props);

    return (
      <div className="headerList__buttons">
        {options.map((element, index) => (
          <button className="headerList__buttons--bStyle" key={index}
            onClick={props.onChange}
            value={element}
          >
            {element}
          </button>
        ))}
      </div>
    )
}

export default Buttons
