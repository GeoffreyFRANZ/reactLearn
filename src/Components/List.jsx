import React from "react";
import Button from "./Button";
import {keyboard} from "@testing-library/user-event/dist/keyboard";
import Modals from "./Modals";

const List = ({items, show, handleClose, removeObjectif, onChange, edit}) => {
    return (
        <ul>
            {items.map((item, index) => (
                    <div>
                        <li key={index}>{item}</li>
                        <Button onClick={() => removeObjectif(index)} onChange={null} value={'remove'} />
                        <Modals show={show} edit={edit}  onChange={onChange} handleClose={handleClose} item={item} index={index} />
                    </div>
                )
            )}
        </ul>
    );

}

export default List