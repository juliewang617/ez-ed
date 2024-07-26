import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import handsOnTreeImg from "../assets/hands-on-tree.jpg"

export default function WhatYouCanDo(){
    return(
        <div>
            <NavBar />
            <div className="page-heading-section">
                <h1 className="page-title">What You Can Do</h1>
                <p className="page-caption">See how you can help fight health 
                    inequity regarding 
                    atopic dermatitis.</p>
            </div>

            <div className="page-body-no-flex">
                <h2>The Issue</h2>
                <p>
                    Atopic dermatitis impacts hundreds of millions of individuals 
                    worldwide, but its impact is not uniform. Significant
                    disparities exist based on race, socioeconomic status, 
                    mental health, and more. For instance, Black, Latino, and 
                    Asian individuals are more likely to develop severe forms of 
                    eczema in the US and also face greater challenges in 
                    managing it, often due to systemic challenges. Moreover, 
                    low-income individuals often face barriers to accessing 
                    adequate healthcare and live in conditions that may 
                    aggravate their condition. 
                </p>
                <p>
                    By working towards health equity, we can ensure that everyone 
                    has access to the care and resources they need to effectively 
                    manage their condition, regardless of their identity or 
                    background. By addressing the factors, which are often systemic, 
                    contributing to these disparities, we can improve the quality 
                    of life for millions of people worldwide. 
                </p>

                <img src={handsOnTreeImg} alt="multiple hands on a tree" className="page-image-full"></img>

                <h2>How You Can Make a Difference</h2>

                <h3>1. Educate yourself more about Eczema</h3>
                <p>
                    The <a href="/learnmore">Learn More</a> page provides an 
                    overview about atopic dermatitis, its symptoms, impacts, and 
                    related healthcare inequities. If you would like to learn more, 
                    consider visiting the The <a href="/learnmore">Sources</a> section at the bottom, which 
                    contains highly informational websites and journals. You can 
                    also visit the following sites, which contain more information 
                    on treatments and have informational newsletters.
                    <ul>
                        <li><a href="https://nationaleczema.org/">The National 
                        Eczema Organization</a></li>
                        <li><a href="https://www.niaid.nih.gov/diseases-conditions/eczema-treatment">
                        The National Institute of Allergy and Infectious Diseases</a></li>
                    </ul>
                </p>


                <h3>2. Contribute to Clinical Trials</h3>
                <p>
                    By participating in eczema-related clinical trials, you 
                    directly contribute to research that can lead to new 
                    treatments and a deeper understanding of A.D. 
                </p>
                <blockquote>
                    In clinical trials related to skin conditions like AD, 
                    white people have made up over three-quarters of 
                    participants. 
                </blockquote>
                <p>
                    Despite racial minorities being more likely to develop 
                    AD, they have historically been underrepresented in eczema-related 
                    clinical trials. Recent analyses of trials related to 
                    skin conditions like AD have shown that white people  
                    have made up more than three-quarters of participants. 
                </p>
                <p>
                    AD can vary widely from person to person. 
                    Diversity in clinical trials can help healthcare professionals and 
                    researchers better understand potential treatments for
                    a greater spread of people, allowing for improvements 
                    such as earlier detection or improved treatment options.
                </p>
                <blockquote>
                    To find nearby clinical trials to participate in, visit this <a href="https://nationaleczema.org/research/clinical-trials/">
                    Clinical Trial Finder</a> from 
                    the National Eczema Association. 
                </blockquote>

                <h3>3. Financial Support</h3>
                <p>Donations directly shape the future of AD research and improve 
                    the lives of millions worldwide. Here are some organizations or 
                    funds to contribute to: 
                </p>
                <ul>
                    <li><b><a href="https://nationaleczema.org/support-the-nea-research-fund/">
                    The NEA Research Fund:</a></b> created by the National 
                    Eczema Association, the NEA Research Fund is the largest 
                    private funder of eczema research in the United States.</li>
                    <li><b><a href="https://eczema.org/donate/">
                    The National Eczema Society</a></b> is a London-based charity 
                    dedicated to improving outcomes for people with eczema by 
                    spreading awareness and funding research.</li> 
                    <li><b><a href="https://www.gper.org/giving">
                    GPER</a></b> (Global Parents for Eczema Research) is the 
                    only global non-profit dedicated to supporting children 
                    with eczema.</li>
                </ul>

                <hr />

                <h2>Sources</h2>

                <p>
                Cochran, Raechele, and Bukky Aremu. “The Importance of Diversity 
                in Eczema Clinical Trials.” <i>MedicalNewsToday</i>, 17 February 2023, 
                https://www.medicalnewstoday.com/articles/diversity-eczema-clinical-trials#why-it-matters.
                </p>

                <p>
                    Chen V, Akhtar S, Zheng C, Kumaresan V, Nouri K. Assessment 
                    of Changes in Diversity in Dermatology Clinical Trials 
                    Between 2010-2015 and 2015-2020: A Systematic Review. 
                    <i>JAMA Dermatol. </i> 2022;158(3):288–292. doi:10.1001/jamadermatol.2021.5596
                </p>
                

            </div>

            <Footer />
        </div>
    )
}