import cv2
import numpy as np
import base64
import io
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import tensorflow as tf  # Import your ML model

app = Flask(__name__)
CORS(app)

MODEL_PATH = "model/sign_language_model.h5"  # Change this to your model path
model = tf.keras.models.load_model(MODEL_PATH)
class_labels = ["Hello", "Thanks", "Yes", "No", "I Love You"]  # Update with your classes

def preprocess_image(image):
    """Convert base64 image to NumPy array and preprocess for prediction"""
    image = Image.open(io.BytesIO(image)).convert("RGB")
    image = image.resize((64, 64))  # Resize to match model input
    image = np.array(image) / 255.0  # Normalize
    image = np.expand_dims(image, axis=0)
    return image

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json["image"]
        image_data = base64.b64decode(data.split(",")[1])  # Decode base64 image
        image = preprocess_image(image_data)

        prediction = model.predict(image)  # Predict using model
        predicted_class = class_labels[np.argmax(prediction)]

        return jsonify({"prediction": predicted_class})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
