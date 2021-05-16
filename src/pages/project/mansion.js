/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 15:46:57
 * @FilePath: /shirley/src/pages/project/mansion.js
 */
import React from "react";

import { Header } from "../../components";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";
import starMansion from "../../images/starmansion.jpg";
import star2 from "../../images/star2.jpg";
import star3 from "../../images/star3.png";
import star4 from "../../images/star4.jpg";

import "animate.css";
import "../../styles/mansion/index.css";
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
      <title>Mansion</title>
      <div className="Mansion_page flex-col">
        <div className="Mansion_main1 flex-col">
          <Header link={"Illustration"} />
          <div className={"Mansion_homepage_title"}>
            <span className="Mansion_word3">
              <span className={"Mansion_word3_text"}>{"Start Mansions"}</span>
              <div className="Mansion_wrap2 flex-col" />
            </span>
          </div>
          <span className="Mansion_info5">{"My Original Illustration"}</span>
          <div className="Mansion_wrap4 flex-col">
            <img className={"Mansion_img"} src={starMansion} />
          </div>
          <div className="Mansion_wrap5 flex-col">
            <img className={"Mansion_img"} src={star2} />
          </div>
          <div className="Mansion_wrap6 flex-col">
            <img className={"img"} src={star3} />
          </div>
          <div className="Mansion_wrap6 flex-col">
            <img className={"img"} src={star4} />
          </div>

          <span className="Mansion_txt1">{"Let’s connect"}</span>
          <div className="Mansion_wrap7">
            <div className={"Mansion_icon-container"}>
              <img
                className={"Mansion_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Mansion_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Mansion_icon-container"}>
              <img
                className={"Mansion_icon expand"}
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
