import React from 'react'

export const Contacts = () => {
    return(
        <div className="about-me">
            <h2>Контактна інформація</h2>
            <div className="about-me__contacts">
                <div className="about-me__contacts-adress">Україна, м. Рівне</div>
                <div className="about-me__contacts__tel-number">
                    <a href="https://telegram.me/grenador">
                        <div className="tel-img">
                            <img src="/img/telegram.png" alt="telegram"/>
                        </div>
                        <div className="contact-data">+380 999 67 97 80</div>
                    </a>
                    <a href="mailto:alextod988@gmail.com">
                        <div className="tel-img">
                            <img src="/img/gmail.png" alt="gmail"/>
                        </div>
                        <div className="contact-data">alextod988@gmail.com</div>
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-todeush-b682a1213/">
                        <div className="tel-img">
                            <img src="/img/linkedin.png" alt="gmail"/>
                        </div>
                        <div className="contact-data">Linkedin</div>
                    </a>
                </div>
            </div>
        </div>
    )
}