import React from "react";


const Input = ({type, onchange, item, index }) =>
{
 return (
   <input onChange={onchange} type={type} data-item={item} data-index={index} placeholder={'Ceci est un placeholder'} />
 );
}

export  default Input