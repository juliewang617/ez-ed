import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function GiveBack(){
    return(
        <div>
            <NavBar />
            <div className="page-heading-section">
                <h1 className="page-title">Give Back</h1>
                <p className="page-caption">See how you can help those with 
                    atopic dermatitis.</p>
            </div>

            <Footer />
        </div>
    )
}