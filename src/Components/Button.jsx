import React from "react";

const  Button =  ({onClick, value, onChange, index, item}) =>
{

    if (onChange)
    {

        return (
            <button onClick={(e) => { onClick(); onChange(e, index, item)}} type={'submit'}>{value}</button>
        )
    } else{

        return (
            <button onClick={(e) => { onClick() }} type={'submit'}>{value}</button>
        )
    }

}

export default Button

