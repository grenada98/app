import React from "react";
import Chart from 'chart.js/auto';

export const Tech = () => {
    const massiv = [{
        type: "technology", data: [{ name: "HTML5", src: "/img/html.png" },
        { name: "CSS", src: "/img/css.png" },
        { name: "JavaScript", src: "/img/js.png" },
        { name: "SASS", src: "/img/sass.png" },
        { name: "GitHub", src: "/img/github.png" },
        { name: "Figma", src: "/img/figma.png" }]
    },
    {
        type: "site", data: [{ name: "SmmSpace", src: "/img/site_1.jpg", link: "https://grenada98.github.io/test/dist/index.html", type: "site" },
        { name: "Coffee", src: "/img/site_2.jpg", link: "https://grenada98.github.io/coffee/dist/" },
        { name: "Data processing", src: "/img/site_3.jpg", link: "https://grenada98.github.io/dataprocessing/" },
        { name: "Growmade", src: "/img/site_4.jpg", link: "https://grenada98.github.io/growmade/" }]
    }
    ]
    return (
        <>

            {massiv.map((item) => {

                if (item.type === "technology") {

                    return (
                        <>
                            <div className="category-about">
                            <div className="category-about__title">WEB-технології</div>
                            <div className="category-about__description-tech">
                            {item.data.map((elem) => {
                                return(
                                            <div className="technology">
                                                <div className="technology__img">
                                                    <img src={elem.src} alt="technology" />
                                                </div>
                                                <div className="technology__name">{elem.name}</div>
                                            </div>
                                    )
                                }
                            )}
                                </div>
                            </div>
                        </>
                    )
                }
                else {
                    return(
                        <>
                            <div className="category-about">
                                <div className="category-about__title">Приклади робіт</div>
                                <div className="category-about__description-sites">
                                {item.data.map((elem) => {
                                        return(
                                            <a href={elem.link} className="site__wrapper">
                                                <div className="site__img">
                                                    <img src={elem.src} alt="site" />
                                                </div>
                                                <div className="site__title">{elem.name}</div>
                                            </a>
                                        )
                                    }   
                                )}
                                </div>
                            </div>
                        </>
                    )
                }
            })}
        </>
    )
}