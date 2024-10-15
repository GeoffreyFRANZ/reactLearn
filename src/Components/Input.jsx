import React from "react";


const Input = ({onchange}) =>
{
 return (
   <input onChange={onchange} type="text" placeholder={'Ceci est un placeholder'} />
 );
}

export  default Input