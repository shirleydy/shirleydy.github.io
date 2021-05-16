/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 15:26:00
 * @FilePath: /shirley/src/pages/project/mansion.js
 */
import React from "react";

import { Header } from "../../components";

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
            <img
              className={"Mansion_img"}
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcc6cbbfb98b11ee148c91bd670e23772608f95f69668cb42b608962137b81926"
            />
          </div>
          <div className="Mansion_wrap5 flex-col">
            <img
              className={"Mansion_img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng047a4f943b7099da69bbb05eac2fecd28f0555824e48463fe0904c4a4a61be8f"
              }
            />
          </div>
          <div className="Mansion_wrap6 flex-col">
            <img
              className={"img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng055b845e56bf57e4263c6a2efdf935ba600652890c432fefc689058828bc16f6"
              }
            />
          </div>
          <div className="Mansion_wrap6 flex-col">
            <img
              className={"img"}
              src={
                " https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngda56d8db0906dd897c6fad794c9bdfa555157709320c0b501ecc7c59b740ef85"
              }
            />
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
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ed1245fee470366086500a777411384708b7b3e39be98c65e62af6bc81c2637"
              />
            </div>
            <div title={"+610410918668"} className={"Mansion_icon-container"}>
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
            <div className={"Mansion_icon-container"}>
              <img
                className={"Mansion_icon expand"}
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
