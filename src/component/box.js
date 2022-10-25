import React from 'react'

const box = (props) => {
    let result;

    if(props.name === "Computer" &&
        props.result !== "Tie" &&
        props.result !== ""
    ){
        result=props.result === "Win"? "Lose":"Win";
    } else {
        result=props.result;
    }
    
  return (
    <div className={`box ${result}`}>
        <h1>{props.name}</h1>
        <img src={props.item && props.item.img} alt="" />
        <p>{result}</p>
    </div>
  )
}

export default box