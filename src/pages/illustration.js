/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 21:42:00
 * @FilePath: /shirley/src/pages/illustration.js
 */
import React from "react";
import { Link } from "gatsby";
import { Header } from "../components";
import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";

import "animate.css";
import "../styles/illustration/index.css";
import "../styles/global.css";

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
      <title>Illustration</title>
      <div className="Illustration_page flex-col">
        <div className="Illustration_main1 flex-col">
          <Header link={"illustration"} />
          <div className={"Illustration_homepage_title"}>
            <span className="Illustration_word3">
              <span className={"Illustration_word3_text"}>
                {"Yes, I paint"}
              </span>
              <div className="Illustration_wrap2 flex-col" />
            </span>
          </div>
          <span className="Illustration_info5">
            {"My Original Illustrations"}
          </span>
          <Link to={"/project/mansion"}>
            <div
              className="Illustration_wrap4 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"Illustration_img"}
                src={"https://i.postimg.cc/nV0d1Ps3/starmansion.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/festival">
            <div
              className="Illustration_wrap5 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"Illustration_img"}
                src={"https://i.postimg.cc/2yzK5p1Z/festivalposter.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/qixi">
            <div
              className="Illustration_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/76NKdBKY/qixifestival.jpg"}
              />
            </div>
          </Link>
          <span className="Illustration_txt1">{"Let’s connect"}</span>
          <div className="Illustration_wrap7">
            <div className={"Illustration_icon-container"}>
              <img
                className={"Illustration_icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div
              title={"+610410918668"}
              className={"Illustration_icon-container"}
            >
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Illustration_icon-container"}>
              <img
                className={"Illustration_icon expand"}
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
