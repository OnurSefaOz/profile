import React from "react";


function Home() {
    return (
        <div className="home">
            <div className="homeLeft">
                <div className="profileImage">
                    <img className="profileImageImage" src="https://user-images.githubusercontent.com/12373950/202808122-f57c8245-8abf-4893-987b-f1a2eea8e15e.png" alt="profile image"></img>
                </div>
                
                <div className="contactHolder">
                    <div className="contact">

                        <div className="contactInstance">
                            <div className="contactName">
                                <b>E-mail</b>
                                
                            </div>
                            <div className="contactDirection">
                                onursefa_ozcibik@hotmail.com
                            </div>
                        </div>
                        <div className="contactInstance">
                            <div className="contactName">
                                <b>Phone</b>
                                
                            </div>
                            <div className="contactDirection">
                                +(90) 505 473 28 22
                            </div>
                        </div>
                        <div className="contactInstance">
                            <div className="contactName">
                                <b>Address</b>
                                
                            </div>
                            <div className="contactDirection">
                                Rumeli Hisari District 5. Street Sariyer/Istanbul 34470 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeRight">
                <div className="homeRightText">
                    <div className="homeRightParagraph">
                    &emsp;I am Onur Sefa Ozcibik. I have graduated from Bogazici University Computer Engineering, Turkey’s one of the 
                    most qualified universities in the field. The experience I received was precious. Even though I am only 23, I feel 
                    a bright future awaits me because I want to resume my education with a Ph.D. program. 
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My research interests are artificial intelligence, computer vision, natural language processing. I love to deal with deep learning projects
                    ,especially challenging ones. I generally propose and built deep learning models for real world scenarios. 
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;I currently attendee of CoLoRs AI lab and previously attended NLP Lab. Continuously searching, reading, and implementing state-of-the-art papers
                    enabled me to adapt several different approaches to my current projects. I am eager to find opportunities to develop this skill further.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My interest in art started in high school but never ended. I do oil painting in my flat. To do so, I have organized the place to obtain a 
                    studio-like environment. Expressing my feelings through the canvas and paint mesmerizes me. I like to share my artwork with interested people. 
                    Also, they can be viewed through this <a href="/art">platform</a> and <a href="https://www.instagram.com/artvoke/">Instagram page</a>.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;I love to watch movies from different genres. I think I born to listen music and my favorite ones are generally from metal, rock, progressive rock, techno, house,
                    or classical piano genres. I love to write stories and essays in Turkish but I can not find a leisure time to this. In summer times, I love to travel, bike, and camp.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;You can contact me anytime about deep learning, art, my projects, or anything else.
                    </div>
                    <div>
                    &emsp;<a href="https://github.com/OnurSefa/data/files/10048336/Transcript_ONUR-SEFA_OZCIBIK.pdf">MY TRANSCRIPT</a>
                    </div>
                    <div>
                    &emsp;<a href="https://github.com/OnurSefa/data/files/10048337/resume_OnurSefa_Ozcibik.pdf">MY RESUME</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home