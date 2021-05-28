/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-28 14:57:55
 * @FilePath: /shirley/src/pages/about.js
 */
import React from "react";

import { Header } from "../components";
import image from "../images/about.jpg";
import resume from "../images/Resume_DiYue.pdf";
import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";

import "animate.css";
import "../styles/about/index.css";
// import "../styles/global.css";

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
      <title>About</title>
      <div className="About_page flex-col">
        <div className="About_main1 flex-col">
          <Header link={"about"} />
          <div className={"About_homepage_title"}>
            <span className="About_word3">
              <span className={"About_word3_text"}>
                {"A little bit about myself."}
              </span>
            </span>
          </div>
          <span className="About_info5">{`Hi, my name is Di Yue (Shirley) and I'm a self taught UI designer and illustrator. After 3 years the creative process still keeps me excited every single time. Every single project.  I have learnt a lot of the processes, concepts and theories of UX/UI through attending workshops, reading books, blogs and applying these to projects in my spare time and at work. I am very much a big-picture thinker and enjoy working on products end to end, from ideation all the way to development.
When I'm not designing or drawing you can find me cooking or singing.`}</span>
          <div className="About_wrap4 flex-col">
            <a href={resume} download={"Resume_Di Yue"}>
              <img className={"About_img"} src={image} />
            </a>
          </div>
          <span className="About_txt1">{"Let’s connect"}</span>
          <div className="About_wrap7">
            <div className={"About_icon-container"}>
              <img
                className={"About_icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"About_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"About_icon-container"}>
              <img
                className={"About_icon expand"}
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
