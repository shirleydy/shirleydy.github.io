/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 21:42:08
 * @FilePath: /shirley/src/pages/index.js
 */
import React from "react";
import { Link } from "gatsby";
import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";

import { Header } from "../components";

import "animate.css";
import "../styles/index/index.css";
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
      <title>Home</title>
      <div className="page flex-col">
        <div className="main1 flex-col">
          <Header link={"home"} />
          <div className={"homepage_title"}>
            <span className="word3">
              <span className={"word3_text"}>{"Hi, I’m Shirley Yue"}</span>
              <div className="wrap2 flex-col" />
            </span>
          </div>

          <div className="wrap3 flex-row">
            <span className="info41">{`I `}</span>
            <span className={"info4 hollow design"}>{"design"}</span>
            <span className={"info4 hollow"}>{", "}</span>
            <span className={"info4 hollow sing"}>{"sing"}</span>
            <span className={"info4 hollow"}>{" & "}</span>
            <span className={"info4 hollow paint"}>{"paint"}</span>
            <div className="group1 flex-col" />
          </div>
          <span className="infoBox1">
            I'm&nbsp;a&nbsp;UI&nbsp;designer&nbsp;based&nbsp;in&nbsp;Sydney,&nbsp;Australia&nbsp;with&nbsp;experience&nbsp;in&nbsp;delivering&nbsp;end-to-end&nbsp;UI&nbsp;design&nbsp;for&nbsp;digital&nbsp;products.&nbsp;I'm&nbsp;passionate&nbsp;about&nbsp;
            <br />
            improving&nbsp;the&nbsp;lives&nbsp;of&nbsp;users&nbsp;through&nbsp;design&nbsp;and&nbsp;am&nbsp;constantly&nbsp;looking&nbsp;to&nbsp;learn&nbsp;new&nbsp;things&nbsp;everyday.
          </span>
          <span className="info5">My&nbsp;Recent&nbsp;Work</span>
          <Link to="/project/meet">
            <div
              className="wrap4 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/xdz7x3rc/meet.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/emoji">
            <div
              className="wrap5 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/QdPwJny2/elkdi.jpg"}
              />
            </div>
          </Link>
          <Link to="/project/mansion">
            <div
              className="wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={"https://i.postimg.cc/nV0d1Ps3/starmansion.jpg"}
              />
            </div>
          </Link>
          <span className="txt1">{"Let’s connect"}</span>
          <div className="wrap7">
            <div className={"icon-container"}>
              <img
                className={"icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"icon-container"}>
              <img
                className={"icon expand"}
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
