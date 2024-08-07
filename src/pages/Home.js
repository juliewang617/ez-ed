import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useRef, useState, useEffect } from "react";
import "../styles/styles.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HandshakeIcon from "@mui/icons-material/Handshake";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { typedWord } from "../constants/typedWord";

/**
 * @returns {ReactNode} A React Element that renders the Home page.
 */
export default function Home() {
  const learnMoreSection = useRef(null);

  const [typedWordIndex, setTypedWordIndex] = useState(0);

  /**
   * Handles typed word animation by iterating through an array
   */
  useEffect(() => {
    const interval = setInterval(
      () => {
        setTypedWordIndex((i) => (i === typedWord.length - 1 ? 0 : i + 1));
      },
      typedWordIndex === 0 || typedWordIndex === 23 ? 1500 : 150
    );

    return () => clearInterval(interval);
  });

  /**
   * Event handler that scrolls past the hero image when arrow is clicked
   */
  const scrollTo = () => {
    window.scrollTo({
      top: learnMoreSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar />

      <div className="hero-container">
        <div className="title">
          Take Steps Against {typedWord[typedWordIndex]}
        </div>

        <div className="actions-container">
          <div
            className="action-learn-more"
            onClick={() => {
              window.location = "/learnmore";
            }}
          >
            <MenuBookIcon
              style={{ color: "white", fontSize: 48, marginTop: "1rem" }}
            />
            <h1 className="white-h1">Learn More</h1>
            <p className="actions-p">
              Learn about the rampant healthcare disparities worldwide regarding
              atopic dermatitis.
            </p>
          </div>
          <div
            className="action-get-help"
            onClick={() => {
              window.location = "/getsupport";
            }}
          >
            <AccessibilityNewIcon
              style={{ color: "white", fontSize: 48, marginTop: "1rem" }}
            />
            <h1 className="white-h1">Get Help</h1>
            <p className="actions-p">
              Identify atopic dermatitis using AI or take a questionnaire to
              better understand symptoms.
            </p>
          </div>
          <div
            className="action-give-back"
            onClick={() => {
              window.location = "/whatyoucando";
            }}
          >
            <HandshakeIcon
              style={{ color: "white", fontSize: 48, marginTop: "1rem" }}
            />
            <h1 className="white-h1">Give Back</h1>
            <p className="actions-p">
              Find organizations to donate to, or participate in clinical trials
              to further research.
            </p>
          </div>
        </div>
        <div onClick={scrollTo} className="scroll-button" />
      </div>

      <div className="gradient"></div>

      <div className="learn-more-expanded-container" ref={learnMoreSection}>
        <div className="column-container">
          <h1 className="blue-h1">
            African American children are nearly twice more likely to develop
            eczema than white children.
          </h1>
          <p>
            Atopic dermatitis, also known as eczema, is a chronic skin condition
            causing inflammation, redness, and itchiness. The condition impacts
            over 170 million people worldwide.
          </p>
          <p>
            Significant disparities exist based on race and income: Black,
            Latino, and Asian individuals in the USA are more likely to develop
            severe AD and face greater challenges in managing it due to
            structural and environmental factors. Black children are nearly
            twice as likely to develop AD as white children.
          </p>
          <p>
            Moreover, Low-income individuals, including refugees and migrants,
            often experience aggravated symptoms due to poor living conditions
            and limited access to healthcare.
          </p>

          <div
            className="learn-more-btn"
            onClick={() => {
              window.location = "/learnmore";
            }}
          >
            Learn more about A.D
            <KeyboardArrowRightIcon className="right-arrow" />
          </div>
        </div>
        <div className="column-container">
          <div className="homepage-image1"></div>
        </div>
      </div>

      <div className="get-help-expanded-container">
        <div className="column-container">
          <div className="homepage-image2"></div>
        </div>
        <div className="column-container">
          <h1 className="blue-h1">Ez-Ed Makes Getting Help Easier</h1>
          <p>
            To help reduce disparities, Ez-Ed aims to improve accessibility by
            providing helpful resources. Take our symptoms questionnaire, or use
            our AI-based tool to identify images of skin conditions.
          </p>

          <p>
            Besides using our tools, individuals impacted by atopic dermatitis
            can better understand their symptoms and follow various at-home
            treatments to treat their condition. Please note that these tools
            should not act as replacement for visiting a healthcare professional
            if you are able to.
          </p>

          <div
            className="get-help-btn"
            onClick={() => {
              window.location = "/getsupport";
            }}
          >
            Use our tools for help
            <KeyboardArrowRightIcon className="right-arrow" />
          </div>
        </div>
      </div>

      <div className="give-help-expanded-container">
        <div className="column-container">
          <h1 className="blue-h1">Join the Fight Against Health Inequity</h1>

          <p>
            Despite atopic dermatitis's prevalence, more must be done in
            advancing research and treatment efforts to improve the lives of
            millions worldwide. Specifically, improving health equity ensures
            that everyone has access to effective resources to manage their
            condition.
          </p>

          <p>
            While the task at hand seems overwhelming, individual support is
            crucial towards making progress. From participating in clinical
            trials to donating to organizations to simply becoming more aware of
            atopic dermatitis and its health disparities, you can work towards a
            better future for millions.
          </p>
          <div
            className="give-help-btn"
            onClick={() => {
              window.location = "/whatyoucando";
            }}
          >
            How you can help
            <KeyboardArrowRightIcon className="right-arrow" />
          </div>
        </div>
        <div className="column-container">
          <div className="homepage-image3"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
