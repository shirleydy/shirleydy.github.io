/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-05-16 12:39:09
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 15:56:55
 * @FilePath: /shirley/src/pages/project/festival.js
 */
/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 12:37:15
 * @FilePath: /shirley/src/pages/project/mansion.js
 */
import React from "react";

import { Header } from "../../components";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";
import post1 from "../../images/poster1.png";
import post2 from "../../images/poster2.png";
import post3 from "../../images/poster3.png";
import post4 from "../../images/poster4.png";
import post5 from "../../images/poster5.png";
import post6 from "../../images/poster6.png";

import "animate.css";
import "../../styles/festival/index.css";
import "../../styles/global.css";

function Index() {
  const handleMouseEnter = (e) => {
    e.target.classList.add("animate__animated", "animate__pulse");
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove("animate__animated");
    e.target.classList.remove("animate__pulse");
  };
  return (
    <main>
      <title>Festival</title>
      <div className="Festival_page flex-col">
        <div className="Festival_main1 flex-col">
          <Header link={"Illustration"} />
          <div className={"Festival_homepage_title"}>
            <span className="Festival_word3">
              <span className={"Festival_word3_text"}>
                {"Festival Posters"}
              </span>
              <div className="Festival_wrap2 flex-col" />
            </span>
          </div>
          <span className="Festival_info5">{"Festival Posters"}</span>
          <div className={"grid"}>
            <img className={"grid-img"} src={post1} alt="" />
            <img className={"grid-img"} src={post2} alt="" />
            <img className={"grid-img"} src={post3} alt="" />
            <img className={"grid-img"} src={post4} alt="" />
            <img className={"grid-img"} src={post5} alt="" />
            <img className={"grid-img"} src={post6} alt="" />
          </div>
          <span className="Festival_txt1">{"Let’s connect"}</span>
          <div className="Festival_wrap7">
            <div className={"Festival_icon-container"}>
              <img
                className={"Festival_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Festival_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Festival_icon-container"}>
              <img
                className={"Festival_icon expand"}
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hola!&to=shirleyyuedi@gmail.com"
                  );
                }}
                src={icon3}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
