import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){
        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>VKN Number Field Extraction from Expenses</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of privacy issues
                </div>
                <div className='instanceDescription'>
                &emsp;The project aims was to extract VKN number from expense documents. VKN number specifies the related tax department. After Azure Read Analyze OCR API returns words from imput image, I detected
                    candidates using simple regex operations. I detected neighbors of candidates and encoded them using Fasttext word embedding. Autoencoder architecture encodes and decodes each
                    candidate embedding. Model uses attention and RNN methods also. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://www.researchgate.net/profile/Chitralekha-Bhat/publication/317559243/figure/fig2/AS:531269123805186@1503675837486/Deep-Autoencoder-DAE.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example autoencoder structure</div>
                </div>
                <div className='instanceDescription'>
                &emsp;After getting Z matrix from X matrix, cosine similarity is applied them to find the similarity between them. Autoencoder enables model to learn to encode and decode true instances.
                When new example comes, if the model reconstructs input embedding correctly, model assigns it as a VKN Number.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202317412-74e1cf5b-8bb8-41f4-a447-be88d94f22e3.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example output</div>
                </div>
            </div>
        </div>
    }
}

export default Project