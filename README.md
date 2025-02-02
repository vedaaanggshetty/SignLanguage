
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Language Translator - README</title>
</head>
<body>
    <h1>Sign Language Translator</h1>

    <p>This project is a <strong>Sign Language Translator</strong> that allows real-time translation of sign language gestures into text using computer vision and machine learning techniques. It uses a webcam to capture gestures and translates them into corresponding text and speech. The application serves as a tool for the deaf and hard-of-hearing community, aiming to bridge communication gaps.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Real-time Sign Language Translation:</strong> Capture sign language gestures via webcam and convert them into text.</li>
        <li><strong>Text-to-Speech Output:</strong> The translated text is spoken out loud for better accessibility.</li>
        <li><strong>Flask Backend:</strong> A RESTful API built with Flask for handling sign language image predictions and communication between the frontend and backend.</li>
        <li><strong>React Frontend:</strong> The frontend is built with React to create an interactive and user-friendly interface for sign language translation.</li>
        <li><strong>Model Integration:</strong> Utilizes pre-trained machine learning models for image recognition and prediction.</li>
        <li><strong>Tech Stack:</strong>
            <ul>
                <li><strong>Frontend:</strong> React, Vite, Webcam</li>
                <li><strong>Backend:</strong> Flask, OpenCV, TensorFlow (for prediction)</li>
                <li><strong>Machine Learning:</strong> Custom trained models for sign language recognition</li>
                <li><strong>Web API:</strong> REST API powered by Flask</li>
                <li><strong>Text-to-Speech:</strong> Integrated to provide audio feedback for translated text.</li>
            </ul>
        </li>
    </ul>

    <h2>Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li><strong>Python</strong> (>=3.8)</li>
        <li><strong>Node.js</strong> (>=14.x)</li>
        <li><strong>NPM</strong> (>=6.x)</li>
    </ul>

    <h3>Backend Setup (Flask API)</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/vedaaanggshetty/SignLanguage.git
cd SignLanguage/my-react-app/backend</code></pre>
        </li>
        <li>Create a virtual environment:
            <pre><code>python -m venv venv310</code></pre>
        </li>
        <li>Activate the virtual environment:
            <ul>
                <li>On Windows:
                    <pre><code>.\venv310\Scripts\activate</code></pre>
                </li>
                <li>On macOS/Linux:
                    <pre><code>source venv310/bin/activate</code></pre>
                </li>
            </ul>
        </li>
        <li>Install the required Python packages:
            <pre><code>pip install -r requirements.txt</code></pre>
        </li>
        <li>Run the Flask backend:
            <pre><code>python app/main.py</code></pre>
            This will start the Flask API on <strong>http://127.0.0.1:5000</strong>.
        </li>
    </ol>

    <h3>Frontend Setup (React)</h3>
    <ol>
        <li>Navigate to the frontend directory:
            <pre><code>cd ../src</code></pre>
        </li>
        <li>Install the required frontend packages:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the React app:
            <pre><code>npm run dev</code></pre>
            This will run the app on <strong>http://localhost:3000</strong>.
        </li>
    </ol>

    <h2>How It Works</h2>
    <ol>
        <li><strong>Webcam Integration:</strong> The webcam captures real-time images of hand gestures.</li>
        <li><strong>Image Processing:</strong> The captured images are processed using OpenCV and passed through a pre-trained machine learning model.</li>
        <li><strong>Translation:</strong> The model predicts the corresponding sign language gesture as text.</li>
        <li><strong>Text-to-Speech:</strong> The predicted text is read out loud using a text-to-speech engine.</li>
        <li><strong>API:</strong> The Flask API handles image uploads and performs predictions on the backend. It communicates with the frontend via HTTP requests.</li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li>Open the React app in your browser.</li>
        <li>The webcam will automatically start.</li>
        <li>Sign language gestures in front of the webcam to see them translated to text.</li>
        <li>The text will be displayed on the screen and spoken aloud.</li>
    </ol>

    <h2>Contributing</h2>
    <p>We welcome contributions from the open-source community. If you'd like to contribute:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (`git checkout -b feature-xyz`).</li>
        <li>Commit your changes (`git commit -am 'Add feature XYZ'`).</li>
        <li>Push to the branch (`git push origin feature-xyz`).</li>
        <li>Create a pull request.</li>
    </ol>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
