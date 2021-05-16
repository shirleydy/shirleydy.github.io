/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 13:15:31
 * @FilePath: /shirley/src/pages/project/emoji.js
 */
import React from "react";

import { Header } from "../../components";
import image from "../../images/emoji.gif";

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
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd3cca84891218e001b5f88f6511892caaed832daa1f7c1bdf315c16b5b06b6e3"
              }
            />
          </div>
          <div className="Emoji_wrap6 flex-col">
            <img
              className={"img"}
              src={
                "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng052cc9b7e024e2ba5e8a577c6619a88491f95f59f54bf8c7649f1d94c99784fb"
              }
            />
          </div>

          <span className="Emoji_txt1">{"Let’s connect"}</span>
          <div className="Emoji_wrap7">
            <div className={"Emoji_icon-container"}>
              <img
                className={"Emoji_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ed1245fee470366086500a777411384708b7b3e39be98c65e62af6bc81c2637"
              />
            </div>
            <div title={"+610410918668"} className={"Emoji_icon-container"}>
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
            <div className={"Emoji_icon-container"}>
              <img
                className={"Emoji_icon expand"}
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
