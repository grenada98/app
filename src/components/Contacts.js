import React from 'react'
import {ReactComponent as Gmail} from '../svg/gmail.svg'
import {ReactComponent as Linkedin} from '../svg/linkedin.svg'
import {ReactComponent as Telegram} from '../svg/telegram.svg'

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
                            <Telegram width="50" height="50"/>
                        </div>
                        <div className="contact-data">+380-999-67-97-80</div>
                    </a>
                    <a href="mailto:alextod988@gmail.com">
                        <div className="tel-img">
                            <Gmail  width="50" height="50"/>
                        </div>
                        <div className="contact-data">alextod988@gmail.com</div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/alexander-todeush-b682a1213/">
                        <div className="tel-img">
                            <Linkedin  width="50" height="50"/>
                        </div>
                        <div className="contact-data">Linkedin</div>
                    </a>
                </div>
            </div>
        </div>
    )
}