import React from 'react'
import { Tech } from './Tech'

export const AboutMe = () => {
    return(
        <div className="advance-about-me">
            <div className="category-about">
                <div className="category-about__title">Position</div>
                <div className="category-about__description">Front-End developer</div>
            </div>
            <div className="category-about">
                <div className="category-about__title">Work expirience</div>
                <div className="category-about__description">Front-End developer</div>
                <div className="category-about__expirience">
                    <div className="category-about__expirience-date">from 01.2022 to 03.2022 (3 months)</div>
                    <div className="category-about__expirience-format">Freelance, remote</div>
                </div>
                <div className="category-about__description">Front-End developer, practice</div>
                <div className="category-about__expirience">
                    <div className="category-about__expirience-date">from 09.2020 to 12.2020 (3 months)</div>
                    <div className="category-about__expirience-format">Company Wezom, Kherson, Ukraine</div>
                </div>
            </div>
            <div className="category-about">
                <div className="category-about__title">Education</div>
                <div className="category-about__description">Kherson State University</div>
                <div className="category-about__specialty">
                    <div className="category-about__specialty-title">Software engineering</div>
                    <div className="category-about__specialty-date">2015-2019 (bachelor)</div>
                </div>
                <div className="category-about__specialty">
                    <div className="category-about__specialty-title">Information systems and technologies</div>
                    <div className="category-about__specialty-date">2019-2021 (master)</div>
                </div>
            </div>
            <Tech/>
        </div>
    )
}