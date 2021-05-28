/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 21:41:30
 * @FilePath: /shirley/src/pages/project/qixi.js
 */
import React from "react";

import { Header } from "../../components";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";

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
              src={"https://i.postimg.cc/yNcQX69R/qixi1.png"}
            />
          </div>
          <div className="Qixi_wrap5 flex-col">
            <img
              className={"Qixi_img"}
              src={"https://i.postimg.cc/0QvttgdB/qixi2.png"}
            />
          </div>

          <span className="Qixi_txt1">{"Let’s connect"}</span>
          <div className="Qixi_wrap7">
            <div className={"Qixi_icon-container"}>
              <img
                className={"Qixi_icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Qixi_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
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
