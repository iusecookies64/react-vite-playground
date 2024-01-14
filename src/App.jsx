import { useState, useMemo, useRef, useEffect } from "react";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [users, setUsers] = useState([]);

    const filteredUsers = useMemo(() => {
        // logic to filter users list by name
    }, [inputValue]);

    function onChangeHandler() {
        // logic to to set inputValue
    }

    useEffect(() => {
        // logic to fetch user details using https://jsonplaceholder.typicode.com/users api
    }, []);

    return (
        <div className="app">
            <input
                type="text"
                placeholder="Search User By Name"
                onChange={onChangeHandler}
            ></input>

            <div className="users-container">
                {/* Logic to render users to show user details */}
            </div>
        </div>
    );
}

export default App;
