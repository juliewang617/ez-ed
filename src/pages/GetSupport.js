import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function GetSupport(){
    return(
        <div>
            <NavBar/>
            <div className="page-heading-section">
                <h1 className="page-title">Get Support</h1>
                <p className="page-caption"> Identify atopic dermatitis using AI or take a
                questionnaire to better understand symptoms.</p>
            </div>

            <div className="page-body-no-flex">
                <p className="centered-text"> Use our AI tool to identify images of atopic dermatitis. </p>
                <div className="identifier-btn" onClick={() => window.location="/identifier"}>
                    Eczema Identifier
                </div>

                <p className="centered-text"> Take our symptoms questionnaire to understand your symptoms. </p>
                <div className="questionaire-btn" onClick={() => window.location="/questionaire"}>
                    Symptoms Questionnaire
                </div>

                <div className="tips-container">
                    <h2 style={{textAlign: 'center'}}>Tips to Manage Symptoms </h2>
                    <p style={{textAlign: 'center'}}>If you have access to care, you and your doctor should 
                        discuss treatment options for your atopic dermatitis. Here are some 
                        at-home tips to manage symptoms. (Source: National Institute of Allergy and Infectious Diseases)
                    </p>

                    <ul>
                        <li>
                            Relieve itch by using a moisturizer or eczema cream. 
                            Moisturize the skin two to three times a day.
                            Moisturizers should be free of alcohol, scents, 
                            dyes, fragrances, and other skin-irritating chemicals.
                        </li>
                        <li>
                            Keep your fingernails cut short to prevent scratching. 
                            Consider wearing gloves if you scratch your skin 
                            at night.
                        </li>
                        <li>
                            Avoid irritants like wool, strong soaps or detergents, 
                            and sweat. 
                        </li>
                        <li>
                            When washing, keep water contact brief and use gentle 
                            soaps. Keep the temperature of the water lukewarm. 
                        </li>
                        <li>
                            When washing, do not scrub or dry the skin too hard or 
                            for too long. Apply moisturizer to trap moisture in the skin 
                            afterward. 
                        </li>

                    </ul>

                </div>
            </div>

            <Footer />
        </div>
    )
}