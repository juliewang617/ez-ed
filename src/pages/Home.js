import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function Home() {
    return (
        <div>
            <NavBar />

            <div className="hero-container">
                <div className="title">Take Steps Against Ezcema</div>
                <div className="actions-container">
                    <div className="action-learn-more">
                        <h1>Learn More</h1>
                        <p className="actions-text">
                            Learn about the rampant healthcare disparities
                            worldwide regarding atopic dermatitis.
                        </p>
                    </div>
                    <div className="action-get-help">
                        <h1>Get Help</h1>
                        <p className="actions-text">
                            Identify atopic dermatitis using AI or take a
                            questionnaire to better understand symptoms
                        </p>
                    </div>
                    <div className="action-give-back">
                        <h1>Give Back</h1>
                        <p className="actions-text">
                            Find organizations to donate to, or participate in
                            clinical trials to further research
                        </p>
                    </div>
                </div>
            </div>

            <div className="gradient"></div>
        </div>
    );
}
