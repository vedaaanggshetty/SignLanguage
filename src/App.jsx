import React, { useEffect, useState } from "react";
import { fetchWelcomeMessage } from "./api";
import CameraFeed from "./components/CameraFeed";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchWelcomeMessage().then(setMessage);
    }, []);

    return (
        <div style={{ color: "white", textAlign: "center", padding: "50px" }}>
            <h1>Sign Language Translator</h1>
            <p>{message}</p>
            <CameraFeed />
        </div>
    );
};

export default App;
