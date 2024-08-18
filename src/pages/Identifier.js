import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import * as tf from "@tensorflow/tfjs";
import { Link } from "react-router-dom";

/**
 * @returns {ReactNode} A React Element that renders the Identifier page.
 */
export default function Identifier() {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const labels = [
    "Atopic Dermatitis (Eczema)",
    "Melanoma",
    "Basal Cell Carcinoma",
    "Psoriasis",
    "Normal Skin",
    "Acne",
  ];

  const URL = "https://teachablemachine.withgoogle.com/models/PbDCjWb3U/";
  const modelURL = URL + "model.json";

  /**
   * Loads the model using the Tensorflow library
   */
  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadLayersModel(modelURL);
      setModel(model);
    };
    loadModel();
  }, [modelURL]);

  /**
   * Handles image upload
   * @param {*} event - the uploaded image
   */
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const image = new Image();
      image.src = reader.result;

      image.onload = () => {
        const tensor = tf.browser
          .fromPixels(image)
          .resizeNearestNeighbor([224, 224])
          .toFloat()
          .expandDims();

        const predictions = model.predict(tensor).dataSync();
        setPredictions(Array.from(predictions));
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <NavBar />
      <div className="page-heading-section">
        <h1 className="page-title">Eczema Identifier AI Tool</h1>
        <p className="page-caption">
          Upload an image below and have our AI tool classify it as one of
          several common skin conditions.
        </p>
      </div>
      <div className="page-body-no-flex">
        <div className="file-upload-container">
          <input
            className="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        {predictions.length !== 0 && (
          <div className="predictions-container">
            <h2>{labels[predictions.indexOf(Math.max(...predictions))]}</h2>

            <div>
              Confidence levels:
              {predictions.map((prediction, index) => (
                <div key={index}>
                  {labels[index]}: {prediction.toFixed(2)}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="model-info">
          <p>
            The model, created using Google's Teachable Machine, classifies
            images of skin into six categories: atopic dermatitis (ezcema),
            melanoma, basal cell carcinoma, psoriasis, acne, and normal skin.
          </p>

          <p>
            The model was trained using over 10,000 images from the following
            datasets:&nbsp;
            <Link href="https://www.kaggle.com/datasets/riyaelizashaju/skin-disease-classification-image-dataset">
              Skin Disease Classification Image Dataset
            </Link>
            ,
            <Link href="https://www.kaggle.com/datasets/nayanchaure/acne-dataset">
              Acne Dataset
            </Link>
            , and{" "}
            <Link href="https://www.kaggle.com/datasets/shakyadissanayake/oily-dry-and-normal-skin-types-dataset/data">
              Oily Dry, and Normal Skin Types Dataset
            </Link>
            .
          </p>

          <p>
            To use the model, simply upload a clear image of the impacted skin.
            The model will return the probability (confidence) of each
            classification, and highlight the one with the highest probability
            at the top. Note that the model may be inaccurate and{" "}
            <b>should not be considered as a diagnosis.</b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
