import React from 'react'
import { Tech } from './Tech'

export const AboutMe = () => {
    return(
        <div className="advance-about-me">
            <div className="category-about">
                <div className="category-about__title">Позиція</div>
                <div className="category-about__description">Front-End розробник</div>
            </div>
            <div className="category-about">
                <div className="category-about__title">Досвід роботи</div>
                <div className="category-about__description">Верстальник</div>
                <div className="category-about__expirience">
                    <div className="category-about__expirience-date">з 01.2022 по 03.2022 (2 місяці)</div>
                    <div className="category-about__expirience-format">Фріланс, Віддалено</div>
                </div>
            </div>
            <div className="category-about">
                <div className="category-about__title">Освіта</div>
                <div className="category-about__description">Херсонський Державний університет</div>
                <div className="category-about__specialty">
                    <div className="category-about__specialty-title">Інженерія програмного забезпечення</div>
                    <div className="category-about__specialty-date">2015-2019 (бакалавр)</div>
                </div>
                <div className="category-about__specialty">
                    <div className="category-about__specialty-title">Інформаційні системи та технології</div>
                    <div className="category-about__specialty-date">2019-2021 (магістр)</div>
                </div>
            </div>
            <Tech/>
        </div>
    )
}