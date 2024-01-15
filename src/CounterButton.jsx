// CounterButton.js
import { useState } from "react";

const CounterButton = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                Click me! Counter: {count}
            </button>
        </div>
    );
};

export default CounterButton;
