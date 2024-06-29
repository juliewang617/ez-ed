import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, {useRef} from "react";
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
                        <h1 className="white-h1">Learn More</h1>
                        <p className="actions-p">
                            Learn about the rampant healthcare disparities
                            worldwide regarding atopic dermatitis.
                        </p>
                    </div>
                    <div className="action-get-help">
                        <h1 className="white-h1">Get Help</h1>
                        <p className="actions-p">
                            Identify atopic dermatitis using AI or take a
                            questionnaire to better understand symptoms.
                        </p>
                    </div>
                    <div className="action-give-back">
                        <h1 className="white-h1">Give Back</h1>
                        <p className="actions-p">
                            Find organizations to donate to, or participate in
                            clinical trials to further research.
                        </p>
                    </div>
                </div>
                <div onClick={scrollTo} className="scroll-button"/>
            </div>

            <div className="gradient"></div>

            <div className="learn-more-expanded-container" ref={learnMoreSection}>
                <div className="column-container">
                    <h1 className="blue-h1">Insert very disturbing fact about atopic dermatitis</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Id volutpat lacus laoreet non curabitur gravida arcu. Amet 
                    consectetur adipiscing elit ut. 
                    </p>
                    
                    <p>
                    Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. 
                    </p>

                    <p>
                    Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. 
                    </p>

                    <div className="learn-more-btn" onClick={() => {window.location='/learnmore'}}>Learn more about A.D.</div>
                    
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Id volutpat lacus laoreet non curabitur gravida arcu. Amet 
                    consectetur adipiscing elit ut. 
                    </p>
                    
                    <p>
                    Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. 
                    </p>

                    <p>
                    Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. 
                    </p>

                    <div className="get-help-btn" onClick={() => {window.location='/getsupport'}}>Use our tools for help</div>
                    
                </div>
            </div>

            <div className="give-help-expanded-container">
                <div className="column-container">
                    <h1 className="blue-h1">Join the Fight Against Eczema</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Id volutpat lacus laoreet non curabitur gravida arcu. Amet 
                    consectetur adipiscing elit ut. 
                    </p>
                    
                    <p>
                    Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. 
                    </p>

                    <p>
                    Ipsum suspendisse ultrices 
                    gravida dictum fusce ut placerat. Amet est placerat in 
                    egestas erat imperdiet sed. Nisl purus in mollis nunc sed id 
                    semper risus. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper 
                    sit amet risus nullam. Ridiculus mus mauris vitae ultricies 
                    leo. 
                    </p>
                    <div className="give-help-btn" onClick={() => {window.location='/giveback'}}>How you can help</div>                  
                </div>
                <div className="column-container">
                    <div className="homepage-image3"></div>
                </div>    
            </div>

            <Footer />

        </div>
    );
}
