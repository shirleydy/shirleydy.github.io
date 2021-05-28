/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-05-16 14:16:03
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 15:37:51
 * @FilePath: /shirley/src/pages/project/meet.js
 */
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
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";

import "animate.css";
import "../../styles/meet/index.css";
import "../../styles/global.css";

import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpg";
import image10 from "../../images/10.jpg";
import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";
import image14 from "../../images/14.jpg";
import image15 from "../../images/15.jpg";
import image16 from "../../images/16.jpg";
import image17 from "../../images/17.jpg";
import image18 from "../../images/18.jpg";
import image19 from "../../images/19.jpg";
import image20 from "../../images/20.jpg";
import image21 from "../../images/21.jpg";
import image22 from "../../images/22.jpg";
import image23 from "../../images/23.jpg";

const images = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
];

function Index() {
  return (
    <main>
      <title>Meet</title>
      <div className="Meet_page flex-col">
        <div className="Meet_main1 flex-col">
          <Header link={"work"} />
          <div className={"Meet_homepage_title"}>
            <span className="Meet_word3">
              <span className={"Meet_word3_text"}>{"Meet"}</span>
              <div className="Meet_wrap2 flex-col" />
            </span>
            <span className="Meet_info5">{"Meet"}</span>
          </div>
          {images.map((image) => {
            return (
              <div className="Meet_wrap4 flex-col">
                <img className={"Meet_img"} src={image} />
              </div>
            );
          })}

          <span className="Meet_txt1">{"Let’s connect"}</span>
          <div className="Meet_wrap7">
            <div className={"Meet_icon-container"}>
              <img
                className={"Meet_icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Meet_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Meet_icon-container"}>
              <img
                className={"Meet_icon expand"}
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
