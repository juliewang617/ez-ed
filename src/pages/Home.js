import NavBar from "../components/NavBar";
import React, {useRef, Image} from "react";
import "../styles/styles.css";

export default function Home() {

    const learnMoreSection = useRef(null); 

    const scrollTo = () => {
        console.log("hello")
        window.scrollTo({top: learnMoreSection.current.offsetTop, behavior: 'smooth', }); 
    }
    
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
                            questionnaire to better understand symptoms.
                        </p>
                    </div>
                    <div className="action-give-back">
                        <h1>Give Back</h1>
                        <p className="actions-text">
                            Find organizations to donate to, or participate in
                            clinical trials to further research.
                        </p>
                    </div>
                </div>
                <div onClick={scrollTo} className="scroll-button"><p>Scroll</p></div>
            </div>

            <div className="gradient"></div>

            <div className="learn-more-expanded-container" ref={learnMoreSection}>
                <div className="column-container">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Id volutpat lacus laoreet non curabitur gravida arcu. Amet 
                    consectetur adipiscing elit ut. Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. Viverra vitae congue eu consequat. Mauris a diam 
                    maecenas sed enim ut sem. Libero id faucibus nisl 
                    tincidunt eget nullam non nisi est. Tristique nulla aliquet 
                    enim tortor at auctor urna nunc. Cras semper auctor neque 
                    vitae tempus. Lacinia quis vel eros donec ac odio tempor.
                    </p>

                </div>
                <div className="column-container">

                </div>
            </div>

            <div className="get-help-expanded-container">
                <div className="column-container"></div>
                <div className="column-container"></div>
            </div>

            <div className="give-help-expanded-container">
                <div className="column-container"></div>
                <div className="column-container"></div>    
            </div>

        </div>
    );
}
