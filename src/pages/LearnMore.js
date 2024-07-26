import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import scratchImg from '../assets/scratch-img.jpg'; 

export default function LearnMore(){
    return(
        <div>
            <NavBar />
            <div className="page-heading-section">
                <h1 className="page-title">Learn More</h1>
                <p className="page-caption">Learn more about atopic dermatitis - 
                    its symptoms, impacts, and health inequities. 
                </p>
            </div>
            <div className="page-body-no-flex">

                <div>
    

                    <h2>What is Atopic Dermatitis?</h2>
                    <p>
                        Atopic dermatitis, known as eczema, is a chronic skin condition 
                        characterized by inflammation, redness, and irritation. Symptoms 
                        can appear anywhere on the body and vary widely but often include 
                        dry skin, itchiness, rashes, and oozing. Inflamed skin can look 
                        red on white skin, and darker brown, purple, or gray on brown 
                        and black skin.                  
                    </p>
                    <p>
                        <blockquote>
                        171 million individuals 
                        worldwide were affected by eczema in 2019.
                        </blockquote>
                        While the cause of atopic 
                        dermatitis is uncertain, it appears to run in families. 
                        Environmental causes, such as living in often cold or 
                        polluted areas, may also be a factor. Atopic dermatitis is 
                        not contagious. 
                    </p>
                    <p>
                        There are many types of eczema, each with its own symptoms and 
                        treatments. While this site focuses on the most common form, 
                        atopic dermatitis, many other forms of eczema exist as 
                        well. <a href="https://www.yalemedicine.org/conditions/eczema">
                        Read here</a> to learn more about them. 
                    </p>
                    
                </div>

                <img className="page-image-full" src={scratchImg} alt="woman scratching her arm"/>

                <div>
                    <h2>Burdens and Inequities Linked to AD</h2>

                    <h3>Mental Health and Social Isolation</h3>
                    <p>
                        Research suggests a link between mental health and eczema. 
                        Adults with AD have a higher risk for anxiety and 
                        depression which increases with disease severity. 
                        Moreover, individuals with AD are up to 44% more likely 
                        to exhibit suicidal ideation, and 36% more likely to 
                        attempt suicide. 
                    </p>
                    <blockquote>
                        Approximately 40% of school-aged children faced bullying
                        due to AD. 
                    </blockquote>
                    <p>
                        Adolescents and young adults with eczema often feel 
                        isolated; children with severe AD have fewer friends on 
                        average and spend more time alone than children with 
                        moderate AD. Approximately 40% of children 
                        and teenagers with AD experienced bullying due to their 
                        condition. 
                    </p>

                    <h3>Race Disparities</h3>
                    <p>
                        <blockquote>
                            African American children with AD are six times more 
                            likely to have severe AD than white children.
                        </blockquote>
                        Studies have shown that atopic dermatitis impacts certain 
                        populations more than others. Black, Latino, and Asian Americans 
                        are more likely to visit their doctor for AD than white 
                        people in the USA. Black children are nearly twice as likely 
                        to develop AD than white children, even after controlling 
                        for possible confounders. Moreover, black children with AD 
                        are six times more likely to have severe AD than their white 
                        counterparts. These disparities are likely multifactorial as 
                        a result of structural, environmental, and interpersonal 
                        systemic racism. 
                    </p>
                    <h3>Income Disparities</h3>
                    <p>
                        Low-income individuals, such as refugees or migrants, are 
                        documented to live in low-quality housing  
                        within refugee camps or immigrant communities. Such 
                        dwellings have been documented to have excess humidity,
                        mold growth, poor ventilation, infestation, and 
                        overcrowding. Studies have also shown that poor hygiene, lack of 
                        access to sanitation, and overcrowding can also 
                        aggravate symptoms in patients with AD.                 
                    </p>
                    <blockquote>
                        The average cost of treatment for eczema is too high for 
                        3 billion people worldwide living on less than three 
                        dollars a day. 
                    </blockquote>
                    <p>
                        Out-of-pocket expenses for treating eczema have a 
                        significant impact on personal finances for 24.5% of 
                        people with AD, with total direct costs averaging 
                        $11,660 per AD patient. For the 47% of people worldwide 
                        at or below the poverty line, finding affordable care is 
                        virtually impossible.     
                    </p>
                </div>

                <h3>Factors that lead to AD Disparities</h3>
                    <ul>
                        <li>
                            <b>Access to care: </b> patients lacking transportation 
                            can miss doctor appointments, delaying or missing 
                            treatment. 
                        </li>
                        <li>
                            <b>Income: </b> low-income individuals may 
                            avoid treatment to save money or live 
                            in areas without specialized care options. 
                        </li>
                        <li>
                            <b>Environmental Triggers:</b> Individuals in areas 
                            with low-quality housing may be exposed to more 
                            AD triggers, such as dust mites or smoke.
                        </li>
                        <li>
                            <b>Education Inequality:</b> People without an understanding 
                            of eczema may use incorrect medications/treatments 
                            or not follow through on treatment. 
                        </li>
                    </ul>

                <div>
                    <h2>The Importance of Healthy Equity Regarding AD</h2>
                    <p>
                       Improving access to atopic dermatitis care is a crucial
                       aspect towards health equity because it ensures that 
                       all patients, regardless of their socio-economic status, 
                       race, or environment, have access to effective care for 
                       their condition. 
                    </p>
                    <p>
                        By focusing on health equity, especially through the lens 
                        of skin conditions like atopic dermatitis, we can 
                        work towards a more equal and widespread healthcare system. 
                    </p>

                    <blockquote>Want to help? <a href="/whatyoucando">Click here.</a></blockquote>

                    <hr></hr>

                    <h2>Sources</h2>
                    <p>
                        "Eczema Fact Sheets.” <i>Yale Medicine</i>, 
                        https://www.yalemedicine.org/conditions/eczema. 
                    </p>
                    <p>
                        Smith, Wendy, and Jodi L. Johnson. “Mental Health and 
                        Eczema – Seeing the Unseen.” <i>National Eczema Association</i>, 
                        3 May 2021, 
                        https://nationaleczema.org/blog/mental-health-science/. 
                    </p>
                    <p>
                        “Social and Economic Factors.” <i>Eczema in Skin of Color</i>, 
                        https://eczemainskinofcolor.org/social-and-economic-factors/.             
                    </p>
                    <p>
                        Faye, Ousmane, et al. "Atopic Dermatitis: A Global Health 
                        Perspective." <i>Journal of the European Academy of 
                            Dermatology and Venereology</i>, vol. 38, no. 5, 
                            2024, pp. 801-811,  https://doi.org/10.1111/jdv.19723. 
                            Accessed 25 Jul. 2024.
                    </p>

                    <p>
                        Jelousi, Sami, et al. "The Impact of Global Health 
                        Disparities on Atopic Dermatitis in Displaced Populations: 
                        Narrowing the Health Equity Gap for Patients with Skin of Color." 
                        <i>Dermatology and Therapy</i>, vol. 12, no. 12, 2022, pp. 2679-2689,
                    </p>
            
                </div>
                
            </div>
            <Footer />
        </div>
    )
}