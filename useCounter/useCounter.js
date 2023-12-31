import { useState } from "react";


export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(initialValue);

    return {
        counter,   //counter:counter
        increment, //increment:increment()
        decrement,
        reset
    }
}


