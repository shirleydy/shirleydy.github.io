/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 21:41:40
 * @FilePath: /shirley/src/pages/project/emoji.js
 */
import React from "react";

import { Header } from "../../components";
import image from "../../images/emoji.gif";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";

import "animate.css";
import "../../styles/emoji/index.css";
import "../../styles/global.css";

function Index() {
  return (
    <main>
      <title>Emoji</title>
      <div className="Emoji_page flex-col">
        <div className="Emoji_main1 flex-col">
          <Header link={"Illustration"} />
          <div className={"Emoji_homepage_title"}>
            <span className="Emoji_word3">
              <span className={"Emoji_word3_text"}>{"Elk Di "}</span>
              <div className="Emoji_wrap2 flex-col" />
            </span>
          </div>
          <span className="Emoji_info5">{"Dynamic emoticons"}</span>
          <div className="Emoji_wrap4 flex-col">
            <img
              className={"Emoji_img"}
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng238b6e5979fd08b078000eec4e71679ca220d68317a1ba124936c83ec696d26a"
            />
          </div>
          <div className="Emoji_wrap4 flex-col">
            <img className={"Emoji_img"} src={image} />
          </div>
          <div className="Emoji_wrap5 flex-col">
            <img
              className={"Emoji_img"}
              src={"https://i.postimg.cc/7PVRWLRM/elkdisplay.jpg"}
            />
          </div>
          <div className="Emoji_wrap6 flex-col">
            <img
              className={"Emoji_img"}
              src={"https://i.postimg.cc/MHdrMsBr/elkdownload.jpg"}
            />
          </div>

          <span className="Emoji_txt1">{"Let’s connect"}</span>
          <div className="Emoji_wrap7">
            <div className={"Emoji_icon-container"}>
              <img
                className={"icon"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Emoji_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Emoji_icon-container"}>
              <img
                className={"icon"}
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
