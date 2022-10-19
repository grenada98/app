import React from "react";
import { Chart } from './Chart'

export const Tech = () => {
    const massiv = [{
        type: "technology", data: [{ id: 1, name: "HTML5", src: process.env.PUBLIC_URL + "/img/html.png" },
        { id: 2, name: "CSS", src: process.env.PUBLIC_URL + "/img/css.png" },
        { id: 3, name: "JavaScript", src: process.env.PUBLIC_URL + "/img/js.png" },
        { id: 4, name: "SASS", src: process.env.PUBLIC_URL + "/img/sass.png" },
        { id: 5, name: "GitHub", src: process.env.PUBLIC_URL + "/img/github.png" },
        { id: 6, name: "Figma", src: process.env.PUBLIC_URL + "/img/figma.png" }]
    },
    {
        type: "site", data: [{ id: 1, name: "SmmSpace", src: process.env.PUBLIC_URL + "/img/site_1.jpg", link: "https://grenada98.github.io/test/dist/index.html", type: "site" },
        { id: 2, name: "Coffee", src: process.env.PUBLIC_URL + "/img/site_2.jpg", link: "https://grenada98.github.io/coffee/dist/" },
        { id: 3, name: "Data processing", src: process.env.PUBLIC_URL + "/img/site_3.jpg", link: "https://grenada98.github.io/dataprocessing/" },
        { id: 4, name: "Growmade", src: process.env.PUBLIC_URL + "/img/site_4.jpg", link: "https://grenada98.github.io/growmade/" },
        { id: 5, name: "Minimo", src: process.env.PUBLIC_URL + "/img/site_5.jpg", link: "https://grenada98.github.io/minimo/task_3.html" },
        { id: 6, name: "Wez-catalog", src: process.env.PUBLIC_URL + "/img/wez-catalog.jpg", link: "https://https://grenada98.github.io/wez-catalog-product/dist/" },
        { id: 7, name: "ToDo list (ReactJS)", src: process.env.PUBLIC_URL + "/img/todo.jpg", link: "https://todolist-grenada98.vercel.app/" }]
    }
    ]
    return (
        <>

            {massiv.map((item) => {

                if (item.type === "technology") {
                    return (
                        <React.Fragment key={item.type}>
                            <div className="category-about">
                            <div className="category-about__title">WEB-technologies</div>
                            <div className="category-about__description-tech">
                            {item.data.map((elem, i) => {
                                return(
                                            <div key={i} className="technology">
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
                            <Chart/>
                        </React.Fragment>
                    )
                }
                else {
                    return(
                        <React.Fragment key={item.type}>
                            <div className="category-about">
                                <div className="category-about__title">Work examples</div>
                                <div className="category-about__description-sites">
                                {item.data.map((elem, i) => {
                                        return(
                                            <a key={i} href={elem.link} className="site__wrapper">
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
                        </React.Fragment>
                    )
                }
            })}
        </>
    )
}