import React from "react";
import profileImage from "./images/onursefa.jpg";


function Home() {
    return (
        <div className="home">
            <div className="homeLeft">
                <div className="profileImage">
                    <img className="profileImageImage" src={profileImage} alt="profile image"></img>
                </div>
                <div className="contact">
                    <div className="contactInstance">
                        <div className="contactName">
                            E-mail
                        </div>
                        <div className="contactDirection">
                            onursefa_ozcibik@hotmail.com
                        </div>
                    </div>
                    <div className="contactInstance">
                        <div className="contactName">
                            Phone
                        </div>
                        <div className="contactDirection">
                            +(90) 505 473 28 22
                        </div>
                    </div>
                    <div className="contactInstance">
                        <div className="contactName">
                            Address
                        </div>
                        <div className="contactDirection">
                            Rumeli Hisari Mah. 5. Sokak Sariyer/Istanbul 34470 
                        </div>
                    </div>
                    <div className="contactInstance">
                        <div className="contactName">
                            Github
                        </div>
                        <div className="contactDirection">
                            Personal: https://github.com/Gepsmin 
                        </div>
                        <div className="contactDirection">
                            Professional: https://github.com/OnurSefa 
                        </div>
                        <div className="contactDirection">
                            Work: https://github.com/OnurSefaOz
                        </div>
                    </div>
                    <div className="contactInstance">
                        <div className="contactName">
                            Instagram
                        </div>
                        <div className="contactDirection">
                            Personal: https://www.instagram.com/onursefaoz
                        </div>
                        <div className="contactDirection">
                            Art: https://www.instagram.com/artvoke
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeRight">
                <div className="homeRightText">
                    <div className="homeRightHeader">
                        About Me
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;I have graduated from Bogazici University Computer Engineering, Turkey’s one of the most qualified universities in the field. The experience I received was precious. Even though I am only 23, I feel a bright future awaits me because I want to resume my education with a Ph.D. program. 
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My interest in art started in high school but never ended. I do oil painting in my flat. To do so, I have organized the place to obtain a studio-like environment. Expressing my feelings through the canvas and paint mesmerizes me. I like to share my artwork with interested people. Also, they can be viewed through this platform and Instagram.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Film sevgimden bahset
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Yazi yazmaktan bahset
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Gezmekten, bisiklet surmekten, ne bilim ole seylerden bahset
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Gelecekte ne yapmak istediginden bahset
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home