import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import React from "react"; 
import littleMe from '../assets/little-me.jpg'; 

export default function About(){
    return(
        <div>
            <NavBar />
            <div className="page-heading-section">
                <h1 className="page-title">About</h1>
            </div>

            <div className="page-body-no-flex">
                <p>
                As someone who has experienced atopic and sebhorreic dermatitis my whole life, I 
                owe a lot to my dermatologist and family for providing the best 
                possible care for me to manage my condition to a stable point. 
                </p>

                <p>
                When Kode with Klossy and Deloitte announced its latest challenge 
                regarding health equity, I was immediately inspired by my experience 
                with eczema to create a website dedicated to its impacts. The more I researched, the 
                more I realized how widespread of an issue A.D. is, and the huge scale 
                of people worldwide who lack access to care to proper eczema care. 
                </p>

                <p>
                <b>Ezcema-Educate</b> (Ez-Ed) aims to spread awareness on impact of eczema and 
                the widespread disparities in access to care. Moreover, for those 
                with atopic dermatitis, Ez-Ed 
                offers guidance in managing and identifying symptoms to lessen 
                eczema’s impact over their lives. 
                </p>

                <div className="page-image-caption">
                    <img src={littleMe} className="page-image-full" alt="Baby me!"/>
                    <p className="page-caption">Baby me!</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}