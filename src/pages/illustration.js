/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 14:29:48
 * @FilePath: /shirley/src/pages/illustration.js
 */
import React from "react";
import { Link } from "gatsby";
import { Header } from "../components";

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
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng416702a201f1326c5eaeb206965e0322efc2a12d96f1b103574ed2977da1a18e"
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
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5a1c2f173f7029f59bb0eb94edfc8531b44a2e7b7932c636739520badf28fd41"
                }
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
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng169314f3a67aa5cbc0e3b42f00f059c8a61280966396fbe45820b3c874ec28cd"
                }
              />
            </div>
          </Link>
          <span className="Illustration_txt1">{"Let’s connect"}</span>
          <div className="Illustration_wrap7">
            <div className={"Illustration_icon-container"}>
              <img
                className={"Illustration_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ed1245fee470366086500a777411384708b7b3e39be98c65e62af6bc81c2637"
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
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2622058b150d22bc7da7488109ec1cc12058a480916585f601d098a87dddbb13"
                }
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
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng08c362bac5f41fda5f08002921b231abc2ceb855a7786b06e7fc2bdf7d093826"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
