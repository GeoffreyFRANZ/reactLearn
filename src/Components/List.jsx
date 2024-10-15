import React from "react";
import Button from "./Button";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

const List = ({items, removeObjectif}) => {
    return (
        <ul>
            {items.map((item, index) => (
             <div>
                <li key={index}>{item}</li>
                 <Button onClick={() => removeObjectif(index)} value={'remove'} />
             </div>

            )
            )}
        </ul>
    );

}

export default List