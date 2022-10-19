import React from 'react'

export const Contacts = () => {
    return(
        <div className="about-me">
            <h2>Contact Information</h2>
            <div className="about-me__contacts">
                <div className="about-me__contacts-name">Todeush Oleksandr</div>
                <div className="about-me__contacts-adress">Rivne, Ukraine</div>
                <div className="about-me__contacts-tel-number">
                    <a target="_blank" href="https://telegram.me/grenador">
                        <div className="tel-img">
                            <img src={process.env.PUBLIC_URL + "/img/telegram.png"} alt="telegram"/>
                        </div>
                        <div className="contact-data">+380-999-67-97-80</div>
                    </a>
                    <a href="mailto:alextod988@gmail.com">
                        <div className="tel-img">
                            <img src={process.env.PUBLIC_URL + "/img/gmail.png"} alt="gmail"/>
                        </div>
                        <div className="contact-data">alextod988@gmail.com</div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/alexander-todeush-b682a1213/">
                        <div className="tel-img">
                            <img src={process.env.PUBLIC_URL + "/img/linkedin.png"} alt="gmail"/>
                        </div>
                        <div className="contact-data">Linkedin</div>
                    </a>
                </div>
            </div>
        </div>
    )
}