import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/predict"; // Change if using a different backend route

const CameraFeed = () => {
    const webcamRef = useRef(null);
    const [prediction, setPrediction] = useState("");

    // Function to capture an image from the webcam
    const capture = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            try {
                const response = await axios.post(API_URL, { image: imageSrc });
                setPrediction(response.data.prediction);
            } catch (error) {
                console.error("Error sending frame to backend:", error);
            }
        }
    }, [webcamRef]);

    return (
        <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
            <h2>Live Sign Language Detection</h2>
            <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                height={300}
            />
            <br />
            <button onClick={capture} style={{ marginTop: "10px", padding: "10px", fontSize: "16px" }}>
                Capture & Predict
            </button>
            <h3>Prediction: {prediction}</h3>
        </div>
    );
};

export default CameraFeed;
