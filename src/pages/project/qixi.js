/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 13:05:15
 * @FilePath: /shirley/src/pages/project/qixi.js
 */
import React from "react";

import { Header } from "../../components";

import "animate.css";
import "../../styles/qixi/index.css";
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
      <title>Qixi</title>
      <div className="Qixi_page flex-col">
        <div className="Qixi_main1 flex-col">
          <Header link={"Illustration"} />
          <div className={"Qixi_homepage_title"}>
            <span className="Qixi_word3">
              <span className={"Qixi_word3_text"}>{"QIXI Festival"}</span>
              <div className="Qixi_wrap2 flex-col" />
            </span>
          </div>
          <span className="Qixi_info5">{"H5 Pages"}</span>
          <div className="Qixi_wrap4 flex-col">
            <img
              className={"Qixi_img"}
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbc150be6c63f263a6d58f89fed84dbb9efa7b84b3862343d3ffc98668eb7bf66"
            />
          </div>
          <div className="Qixi_wrap5 flex-col">
            <img
              className={"Qixi_img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb777bf9f37bbdd6990b793bb4dec46d7377278da5eb379f9d8212ef1f236d92c"
              }
            />
          </div>

          <span className="Qixi_txt1">{"Let’s connect"}</span>
          <div className="Qixi_wrap7">
            <div className={"Qixi_icon-container"}>
              <img
                className={"Qixi_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ed1245fee470366086500a777411384708b7b3e39be98c65e62af6bc81c2637"
              />
            </div>
            <div title={"+610410918668"} className={"Qixi_icon-container"}>
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
            <div className={"Qixi_icon-container"}>
              <img
                className={"Qixi_icon expand"}
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
