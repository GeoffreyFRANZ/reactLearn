import React from "react";

const  Button =  ({onClick, value}) =>
{
    return (
        <button onClick={onClick} type={'submit'}>{value}</button>
    )
}

export default Button