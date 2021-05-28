/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-05-16 12:39:09
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 20:56:06
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
            <img
              className={"grid-img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng69060bdec3b32180c1616df6816367afecb06bd8b86f8691011cb3e5a8278cc4"
              }
              alt=""
            />
            <img
              className={"grid-img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9fdbad82fd11341ea04810004173f5872203a9de1019f6a49033e13eee285df2"
              }
              alt=""
            />
            <img
              className={"grid-img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng56d6467e68af3907d9002ce839ce30c8de1f804ad39f6cf9302f0bb664d69b98"
              }
              alt=""
            />
            <img
              className={"grid-img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb2f1d6fa45935fb0b7b293d3ae8570184cac3ca2f4158ef2039d8bcd41d273a2"
              }
              alt=""
            />
            <img
              className={"grid-img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdd5ae6687024b3d1152176297b33232b045d646a3fd64e230de98974b79d8ac9"
              }
              alt=""
            />
            <img
              className={"grid-img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb5081c37584984e9a19be9151bd4c3638699745e115508aefbb2db1033c27327"
              }
              alt=""
            />
          </div>
          <span className="Festival_txt1">{"Let’s connect"}</span>
          <div className="Festival_wrap7">
            <div className={"Festival_icon-container"}>
              <img
                className={"Festival_icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
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
