import NavBar from "../components/NavBar";

export default function About(){
    return(
        <div>
            <NavBar />
            <div className="page-heading-section">
                <h1 className="page-title">About</h1>
            </div>

            <div className="page-body">
                <p>
                As someone who has experienced atopic dermatitis my whole life, I 
                owe a lot to my dermatologist and family for providing the best 
                possible care for me to manage my condition to a stable point. 
                </p>

                <p>
                When Kode with Klossy and Deloitte announced its latest challenge 
                regarding health equity, I was immediately inspired by my experience 
                with eczema to create a website dedicated to it. The more I dug, the 
                more I realized how widespread of an issue A.D. is, and the breadth 
                of people worldwide who lack access to care for eczema. 
                </p>

                <p>
                With Ez-Ed, I hope to educate others on the impacts of eczema and 
                the widespread disparities in access to care. Moreover, for those 
                with atopic dermatitis, I hope that the tools Ez-Ed provides can 
                offer guidance in managing and identifying symptoms to lessen 
                eczema’s impact over their lives. 
                </p>
            </div>
        </div>
    )
}