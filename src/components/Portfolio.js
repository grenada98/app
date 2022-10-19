import React from 'react';
import { AboutMe } from './AboutMe';
import { Contacts } from './Contacts';

export const Portfolio = () => {
    return(
            <div className="main-wrapper">
                <h1>Portfolio</h1>
                <div className="main">
                    <Contacts/>
                    <AboutMe/>
                </div>
                <div className="footer-information">Created with ReactJS</div>
            </div>
    )
}