/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 21:38:48
 * @FilePath: /shirley/src/pages/work.js
 */
import React from "react";
import { Link } from "gatsby";
import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";

import { Header } from "../components";

import "animate.css";
import "../styles/work/index.css";
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
      <title>Work</title>
      <div className="Work_page flex-col">
        <div className="Work_main1 flex-col">
          <Header link={"work"} />
          <div className={"Work_homepage_title"}>
            <span className="Work_word3">
              <span className={"Work_word3_text"}>{"Yes, I design"}</span>
              <div className="Work_wrap2 flex-col" />
            </span>
          </div>
          <span className="Work_info5">{"My Work Collection"}</span>
          <Link to="/project/meet">
            <div
              className="Work_wrap4 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"Work_img"}
                src={"https://i.postimg.cc/xdz7x3rc/meet.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/emoji">
            <div
              className="Work_wrap5 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"Work_img"}
                src={"https://i.postimg.cc/QdPwJny2/elkdi.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/mansion">
            <div
              className="Work_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/nV0d1Ps3/starmansion.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/festival">
            <div
              className="Work_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/2yzK5p1Z/festivalposter.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/qixi">
            <div
              className="Work_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/76NKdBKY/qixifestival.jpg"}
              />
            </div>
          </Link>

          <span className="Work_txt1">{"Let’s connect"}</span>
          <div className="Work_wrap7">
            <div className={"Work_icon-container"}>
              <img
                className={"Work_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Work_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Work_icon-container"}>
              <img
                className={"Work_icon expand"}
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
