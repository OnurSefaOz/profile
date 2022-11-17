import React from 'react';

class Projects extends React.Component{
    constructor(){
        super();

        this.state = {
            projects: [
                {
                    "title": "Address Line Detection",
                    "description": "I have adapted DenseDepth methodology to extract address lines from expense images.",
                    "redirect": "/projects/address",
                    "image": "https://user-images.githubusercontent.com/12373950/202281280-902bd6b6-d1ed-4d98-b547-dbbcb78c68a3.png"
                },
                {
                    "title": "VKN Number Field Extraction from Expenses",
                    "description": "VKN Number defines the related tax office, it is crucial to extract this value correctly. I have used autoencoders, RNN, attention, and candidate embedding mechanism.",
                    "redirect": "/projects/vkn",
                    "image": "https://user-images.githubusercontent.com/12373950/202317412-74e1cf5b-8bb8-41f4-a447-be88d94f22e3.png"
                },
                {
                    "title": "Payment Type Detection of Expenses",
                    "description": "Detecting if the payment type is cash or credit card is essential for some companies.",
                    "redirect": "/projects/paymenttype",
                    "image": "https://user-images.githubusercontent.com/12373950/202319754-c4ceba63-c018-47bc-8a31-bf293958e17c.png"
                },                
                {
                    "title": "Credit Card Field Extraction from Expenses",
                    "description": "Repayment of some expenses can done by the credit card information. Finding this information accuratly helps companies.",
                    "redirect": "/projects/creditcard",
                    "image": "https://user-images.githubusercontent.com/12373950/202321422-9d17deae-c4b8-4702-a009-31c236252794.png"
                },
                {
                    "title": "Inspectation of Outlier Detection Methodologies",
                    "description": "This project aims to display main differences betweeen two outlier detection methodologoies: Isolation Forest Model and Local Outlier Factor. It includes implementations of these two methods and comparisons.",
                    "redirect": "/projects/outlier",
                    "image": "https://user-images.githubusercontent.com/12373950/202242561-d6078a8b-5c2e-4f5f-84a9-c0d38c2fd6e7.png"
                },
                {
                    "title": "Decision Tree",
                    "description": "I have implemented a decision tree algorithm that classifies points lie on a plane. Aim of the project was to visualize results of this algorithm in different stiuations and show when this algorithm is applicable and when it is not.",
                    "redirect": "/projects/decisiontree",
                    "image": "https://user-images.githubusercontent.com/12373950/202244829-a0b8a47e-395c-4dc9-9aa5-c9e8bacd048d.png"
                },
                {
                    "title": "Data Visualization using PCA",
                    "description": "data visualization",
                    "redirect": "/projects/pca",
                    "image": "https://user-images.githubusercontent.com/12373950/202245488-d3e69941-4c52-44d3-98e4-cdc7478bae65.png"
                },
                {
                    "title": "Robot Localization Logic using Prolog",
                    "description": "",
                    "redirect": "/projects/robotlocalization",
                    "image": "https://user-images.githubusercontent.com/12373950/202246832-b760adf1-260d-42b3-a024-5357bd2cd28c.png"
                },
                {
                    "title": "Different Approaches of Minimax on Skewed Chess Game",
                    "description": "",
                    "redirect": "/projects/minimax",
                    "image": "https://user-images.githubusercontent.com/12373950/202247906-51b71f87-c409-456c-aae3-4b647864903f.png"
                },
                {
                    "title": "Tents Puzzle on Scheme",
                    "description": "",
                    "redirect": "/projects/tentspuzzle",
                    "image": "https://user-images.githubusercontent.com/12373950/202248474-e7e27315-65ae-415f-a0b3-9fee0f36c992.png"
                },
                {
                    "title": "Song Recommendation System in Prolog",
                    "description": "",
                    "redirect": "/projects/songrecommendation",
                    "image": "https://user-images.githubusercontent.com/12373950/202249069-8c51869f-7bf2-4ee0-8965-f6bb29e9aa8c.png"
                },
                {
                    "title": "Vergi Dairesi Field Extraction from Expenses",
                    "description": "",
                    "redirect": "/projects/vergidairesi",
                    "image": ""
                },
                {
                    "title": "PDF Reader",
                    "description": "",
                    "redirect": "/projects/pdfreader",
                    "image": ""
                },
                {
                    "title": "Expense Type Detector",
                    "description": "",
                    "redirect": "/projects/expensetype",
                    "image": ""
                },
                {
                    "title": "Variable Minimization using Bisection Method and Steepest Descent Method",
                    "description": "gepsmin ie310pr4 github",
                    "redirect": "/projects/variableminimization",
                    "image": ""
                },
                {
                    "title": "Sync Ticket",
                    "description": "gepsmin syncticket github",
                    "redirect": "/projects/syncticket",
                    "image": ""
                },
                {
                    "title": "WatchDog",
                    "description": "gepsmin watchdog github",
                    "redirect": "/projects/watchdog",
                    "image": ""
                },
                {
                    "title": "Global Maxima Point Detector",
                    "description": "gepsmin global maxima point detector github",
                    "redirect": "/projects/globalmaxima",
                    "image": ""
                },
                {
                    "title": "Multi Processing using MPI",
                    "description": "gepsmin MPI github",
                    "redirect": "/projects/mpi",
                    "image": ""
                },
                {
                    "title": "identic: Traversing Files or Directories",
                    "description": "gepsmin identic github",
                    "redirect": "/projects/identic",
                    "image": ""
                },
                {
                    "title": "QT Memory Game",
                    "description": "gepsmin qt memory game",
                    "redirect": "/projects/qtmemorygame",
                    "image": ""
                },
                {
                    "title": "Data Structures and Algorithms Course Projects",
                    "description": "gepsmin assignemnt ile baslayan projeler, hepsini bir araya getirip sunucam ayri ayri sacma olur gibi",
                    "redirect": "/projects/datastructures",
                    "image": ""
                },
                {
                    "title": "Movie App",
                    "description": "eger guncellemeey firsat bulursam ekleyecegim",
                    "redirect": "/projects/movieapp",
                    "image": ""
                },
                {
                    "title": "Generating Art using Generative Adversarial Networks",
                    "description": "githubdaki versiyonunu degil de hazirladigimiz final versiyonunu koyacagim",
                    "redirect": "/projects/generatingart",
                    "image": ""
                },
                {
                    "title": "Turkish Preprocessing",
                    "description": "OnurSefa github hesabinda var ama sanirim o final hali degil, ssd deki versiyonu bitmis hali sanirim",
                    "redirect": "/projects/preprocessing",
                    "image": ""
                },
                {
                    "title": "Contex Free Grammer Parser for Turkish",
                    "description": "ssd de var",
                    "redirect": "/projects/grammerparser",
                    "image": ""
                },
                {
                    "title": "Question Answer System built on BERT",
                    "description": "ssd de bi yerlerde olmasi lazim",
                    "redirect": "/projects/questionanswer",
                    "image": ""
                }
            ]
        }
    
    }

    redirectToProject(url){
        window.location.href = url;
    }

    makeProject(k){
        return (<div onClick={()=>this.redirectToProject(k.redirect)} className='projectSection'>
            <div className='projectImageSection'>
                <img className='projectInstanceImage' src={k.image} alt="project image"></img>
            </div>
            <div className='projectDescriptionSection'>
                <div className="projectTitle">
                    <b>{k.title}</b>
                </div>
                <div className="projectDescription">
                    {k.description}
                </div>
            </div>

        </div>

        )
    }


    render(){
        let projects = this.state.projects;

        return <div className="projects">
            <div className="projectsText"> Hello there, there are some of my projects</div>
            <div className='projectSections'>
                {
                    projects.map((key)=>this.makeProject(key))
                }
            </div>
        </div>
    }
}

export default Projects