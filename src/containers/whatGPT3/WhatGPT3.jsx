import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (

    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        {/* <div className="gpt3__whatgpt3-feature ">
            <Feature title="what is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div> */}
        <div className="gpt3__whatgpt3__heading">
            <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
            <div className='extra-text'>
                <p >Humanity,Friendly bachelor entrance</p>
                <p>Explore The library</p>
            </div>

        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature showLine={true} title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
            <Feature showLine={true} title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            <Feature showLine={true} title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div>
    </div>
);

export default WhatGPT3;