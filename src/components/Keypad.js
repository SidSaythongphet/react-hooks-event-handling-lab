import React from "react";


function Keypad() {
    function handleChange(event) {
        console.log("Entering password...")
    }

    return (
        <input type="password" placeholder="Enter Password" onChange={handleChange}>
        </input>
    )
}

export default Keypad